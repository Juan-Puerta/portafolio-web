import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Resume from "../pages/Resume/Resume";
import Contact from "../pages/Contact/Contact";

const routing = (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<MainPage />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default routing;
