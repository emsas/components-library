import React from "react";
import PropTypes from "prop-types";
import {
  Q,
  Em,
  Ins,
  Del,
  Sup,
  Sub,
  Abbr,
  Cite,
  Span,
  Code,
  Mark,
  Small,
  Strong,
} from "../../quarks/typography/text";
import {
  tIns,
  tDel,
  clor,
  fsize,
  fweight,
  lspacing,
  wspacing,
  ttransform,
} from "../../utils/stateless/typography";

function Text({
  is_Strong,
  is_Em,
  is_Small,
  is_Q,
  is_Code,
  is_Mark,
  is_Ins,
  is_Del,
  is_Sup,
  is_Sub,
  is_Abbr,
  is_Cite,
  isTiny,
  isLarge,
  isMedium,
  isBold,
  isFar,
  isFarer,
  isCloser,
  isClose,
  isTight,
  isSlack,
  isSlacker,
  isSlackest,
  isDark,
  isLight,
  isCapitalize,
  isUppercase,
  isLowercase,
  isInverse,
  children,
}) {
  const color = clor(isDark, isLight);
  const font_size = fsize(isTiny, isLarge);
  const font_weight = fweight(isBold, isMedium);
  const letter_spacing = lspacing(isFar, isFarer, isCloser, isClose);
  const word_spacing = wspacing(isTight, isSlack, isSlacker, isSlackest);
  const text_transform = ttransform(isCapitalize, isUppercase, isLowercase);
  const args = {
    color,
    font_size,
    font_weight,
    word_spacing,
    letter_spacing,
    text_transform,
  };
  if (is_Em) {
    return (
      <Em {...args} font_weight="medium">
        {children}
      </Em>
    );
  }
  if (is_Strong) {
    return (
      <Strong {...args} font_weight="bold">
        {children}
      </Strong>
    );
  }
  if (is_Small) {
    return (
      <Small {...args} font_size="small">
        {children}
      </Small>
    );
  }
  if (is_Q) {
    return <Q {...args}>{children}</Q>;
  }
  if (is_Code) {
    return <Code {...args}>{children}</Code>;
  }
  if (is_Mark) {
    return <Mark {...args}>{children}</Mark>;
  }
  if (is_Abbr) {
    return <Abbr {...args}>{children}</Abbr>;
  }
  if (is_Cite) {
    return <Cite {...args}>{children}</Cite>;
  }
  if (is_Ins) {
    const text_decoration = tIns(isInverse);
    return (
      <Ins {...args} text_decoration={text_decoration}>
        {children}
      </Ins>
    );
  }
  if (is_Del) {
    const text_decoration = tDel(isInverse);
    return (
      <Del {...args} text_decoration={text_decoration}>
        {children}
      </Del>
    );
  }
  if (is_Sup) {
    return (
      <Sup {...args} font_size="small">
        {children}
      </Sup>
    );
  }
  if (is_Sub) {
    return (
      <Sub {...args} font_size="small">
        {children}
      </Sub>
    );
  }
  return <Span {...args}>{children}</Span>;
}

Text.propTypes = {
  is_Em: PropTypes.bool,
  is_Strong: PropTypes.bool,
  is_Small: PropTypes.bool,
  is_Q: PropTypes.bool,
  is_Code: PropTypes.bool,
  is_Mark: PropTypes.bool,
  is_Ins: PropTypes.bool,
  is_Del: PropTypes.bool,
  is_Sup: PropTypes.bool,
  is_Sub: PropTypes.bool,
  is_Abbr: PropTypes.bool,
  is_Cite: PropTypes.bool,
  isMedium: PropTypes.bool,
  isBold: PropTypes.bool,
  isTiny: PropTypes.bool,
  isLarge: PropTypes.bool,
  isFar: PropTypes.bool,
  isFarer: PropTypes.bool,
  isCloser: PropTypes.bool,
  isClose: PropTypes.bool,
  isTight: PropTypes.bool,
  isSlack: PropTypes.bool,
  isSlacker: PropTypes.bool,
  isSlackest: PropTypes.bool,
  isDark: PropTypes.bool,
  isLight: PropTypes.bool,
  isCapitalize: PropTypes.bool,
  isUppercase: PropTypes.bool,
  isLowercase: PropTypes.bool,
  isInverse: PropTypes.bool,
};

Text.defaultProps = {
  is_Em: false,
  is_Strong: false,
  is_Small: false,
  is_Q: false,
  is_Code: false,
  is_Mark: false,
  is_Ins: false,
  is_Del: false,
  is_Sup: false,
  is_Sub: false,
  is_Abbr: false,
  is_Cite: false,
  isMedium: false,
  isBold: false,
  isTiny: false,
  isLarge: false,
  isFar: false,
  isFarer: false,
  isCloser: false,
  isClose: false,
  isTight: false,
  isSlack: false,
  isSlacker: false,
  isSlackest: false,
  isDark: false,
  isLight: false,
  isCapitalize: false,
  isUppercase: false,
  isLowercase: false,
  isInverse: false,
};

export default Text;
