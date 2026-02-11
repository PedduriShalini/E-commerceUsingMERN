import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import TopBar from "./TopBar";
import NavBar from "./NavBar";
import Offer from "./Offer";
import Categories from "./components/Categories";
import CategoryProducts from "./components/CategoryProducts";
import Cart from "./components/Cart";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

// PAGES
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import AddCategory from "./pages/AddCategory";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

import "./App.css";

function App() {

  // ---------- CATEGORY FILTER ----------
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // ---------- PRODUCTS FROM DATABASE ----------
  const [products, setProducts] = useState([]);

  // FETCH PRODUCTS FROM BACKEND
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // ---------- FILTER PRODUCTS ----------
  const filteredProducts =
    selectedCategory === "ALL"
      ? products
      : products.filter(
          (item) =>
            item.category &&
            item.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <>
      {/* ALWAYS VISIBLE */}
      <TopBar />
      <NavBar />

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Offer />
              <Categories onCategoryClick={setSelectedCategory} />
              <CategoryProducts products={filteredProducts} />
              <Testimonials />
              <Footer />
            </>
          }
        />

        {/* CART */}
        <Route path="/cart" element={<Cart />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ADMIN PANEL */}
        <Route path="/admin" element={<Admin />} />

        {/* ADMIN FEATURES */}
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/edit-product/:id" element={<EditProduct />} />
        <Route path="/admin/add-category" element={<AddCategory />} />

      </Routes>
    </>
  );
}

export default App;
