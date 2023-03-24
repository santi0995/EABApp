import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";

import { ProductI } from "../../components/index";
import db from "../../constants/firebase/firebase";

const Indirectos = ({ navigation }) => {
  const [traspasos, setTraspasos] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "Indirectos");
    const q = query(collectionRef);

    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      setTraspasos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          tienda: doc.data().tienda,
          articulo: doc.data().articulo,
          cantidad: doc.data().cantidad,
        }))
      );
    });
    return unsuscribe;
  }, []);

  return (
    <>
      {traspasos.map((traspaso) => (
        <ProductI key={traspaso.id} {...traspaso} database="Indirectos" />
      ))}
    </>
  );
};

export default Indirectos;