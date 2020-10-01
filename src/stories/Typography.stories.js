import React from "react";
import { H1 } from "../atoms/typography/h1";
import "../index.css";

export default {
  title: "Example/Typography",
  component: H1,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const H1_text = (args) => <H1>Hola</H1>;
