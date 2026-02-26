import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Home from './pages/Home';

const ReactCourse = lazy(() => import('react_course'));
const SpringBootCourse = lazy(() => import('spring_boot_course'));
const DjangoCourse = lazy(() => import('django_course'));
const CSharpCourse = lazy(() => import('csharp_course'));

const App = () => {
  return (
    <BrowserRouter>
      <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses/react" element={<ReactCourse />} />
            <Route path="/courses/spring-boot" element={<SpringBootCourse />} />
            <Route path="/courses/django" element={<DjangoCourse />} />
            <Route path="/courses/csharp" element={<CSharpCourse />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
