import { Button, Text, View } from "react-native";
import { deleteDoc, doc } from "firebase/firestore";

import db from "../../constants/firebase/firebase";
import { styles } from "./styles";

const ProductI = ({ id, tienda, articulo, cantidad, database }) => {
  const onDelete = () => {
    const docRef = doc(db, database, id);
    deleteDoc(docRef);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tienda}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.price}>{articulo}</Text>
        <Text style={styles.weight}>{cantidad}</Text>
      </View>
      <Button title="Eliminar" onPress={onDelete} />
    </View>
  );
};

export default ProductI;
