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
    <div>
      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={e => setData({ ...data, name: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={e => setData({ ...data, email: e.target.value })}
      />

      <input
        placeholder="Password"
        onChange={e => setData({ ...data, password: e.target.value })}
      />

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default Register;