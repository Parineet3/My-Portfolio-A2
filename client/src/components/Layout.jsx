import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Layout.css";

export default function Layout() {
  const navigate = useNavigate();
  const jwt = JSON.parse(localStorage.getItem("jwt"));
  const isLoggedIn = !!jwt;
  const isAdmin = jwt?.user?.role === "admin";

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    navigate("/signin");
  };

  return (
    <div className="layout">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <h1 className="portfolio-title">My Portfolio</h1>

        <hr className="header-divider" />

        <div className="header-top">
          <nav className="navbar">
            <ul>
              {isLoggedIn && (
                <>
                  <Link to="/app/">Home</Link>
                  <Link to="/app/about">About</Link>
                  <Link to="/app/education">Education</Link>
                  <Link to="/app/project">Projects</Link>
                  <Link to="/app/services">Services</Link>
                  <Link to="/app/contact">Contact</Link>

                  {/* 🔥 Admin-only link */}
                  {isAdmin && <Link to="/app/messages">Messages</Link>}
                  
                </>
              )}

              {/* 🔐 If NOT logged in → show sign buttons */}
              {!isLoggedIn && (
                <>
                  <Link to="/signin">Sign In</Link>
                  <Link to="/signup">Sign Up</Link>
                </>
              )}

              {/* 🚪 If logged in → show sign OUT */}
              {isLoggedIn && (
                <button
                  onClick={handleSignOut}
                  className="signout-btn"
                >
                  Sign Out
                </button>
              )}
            </ul>
          </nav>
        </div>
      </header>

      {/* Where pages load */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
