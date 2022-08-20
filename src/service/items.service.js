import axios from "axios";
const API_URL = "http://localhost:8080/api/items";

class ItemService {
  post(id, title, description, price, avatar) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    const formData = new FormData();
    // formData.append("id", id);
    // formData.append("title", title);
    // formData.append("description", description);
    // formData.append("price", price);
    formData.append("avatar", avatar);
    return await axios.post(
      API_URL + "/addItems",
       formData ,
      {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data"
        }
      }
    );
  }

  patch(id, title, description, price) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.patch(
      API_URL + "/itemsManage/ " + id,
      { title, description, price },
      {
        new: true,
        runValidators: true
      }
    );
  }

  delete(id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.delete(
      API_URL + "/itemsManage/ " + id,
      { id },
      {
        headers: {
          Authorization: token
        }
      }
    );
  }
}

export default new ItemService();
