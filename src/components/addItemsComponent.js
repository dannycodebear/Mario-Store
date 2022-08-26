import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import ItemService from "../service/items.service";

const AddItemsComponent = (props) => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = props;
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [avatar, setAvatar] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleChangeId = (e) => {
    setId(e.target.value);
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleChangeAvatar = (e) => {
    setAvatar(e.target.value);
  };
  const handleChangePost = () => {
    if (currentUser.user.role !== "admin") {
      window.alert("Member can't not post item!! ");
      navigate("/");
    } else {
      return ItemService.post(avatar)
        .then(() => {
          window.alert("Post successfully");
          navigate("/");
        })
        .catch((error) => {
          console.log(avatar);
          console.log(error);
          console.log(error.response);

          // 顯示 error message 給用戶
          setErrorMessage(error.response.data);
        });
    }
  };

  return (
    <div>
      {errorMessage && <div className="alert-message">{errorMessage}</div>}
      <form action="/addItems" method="post" enctype="multipart/form-data">
        {/* <p>id:</p>
        <input
          onChange={handleChangeId}
          type="number"
          name="id"
          placeholder="id"
          value={id}
          required
        />
        <p>name:</p>
        <input
          onChange={handleChangeTitle}
          type="text"
          name="title"
          placeholder="title"
          value={title}
          required
        />
        <p>description:</p>
        <textarea
          onChange={handleChangeDescription}
          name="description"
          placeholder=" description"
          value={description}
          required
        />
        <p>price:</p>
        <input
          onChange={handleChangePrice}
          type="number"
          name="price"
          placeholder=" 1234"
          value={price}
          required
        /> */}
        <p>image:</p>
        <input type="file" name="avatar" onChange={handleChangeAvatar} value={avatar} />

        <input onClick={handleChangePost} type="submit" />
      </form>
    </div>
  );
};

export default AddItemsComponent;
