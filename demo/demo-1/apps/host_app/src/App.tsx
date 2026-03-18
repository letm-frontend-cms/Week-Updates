import type { ComponentType } from "react";
import { lazy, Suspense } from "react";
import { loadRemote } from "@module-federation/runtime";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Header } from "header-ui-ankit";
import Footer from "footer-utils-ankit/src/Footer";
import { ErrorBoundary } from "./components/ErrorBoundary";

const HomePage = lazy(
  () => loadRemote("home_page/HomePage") as Promise<{ default: ComponentType }>,
);

const AboutUs = lazy(
  () => loadRemote("about_us/AboutUs") as Promise<{ default: ComponentType }>,
);

const RemoteLoadingFallback = () => (
  <div
    style={{
      padding: "32px",
      textAlign: "center",
      color: "#6b7280",
    }}
  >
    Loading Home Page...
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header />
        <nav
          style={{
            padding: "10px",
            textAlign: "center",
            background: "#f5f5f5",
            borderBottom: "1px solid #ddd",
          }}
        >
          <Link to="/" style={{ marginRight: "15px" }}>
            Home
          </Link>
          <Link to="/about">About Us</Link>
        </nav>
        <div className="content">
          <ErrorBoundary>
            <Suspense fallback={<RemoteLoadingFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUs />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </div>
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
