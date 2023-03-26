import { Button, Text, View } from "react-native";
import React, { useState } from "react";

import { styles } from "./styles";

const Counter = () => {
  const [contador, setContador] = useState(0);
  const handlerCounterAdd = () => {
    setContador(contador + 1);
  };
  const handlerCounterRestar = () => {
    if (contador === 0) {
      setContador(contador);
    } else {
      setContador(contador - 1);
    }
  };
  return (
    <View style={styles.container}>
      <Button title="-" onPress={() => handlerCounterRestar()} />
      <Text style={styles.text}>{contador}</Text>
      <Button title="+" onPress={() => handlerCounterAdd()} />
    </View>
  );
};

export default Counter;
