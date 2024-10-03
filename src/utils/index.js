import axios from "axios";
import { apiUrl } from "../config";

export const handleLogin = async (userEmail, password) => {
  try {
    const response = await axios.post(`${apiUrl}/auth/login`, {
      username: userEmail,
      password,
    });

    const { token, email, username, emailsSent, maxEmailLimit } = response.data;

    return { token, email, username, emailsSent, maxEmailLimit };
  } catch (error) {
    if (error?.response) {
      console.error("Login failed:", error.response.data.message);
    } else {
      console.error("Error:", error.message);
    }

    return null;
  }
};
