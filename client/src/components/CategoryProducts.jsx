import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CategoryProducts.css";

function CategoryProducts({ products }) {
  const { addToCart } = useContext(CartContext);

  if (!products || products.length === 0) {
    return <p style={{ padding: "20px" }}>No products found</p>;
  }

  return (
    <div className="products-page">
      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />

            <p className="product-name">{product.name}</p>
            <p>₹{product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryProducts;
