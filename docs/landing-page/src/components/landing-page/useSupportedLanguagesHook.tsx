import React, { useMemo } from "react";
import { useTranslation, Trans } from "react-i18next";

interface useSupportedLanguagesProps {
  filter?: "clients" | "servers";
}

export const useSupportedLanguages = (props?: useSupportedLanguagesProps) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "supportedLanguages",
  });
  return useMemo(() => {
    const serverUrls = [
      { src: "/icons/ts.svg", alt: t("ts.alt"), trademark: t("ts.trademark") },
      {
        src: "/icons/rust.svg",
        alt: t("rust.alt"),
        trademark: (
          <>
            <Trans t={t}>rust.trademark</Trans>
            <a
              className="text-smithy-red-15 hover:underline block"
              href="https://foundation.rust-lang.org/policies/logo-policy-and-media-guide/#the-rust-trademarks"
              aria-label="Rust Logo License"
            >
              {t("Source")}
            </a>
          </>
        ),
      },
      {
        src: "/icons/scala.svg",
        alt: t("scala.alt"),
        trademark: t("scala.trademark"),
      },
    ];
    const clientUrls = [
      { src: "/icons/go.svg", alt: t("go.alt"), trademark: t("go.trademark") },
      {
        src: "/icons/ruby.png",
        alt: t("ruby.alt"),
        trademark: t("ruby.trademark"),
      },
      {
        src: "/icons/kotlin.svg",
        alt: t("kotlin.alt"),
        trademark: t("kotlin.trademark"),
      },
      {
        src: "/icons/swift.svg",
        alt: t("swift.alt"),
        trademark: t("swift.trademark"),
      },
      {
        src: "/icons/dafny.svg",
        alt: t("dafny.alt"),
        trademark: t("dafny.trademark"),
      },
      {
        src: "/icons/python.svg",
        alt: t("python.alt"),
        trademark: t("python.trademark"),
      },
    ];

    switch (props?.filter) {
      case "servers":
        return serverUrls;
      case "clients":
      default:
        return [...serverUrls, ...clientUrls];
    }
  }, [props?.filter]);
};
