import { useState } from 'react';
import './CourseDetails.css';

interface Lesson {
  title: string;
  content: string;
}

interface CourseDetailsProps {
  title: string;
  description: string;
  duration: string;
  price: string;
  level: string;
  lessons: Lesson[];
}

const CourseDetails = ({ title, description, duration, price, level, lessons }: CourseDetailsProps) => {
  const [selectedLesson, setSelectedLesson] = useState(0);

  return (
    <div className="course-page">
      <h1>{title}</h1>
      
      <div className="course-info">
        <p className="description">{description}</p>
        
        <div className="details">
          <div className="detail-item">
            <strong>Duration:</strong> {duration}
          </div>
          <div className="detail-item">
            <strong>Price:</strong> {price}
          </div>
          <div className="detail-item">
            <strong>Level:</strong> {level}
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
