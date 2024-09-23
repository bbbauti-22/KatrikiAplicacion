import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './login';
import Register from './register';
import Inicio from './inicio';

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <Inicio setIsLoggedIn={setIsLoggedIn} />
      ) : isRegistering ? (
        <Register setIsRegistering={setIsRegistering} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Login setIsRegistering={setIsRegistering} setIsLoggedIn={setIsLoggedIn} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404aa3',
  },
});
