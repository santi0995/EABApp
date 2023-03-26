import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, } from "firebase/firestore";

import { ProductI } from "../../components/index";
import db from "../../constants/firebase/firebase";

const Directos = ({ navigation }) => {
  const [traspasos, setTraspasos] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "Directos");
    const q = query(collectionRef);

    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      setTraspasos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          tienda: doc.data().tienda,
          tiendaD: doc.data().tiendaD,
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
        <ProductI key={traspaso.id} {...traspaso} database="Directos" />
      ))}
    </>
  );
};

export default Directos;
