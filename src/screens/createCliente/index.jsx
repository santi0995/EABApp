import { Button, KeyboardAvoidingView, Platform, ScrollView, TextInput, View } from "react-native";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

import db from "../../constants/firebase/firebase";
import { styles } from "./styles";

const CreateCliente = (props) => {
  const initialState = {
    fecha: "",
    nombreCompleto: "",
    telefono: "",
    direccion: "",
    articulos: "",
    precio: 0,
  };

  const [state, setState] = useState(initialState);

  const handleChangeText = (text, value) => {
    setState({ ...state, [text]: value });
  };

  const createNewCliente = async () => {
    if (state.nombreCompleto === "" || state.telefono === "" || state.direccion === "" || state.articulos === "" || state.precio === "" ) {
      alert("Todos los campos deben estar completos");
    } else {
      try {
        await addDoc(collection(db, "Clientes"), {
          fecha: state.fecha,
          nombreCompleto: state.nombreCompleto,
          telefono: state.telefono,
          direccion: state.direccion,
          articulos: state.articulos,
          precio: state.precio, 
        });
        props.navigation.navigate("Clientes");
        alert("Guardado con éxito");
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
            placeholder="Fecha"
            onChangeText={(value) => handleChangeText("fecha", value)}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Nombre completo"
            onChangeText={(value) => handleChangeText("nombreCompleto", value)}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Teléfono"
            onChangeText={(value) => handleChangeText("telefono", value)}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Dirección"
            onChangeText={(value) => handleChangeText("direccion", value)}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
          multiline={true}
          numberOfLines={8}
            placeholder="Artículos"
            onChangeText={(value) => handleChangeText("articulos", value)}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Precio"
            onChangeText={(value) => handleChangeText("precio", value)}
          />
        </View>
        <View>
          <Button title="Guardar" onPress={() => createNewCliente()} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateCliente;
