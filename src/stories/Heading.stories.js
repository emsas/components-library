import React from "react";
import Heading from "../atoms/typography/Heading";
import "../styles/index.css";

export default {
  title: "Typography/Heading",
  component: Heading,
  argTypes: {
    isH1: { control: "boolean" },
    isH2: { control: "boolean" },
    isH3: { control: "boolean" },
    isH4: { control: "boolean" },
    isH5: { control: "boolean" },
    isMedium: { control: "boolean" },
    isBold: { control: "boolean" },
    isFar: { control: "boolean" },
    isFarer: { control: "boolean" },
    isCloser: { control: "boolean" },
    isClose: { control: "boolean" },
    isTight: { control: "boolean" },
    isSlack: { control: "boolean" },
    isSlacker: { control: "boolean" },
    isSlackest: { control: "boolean" },
    isDark: { control: "boolean" },
    isLight: { control: "boolean" },
  },
};

export const forDisplay = (args) => (
  <Heading isH1 {...args}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Heading>
);

export const forTitles = (args) => (
  <Heading isH4 {...args}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Heading>
);
