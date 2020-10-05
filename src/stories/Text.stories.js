import React from "react";
import Text from "../atoms/typography/Text";
import "../styles/index.css";

export default {
  title: "Typography/Text",
  component: Text,
  argTypes: {
    isEm: { control: "boolean" },
    isStrong: { control: "boolean" },
    isSmall: { control: "boolean" },
    isSpan: { control: "boolean" },
    isBlockquote: { control: "boolean" },
    isQ: { control: "boolean" },
    isCode: { control: "boolean" },
    isMark: { control: "boolean" },
    isIns: { control: "boolean" },
    isDel: { control: "boolean" },
    isSup: { control: "boolean" },
    isSub: { control: "boolean" },
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

export const forText = (args) => (
  <Text {...args}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Text>
);

export const forBlockquote = (args) => (
  <Text {...args}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Text>
);

export const forDecoration = (args) => (
  <Text {...args}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Text>
);
