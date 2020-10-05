export const lheight = (isFar, isFarer, isCloser, isClose) =>
  isClose
    ? "close"
    : isCloser
    ? "close"
    : isFar
    ? "far"
    : isFarer
    ? "farer"
    : "normal";

export const fweight = (isBold, isMedium) =>
  isMedium ? "medium" : isBold ? "bold" : "normal";

export const lspacing = (isTight, isSlack, isSlacker, isSlackest) =>
  isTight
    ? "tight"
    : isSlack
    ? "slack"
    : isSlacker
    ? "slacker"
    : isSlackest
    ? "slackest"
    : "normal";

export const clor = (isDark, isLight) =>
  isDark ? "gray_400" : isLight ? "gray_200" : "gray_300";
