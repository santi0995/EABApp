import { Button, KeyboardAvoidingView, Platform, ScrollView, TextInput, View } from "react-native";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

import db from "../../constants/firebase/firebase";
import { styles } from "./styles";

const CreateTraspaso = (props) => {
  const initialState = {
    tienda: "",
    articulo: "",
    cantidad: 0,
  };

  const [state, setState] = useState(initialState);

  const handleChangeText = (text, value) => {
    setState({ ...state, [text]: value });
  };

  const createNewTraspaso = async () => {
    if (state.tienda === "" || state.articulo === "" || state.cantidad === "") {
      alert("Todos los campos deben estar completos");
    } else {
      try {
        await addDoc(collection(db, "Directos"), {
          tienda: state.tienda,
          articulo: state.articulo,
          cantidad: state.cantidad,
        });
        props.navigation.navigate("Products");
        alert("Saved");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === "android" ? "height" : "padding"}
      enabled>
      <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Tienda de origen"
            onChangeText={(value) => handleChangeText("tienda", value)}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Articulo"
            onChangeText={(value) => handleChangeText("articulo", value)}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Cantidad"
            onChangeText={(value) => handleChangeText("cantidad", value)}
          />
        </View>
        <View>
          <Button title="Guardar" onPress={() => createNewTraspaso()} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateTraspaso;
