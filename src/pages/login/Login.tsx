import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCharacter } from "@/services";
import { useDispatch } from "react-redux";
import { createUser, USER_KEY } from "@/redux/states/user";
import { privateRoutes, publicRoutes } from "@/routes/";
import { removeUserState } from "@/utils";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async () => {
    try {
      const result = await getCharacter();
      dispatch(createUser({ ...result, rol: "user" }));
      navigate(`/${privateRoutes.PRIVATE}`, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    removeUserState(USER_KEY);
    navigate(`/${publicRoutes.LOGIN}`, { replace: true });
  }, []);

  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
