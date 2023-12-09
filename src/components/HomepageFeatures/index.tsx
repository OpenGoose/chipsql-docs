import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React from "react";

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "JSON based",
    imgSrc: require("@site/static/img/landing/json-logo.png").default,
    description: (
      <>
        ChipsQL is a JSON based language which allows it to be well-structured
        and get away from ambiguity.
      </>
    ),
  },
  {
    title: "Query everywhere",
    imgSrc: require("@site/static/img/landing/sql-logo.png").default,
    description: (
      <>
        ChipsQL can be compiled to well-known SQL languages. Depending on the
        engine version it supports more or less languages.
      </>
    ),
  },
  {
    title: "Open Source",
    imgSrc: require("@site/static/img/landing/open-source-logo.png").default,
    description: (
      <>
        ChipsQL is completely Open Source which means it can be used freely in
        any personal or professional projects. It also accepts contributions!
      </>
    ),
  },
];

function Feature({ title, imgSrc, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img alt={title + " icon"} className={styles.image} src={imgSrc} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
