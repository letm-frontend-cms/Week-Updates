import { useState } from 'react';
import './CourseDetails.css';

const CourseDetails = () => {
  const [selectedLesson, setSelectedLesson] = useState(0);

  const lessons = [
    { title: 'Django Fundamentals', content: 'Learn Django basics, MVT pattern, and project setup.' },
    { title: 'Models & ORM', content: 'Master Django ORM and database modeling.' },
    { title: 'Views & Templates', content: 'Build dynamic web pages with views and templates.' },
    { title: 'Django REST Framework', content: 'Create powerful REST APIs with DRF.' },
    { title: 'Deployment', content: 'Deploy Django applications to production.' },
  ];

  return (
    <div className="course-page">
      <h1>Django Course</h1>
      
      <div className="course-info">
        <p className="description">
          Master Django and build powerful web applications with Python. Learn ORM, REST APIs, and deployment.
        </p>
        
        <div className="details">
          <div className="detail-item">
            <strong>Duration:</strong> 9 weeks
          </div>
          <div className="detail-item">
            <strong>Price:</strong> $329
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
