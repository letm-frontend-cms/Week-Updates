import { loadRemote } from "@module-federation/runtime";
import { Footer, Header } from "ankit-utils";
import type { ComponentType, MouseEvent } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { RemoteApp } from "./components/RemoteApp";

const homeLoader = () =>
  loadRemote("home_page/HomePage") as Promise<{ default: ComponentType }>;

const aboutLoader = () =>
  loadRemote("about_us/AboutUs") as Promise<{ default: ComponentType }>;

const AppShell = () => {
  const navigate = useNavigate();

  const interceptLinks = (e: MouseEvent<HTMLDivElement>) => {
    const anchor = (e.target as Element).closest("a");
    const href = anchor?.getAttribute("href");
    if (href?.startsWith("/") && !href.startsWith("//")) {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <div className="app-shell" onClick={interceptLinks}>
      <Header />
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={<RemoteApp loader={homeLoader} remoteName="Home Page" />}
          />
          <Route
            path="/about"
            element={<RemoteApp loader={aboutLoader} remoteName="About Us" />}
          />
        </Routes>
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <AppShell />
  </BrowserRouter>
);

export default App;
