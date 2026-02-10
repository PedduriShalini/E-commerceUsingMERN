import { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";

function Categories({ onCategoryClick }) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCategories(res.data);
    };

    fetchCategories();
  }, []);

  return (
    <>
      <h2 style={{ padding: "20px" }}>Shop by Categories</h2>

      <div className="category-items">
        {categories.map((cat) => (
          <CategoryCard
            key={cat._id}
            category={cat}
            onClick={onCategoryClick}
          />
        ))}
      </div>
    </>
  );
}

export default Categories;
