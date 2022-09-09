import axios from "axios";
const API_URL = "http://localhost:8080/api/items";

class ItemService {
  get() {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.get(API_URL, {
      headers: {
        Authorization: token
      }
    });
  }

  post(id, title, description, price, avatar) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    let data = new FormData();
    data.append("id", id);
    data.append("title", title);
    data.append("description", description);
    data.append("price", price);
    data.append("avatar", avatar);
    return axios.post(API_URL + "/addItems", data.data, {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data"
      }
    });
  }

  // patch(id, title, description, price) {
  //   let token;
  //   if (localStorage.getItem("user")) {
  //     token = JSON.parse(localStorage.getItem("user")).token;
  //   } else {
  //     token = "";
  //   }

  //   return axios.patch(
  //     API_URL + "/itemsManage/ " + id,
  //     { title, description, price },
  //     {
  //       new: true,
  //       runValidators: true
  //     }
  //   );
  // }

  // delete(id) {
  //   let token;
  //   if (localStorage.getItem("user")) {
  //     token = JSON.parse(localStorage.getItem("user")).token;
  //   } else {
  //     token = "";
  //   }
  //   return axios.delete(
  //     API_URL + "/itemsManage/ " + id,
  //     { id },
  //     {
  //       headers: {
  //         Authorization: token
  //       }
  //     }
  //   );
  // }
}

export default new ItemService();
