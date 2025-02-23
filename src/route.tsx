import App from "./App";
import { Routes as RouterRoutes, Route } from "react-router";

export type RouteProps = {
  path: string;
  element: React.ReactNode;
};

const routesProps: { [routeKey: string]: RouteProps } = {
  home: { path: "/", element: <App /> },
};

const Routes: React.FC = () => {
  const isAuthenticating = false;
  if (isAuthenticating) {
    return <div>Loading...</div>;
  }

  return (
    <RouterRoutes>
      <Route index element={<App />} />
      {Object.entries(routesProps).map(([routeKey, routeProps]) => (
        <Route
          key={routeKey}
          path={routeProps.path}
          element={routeProps.element}
        />
      ))}
    </RouterRoutes>
  );
};

export default Routes;
