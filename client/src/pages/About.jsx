import "./About.css";
import resumePDF from "../assets/Parineet Kaur.pdf";

export default function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <img src="/src/assets/me.jpg" alt="My Portrait" className="about-image" />
      <p className="about-description">Hello, my name is Parineet Kaur. I am a passionate software developer with interests in web development.</p>
      <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="about-resume-link">Download My Resume</a>
    </div>
  );
}