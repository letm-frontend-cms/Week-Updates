import { useState } from 'react';
import './CourseDetails.css';

const CourseDetails = () => {
  const [selectedLesson, setSelectedLesson] = useState(0);

  const lessons = [
    { title: 'Introduction to React', content: 'Learn the basics of React, JSX, and component structure.' },
    { title: 'React Hooks', content: 'Master useState, useEffect, and custom hooks.' },
    { title: 'State Management', content: 'Understand context API and state management patterns.' },
    { title: 'React Router', content: 'Build single-page applications with routing.' },
    { title: 'Advanced Patterns', content: 'Learn HOCs, render props, and compound components.' },
  ];

  return (
    <div className="course-page">
      <h1>React Course</h1>
      
      <div className="course-info">
        <p className="description">
          Master React from basics to advanced concepts. Build modern web applications with hooks, context, and best practices.
        </p>
        
        <div className="details">
          <div className="detail-item">
            <strong>Duration:</strong> 8 weeks
          </div>
          <div className="detail-item">
            <strong>Price:</strong> $299
          </div>
          <div className="detail-item">
            <strong>Level:</strong> Beginner to Advanced
          </div>
        </div>
        
        <button className="enroll-btn">Enroll Now</button>
      </div>

      <div className="lessons-section">
        <h2>Course Lessons</h2>
        <div className="lessons-container">
          <div className="lessons-list">
            {lessons.map((lesson, index) => (
              <div
                key={index}
                className={`lesson-item ${selectedLesson === index ? 'active' : ''}`}
                onClick={() => setSelectedLesson(index)}
              >
                <span className="lesson-number">{index + 1}</span>
                <span className="lesson-title">{lesson.title}</span>
              </div>
            ))}
          </div>
          
          <div className="lesson-content">
            <h3>{lessons[selectedLesson].title}</h3>
            <p>{lessons[selectedLesson].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
