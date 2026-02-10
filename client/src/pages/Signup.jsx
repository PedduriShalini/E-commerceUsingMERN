import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/register", user);
      alert("Account created! Now login");
      navigate("/login");
    } catch (err) {
      alert("User already exists");
    }
  };

  return (
    <div style={{padding:"40px"}}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} /><br/><br/>
        <input name="email" placeholder="Email" onChange={handleChange} /><br/><br/>
        <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br/><br/>
        <button>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
