import { Button, Text, View } from "react-native";
import { deleteDoc, doc } from "firebase/firestore";

import db from "../../constants/firebase/firebase";
import { styles } from "./styles";

const ProductI = ({ id, tienda, tiendaD, articulo, cantidad, database, isCliente, fecha, nombreCompleto, telefono, direccion, articulos, precio }) => {
  const onDelete = () => {
    const docRef = doc(db, database, id);
    deleteDoc(docRef);
  };
  return (
    <>
    {
      isCliente ? 
      <View style={styles.container}>
      <Text style={styles.title}>Fecha: {fecha}</Text>
      <Text style={styles.title}>Nombre Completo: {nombreCompleto}</Text>
      <Text style={styles.title}>Teléfono:  {telefono}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.price}>Dirección {direccion}</Text>
        <Text style={styles.weight}>Artículos: {articulos}</Text>
        <Text style={styles.weight}>Precio: €{precio}</Text>
      </View>
      <Button title="Eliminar" onPress={onDelete} />
    </View> :
    <View style={styles.container}>
      <Text style={styles.title}>Tienda de Origen: {tienda}</Text>
      <Text style={styles.title}>Tienda de Destino: {tiendaD}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.price}>Artículo: {articulo}</Text>
        <Text style={styles.weight}>Cantidad: {cantidad}</Text>
      </View>
      <Button title="Eliminar" onPress={onDelete} />
    </View>
    }
    </>
  );
};

export default ProductI;
