import { useCheckUserSession } from "../store/auth/hook";

export const QueryResolver = () => {
  useCheckUserSession();

  return null;
};
