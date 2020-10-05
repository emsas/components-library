import React from "react";
import PropTypes from "prop-types";
import {
  P,
  Span,
  Blockquote,
  Q,
  Small,
  Strong,
  Em,
  Code,
  Mark,
  Ins,
  Del,
  Sup,
  Sub,
} from "../../quarks/typography/text";
import {
  lheight,
  fweight,
  lspacing,
  clor,
} from "../../utils/stateless/typography";

function Text({
  isStrong,
  isEm,
  isSmall,
  isSpan,
  isBlockquote,
  isQ,
  isCode,
  isMark,
  isIns,
  isDel,
  isSup,
  isSub,
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
  if (isEm) {
    return <Em {...args}>{children}</Em>;
  }
  if (isStrong) {
    return <Strong {...args}>{children}</Strong>;
  }
  if (isSmall) {
    return <Small {...args}>{children}</Small>;
  }
  if (isSpan) {
    return <Span {...args}>{children}</Span>;
  }
  if (isBlockquote) {
    return <Blockquote {...args}>{children}</Blockquote>;
  }
  if (isQ) {
    return <Q {...args}>{children}</Q>;
  }
  if (isCode) {
    return <Code {...args}>{children}</Code>;
  }
  if (isMark) {
    return <Mark {...args}>{children}</Mark>;
  }
  if (isIns) {
    return <Ins {...args}>{children}</Ins>;
  }
  if (isDel) {
    return <Del {...args}>{children}</Del>;
  }
  if (isSup) {
    return <Sup {...args}>{children}</Sup>;
  }
  if (isSub) {
    return <Sub {...args}>{children}</Sub>;
  }
  return <P {...args}>{children}</P>;
}

Text.propTypes = {
  isEm: PropTypes.bool,
  isStrong: PropTypes.bool,
  isSmall: PropTypes.bool,
  isSpan: PropTypes.bool,
  isBlockquote: PropTypes.bool,
  isQ: PropTypes.bool,
  isCode: PropTypes.bool,
  isMark: PropTypes.bool,
  isIns: PropTypes.bool,
  isDel: PropTypes.bool,
  isSup: PropTypes.bool,
  isSub: PropTypes.bool,
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

Text.defaultProps = {
  isEm: false,
  isStrong: false,
  isSmall: false,
  isSpan: false,
  isBlockquote: false,
  isQ: false,
  isCode: false,
  isMark: false,
  isIns: false,
  isDel: false,
  isSup: false,
  isSub: false,
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

export default Text;
