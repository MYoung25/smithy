/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

package software.amazon.smithy.rulesengine.aws.language.functions;

import java.util.Arrays;
import java.util.List;
import software.amazon.smithy.rulesengine.language.evaluation.type.Type;
import software.amazon.smithy.rulesengine.language.evaluation.value.Value;
import software.amazon.smithy.rulesengine.language.syntax.expressions.ExpressionVisitor;
import software.amazon.smithy.rulesengine.language.syntax.expressions.functions.FunctionDefinition;
import software.amazon.smithy.rulesengine.language.syntax.expressions.functions.FunctionNode;
import software.amazon.smithy.rulesengine.language.syntax.expressions.functions.LibraryFunction;
import software.amazon.smithy.utils.SmithyUnstableApi;

/**
 * An AWS rule-set function for determining whether a given string can be promoted to an S3 virtual bucket host label.
 */
@SmithyUnstableApi
public final class IsVirtualHostableS3Bucket extends LibraryFunction {
    public static final String ID = "aws.isVirtualHostableS3Bucket";
    private static final Definition DEFINITION = new Definition();

    private IsVirtualHostableS3Bucket(FunctionNode functionNode) {
        super(DEFINITION, functionNode);
    }

    /**
     * Gets the {@link FunctionDefinition} implementation.
     *
     * @return the function definition.
     */
    public static Definition getDefinition() {
        return DEFINITION;
    }

    @Override
    public <T> T accept(ExpressionVisitor<T> visitor) {
        return visitor.visitLibraryFunction(DEFINITION, getArguments());
    }

    /**
     * A {@link FunctionDefinition} for the {@link IsVirtualHostableS3Bucket} function.
     */
    public static final class Definition implements FunctionDefinition {
        @Override
        public String getId() {
            return ID;
        }

        @Override
        public List<Type> getArguments() {
            return Arrays.asList(Type.stringType(), Type.booleanType());
        }

        @Override
        public Type getReturnType() {
            return Type.booleanType();
        }

        @Override
        public Value evaluate(List<Value> arguments) {
            String hostLabel = arguments.get(0).expectStringValue().getValue();
            boolean allowDots = arguments.get(1).expectBooleanValue().getValue();
            if (allowDots) {
                return Value.booleanValue(
                        hostLabel.matches("[a-z\\d][a-z\\d\\-.]{1,61}[a-z\\d]")
                        && !hostLabel.matches("(\\d+\\.){3}\\d+") // don't allow ip address
                        && !hostLabel.matches(".*[.-]{2}.*") // don't allow names like bucket-.name or bucket.-name
                );
            } else {
                return Value.booleanValue(hostLabel.matches("[a-z\\d][a-z\\d\\-]{1,61}[a-z\\d]"));
            }
        }

        @Override
        public IsVirtualHostableS3Bucket createFunction(FunctionNode functionNode) {
            return new IsVirtualHostableS3Bucket(functionNode);
        }
    }
}