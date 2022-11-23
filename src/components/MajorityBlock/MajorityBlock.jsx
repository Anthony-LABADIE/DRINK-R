import PropTypes from "prop-types";
import "./MajorityBlock.css";

const MajorityBlock = ({ show, setShow }) => {
  return (
    <div className={show ? "MajorityBlock__container" : "hide"}>
      <p className="MajorityBlock__para">Are you 18 years or older ?</p>

      <div className="MajorityBlock__buttons">
        <button
          type="button"
          onClick={() => setShow(false)}
          className="MajorityBlock__button-yes btn"
        >
          YES
        </button>
        <a
          href="https://www.disneyplus.com/fr-fr"
          type="button"
          className="MajorityBlock__button-no btn"
        >
          NO
        </a>
      </div>
    </div>
  );
};
MajorityBlock.propTypes = {
  setShow: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
export default MajorityBlock;
