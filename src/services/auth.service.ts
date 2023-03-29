import axios from "axios";
import { UserData } from "src/data/UserDataSplice";

const API_URL = "http://localhost:4000/auth/";

class AuthService {
  async login(ticket): Promise<any> {
    return axios.post(API_URL + "login?ticket=" + ticket)
  }

  verifyCookie(): Promise<UserData> {
    return axios.get(API_URL);
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username: string, email: string, password: string) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

export default new AuthService();
