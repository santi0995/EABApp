import { Button, ScrollView, Text, TextInput, View } from "react-native";

import { LocationSelector } from "../../components";
import colors from "../../utils/colors";
import { createNewArticle } from "../../store/place.slice";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { useState } from "react";

const NewPlace = ({ navigation, props }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [coords, setCoords] = useState(null);
  const dispatch = useDispatch();

  const onHandlerSubmit = () => {
    dispatch(createNewArticle(title, image, props));
    navigation.goBack();
  };
  const onHandlerChange = (text) => {
    setTitle(text);
  };

  const onLocation = (location) => {
    setCoords(location);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Artículo</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre del artículo"
          onChangeText={onHandlerChange}
          value={title}
        />
        <LocationSelector onLocation={onLocation} isSetArticle />
        <Button
          disabled={title.length === 0}
          color={colors.primary}
          title="Guardar"
          onPress={onHandlerSubmit}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
