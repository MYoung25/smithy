import React from "react";
import { useTranslation } from "react-i18next";
import {
  CircleSection,
  type CircleSectionProps,
} from "@/components/ui/CircleSection";

const serverUrls: CircleSectionProps["circleUrls"] = [
  { src: "/icons/ts.svg", alt: "TypeScript logo" },
  { src: "/icons/rust.svg", alt: "Rust logo" },
  { src: "/icons/scala.svg", alt: "Scala logo" },
];
const clientUrls: CircleSectionProps["circleUrls"] = [
  ...serverUrls,
  { src: "/icons/go.svg", alt: "Go logo" },
  { src: "/icons/ruby.png", alt: "Ruby logo" },
  { src: "/icons/kotlin.svg", alt: "Kotlin logo" },
  { src: "/icons/swift.svg", alt: "Swift logo" },
  { src: "/icons/dafny.svg", alt: "Dafny logo" },
  { src: "/icons/python.svg", alt: "Python logo" },
];

export const InformationCircles = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "informationCircles",
  });
  return (
    <div className="py-12 bg-smithy-light-gray">
      <CircleSection
        title={t("clients.title")}
        description={t("clients.description")}
        circleUrls={clientUrls}
      />
      <CircleSection
        title={t("servers.title")}
        description={t("servers.description")}
        circleUrls={serverUrls}
      />
    </div>
  );
};
