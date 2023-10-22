import { ReactChild, ReactFragment, useState } from "react";
import Image from "next/image";

import angular from "../public/logos/angularjs-plain.svg";
import css from "../public/logos/css3-plain.svg";
import express from "../public/logos/express-original.svg";
import firebase from "../public/logos/firebase-plain.svg";
import gatsby from "../public/logos/gatsby-plain.svg";
import heroku from "../public/logos/heroku-plain.svg";
import html from "../public/logos/html5-plain.svg";
import javascript from "../public/logos/javascript-plain.svg";
import jquery from "../public/logos/jquery-plain.svg";
import mongodb from "../public/logos/mongodb-plain.svg";
import nextjs from "../public/logos/nextjs-original.svg";
import nodejs from "../public/logos/nodejs-plain.svg";
import react from "../public/logos/react-original.svg";
import sass from "../public/logos/sass-original.svg";
import tailwindcss from "../public/logos/tailwindcss-plain.svg";
import vue from "../public/logos/vuejs-original.svg";
import pinia from "../public/logos/pinia-logo.svg";
import typescriptLogo from "../public/logos/typescript-original.svg";
import zustandLogo from "../public/logos/zustand-logo.png";
import reactQueryLogo from "../public/logos/react-query-logo.svg";
import styledLogo from "../public/logos/styled-components.svg";
import viteLogo from "../public/logos/vite-logo.png";
import flutterLogo from "../public/logos/flutter-logo.svg";

import styles from "../styles/skill-icon.module.css";

type SkillIconProps = {
  skill: string;
};

export default function SkillIcon({ skill }: SkillIconProps) {
  const [noIcon, setNoIcon] = useState(false);

  let skillIconSrc;

  switch (skill) {
    case "angular":
      skillIconSrc = angular;
      break;
    case "css":
      skillIconSrc = css;
      break;
    case "express":
      skillIconSrc = express;
      break;
    case "firebase":
      skillIconSrc = firebase;
      break;
    case "gatsby":
      skillIconSrc = gatsby;
      break;
    case "heroku":
      skillIconSrc = heroku;
      break;
    case "html":
      skillIconSrc = html;
      break;
    case "javascript":
      skillIconSrc = javascript;
      break;
    case "jquery":
      skillIconSrc = jquery;
      break;
    case "mongodb":
      skillIconSrc = mongodb;
      break;
    case "nextjs":
      skillIconSrc = nextjs;
      break;
    case "nodejs":
      skillIconSrc = nodejs;
      break;
    case "react":
      skillIconSrc = react;
      break;
    case "sass":
      skillIconSrc = sass;
      break;
    case "tailwindcss":
      skillIconSrc = tailwindcss;
      break;
    case "vue":
      skillIconSrc = vue;
      break;
    case "pinia":
      skillIconSrc = pinia;
      break;
    case "typescript":
      skillIconSrc = typescriptLogo;
      break;
    case "reactquery":
      skillIconSrc = reactQueryLogo;
      break;
    case "zustand":
      skillIconSrc = zustandLogo;
      break;
    case "styled":
      skillIconSrc = styledLogo;
      break;
    case "vite":
      skillIconSrc = viteLogo;
      break;
    case "flutter":
      skillIconSrc = flutterLogo;
      break;
    default:
      setNoIcon(true);
  }

  return (
    <div className={styles.skillIcon}>
      {noIcon ? (
        <span>{skill}</span>
      ) : (
        <Image
          src={skillIconSrc}
          alt="Skill Icon"
          title={skill}
          layout="fill"
        />
      )}
    </div>
  );
}
