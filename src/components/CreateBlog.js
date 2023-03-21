import React from "react";
import "./CreateBlog.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

const CreateBlog = ({ handleClick }) => {
  const [data, setData] = useState({
    title: "",
    image: "",
    content: "",
    author: "",
    description: "",
  });

  // function to handle onChange of Input field
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setData({ ...data, [name]: value });
  };

  // Image upload button

  const handleUploadClick = (event) => {
    let file = URL.createObjectURL(event.target.files[0]);
    setData({ ...data, image: file });
  };

  // validation
  function isValid() {
    let flag = true;
    for (let key in data) {
      if (!data[key]) {
        flag = false;
      }
    }
    return flag;
  }

  // set empty after submission

  function clearFormData() {
    setData({ title: "", image: "", content: "", author: "", description: "" });
  }

  return (
    <div className="blog__container">
      <div className="blog">
        <TextField
          id="blog__title"
          label="Title"
          variant="outlined"
          value={data.title}
          onChange={handleChange}
          name="title"
          inputProps={{ maxLength: 50 }}
          required
          helperText="Max 20 characters"
        />
        <TextField
          id="blog__author"
          label="Author Name"
          variant="outlined"
          value={data.author}
          onChange={handleChange}
          name="author"
          inputProps={{ maxLength: 20 }}
          required
          helperText="Max 20 characters"
        />
        <TextField
          id="blog__content"
          label="Content"
          multiline
          maxRows={4}
          value={data.content}
          onChange={handleChange}
          name="content"
          required
        />
        <TextField
          id="blog__description"
          label="Description"
          multiline
          maxRows={4}
          value={data.description}
          onChange={handleChange}
          name="description"
          inputProps={{ maxLength: 200 }}
          required
          helperText="Max 200 characters"
        />
        <input
          accept="image/jpeg, image/png"
          className="label__image"
          id="contained-button-file"
          multiple
          type="file"
          onChange={handleUploadClick}
          required
        />
        <Button
          variant="contained"
          onClick={() => {
            if (isValid()) {
              handleClick(data);
              clearFormData();
            }
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CreateBlog;
