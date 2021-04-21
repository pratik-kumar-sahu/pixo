import React from "react";
import "./Modal.scss";
import { motion } from "framer-motion";

function Modal({ selectedImg, setSelectedImg }) {
  const handleClick = (event) => {
    if (event.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <span>
        <motion.img
          src={selectedImg}
          alt="selected-pic"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
        />
      </span>
    </motion.div>
  );
}

export default Modal;
