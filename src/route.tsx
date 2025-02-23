import { Routes as RouterRoutes, Route } from "react-router";
import HomePage from "./features/home/page/HomePage";

export type RouteProps = {
  path: string;
  element: React.ReactNode;
};

const routesProps: { [routeKey: string]: RouteProps } = {
  //   home: { path: "/", element: <HomePage /> },
};

const Routes: React.FC = () => {
  const isAuthenticating = false;
  if (isAuthenticating) {
    return <div>Loading...</div>;
  }

  return (
    <RouterRoutes>
      <Route index element={<HomePage />} />
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
