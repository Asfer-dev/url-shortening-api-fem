import "./StatSection.css";
import BrandRecogImg from "../../assets/images/icon-brand-recognition.svg";
import RecordsImg from "../../assets/images/icon-detailed-records.svg";
import CustomizeImg from "../../assets/images/icon-fully-customizable.svg";
const StatSection = () => {
  const features = [
    {
      id: 1,
      img: BrandRecogImg,
      heading: "Brand Recognition",
      content:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    },
    {
      id: 2,
      img: RecordsImg,
      heading: "Detailed Records",
      content:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      id: 3,
      img: CustomizeImg,
      heading: "Fully Customizable",
      content:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

  const Feature = ({ heading, content, img }) => {
    return (
      <div className="feature flow">
        <div className="feature-image">
          <img src={img} alt="feature-illustration" />
        </div>
        <h2 className="fs-subheading text-neutral-700 mar-top-800">
          {heading}
        </h2>
        <p>{content}</p>
      </div>
    );
  };

  return (
    <div className="stat-section container">
      <h1 className="heading fs-heading text-neutral-700 mar-bottom-400">
        Advanced Statistics
      </h1>
      <p className="subtext mar-x-auto">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      <div className="features-container pad-block-800">
        {features.map((feature) => (
          <Feature {...feature} key={feature.id} />
        ))}
      </div>
    </div>
  );
};

export default StatSection;
