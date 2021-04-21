import { useEffect, useState } from "react";
import { pixFirestore } from "../firebase";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsubAfterGettingDocs = pixFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        let allDocs = [];
        snapshot.forEach((doc) => {
          allDocs.push({ ...doc.data(), id: doc.id });
        });
        setDocs(allDocs);
      });

    return () => unsubAfterGettingDocs();
  }, [collection]);

  return { docs };
};

export default useFirestore;
