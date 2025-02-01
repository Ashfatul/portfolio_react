import { Link, useLocation } from "react-router-dom";
import "./assets/scss/header.scss";
import { IoMdMoon } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
import { useEffect, useState } from "react";
import ThemeChange from "./ThemeChange";
import { FaCode, FaHome, FaRegCommentAlt, FaRegUserCircle } from "react-icons/fa";

function Header() {
  const location = useLocation();
  const [darkTheme, setDarkTheme] = useState(
    JSON.parse(localStorage.getItem("darkTheme")) ?? true
  );
  const [changingTheme, setChangingTheme] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
    if (!darkTheme) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [darkTheme]);

  const handleThemeChange = () => {
    setDarkTheme(!darkTheme);
    setChangingTheme(true);

    setTimeout(() => {
      setChangingTheme(false);
    }, 1000);
  };
  return (
    <header>
      <div className="d-flex align-items-center justify-content-between container flex-column flex-xs-row gap-3">
        <div className="logo"><Link to="/">Ashfatul</Link></div>
        <nav className="d-flex align-items-center gap-2 gap-lg-4">
          <ul className="d-flex align-items-center gap-2 gap-lg-4 nav_menu">
            <li>
              <Link
                to="/"
                className={`${location.pathname === "/" ? "active" : ""}`}
              >
                <span className="icon"><FaHome /></span> <span className="text">Intro</span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${location.pathname === "/about" ? "active" : ""}`}
              >
                <span className="icon"><FaRegUserCircle /></span> <span className="text">About</span>
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`${
                  location.pathname === "/projects" ? "active" : ""
                }`}
              >
                <span className="icon"><FaCode /></span> <span className="text">Projects</span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`${
                  location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <span className="icon"><FaRegCommentAlt /></span> <span className="text">Contact</span>
              </Link>
            </li>
          </ul>
          <button
              className="theme_toggle"
              onClick={handleThemeChange}
              aria-label="Toggle Theme"
            >
              {darkTheme ? <MdOutlineWbSunny /> : <IoMdMoon />}
            </button>
        </nav>
      </div>

      {/* Render ThemeChange component if changingTheme is true */}
      {changingTheme && <ThemeChange />}
    </header>
  );
}

export default Header;
