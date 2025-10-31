import "./Services.css";
import webDevImg from "../assets/webdev.png";
import apiImg from "../assets/api.png";
import dbImg from "../assets/database.png";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      img: webDevImg,
      desc: "Responsive and modern websites using React, JavaScript, HTML, and CSS.",
    },
    {
      title: "API Integration",
      img: apiImg,
      desc: "Connecting applications to external APIs for real-time data.",
    },
    {
      title: "Database Handling",
      img: dbImg,
      desc: "Working with JSON and basic SQL for structured data management.",
    },
  ];

  return (
    <div className="services-container">
      <h2 className="services-title">Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
