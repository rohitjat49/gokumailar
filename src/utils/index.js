import axios from "axios";
import { apiUrl } from "../config";

export const handleLogin = async (userEmail, password) => {
  try {
    const response = await axios.post(`${apiUrl}/auth/login`, {
      userEmail,
      password,
    });

    const { token, email, userName } = response.data;

    return { token, email, userName };
  } catch (error) {
    if (error?.response) {
      console.error("Login failed:", error.response.data.message);
    } else {
      console.error("Error:", error.message);
    }

    return null;
  }
};
