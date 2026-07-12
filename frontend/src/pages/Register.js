import { useState } from "react";
import axios from "axios";
import "./Register.css";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async () => {
    try {
      console.log(data); // 🔍 check data

      await axios.post(
        "http://127.0.0.1:5000/api/users/register",
        data
      );

      alert("Registered Successfully");

    } catch (err) {
      console.log(err.response?.data);
      alert("Register Failed");
    }
  };

  return (
  <div className="register-page">
    <div className="register-container">

      <h2>📝 Student Registration</h2>
      <p>Create your account to register for exams</p>

      <input
        type="text"
        placeholder="Full Name"
        onChange={(e) =>
          setData({ ...data, name: e.target.value })
        }
      />

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

      <button onClick={handleSubmit}>
        Register
      </button>

    </div>
  </div>
);
}

export default Register;