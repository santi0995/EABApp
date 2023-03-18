/* eslint-disable no-case-declarations */
import {
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { UPDATED_FORM, onInputChange } from "../../utils/form";
import { signIn, signUp } from "../../store/actions";
import { useReducer, useState } from "react";

import { Input } from "../../components";
import colors from "../../utils/colors";
import { styles } from "./styles";
import { useDispatch } from "react-redux";

const initialState = {
  email: { value: "", error: "", touched: false, hasError: true },
  password: { value: "", error: "", touched: false, hasError: true },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATED_FORM:
      const { name, value, hasError, error, touched, isFormValid } = action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };
    default:
      return state;
  }
};

const Auth = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const title = isLogin ? "Login" : "Register";
  const message = isLogin ? "Crea tu cuenta" : "Ya tienes una cuenta?";
  const messageButton = isLogin ? "Login" : "Register";

  const onHandlerSubmit = () => {
    dispatch(
      isLogin
        ? signIn(formState.email.value, formState.password.value)
        : signUp(formState.email.value, formState.password.value)
    );
  };
  const onHandleInputChange = (value, type) => {
    onInputChange(type, value, dispatchFormState, formState);
  };
  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === "android" ? "height" : "padding"}
      enabled>
      <View style={styles.logo}>
        <Image style={styles.img} source={require("../../../assets/img/logo.jpeg")} />
      </View>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Input
            placeholder="Introduce tu usuario"
            placeholderTextColor={colors.gray}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => onHandleInputChange(text, "email")}
            value={formState.email.value}
            hasError={formState.email.hasError}
            error={formState.email.error}
            touched={formState.email.touched}
            label="Usuario"
            labelStyle={styles.label}
          />
          <Input
            placeholder="Introduce tu contraseña"
            placeholderTextColor={colors.gray}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => onHandleInputChange(text, "password")}
            value={formState.password.value}
            hasError={formState.password.hasError}
            error={formState.password.error}
            touched={formState.password.touched}
            label="Contraseña"
            labelStyle={styles.label}
          />
          <View style={styles.buttonContainer}>
            <Button title={messageButton} color={colors.primary} onPress={onHandlerSubmit} />
            <View style={styles.prompt}>
              <TouchableOpacity style={styles.promptButton} onPress={() => setIsLogin(!isLogin)}>
                <Text style={styles.promptMessage}>{message}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Auth;
