import { CourseDetails } from '@nx-monorepo/shared-ui';

const DjangoCourseDetails = () => {
  const lessons = [
    { title: 'Django Fundamentals', content: 'Learn Django basics, MVT pattern, and project setup.' },
    { title: 'Models & ORM', content: 'Master Django ORM and database modeling.' },
    { title: 'Views & Templates', content: 'Build dynamic web pages with views and templates.' },
    { title: 'Django REST Framework', content: 'Create powerful REST APIs with DRF.' },
    { title: 'Deployment', content: 'Deploy Django applications to production.' },
  ];

  return (
    <CourseDetails
      title="Django Course"
      description="Master Django and build powerful web applications with Python. Learn ORM, REST APIs, and deployment."
      duration="9 weeks"
      price="$329"
      level="Beginner to Advanced"
      lessons={lessons}
    />
  );
};

export default DjangoCourseDetails;
