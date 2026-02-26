import { CourseDetails } from '@nx-monorepo/shared-ui';

const SpringBootCourseDetails = () => {
  const lessons = [
    { title: 'Spring Boot Basics', content: 'Learn Spring Boot fundamentals, annotations, and project structure.' },
    { title: 'REST APIs', content: 'Build RESTful web services with Spring Boot.' },
    { title: 'Data Access', content: 'Work with databases using Spring Data JPA.' },
    { title: 'Security', content: 'Implement authentication and authorization with Spring Security.' },
    { title: 'Microservices', content: 'Build scalable microservices architecture.' },
  ];

  return (
    <CourseDetails
      title="Spring Boot Course"
      description="Master Spring Boot and build enterprise-grade Java applications. Learn REST APIs, security, and microservices."
      duration="10 weeks"
      price="$349"
      level="Intermediate to Advanced"
      lessons={lessons}
    />
  );
};

export default SpringBootCourseDetails;
