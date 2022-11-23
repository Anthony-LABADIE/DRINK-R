import "./MenuBurger.css";
import React, { useState } from "react";
import Modal from "./modal";

const MenuBurger = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="Menu-Burger">
      <button
        type="button"
        className="Burger-style"
        onClick={() => {
          setOpenModal(!openModal);
        }}
      >
        <span className={openModal ? "span-left" : "span-left-close"} />
        <span className={openModal ? "hide__midlespan" : "show__midlespan"} />
        <span className={openModal ? "span-right" : "span-right-close"} />
      </button>

      {openModal && <Modal />}
    </div>
  );
};

export default MenuBurger;
