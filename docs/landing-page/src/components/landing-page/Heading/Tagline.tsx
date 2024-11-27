import React from "react";
import { useTranslation } from "react-i18next";

export const Tagline = () => {
  const { t } = useTranslation("translation", { keyPrefix: "title" });
  return (
    <div className="max-w-xl">
      <h1 className="text-3xl md:text-4xl text-left leading-tight">
        <span className="block">{t("lineOne")}</span>
        <span className="block">{t("lineTwo")}</span>
        <span className="text-secondary block">{t("tagline")}</span>
      </h1>
      <p className="pt-7">{t("subtitle")}</p>
    </div>
  );
};
