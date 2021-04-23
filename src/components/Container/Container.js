import React from "react";
import "./Container.scss";
import useFirestore from "../../hooks/useFirestore";
import { motion } from "framer-motion";

function Container({ setSelectedImg }) {
  const { docs } = useFirestore("images");
  // console.log(docs);

  return (
    <div className="container">
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            className="container-wrap"
            whileHover={{ opacity: 1 }}
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt={doc.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
}

export default Container;
