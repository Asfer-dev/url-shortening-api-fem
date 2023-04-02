import bannerImg from "../../assets/images/illustration-working.svg";
import Button from "../Button";
import "./BannerSection.css";
const BannerSection = () => {
  return (
    <div className="banner-section container pad-top-800">
      <div className="even-columns">
        <div className="flow">
          <h1 className="banner-heading | fs-banner fw-bold text-neutral-700">
            More than just shorter links
          </h1>
          <p className="subtext">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button />
        </div>
        <div>
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
