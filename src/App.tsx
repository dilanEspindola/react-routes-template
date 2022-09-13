import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "@/routes";
import { AuthGuard, RolGuard } from "@/guards/";
import { RoutesNotFound } from "@/utils";
import { Dashboard } from "@/pages/private";

const Login = lazy(() => import("@/pages/login/Login"));
const Private = lazy(() => import("@/pages/private/Private"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <BrowserRouter>
          <RoutesNotFound>
            {/* public routes */}
            <Route path="/" element={<Navigate to={privateRoutes.PRIVATE} />} />
            <Route path={publicRoutes.LOGIN} element={<Login />} />
            {/* private routes */}
            <Route element={<AuthGuard privates={true} />}>
              <Route
                path={`${privateRoutes.PRIVATE}/*`}
                element={<Private />}
              />
            </Route>
            <Route element={<RolGuard rol="admin" />}>
              <Route path={privateRoutes.DASHBOARD} element={<Dashboard />} />
            </Route>
          </RoutesNotFound>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
