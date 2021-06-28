import * as styledComponents from "styled-components";

import { Theme } from "./theme";

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
  ThemeConsumer,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export { css, keyframes, ThemeProvider, ThemeConsumer };

export default styled;
