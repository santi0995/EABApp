import { Button, ScrollView, Text, TextInput, View } from "react-native";
import { addDoc, collection } from "firebase/firestore";

import Counter from "../../components/contador";
import { ImageSelector } from "../../components";
import colors from "../../utils/colors";
import db from "../../constants/firebase/firebase";
import { styles } from "./styles";
import { useState } from "react";

const NewPlace = ({ navigation, props }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const initialState = {
    tienda: "",
    image: "",
  };

  const [state, setState] = useState(initialState);

  const handleChangeText = (text, value) => {
    setState({ ...state, [text]: value });
  };
  const onHandleImageSelect = (imageUrl) => {
    setImage(imageUrl);
  };

  const createNewArticle = async () => {
    if (state.title === "" || state.image === "") {
      alert("Todos los campos deben estar completos");
    } else {
      try {
        await addDoc(collection(db, "Articulos"), {
          tienda: state.title,
          image: state.image,
        });
        props.navigation.navigate("NewPlace");
        alert("Guardado con éxito");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Artículo</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre del artículo"
          onChangeText={handleChangeText}
        />
        <ImageSelector onImage={onHandleImageSelect} />
        <Counter />
        <Button
          disabled={title.length === 0}
          color={colors.primary}
          title="Guardar"
          onPress={createNewArticle}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
