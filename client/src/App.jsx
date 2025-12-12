import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Education from "./pages/Education";
import Project from "./pages/Project";
import Services from "./pages/Services";
import EducationForm from "./pages/EducationForm";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import ProjectForm from "./pages/ProjectForm";
import Landing from "./pages/Landing.jsx";
import ContactList from "./pages/ContactList.jsx";

// Route Guards
import PrivateRoute from "./auth/PrivateRoute";
import AdminRoute from "./auth/AdminRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />   // public


        {/* Protected Section (only logged-in users can access) */}
        <Route
          path="/app"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="education" element={<Education />} />
          <Route path="project" element={<Project />} />
          <Route path="services" element={<Services />} />

          {/* ADMIN ONLY ROUTES */}
          <Route
            path="education/add"
            element={
              <AdminRoute>
                <EducationForm />
              </AdminRoute>
            }
          />

          <Route
            path="project/add"
            element={
              <AdminRoute>
                <ProjectForm />
              </AdminRoute>
            }
          />
          <Route 
            path="contacts" 
            element={
              <AdminRoute>
                <ContactList />
              </AdminRoute>
            } 
          />
          <Route
          path="messages"
          element={
            <AdminRoute>
              <ContactList />
            </AdminRoute>
          }
        />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
