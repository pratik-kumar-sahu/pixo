import React, { useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import "./Progress.scss";
import { motion } from "framer-motion";

function Progress({ file, setFile }) {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div
      className="progress"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
}

export default Progress;
