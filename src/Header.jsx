import { Link, useLocation } from "react-router-dom";
import "./assets/scss/header.scss";
import { IoMdMoon } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
import { useEffect, useState } from "react";
import ThemeChange from "./ThemeChange";

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
    }, 1000); // Reset `changingTheme` after 3 seconds
  };

  return (
    <header>
      <div className="d-flex align-items-center justify-content-between container">
        <div className="logo"><Link to="/">Ashfatul</Link></div>
        <nav>
          <ul className="d-flex align-items-center gap-4">
            <li>
              <Link
                to="/"
                className={`${location.pathname === "/" ? "active" : ""}`}
              >
                Intro
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${location.pathname === "/about" ? "active" : ""}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`${
                  location.pathname === "/projects" ? "active" : ""
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`${
                  location.pathname === "/contact" ? "active" : ""
                }`}
              >
                Contact
              </Link>
            </li>
            <button
              className="theme_toggle"
              onClick={handleThemeChange}
              aria-label="Toggle Theme"
            >
              {darkTheme ? <MdOutlineWbSunny /> : <IoMdMoon />}
            </button>
          </ul>
        </nav>
      </div>

      {/* Render ThemeChange component if changingTheme is true */}
      {changingTheme && <ThemeChange />}
    </header>
  );
}

export default Header;
