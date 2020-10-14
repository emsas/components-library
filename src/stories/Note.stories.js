import React from "react";
import Note from "../atoms/typography/Note";
import "../styles/index.css";

export default {
  title: "Typography/Note",
  component: Note,
  argTypes: {
    is_H1: { control: "boolean" },
    is_H2: { control: "boolean" },
    is_H3: { control: "boolean" },
    is_H4: { control: "boolean" },
    is_H5: { control: "boolean" },
    is_H6: { control: "boolean" },
    is_Quote: { control: "boolean" },
    is_Coding: { control: "boolean" },
    is_Address: { control: "boolean" },
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
    isCapitalize: { control: "boolean" },
    isUppercase: { control: "boolean" },
    isLowercase: { control: "boolean" },
    isUnderline: { control: "boolean" },
    isLine: { control: "boolean" },
    isOverLine: { control: "boolean" },
    isDobleLine: { control: "boolean" },
  },
};

export const forHeading = (args) => (
  <Note is_H1 {...args}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Note>
);

export const forCoding = (args) => (
  <Note is_Coding {...args}>
    <var>Lorem ipsum dolor sit amet</var>
    <kbd>consectetur adipisicing elit, sed do eiusmod</kbd>
    <code>
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </code>
    <samp>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
    </samp>
  </Note>
);
