/*
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

package software.amazon.smithy.model.selector;

import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.function.BiConsumer;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.SourceException;
import software.amazon.smithy.model.knowledge.NeighborProviderIndex;
import software.amazon.smithy.model.neighbor.NeighborProvider;
import software.amazon.smithy.model.node.Node;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.utils.SmithyBuilder;

/**
 * Matches a set of shapes using a selector expression.
 */
public interface Selector {

    /** A selector that always returns all provided values. */
    Selector IDENTITY = new WrappedSelector("*", InternalSelector.IDENTITY);

    /**
     * Parses a selector expression.
     *
     * @param expression Expression to parse.
     * @return Returns the parsed {@link Selector}.
     */
    static Selector parse(String expression) {
        return Parser.parse(expression);
    }

    /**
     * Creates a Selector from a {@link Node}.
     *
     * @param node Node to parse.
     * @return Returns the created selector.
     * @throws SourceException on error.
     */
    static Selector fromNode(Node node) {
        try {
            return parse(node.expectStringNode().getValue());
        } catch (SelectorSyntaxException e) {
            throw new SourceException(e.getMessage(), node, e);
        }
    }

    /**
     * Matches a selector to a model.
     *
     * @param model Model used to resolve shapes with.
     * @return Returns the matching shapes.
     */
    default Set<Shape> select(Model model) {
        return runner().model(model).selectShapes();
    }

    /**
     * Creates a Selector {@code Runner}, used to customize how a selector is
     * executed.
     *
     * @return Returns the created runner.
     */
    Runner runner();

    /**
     * Builds the execution environment for a selector and executes selectors.
     */
    final class Runner {

        private final InternalSelector delegate;
        private Model model;
        private NeighborProvider neighborProvider;

        Runner(InternalSelector delegate) {
            this.delegate = delegate;
        }

        /**
         * Sets the <em>required</em> model to use to select shapes with.
         *
         * @param model Model used in the selector evaluation.
         * @return Returns the Runner.
         */
        public Runner model(Model model) {
            this.model = model;
            return this;
        }

        /**
         * Sets a {@link NeighborProvider} to use when matching shapes.
         *
         * <p>If not specified, the result of getting the {@link NeighborProviderIndex}
         * from the Model will be used.
         *
         * @param neighborProvider Custom neighbor provider to use.
         * @return Returns the Runner.
         */
        public Runner neighborProvider(NeighborProvider neighborProvider) {
            this.neighborProvider = neighborProvider;
            return this;
        }

        /**
         * Runs the selector and returns the set of matching shapes.
         *
         * @return Returns the set of matching shapes.
         * @throws IllegalStateException if a {@code model} has not been set.
         */
        public Set<Shape> selectShapes() {
            beforeRun();

            // The last receiver is used to store all received shapes in Set.
            Set<Shape> result = new HashSet<>();
            BiConsumer<Context, Shape> acceptor = (ctx, s) -> result.add(s);
            Context context = new Context(model, neighborProvider);

            for (Shape shape : model.toSet()) {
                // Each shape creates a new context, so clear any previous shapes.
                delegate.push(context.clearVars(), shape, acceptor);
            }

            return result;
        }

        /**
         * Matches a selector to a set of shapes and receives each matched shape
         * with the variables that were set when the shape was matched.
         *
         * @param matchConsumer Receives each matched shape and the vars available when the shape was matched.
         * @throws IllegalStateException if a {@code model} has not been set.
         */
        public void selectMatches(BiConsumer<Shape, Map<String, Set<Shape>>> matchConsumer) {
            beforeRun();
            BiConsumer<Context, Shape> acceptor = (ctx, s) -> matchConsumer.accept(s, ctx.copyVars());
            Context context = new Context(model, neighborProvider);

            for (Shape shape : model.toSet()) {
                // Each shape creates a new context, so clear any previous shapes.
                delegate.push(context.clearVars(), shape, acceptor);
            }
        }

        private void beforeRun() {
            SmithyBuilder.requiredState("model", model);

            if (neighborProvider == null) {
                neighborProvider = model.getKnowledge(NeighborProviderIndex.class).getProvider();
            }
        }
    }
}
