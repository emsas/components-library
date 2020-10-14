import { css } from "styled-components";

export const displays = css`
  display: ${(props) => props.theme.displays[props.display]};
`;
