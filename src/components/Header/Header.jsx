import "./Header.css";
import Logo from "../../assets/images/logo.svg";
import { useEffect, useState } from "react";
const Header = () => {
  const [navHidden, setNavHidden] = useState(true);

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    if (screenSize >= 800) {
      setNavHidden(false);
    }
  }, [screenSize]);

  return (
    <header className="container pad-block-500">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <nav style={{ display: navHidden && "none" }}>
        <ul className="nav-links" role="list">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
      </nav>
      <div className="nav-buttons ms-auto">
        <button className="btn btn-login">Log in</button>
        <button className="btn btn-signup">Sign up</button>
      </div>
      <button
        onClick={() => setNavHidden(!navHidden)}
        className="mobile-nav-toggle ms-auto"
      >
        toggle
      </button>
    </header>
  );
};

export default Header;
