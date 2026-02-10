import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddCategory() {

  const navigate = useNavigate();

  const [category, setCategory] = useState({
    name: "",
    image: ""
  });

  const handleChange = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/categories/add", category);
      alert("Category added successfully!");
      navigate("/");
    } catch (error) {
      alert("Error adding category");
    }
  };

  return (
    <div style={{padding:"40px"}}>
      <h2>Add Category</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Category Name"
          onChange={handleChange}
        /><br/><br/>

        <input
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        /><br/><br/>

        <button>Add Category</button>

      </form>
    </div>
  );
}

export default AddCategory;
