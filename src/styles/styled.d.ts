import "styled-components";
import { CSSProp } from "styled-components";

export type Color = {
  baseBlack: string;
  quiteBlack: string;
  dark: string;
  greyple: string;
  fullWhite: string;
  blurple: string;
  outline: string;
  balance: string;
  lightBlue: string;
  labelGrey: string;
  chat: string;
  greyDiv: string;
  online: string;
  hover: string;
};

export type FontSize = {
  mainText: string;
  subText: string;
  normal: string;
  mainTextWeight: string;
};

type Media = {
  mobile: (...args: TemplateStringsArray[]) => CSSProp | undefined;
  tablet: (...args: TemplateStringsArray[]) => CSSProp | undefined;
  pc: (...args: TemplateStringsArray[]) => CSSProp | undefined;
};

declare module "styled-components" {
  export interface DefaultTheme {
    color: Color;
    media: Media;
    fontSize: FontSize;
  }
}
