// 用來向後端發出 http request
import axios from "axios";
const API_URL = "http://localhost:8080/api/user";

class AuthService {
  login() {}
  logout() {}
  register(username, email, password, role) {
    return axios.post(API_URL + "/register", {
      // 回傳時 將資訊 包成一個 Object
      username,
      email,
      password,
      role
    });
  }
  getCurrentUser() {}
}

export default new AuthService();
