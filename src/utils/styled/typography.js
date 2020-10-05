import { css } from "styled-components";

export const fontSizes = css`
  font-size: ${(props) => props.theme.font_sizes[props.font_size]}rem;
`;

export const lineHeights = css`
  line-height: ${(props) => props.theme.line_heights[props.line_height]};
`;

export const fontWeights = css`
  font-weight: ${(props) => props.theme.font_weights[props.font_weight]};
`;

export const letterSpacings = css`
  letter-spacing: ${(props) =>
    props.theme.letter_spacings[props.letter_spacing]}rem;
`;

export const colors = css`
  color: ${(props) => props.theme.colors[props.color]};
`;
