import React from "react";
import { useTranslation } from "react-i18next";
import { CircleSection } from "@/components/ui/CircleSection";

const clientUrls = [
  "/icons/dark/javaScript.svg",
  "/icons/dark/GO.svg",
  "/icons/dark/rust.svg",
  "/icons/dark/ruby.svg",
  // "/icons/dark/kotlin.svg", // missing
  "/icons/dark/swift.svg",
  "/icons/dark/scala.svg", // missing
  // "/icons/dark/dafny.svg", // missing
  "/icons/dark/python.svg",
];
const serverUrls = [
  "/icons/dark/javaScript.svg",
  "/icons/dark/rust.svg",
  "/icons/dark/scala.svg", // missing
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
