import React, { useState } from "react";
import TextToSpeech from "react-text-to-speech";
// import SpeechRecognition, { useSpeechRecognition,} from "react-speech-recognition";
import "./questionAnswering.css";
import { useLocation } from "react-router-dom";
import questions from "./questions.js";

function QuestionAnswering() {

  // Get the subject name from URL
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const subject = searchParams.get("subject");


  let sub;
  if (subject === "CN") sub = "Computer Network";
  else if (subject === "OS") sub = "Operating System";
  else if (subject === "OOPS") sub = "Object Oriented Programming";
  else if (subject === "DBMS") sub = "Database Management System";
  else if (subject === "DSA") sub = "Data Structures and Algorithms";


  const [questionIndex, setQuestionIndex] = useState(0);
  // const [question, setQuestion] = useState(`What is ${sub}?`);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [fetching, setFetching] = useState(false);


  const currentQuestion = questions[subject][questionIndex];

  const handleSubmitAnswer = async (e) => {
    e.preventDefault();

    try {
      setFetching(true);
      const response = await fetch("https://prep-gpt-eight.vercel.app/api/quesans/feed", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answer: answer, question: currentQuestion }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setFeedback(data.data);
      setQuestionIndex(
        (prevIndex) => (prevIndex + 1) % questions[subject].length
      );
      setAnswer("");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setFetching(false);
    }

    // handleSubmit();
  };

  // Trigger handleSubmit whenever answer changes
  // useEffect(() => {
  //   handleSubmit();
  // }, [feedback]);

  // Speech to text

  // const {
  //   transcript,
  //   listening,
  // } = useSpeechRecognition();

  // useEffect(() => {
  //   if (transcript) {
  //     setAnswer(transcript);
  //   }
  // }, [transcript]);

  return (
    <div className="home">
      <div className="container">
        <h1>prepGpt</h1>
        <input
          type="text"
          placeholder={`What is ${sub} ?`}
          value={currentQuestion}
          readOnly
        />

        {/* <div>
          <span>Microphone: {listening ? "on" : "off"}</span>
          <button className="speak-answer-btn" onClick={() => SpeechRecognition.startListening({ continuous: true })}>Start</button>
          <button className="stop-answer-btn" onClick={() => SpeechRecognition.stopListening()}>Stop</button>
        </div> */}

        <form onSubmit={handleSubmitAnswer}>
          <textarea
            rows={5}
            cols={89}
            placeholder={`Write your answer...`}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <button type="submit">Submit Answer</button>
        </form>

        {fetching && (
          <div>
            <p>Fetching the answer...</p>
          </div>
        )}

        {feedback && !fetching && (
          <div>
            <h2>Improvements & Feedback:</h2>
            <p>{feedback}</p>
            {/* Add TextToSpeech component */}
            <TextToSpeech
              text={feedback}
              voice={{
                lang: "en-US",
                name: "Google US English",
                rate: 1.5,
                pitch: 1,
                volume: 1,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionAnswering;
