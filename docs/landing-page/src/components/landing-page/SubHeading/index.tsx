import React, { RefObject, useRef, forwardRef, PropsWithRef } from "react";
import { Section } from "@/components/ui/Section";
import { SmithyGlow } from "@/components/ui/SmithyGlow";
import { Card, CardHeader } from "@/components/ui/card";
import { IdePanel } from "@/components/ui/ide-panel";
import { LineConnector } from "@/components/svg/line";
import { useTranslation } from "react-i18next";
import { Wheel } from "@/components/svg/wheel";
import { Web } from "./web";

interface SubHeadingProps {
  modelRef: RefObject<HTMLDivElement>;
}

export const SubHeading = (props: SubHeadingProps) => {
  const { t } = useTranslation("translation", { keyPrefix: "subHeading" });
  const buildRef = useRef<HTMLDivElement>(null);

  return (
    <div className="pt-20 px-2 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row justify-between grow items-start">
        <Section
          title={t("section1.title")}
          description={t("section2.description")}
          className="bg-smithy-black z-20 lg:bg-transparent"
        />

        <SmithyGlow className="bg-[position:center_center] w-full bg-[size:115%_103%] lg:bg-[size:110%] lg:relative lg:-top-12">
          <div className="mx-4 my-12 lg:m-12">
            <Card
              variant={"gradient-border"}
              className="bg-smithy-black text-center"
              ref={props.modelRef}
            >
              <CardHeader className="text-smithy-red-15 my-0 lg:my-5">
                <div className="flex flex-col lg:w-[450px] justify-between gap-4 lg:gap-14 items-center lg:flex-row">
                  <div className="text-2xl w-24 text-center lg:text-left">
                    {t("model")}
                  </div>
                  <IdePanel>
                    <div className="w-48 lg:w-64 my-7 text-left ml-5 text-smithy-red-33">
                      <div>\{t("build")}</div>
                      <div>\{t("validate")}</div>
                      <div>\{t("transform")}</div>
                      <div>\{t("share")}</div>
                    </div>
                  </IdePanel>
                </div>
              </CardHeader>
            </Card>
          </div>
        </SmithyGlow>
      </div>

      <div className="flex flex-col lg:flex-row justify-between grow items-start">
        <Section
          title={t("section2.title")}
          description={t("section2.description")}
          className="bg-smithy-black z-20"
        />

        <div className="my-6 lg:m-12 lg:px-6">
          <div className="flex w-full lg:w-[450px] justify-center gap-14 items-center">
            <Web smithyBuildRef={buildRef} />
          </div>
        </div>
      </div>

      <LineConnector startComponent={props.modelRef} endComponent={buildRef} />
    </div>
  );
};
