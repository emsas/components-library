import React from "react";
import List from "../atoms/semantic/List";
import "../styles/index.css";

export default {
  title: "Semantic/List",
  component: List,
  argTypes: {
    is_order: { control: "boolean" },
    is_description: { control: "boolean" },
  },
};

export const forUnOrder = (args) => (
  <List {...args}>
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam", "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo", "consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse", "cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat", "non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum"
  </List>
);
