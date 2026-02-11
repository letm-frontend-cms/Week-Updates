import { useState } from 'react';
import './CourseDetails.css';

const CourseDetails = () => {
  const [selectedLesson, setSelectedLesson] = useState(0);

  const lessons = [
    { title: 'C# Fundamentals', content: 'Learn C# syntax, data types, and object-oriented programming.' },
    { title: 'ASP.NET Core', content: 'Build web applications with ASP.NET Core framework.' },
    { title: 'Entity Framework', content: 'Master database operations with Entity Framework Core.' },
    { title: 'Web APIs', content: 'Create RESTful APIs with ASP.NET Core Web API.' },
    { title: 'Azure Deployment', content: 'Deploy applications to Microsoft Azure cloud.' },
  ];

  return (
    <div className="course-page">
      <h1>C# Course</h1>
      
      <div className="course-info">
        <p className="description">
          Master C# and .NET development. Build modern web applications, APIs, and cloud-native solutions.
        </p>
        
        <div className="details">
          <div className="detail-item">
            <strong>Duration:</strong> 10 weeks
          </div>
          <div className="detail-item">
            <strong>Price:</strong> $359
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
