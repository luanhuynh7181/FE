import { UserDataLogin } from "src/data/UserDataSplice";
import BaseService from "./base.service";


class AuthService extends BaseService {
  async login(ticket): Promise<any> {
    return this.post("/auth/login?ticket=" + ticket);
  }

  verifyCookie(): any {
    return this.get("/auth");
  }

  // logout() {
  //   localStorage.removeItem("user");
  // }

  // register(username: string, email: string, password: string) {
  //   return axios.post(API_URL + "signup", {
  //     username,
  //     email,
  //     password
  //   });
  // }

  // getCurrentUser() {
  //   const userStr = localStorage.getItem("user");
  //   if (userStr) return JSON.parse(userStr);

  //   return null;
  // }
}

export default new AuthService();
