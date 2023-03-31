import BaseService from "./base.service";
import { UserDataKey, UserData } from '../UserData/UserData';


class AuthService extends BaseService {
  async login(ticket): Promise<any> {
    return this.post("/auth/login?ticket=" + ticket);
  }

  async logout() {
    UserData.setObject(UserDataKey.USER_DATA_LOGIN, {});
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
