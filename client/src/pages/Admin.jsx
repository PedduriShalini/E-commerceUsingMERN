import { useState } from "react";
import { Link } from "react-router-dom";

function Admin() {

  // store login input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // check if admin already logged in
  const isAdmin = localStorage.getItem("admin");

  // when login button clicked
  const handleLogin = (e) => {
    e.preventDefault();

    // simple fixed admin credentials
    if (username === "-----" && password === "-----") {
      localStorage.setItem("admin", "yes");
      alert("Admin Login Successful");
      window.location.reload();
    } else {
      alert("Wrong username or password");
    }
  };

  // logout
  const handleLogout = () => {
    localStorage.removeItem("admin");
    window.location.reload();
  };

  // ----------------------
  // IF ADMIN NOT LOGGED IN
  // ----------------------
  if (!isAdmin) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>Admin Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br /><br />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />

          <button>Login</button>
        </form>
      </div>
    );
  }

  // ----------------------
  // IF ADMIN LOGGED IN
  // ----------------------
  return (
    <div style={{ padding: "40px" }}>
      <h2>Admin Dashboard</h2>

      <br />

      <Link to="/admin/add-product">
        <button>Add Product</button>
      </Link>

      <br /><br />

      <Link to="/admin/add-category">
        <button>Add Category</button>
      </Link>

      <br /><br />

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Admin;
