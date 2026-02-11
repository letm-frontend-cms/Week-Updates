import { useState } from 'react';
import './CourseDetails.css';

const CourseDetails = () => {
  const [selectedLesson, setSelectedLesson] = useState(0);

  const lessons = [
    { title: 'Spring Boot Basics', content: 'Learn Spring Boot fundamentals, annotations, and project structure.' },
    { title: 'REST APIs', content: 'Build RESTful web services with Spring Boot.' },
    { title: 'Data Access', content: 'Work with databases using Spring Data JPA.' },
    { title: 'Security', content: 'Implement authentication and authorization with Spring Security.' },
    { title: 'Microservices', content: 'Build scalable microservices architecture.' },
  ];

  return (
    <div className="course-page">
      <h1>Spring Boot Course</h1>
      
      <div className="course-info">
        <p className="description">
          Master Spring Boot and build enterprise-grade Java applications. Learn REST APIs, security, and microservices.
        </p>
        
        <div className="details">
          <div className="detail-item">
            <strong>Duration:</strong> 10 weeks
          </div>
          <div className="detail-item">
            <strong>Price:</strong> $349
          </div>
          <div className="detail-item">
            <strong>Level:</strong> Intermediate to Advanced
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
