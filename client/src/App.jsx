import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Education from "./pages/Education";
import Project from "./pages/Project";
import Services from "./pages/Services";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="education" element={<Education />} />
          <Route path="project" element={<Project />} />
          <Route path="services" element={<Services />} />
          
          {/* Add other pages here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
