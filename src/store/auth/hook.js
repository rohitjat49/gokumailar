import { useDispatch, useSelector } from "react-redux";
import { setUserLogin } from ".";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";

export const useSetUserLogin = () => {
  const dispatch = useDispatch();

  return (status, token, email, username) => {
    dispatch(setUserLogin({ status, token, email, username }));
  };
};

export const useUserLogin = () => {
  return useSelector((state) => state.auth.userLogin);
};

export const useCheckUserSession = () => {
  const userSession = useUserLogin();
  const logOutUser = useSetUserLogin;

  const isTokenValid = (token) => {
    if (!token) return false;

    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      return decoded.exp > currentTime;
    } catch (error) {
      console.error("Invalid token:", error);
      return false;
    }
  };

  useEffect(() => {
    if (!userSession?.status) return;
    const validationData = isTokenValid(userSession?.token);
    if (!validationData) logOutUser(false, "");
  }, [userSession, logOutUser]);
};
