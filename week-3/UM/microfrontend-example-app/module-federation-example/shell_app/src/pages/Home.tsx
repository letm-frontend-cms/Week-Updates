import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const courses = [
    { name: 'React', path: '/courses/react' },
    { name: 'Spring Boot', path: '/courses/spring-boot' },
    { name: 'Django', path: '/courses/django' },
    { name: 'C#', path: '/courses/csharp' },
  ];

  return (
    <div className="home">
      <h1>Welcome to Our Courses Platform</h1>
      <p>Choose from our selection of courses</p>
      <div className="courses-grid">
        {courses.map((course) => (
          <Link key={course.path} to={course.path} className="course-card">
            <h2>{course.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
