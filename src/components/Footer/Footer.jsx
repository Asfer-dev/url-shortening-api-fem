import "./Footer.css";
import IconFacebook from "../../assets/images/icon-facebook.svg";
import IconTwitter from "../../assets/images/icon-twitter.svg";
import IconPinterest from "../../assets/images/icon-pinterest.svg";
import IconInsta from "../../assets/images/icon-instagram.svg";
const Footer = () => {
  const socialLinks = [IconFacebook, IconTwitter, IconPinterest, IconInsta];

  return (
    <div className="footer bg-neutral-900">
      <div className="footer-content container pad-block-700">
        <div className="footer-logo">
          <h1>Shortly</h1>
        </div>
        <div className="footer-links">
          <div className="links-features">
            <h2 className="link-heading mar-bottom-400">Features</h2>
            <ul role="list">
              <li>
                <a href="#">Link Shortening</a>
              </li>
              <li>
                <a href="#">Branded Links</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
            </ul>
          </div>
          <div className="links-resources">
            <h2 className="link-heading mar-bottom-400">Resources</h2>
            <ul role="list">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          <div className="links-resources">
            <h2 className="link-heading mar-bottom-400">Company</h2>
            <ul role="list">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="social-links">
          {socialLinks.map((linkItem) => (
            <a className="social-item" href="#" key={linkItem}>
              <img src={linkItem} alt="" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
