import { useState } from "react";
import Navigation from "../Navigation";
import Titleblock from "../titleblock/Titleblock";
import MajorityBlock from "../MajorityBlock/MajorityBlock";
import Footer from "../Footer/Footer";
import PinkCocktailtrans from "../../assets/images/pink_cocktailtrans.png";
import Mint from "../../assets/images/Fresh-mint-leaves--on-transparent-background-PNG 16.48.26.png";
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
          src={PinkCocktailtrans}
          alt="pink cocktail"
        />
        <img className="mintleaves" src={Mint} alt="mintleaves" />
      </div>
      {!show && <Footer />}
    </div>
  );
};

export default Homepage;
