import { Routes as Router, Route } from "react-router-dom";
import Home from "../pages/Home";
import Resume from "../pages/Resume";
import AboutMe from "../pages/AboutMe";

function Routes() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/about-me" element={<AboutMe />} />
    </Router>
  );
}

export default Routes;
