import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    image: ""
  });

  // handle input typing
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/products/add", product);
      alert("Product Added Successfully!");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Failed to add product");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          value={product.name}
          placeholder="Product Name"
          onChange={handleChange}
        />
        <br/><br/>

        <input
          name="price"
          value={product.price}
          placeholder="Price"
          onChange={handleChange}
        />
        <br/><br/>

        <input
          name="category"
          value={product.category}
          placeholder="Category"
          onChange={handleChange}
        />
        <br/><br/>

        <input
          name="image"
          value={product.image}
          onChange={handleChange}
        />
        <br/><br/>

        <button>Add Product</button>

      </form>
    </div>
  );
}

export default AddProduct;
