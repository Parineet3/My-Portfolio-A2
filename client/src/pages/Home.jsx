import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <main>
        <h2 className="subtitle">Parineet Kaur</h2>
        <p className="welcome">
          Welcome to my portfolio! Here you can learn more about me, my journey,
          and my projects.
        </p>
        <p className="mission">
          "My mission is to create meaningful digital solutions that inspire,
          connect, and empower people."
        </p>
      </main>

      <div className="cta">
        <Link to="/about" className="btn">
          Learn More About Me
        </Link>
      </div>
    </div>
  );
}
