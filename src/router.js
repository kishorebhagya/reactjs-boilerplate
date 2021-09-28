import { BrowserRouter, Switch, Route } from "react-router-dom";
import { renderRoutes as routes } from "./config/routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(([key, route]) => (
          <Route
            key={key}
            path={route.path}
            exact={route.exact}
            render={() => <route.component />}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
