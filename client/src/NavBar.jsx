import { Link } from "react-router-dom";
function NavBar(){
  return(
      <div className="hero-section3">
        <div className="right">
        <select id="categories">
          <option selected hidden disabled >Shop By Categories</option>
          <option>Dairy Items</option>
          <option>Our Store</option>
          <option>Best Selling</option>
          <option>Fresh Bakery</option>
          <option>Products</option>
          <option>Snacks</option>
          <option>Juices & Drinks</option>
          <option>Nuts & Seeds</option>
        </select>
        </div>
        <div className="center">
          <div className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Our Store</li>
            <li>Nuts & Seeds</li>
            <li>Contact</li>
            <li>Blogs</li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>

          </div>
        </div>
        <div className="right">
         <span> Top Offers</span>
        </div>
      </div>
  );
}
export default NavBar;