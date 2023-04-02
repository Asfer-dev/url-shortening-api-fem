import BannerSection from "./components/BannerSection/BannerSection";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ShortenSection from "./components/ShortenSection/ShortenSection";
import StatSection from "./components/StatSection/StatSection";
const App = () => {
  return (
    <>
      <Header />
      <BannerSection />
      <ShortenSection />
      <StatSection />
      <CallToAction />
      <Footer />
    </>
  );
};

export default App;
