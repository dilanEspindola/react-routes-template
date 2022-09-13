import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { Roles } from "@/model";
import { Navigate, Outlet } from "react-router-dom";
import { privateRoutes } from "@/routes";

interface Props {
  rol: Roles;
}

export const RolGuard = ({ rol }: Props) => {
  const userState = useSelector((store: AppStore) => store.user);

  return userState.rol === rol ? (
    <Outlet />
  ) : (
    <Navigate replace to={privateRoutes.PRIVATE} />
  );
};
