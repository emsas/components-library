import React from "react";
import PropTypes from "prop-types";
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Pre,
  Address,
  Blockquote,
} from "../../quarks/typography/note";
import {
  clor,
  fweight,
  wspacing,
  lspacing,
  ttransform,
  tdecoration,
} from "../../utils/stateless/typography";

function Note({
  is_H1,
  is_H2,
  is_H3,
  is_H4,
  is_H5,
  is_H6,
  is_Quote,
  is_Coding,
  is_Address,
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
  isUnderline,
  isLine,
  isOverLine,
  isDobleLine,
  children,
}) {
  const color = clor(isDark, isLight);
  const font_weight = fweight(isBold, isMedium);
  const letter_spacing = lspacing(isFar, isFarer, isCloser, isClose);
  const word_spacing = wspacing(isTight, isSlack, isSlacker, isSlackest);
  const text_transform = ttransform(isCapitalize, isUppercase, isLowercase);
  const text_decoration = tdecoration(
    isUnderline,
    isLine,
    isOverLine,
    isDobleLine
  );
  const args = {
    color,
    word_spacing,
    font_weight,
    letter_spacing,
    text_transform,
    text_decoration,
  };
  if (is_H1) {
    return (
      <H1 {...args} font_size="huge">
        {children}
      </H1>
    );
  }
  if (is_H2) {
    return (
      <H2 {...args} font_size="biggest">
        {children}
      </H2>
    );
  }
  if (is_H3) {
    return (
      <H3 {...args} font_size="very_bigger">
        {children}
      </H3>
    );
  }
  if (is_H4) {
    return (
      <H4 {...args} font_size="bigger">
        {children}
      </H4>
    );
  }
  if (is_H5) {
    return (
      <H5 {...args} font_size="very_big">
        {children}
      </H5>
    );
  }
  if (is_H6) {
    return (
      <H6 {...args} font_size="big">
        {children}
      </H6>
    );
  }
  if (is_Quote) {
    return <Blockquote {...args}>{children}</Blockquote>;
  }
  if (is_Address) {
    return <Address {...args}>{children}</Address>;
  }
  if (is_Coding) {
    return <Pre {...args}>{children}</Pre>;
  }
  return <P {...args}>{children}</P>;
}

Note.propTypes = {
  is_H1: PropTypes.bool,
  is_H2: PropTypes.bool,
  is_H3: PropTypes.bool,
  is_H4: PropTypes.bool,
  is_H5: PropTypes.bool,
  is_H6: PropTypes.bool,
  is_Quote: PropTypes.bool,
  is_Coding: PropTypes.bool,
  is_Address: PropTypes.bool,
  isMedium: PropTypes.bool,
  isBold: PropTypes.bool,
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
  isUnderline: PropTypes.bool,
  isLine: PropTypes.bool,
  isOverLine: PropTypes.bool,
  isDobleLine: PropTypes.bool,
};

Note.defaultProps = {
  is_H1: false,
  is_H2: false,
  is_H3: false,
  is_H4: false,
  is_H5: false,
  is_H6: false,
  is_Quote: false,
  is_Coding: false,
  is_Address: false,
  isMedium: false,
  isBold: false,
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
  isUnderline: false,
  isLine: false,
  isOverLine: false,
  isDobleLine: false,
};

export default Note;
