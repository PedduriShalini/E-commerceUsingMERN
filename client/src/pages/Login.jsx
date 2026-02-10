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
      await axios.post(
        "http://localhost:5000/api/auth/login",
        user
      );

      localStorage.setItem("isLoggedIn", "true");

      alert("Login Successful");
      navigate("/");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{padding:"40px"}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" onChange={handleChange} /><br/><br/>
        <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br/><br/>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
