import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";   // 👈 import CSS

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/api/users/login",
        data
      );

      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/dashboard");

    } catch (err) {
      alert("Login Failed");
    }
  };

  return (
  <div className="login-page">
    <div className="login-container">

      <h2>🔐 Student Login</h2>
      <p>Login to access your exam dashboard</p>

      <input
        type="email"
        placeholder="Email Address"
        onChange={(e) =>
          setData({ ...data, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setData({ ...data, password: e.target.value })
        }
      />

      <button onClick={handleLogin}>
        Login
      </button>

      <div className="login-footer">
        <p>
          Don't have an account?{" "}
          <span
            className="register-link"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>

    </div>
  </div>
);
}

export default Login;