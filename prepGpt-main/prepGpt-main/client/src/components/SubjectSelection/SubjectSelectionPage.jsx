import React from "react";
import { Link } from "react-router-dom";
import "./SubjectSelectionPage.css"; // Import the CSS file

function SubjectSelectionPage() {
  return (
    <div className="container">
      <h1>Select a Subject You want to practice!</h1>
      <div className="subject-buttons">
        <Link to="/impques?subject=CN">
          <button className="subject-button">
            <img
              src="https://img.freepik.com/free-vector/online-world-concept-illustration_114360-1092.jpg?size=626&ext=jpg"
              alt="Computer Networks"
              className="subject-image"
            />
            Computer Networks
          </button>
        </Link>

        <Link to="/impques?subject=OS">
          <button className="subject-button">
            <img
              src="https://t3.ftcdn.net/jpg/05/07/82/50/240_F_507825032_dnTexiOy603F5DpcO5wli9FXvMn1OcPR.jpg"
              alt="Operating Systems"
              className="subject-image"
            />
            Operating Systems
          </button>
        </Link>
        <Link to="/impques?subject=OOPS">
          <button className="subject-button">
            <img
              src="https://static.javatpoint.com/difference/images/procedural-programming-vs-object-oriented-programming.png"
              alt="Object-Oriented Programming"
              className="subject-image"
            />
            Object-Oriented Programming
          </button>
        </Link>
        <Link to="/impques?subject=DBMS">
          <button className="subject-button">
            <img
              src="https://media.licdn.com/dms/image/C4D12AQEEjtQWY08UoQ/article-cover_image-shrink_600_2000/0/1596301781307?e=2147483647&v=beta&t=s5do-NX7s8nT2qOax7-z5qPiYMUsTEDfoJ-TvgHDcmE"
              alt="Database Management Systems"
              className="subject-image"
            />
            Database Management Systems
          </button>
        </Link>
        <Link to="/impques?subject=DSA">
          <button className="subject-button">
            <img
              src="https://miro.medium.com/v2/resize:fit:1358/1*4ZcW5tSdizlbtDQyVpRTuA.jpeg"
              alt="Data Structures and Algorithms"
              className="subject-image"
            />
            Data Structures and Algorithms
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SubjectSelectionPage;
