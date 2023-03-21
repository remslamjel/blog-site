import "./App.css";
import NavBar from "./components/NavBar";
import CreateBlog from "./components/CreateBlog";
import Blogs from "./components/Blogs";
import NoPage from "./components/NoPage";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// To fetch the data from local storage
const getLocalData = () => {
  let data = localStorage.getItem("blogs");

  return data ? JSON.parse(data) : [];
};

function App() {
  const [blog, setBlog] = useState(getLocalData());

  useEffect(() => {
    window.localStorage.setItem("blogs", JSON.stringify(blog));
  }, [blog]);

  // Submit Button click

  const handleClick = (data) => {
    if (data) {
      setBlog([...blog, data]);
      alert("Created Successfully");
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Blogs blog={blog} />} />
        <Route
          path="/createblog"
          element={<CreateBlog handleClick={handleClick} />}
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
