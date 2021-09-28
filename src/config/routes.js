import { lazy } from "react";

export const routes = {
  homePage: {
    path: "/",
    component: lazy(() => import("../pages/Homepage")),
    exact: true,
  },
};

export const renderRoutes = Object.entries(routes);
