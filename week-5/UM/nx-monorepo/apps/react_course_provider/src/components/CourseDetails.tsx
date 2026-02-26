import { CourseDetails } from '@nx-monorepo/shared-ui';

const ReactCourseDetails = () => {
  const lessons = [
    { title: 'Introduction to React', content: 'Learn the basics of React, JSX, and component structure.' },
    { title: 'React Hooks', content: 'Master useState, useEffect, and custom hooks.' },
    { title: 'State Management', content: 'Understand context API and state management patterns.' },
    { title: 'React Router', content: 'Build single-page applications with routing.' },
    { title: 'Advanced Patterns', content: 'Learn HOCs, render props, and compound components.' },
  ];

  return (
    <CourseDetails
      title="React Course"
      description="Master React from basics to advanced concepts. Build modern web applications with hooks, context, and best practices."
      duration="8 weeks"
      price="$299"
      level="Beginner to Advanced"
      lessons={lessons}
    />
  );
};

export default ReactCourseDetails;
