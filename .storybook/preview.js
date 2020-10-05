import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { defaultTheme } from "../src/styles/themes/default";
import { darkTheme } from "../src/styles/themes/dark";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const getAllThemes = () => {
  return [defaultTheme, darkTheme];
};

addDecorator(withThemesProvider(getAllThemes()));
