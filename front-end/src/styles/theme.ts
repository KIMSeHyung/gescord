import baseStyled, { css, ThemedStyledInterface } from "styled-components";
import { Media, Color, FontSize } from "./styled";

const sizes = {
  pc: 1167,
  tablet: 778,
  mobile: 576,
};

// Iterate through the sizes and create a media template
const media: Media = {
  pc: (...args) => undefined,
  tablet: (...args) => undefined,
  mobile: (...args) => undefined,
};

Object.keys(sizes).reduce((acc: Media, label: string) => {
  switch (label) {
    case "mobile":
      acc.mobile = (...args: TemplateStringsArray[]) =>
        css`
          @media only screen and (max-width: ${sizes.mobile}px) {
            ${args}
          }
        `;
      break;
    case "tablet":
      acc.tablet = (...args: TemplateStringsArray[]) =>
        css`
          @media only screen and (max-width: ${sizes.tablet}px) {
            ${args}
          }
        `;
      break;
    case "pc":
      acc.pc = (...args: TemplateStringsArray[]) =>
        css`
          @media only screen and (max-width: ${sizes.pc}px) {
            ${args}
          }
        `;
      break;
    default:
      break;
  }
  return acc;
}, media);

const color: Color = {
  baseBlack: "#1f1f1f",
  quiteBlack: "#23272a",
  dark: "#2f3136",
  chat: "#36393f",
  blurple: "#7289da",
  fullWhite: "#ffffff",
  greyple: "#99Aaab",
  outline: "#43b581",
  balance: "#44ddbf",
  lightBlue: "#32dbf0",
  labelGrey: "#808482",
  greyDiv: "#505050",
  online: "#43b581",
  hover: "#46494faa"
};

const fontSize: FontSize = {
  mainText: "1.5em",
  subText: "0.8em",
  normal: "1.1em",
  mainTextWeight: "900",
};

const theme = {
  color,
  media,
  fontSize,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
