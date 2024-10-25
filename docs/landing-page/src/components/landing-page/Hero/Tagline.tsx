import React from "react";
import { useTranslation } from "react-i18next";

export const Tagline = () => {
  const { t } = useTranslation();
  return (
    <div className="">
      <h1 className="text-4xl text-left">
        <span className="text-secondary block">{t("title")}</span>
        Build with Smithy.
      </h1>
      <p className="pt-7">
        lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};
