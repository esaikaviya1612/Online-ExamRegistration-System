import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Exam Registration System</h1>
      <h2>Welcome to the Exam Registration System</h2>
       

      <button onClick={() => navigate("/login")}>Login</button>
      <br /><br />
      <button onClick={() => navigate("/register")}>Register</button>
    </div>
  );
}

export default Home;