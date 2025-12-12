import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="landing-container">
      <h1>Welcome to My Portfolio</h1>
      
      <div className="landing-buttons">
        <Link to="/signin" className="landing-btn signin-btn">Sign In</Link>
        <Link to="/signup" className="landing-btn signup-btn">Sign Up</Link>
      </div>
    </div>
  );
}
