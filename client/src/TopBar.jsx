import { Link, useNavigate } from "react-router-dom";

function TopBar() {

  const navigate = useNavigate();

  // check login 
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // logout function
  const handleLogout = () => {
localStorage.removeItem("isLoggedIn");
localStorage.removeItem("isAdmin");
    alert("Logged out successfully");
    navigate("/login");
  };

  return(
    <div className="hero-section1">

      <span className="about-del">Free Shipping over 99</span>
      <span className="email">info@gmail.com</span>
      <span className="phone">(+800) 1234 5678 90</span>

      <div className="select-lang-curr">
        <select id="currency">
          <option>Indian</option>
          <option>Russian</option>
          <option>France</option>
          <option>United States</option>
        </select>

        <select id="languages">
          <option>English</option>
          <option>Telugu</option>
          <option>Hindi</option>
          <option>Russia</option>
        </select>
      </div>

      {/* AUTH SECTION */}
      <div className="auth-links">

        {!isLoggedIn ? (
          <>
            <Link to="/login" className="icon">👤 Log In</Link>
            <span className="divider"> | </span>
            <Link to="/signup" className="icon">Sign Up</Link>
          </>
        ) : (
          <>
            <span className="icon">👤 Welcome</span>
            <span className="divider"> | </span>
            <span className="icon logout" onClick={handleLogout}>Logout</span>
          </>
        )}

      </div>
   <div >
  <Link to="/admin" style={{ color: "white"}}>
    Admin
  </Link>
</div>

      

    </div>
  );
}

export default TopBar;
