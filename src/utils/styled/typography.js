import { css } from "styled-components";

export const colors = css`
  color: ${(props) => props.theme.colors[props.color]};
`;

export const fontSizes = css`
  font-size: ${(props) => props.theme.font_sizes[props.font_size]}rem;
`;

export const wordSpacings = css`
  word-spacing: ${(props) => props.theme.word_spacings[props.word_spacing]}rem;
`;

export const fontWeights = css`
  font-weight: ${(props) => props.theme.font_weights[props.font_weight]};
`;

export const letterSpacings = css`
  letter-spacing: ${(props) =>
    props.theme.letter_spacings[props.letter_spacing]}rem;
`;

export const textTransforms = css`
  text-transform: ${(props) =>
    props.theme.text_transforms[props.text_transform]};
`;

export const textDecorations = css`
  text-decoration: ${(props) =>
    props.theme.text_decorations[props.text_decoration]};
`;

// ---

export const lineHeights = css`
  line-height: ${(props) => props.theme.line_heights[props.line_height]};
`;
