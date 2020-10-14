export const clor = (isDark, isLight) =>
  isDark ? "gray_400" : isLight ? "gray_200" : "gray_300";

export const fweight = (isBold, isMedium) =>
  isMedium ? "medium" : isBold ? "bold" : "normal";

export const fsize = (isTiny, isLarge) =>
  isTiny ? "small" : isLarge ? "big" : "base";

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

export const wspacing = (isTight, isSlack, isSlacker, isSlackest) =>
  isTight
    ? "tight"
    : isSlack
    ? "slack"
    : isSlacker
    ? "slacker"
    : isSlackest
    ? "slackest"
    : "normal";

export const ttransform = (isCapitalize, isUppercase, isLowercase) =>
  isLowercase
    ? "lower"
    : isCapitalize
    ? "capit"
    : isUppercase
    ? "upper"
    : "empty";

export const tdecoration = (isUnderline, isLine, isOverLine, isDobleLine) =>
  isUnderline
    ? "under"
    : isLine
    ? "line"
    : isOverLine
    ? "over"
    : isDobleLine
    ? "doble"
    : "none";

export const tIns = (isInverse) => (isInverse ? "over" : "under");

export const tDel = (isInverse) => (isInverse ? "doble" : "line");

// ---

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
