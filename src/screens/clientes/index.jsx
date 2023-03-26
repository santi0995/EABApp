import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, } from "firebase/firestore";

import { ProductI } from "../../components/index";
import db from "../../constants/firebase/firebase";

const Clientes = ({ navigation }) => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "Clientes");
    const q = query(collectionRef);

    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      setClientes(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          fecha: doc.data().fecha,
          nombreCompleto: doc.data().nombreCompleto,
          telefono: doc.data().telefono,
          direccion: doc.data().direccion,
          articulos: doc.data().articulos,
          precio: doc.data().precio,
        }))
      );
    });
    return unsuscribe;
  }, []);

  return (
    <>
      {clientes.map((cliente) => (
        <ProductI key={cliente.id} {...cliente} database="Clientes" isCliente={true}/>
      ))}
    </>
  );
};

export default Clientes;
