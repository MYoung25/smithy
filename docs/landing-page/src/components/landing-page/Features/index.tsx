import React from "react";
import { useTranslation } from "react-i18next";

export const Features = () => {
  const { t } = useTranslation("translation", { keyPrefix: "featuresList" });
  const featuresList = [
    {
      title: t("one"),
      description: t("oneDescription"),
      icon: "/icons/dark/protocol.svg",
    },
    {
      title: t("two"),
      description: t("twoDescription"),
      icon: "/icons/dark/codify.svg",
    },
    {
      title: t("three"),
      description: t("threeDescription"),
      icon: "/icons/dark/evolve.svg",
    },
    {
      title: t("four"),
      description: t("fourDescription"),
      icon: "/icons/dark/resource.svg",
    },
  ];
  return (
    <section className="bg-smithy-light-gray text-smithy-black w-screen py-12 px-8">
      <h3 className="text-3xl mb-4">{t("title")}</h3>
      <div className="flex flex-row justify-around flex-wrap gap-2 pb-4">
        {featuresList.map(({ title, description, icon }) => (
          <div
            key={title}
            className="w-full md:w-1/3 flex justify-start items-start my-4"
          >
            <img className="w-12" src={icon} />
            <div className="ml-8">
              <h4 className="pb-2">{title}</h4>
              <p className="max-w-md">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
