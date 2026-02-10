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

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import AddCategory from "./pages/AddCategory";
import AddProduct from "./pages/AddProduct";


import "./App.css";

function App() {

  // category selection
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // products from MongoDB
  const [products, setProducts] = useState([]);

  // fetch products from backend
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

  // filter by category
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
      {/* Always visible */}
      <TopBar />
      <NavBar />

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Offer />

              {/* category buttons */}
              <Categories onCategoryClick={setSelectedCategory} />

              {/* products from DB */}
              <CategoryProducts products={filteredProducts} />

              <Testimonials />
              <Footer />
            </>
          }
        />

        {/* CART PAGE */}
        <Route path="/cart" element={<Cart />} />

        {/* LOGIN / SIGNUP */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/add-category" element={<AddCategory />} />
        <Route path="/admin/add-product" element={<AddProduct />} />


      </Routes>
    </>
  );
}

export default App;
