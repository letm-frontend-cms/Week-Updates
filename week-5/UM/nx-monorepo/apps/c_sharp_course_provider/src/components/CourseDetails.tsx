import { CourseDetails } from '@nx-monorepo/shared-ui';

const CSharpCourseDetails = () => {
  const lessons = [
    { title: 'C# Fundamentals', content: 'Learn C# syntax, data types, and object-oriented programming.' },
    { title: 'ASP.NET Core', content: 'Build web applications with ASP.NET Core framework.' },
    { title: 'Entity Framework', content: 'Master database operations with Entity Framework Core.' },
    { title: 'Web APIs', content: 'Create RESTful APIs with ASP.NET Core Web API.' },
    { title: 'Azure Deployment', content: 'Deploy applications to Microsoft Azure cloud.' },
  ];

  return (
    <CourseDetails
      title="C# Course"
      description="Master C# and .NET development. Build modern web applications, APIs, and cloud-native solutions."
      duration="10 weeks"
      price="$359"
      level="Beginner to Advanced"
      lessons={lessons}
    />
  );
};

export default CSharpCourseDetails;
