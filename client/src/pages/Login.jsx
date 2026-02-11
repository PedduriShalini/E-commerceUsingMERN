import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        user
      );

      // logged in
      localStorage.setItem("isLoggedIn", "true");

      // admin check
      if (res.data.role === "admin") {
        localStorage.setItem("isAdmin", "true");
        alert("Admin Login Successful");
        navigate("/admin");
      } else {
        alert("User Login Successful");
        navigate("/");
      }

    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{padding:"40px"}}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        /><br/><br/>

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        /><br/><br/>

        <button>Login</button>

      </form>
    </div>
  );
}

export default Login;
