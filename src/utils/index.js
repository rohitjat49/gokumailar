import axios from "axios";
import { apiUrl } from "../config";

export const handleLogin = async (userEmail, password) => {
  try {
    const response = await axios.post(`${apiUrl}/auth/login`, {
      username: userEmail,
      password,
    });

    console.log(response.data);

    const { token, email, username } = response.data;

    return { token, email, username };
  } catch (error) {
    if (error?.response) {
      console.error("Login failed:", error.response.data.message);
    } else {
      console.error("Error:", error.message);
    }

    return null;
  }
};
