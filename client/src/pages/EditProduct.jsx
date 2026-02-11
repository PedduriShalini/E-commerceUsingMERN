import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    image: "",
    price: ""
  });

  // load product
  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => {
        const found = res.data.find(p => p._id === id);
        if(found) setProduct(found);
      });
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put(
      `http://localhost:5000/api/products/update/${id}`,
      product
    );

    alert("Product Updated Successfully");
    navigate("/admin");
  };

  return (
    <div style={{padding:"40px"}}>
      <h2>Edit Product</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
        /><br/><br/>

        <input
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          required
        /><br/><br/>

        <input
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          required
        /><br/><br/>

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
        /><br/><br/>

        <button>Update Product</button>

      </form>
    </div>
  );
}

export default EditProduct;
