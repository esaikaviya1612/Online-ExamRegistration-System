import { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/exams")
      .then(res => setExams(res.data))
      .catch(err => console.log(err));
  }, []);

  const applyExam = async (examId) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        alert("Please login first");
        return;
      }

      await axios.post("http://127.0.0.1:5000/api/register", {
        studentId: user._id,
        examId: examId
      });

      alert("Exam Applied Successfully ✅");

    } catch (err) {
      console.log(err);
      alert("Apply failed ❌");
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Available Exams</h2>

      {exams.length === 0 ? (
        <p>No exams available</p>
      ) : (
        exams.map((e) => (
          <div className="exam-card" key={e._id}>
            <h3>{e.title}</h3>
            <p><b>Date:</b> {e.date}</p>
            <p><b>Duration:</b> {e.duration}</p>
            <p>{e.description}</p>

            <button onClick={() => applyExam(e._id)}>
              Apply
            </button>
          </div>
        ))
      )}
    </div>
  );
}


export default Dashboard;
