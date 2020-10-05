import React from "react";
import PropTypes from "prop-types";
import { H1, H2, H3, H4, H5, H6 } from "../../quarks/typography/heading";
import {
  lheight,
  fweight,
  lspacing,
  clor,
} from "../../utils/stateless/typography";

function Heading({
  isH1,
  isH2,
  isH3,
  isH4,
  isH5,
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
  children,
}) {
  const color = clor(isDark, isLight);
  const line_height = lheight(isTight, isSlack, isSlacker, isSlackest);
  const font_weight = fweight(isBold, isMedium);
  const letter_spacing = lspacing(isFar, isFarer, isCloser, isClose);
  const args = { line_height, font_weight, letter_spacing, color };
  if (isH1) {
    return (
      <H1 font_size="huge" {...args}>
        {children}
      </H1>
    );
  }
  if (isH2) {
    return (
      <H2 font_size="biggest" {...args}>
        {children}
      </H2>
    );
  }
  if (isH3) {
    return (
      <H3 font_size="very_bigger" {...args}>
        {children}
      </H3>
    );
  }
  if (isH4) {
    return (
      <H4 font_size="bigger" {...args}>
        {children}
      </H4>
    );
  }
  if (isH5) {
    return (
      <H5 font_size="very_big" {...args}>
        {children}
      </H5>
    );
  }
  return (
    <H6 font_size="big" {...args}>
      {children}
    </H6>
  );
}

Heading.propTypes = {
  isH1: PropTypes.bool,
  isH2: PropTypes.bool,
  isH3: PropTypes.bool,
  isH4: PropTypes.bool,
  isH5: PropTypes.bool,
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
};

Heading.defaultProps = {
  isH1: false,
  isH2: false,
  isH3: false,
  isH4: false,
  isH5: false,
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
};

export default Heading;
