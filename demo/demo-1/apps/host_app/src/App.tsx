import { loadRemote } from "@module-federation/runtime";
import { Footer, Header } from 'ankit-utils';
import type { ComponentType } from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
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
        <div className="content">
          <ErrorBoundary>
            <Suspense fallback={<RemoteLoadingFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/deals" element={<AboutUs />} />
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
