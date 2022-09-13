import { AppStore } from "@/redux/store";
import { privateRoutes, publicRoutes } from "@/routes";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  privates?: boolean;
}

export const AuthGuard = ({ privates }: Props) => {
  const userState = useSelector((store: AppStore) => store.user);

  return userState.name ? (
    privates ? (
      <Outlet />
    ) : (
      <Navigate replace to={privateRoutes.PRIVATE} />
    )
  ) : (
    <Navigate replace to={publicRoutes.LOGIN} />
  );
};
