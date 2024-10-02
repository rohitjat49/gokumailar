import { useCheckUserSession } from "../store/auth/hook";

export function QueryResolver() {
  useCheckUserSession();

  return null;
}
