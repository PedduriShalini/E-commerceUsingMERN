import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Admin() {

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  // -------- ADMIN PROTECTION --------
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");

    if (!isAdmin) {
      alert("You are not authorized. Please login as admin.");
      navigate("/login");
    }
  }, [navigate]);

  // -------- FETCH PRODUCTS --------
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (error) {
      console.log("Error loading products");
    }
  };

  // -------- DELETE PRODUCT --------
  const handleDelete = async (id) => {

    const confirmDelete = window.confirm("Are you sure you want to delete this product?");

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/products/delete/${id}`);

      alert("Product deleted successfully");

      fetchProducts();

    } catch (error) {
      alert("Delete failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>

      <h2>Admin Panel</h2>

      <br/>

      {/* ADD BUTTONS */}
      <div style={{ marginBottom: "20px" }}>
        <Link to="/admin/add-product">
          <button>Add Product</button>
        </Link>

        <Link to="/admin/add-category" style={{ marginLeft: "15px" }}>
          <button>Add Category</button>
        </Link>
      </div>

      <hr/>

      {/* PRODUCT LIST */}
      {products.map((p) => (
        <div
          key={p._id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            margin: "15px 0",
            borderRadius: "8px",
            background: "#f9f9f9"
          }}
        >

          <h3>{p.name}</h3>

          <p><b>Category:</b> {p.category}</p>
          <p><b>Price:</b> ₹{p.price}</p>

          <img
            src={p.image}
            alt={p.name}
            style={{ width: "120px", height: "120px", objectFit: "contain" }}
          />

          <br/><br/>

          <Link to={`/admin/edit-product/${p._id}`}>
            <button style={{ marginRight: "10px" }}>Edit</button>
          </Link>

          <button
            onClick={() => handleDelete(p._id)}
            style={{ background: "red", color: "white" }}
          >
            Delete
          </button>

        </div>
      ))}

    </div>
  );
}

export default Admin;
