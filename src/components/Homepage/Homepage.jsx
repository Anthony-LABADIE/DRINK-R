import { useState } from "react";
import Navigation from "../Navigation";
import Titleblock from "../titleblock/Titleblock";
import MajorityBlock from "../MajorityBlock/MajorityBlock";
import Footer from "../Footer/Footer";
import "./Homepage.css";

const Homepage = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="homePage">
      <MajorityBlock show={show} setShow={setShow} />
      <div className={!show ? "homePage__container" : "faded"}>
        <Titleblock show={show} />
        <Navigation />

        <img
          className="cocktail__mainpage"
          src="/src/assets/images/pink_cocktailtrans.png"
          alt="pink cocktail"
        />
        <img
          className="mintleaves"
          src="/src/assets/images/Fresh-mint-leaves--on-transparent-background-PNG 16.48.26.png"
          alt="mintleaves"
        />
      </div>
      {!show && <Footer />}
    </div>
  );
};

export default Homepage;
