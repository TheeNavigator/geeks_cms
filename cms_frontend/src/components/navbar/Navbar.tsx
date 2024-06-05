import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import geeksLogo from "../../assets/Geeks4Learning-Logo-with-Slogan.png";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [togglerIcon, setTogglerIcon] = useState(<i className="bi bi-list"></i>); // Initial icon

  useEffect(() => {
    const titleMap = {
      "/": "Home",
      "/my-courses": "My Courses",
      "/notifications": "Notifications",
      "/dashboard": "Dashboard",
      "/site-admin": "Site Admin",
    };
    document.title = titleMap[location.pathname] || "Geeks4Learning";
  }, [location.pathname]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setTogglerIcon(isMobileMenuOpen ? <i className="bi bi-list"></i> : <i className="bi bi-x-lg"></i>); // Change icon on toggle
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <div className="container-fluid">
        <div className="nav-brand">
          <a href="/">
            <img src={geeksLogo} alt="" />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileMenuToggle}
        >
          {togglerIcon} {/* Display the toggler icon */}
        </button>
        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? "show" : ""}`}>
          <div className="navbar-nav">
            <NavLink
              to="/"
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/my-courses"
              className={`nav-link ${location.pathname === "/my-courses" ? "active" : ""}`}
            >
              My Courses
            </NavLink>
            <NavLink
              to="/notifications"
              className={`nav-link ${location.pathname === "/notifications" ? "active" : ""}`}
            >
              Notifications
            </NavLink>
            <NavLink
              to="/dashboard"
              className={`nav-link ${location.pathname === "/dashboard" ? "active" : ""}`}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/site-admin"
              className={`nav-link ${location.pathname === "/site-admin" ? "active" : ""}`}
            >
              Site Admin
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
