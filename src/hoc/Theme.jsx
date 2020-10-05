import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/themes/default";
import { darkTheme } from "../styles/themes/dark";

const Theme = ({ children }) => {
  const [theme, setTheme] = useState("default");
  themeSelect = theme == "default" ? defaultTheme : darkTheme;
  return (
    <ThemeProvider theme={themeSelect} changeTheme={setTheme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
