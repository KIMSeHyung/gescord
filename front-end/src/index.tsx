import { ApolloProvider } from "@apollo/client";
import { StylesProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import client from "./apollo";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import { ThemeProvider } from "./styles/themed-components";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ApolloProvider client={client}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StylesProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
