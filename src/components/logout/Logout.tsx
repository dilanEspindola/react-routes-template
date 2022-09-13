import { useNavigate } from "react-router-dom";
import { USER_KEY } from "@/redux/states/user";
import { removeUserState } from "@/utils";
import { publicRoutes } from "@/routes";

export const Logout = () => {
  const navigate = useNavigate();

  const logout = () => {
    removeUserState(USER_KEY);
    navigate(`/${publicRoutes.LOGIN}`, { replace: true });
  };
  return <button onClick={logout}>log out</button>;
};
