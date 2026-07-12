import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      <header className="header">
        <div className="logo">
          🎓 Exam Portal
        </div>

        <nav>
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </nav>
      </header>

      <section className="hero">

        <h1>Online Exam Registration System</h1>

        <p>
          Register for university examinations quickly and securely.
        </p>

        <div className="buttons">
          <button onClick={() => navigate("/login")}>
            Login
          </button>

          <button onClick={() => navigate("/register")}>
            Register
          </button>
        </div>

      </section>

    </div>
  );
}

export default Home;