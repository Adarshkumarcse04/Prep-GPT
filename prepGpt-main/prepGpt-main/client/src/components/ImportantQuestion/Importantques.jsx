import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Importantques.css";
import questionsAndAnswers from "./questionsAndAnswersData"; // Import the data

function Importantques() {
    
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const subject = searchParams.get("subject");


  const subjectsQuestionsAndAnswers = questionsAndAnswers[subject] || [];

  return (
    <div className="container">
      <h1 id="h">Ten Most Important Questions For <span>{subject}</span></h1>
      <ul className="question-list">
        {subjectsQuestionsAndAnswers.map((item, index) => (
          <li key={index} className="question-item">
            <p><strong>Question {index + 1}:</strong> {item.question}</p>
            <p><strong>Answer:</strong> {item.answer}</p>
          </li>
        ))}
      </ul>
      <div className="start-practice-button">
        <Link to={`/quesans?subject=${subject}`}>
          <button>Learn More</button>
        </Link>
      </div>
    </div>
  );
}

export default Importantques;
