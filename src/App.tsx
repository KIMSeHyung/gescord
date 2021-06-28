import { useReactiveVar } from "@apollo/client";
import { FC } from "react";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import { isLoggedInVar } from "./store/users.state";

const App: FC = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <BrowserRouter>{isLoggedIn ? <LoggedIn /> : <LoggedOut />}</BrowserRouter>
  );
};

const LoggedIn = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Redirect exact path="*" to="/" />
    </Switch>
  );
};

const LoggedOut = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Redirect path="*" to="/" />
    </Switch>
  );
};

export default App;
