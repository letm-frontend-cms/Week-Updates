import { loadRemote } from "@module-federation/runtime";
import { Footer, Header } from "ankit-utils";
import type { ComponentType } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { RemoteApp } from "./components/RemoteApp";

const homeLoader = () =>
  loadRemote("home_page/HomePage") as Promise<{ default: ComponentType }>;

const aboutLoader = () =>
  loadRemote("about_us/AboutUs") as Promise<{ default: ComponentType }>;

const App = () => (
  <BrowserRouter>
    <div className="app-shell">
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
  </BrowserRouter>
);

export default App;
