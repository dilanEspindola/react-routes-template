import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import { privateRoutes } from "@/routes";
import { RoutesNotFound } from "@/utils";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const Home = lazy(() => import("./home/Home"));

const Private = () => {
  return (
    <RoutesNotFound>
      <Route path="/" element={<Navigate to={privateRoutes.DASHBOARD} />} />
      <Route path={privateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={privateRoutes.HOME} element={<Home />} />
    </RoutesNotFound>
  );
};

export default Private;
