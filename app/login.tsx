import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { auth } from "../services/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import Notificacion from "./notificacion";

type LoginProps = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsRegistering: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Login({ setIsLoggedIn, setIsRegistering }: LoginProps) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Todos los campos deben ser completados.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true); // Redirigir a la página de inicio
      setErrorMessage("");
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Error en el inicio de sesión. Intenta de nuevo.");
      }
    }
  };

  return (
    <View style={styles.container}>
      {errorMessage ? <Notificacion mensaje={errorMessage} /> : null}
      <Text style={styles.title}>Login</Text>
      <Image
        source={require("./Katriki_Logo_Login.png")}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsRegistering(true)}>
        <Text style={styles.link}>¿No tienes una cuenta? Regístrate aquí</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#404aa3",
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#737bfd",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  link: {
    color: "#fff",
    fontSize: 16,
  },
});
