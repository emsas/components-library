import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const defaultTheme = {
  name: "DEFAULT",
  backgroundColor: "azure",
  textColor: "dimgrey",
  borderRadius: "30px",
  fontFamily: "Inter, Open Sans, Roboto, Ubuntu, sans-serif",
};

const darkTheme = {
  name: "DARK",
  backgroundColor: "black",
  textColor: "seashell",
  borderRadius: "100px",
  fontFamily: "Inter, Open Sans, Roboto, Ubuntu, sans-serif",
};

export const getAllThemes = () => {
  return [defaultTheme, darkTheme];
};

addDecorator(withThemesProvider(getAllThemes()));
