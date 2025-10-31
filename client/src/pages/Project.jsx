import "./Project.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

export default function Project() {
  const projects = [
    {
      title: "Portfolio Website",
      img: project1,
      desc: "A personal portfolio website built with React and Vite.",
    },
    {
      title: "Task Manager App",
      img: project2,
      desc: "A mobile app that helps users organize tasks efficiently.",
    },
    {
      title: "Data Dashboard",
      img: project3,
      desc: "A dashboard that visualizes real-time data with charts and graphs.",
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <img src={p.img} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}