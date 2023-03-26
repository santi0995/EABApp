import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, } from "firebase/firestore";

import { ProductI } from "../index";
import db from "../../constants/firebase/firebase";

const Articulos = ({ navigation }) => {
  const [traspasos, setTraspasos] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "Articulos");
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

export default Articulos;
