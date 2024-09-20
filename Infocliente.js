import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const Infocliente = () => {
  const navigation = useNavigation();

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDni] = useState('');
  const [errors, setErrors] = useState({
    nombre: '',
    apellido: '',
    dni: ''
  });

  const handleSubmit = async () => {
    let hasErrors = false;
    const newErrors = { nombre: '', apellido: '', dni: '' };
    if (!nombre) {
      newErrors.nombre = "*Nombre es requerido*";
      hasErrors = true;
    } else if (nombre.length < 3) {
      newErrors.nombre = "*Nombre debe tener mínimo 3 caracteres*";
      hasErrors = true;
    } else if (nombre.length > 15) {
      newErrors.nombre = "*Nombre no puede tener más de 15 caracteres*";
      hasErrors = true;
    }
    if (!apellido) {
      newErrors.apellido = "*Apellido es requerido*";
      hasErrors = true;
    } else if (apellido.length < 4) {
      newErrors.apellido = "*Apellido debe tener por lo menos 4 caracteres*";
      hasErrors = true;
    } else if (apellido.length > 10) {
      newErrors.apellido = "*Apellido no puede tener más de 10 caracteres*";
      hasErrors = true;
    }
    if (!dni) {
      newErrors.dni = "*DNI es requerido*";
      hasErrors = true;
    } else if (dni.length !== 8) {
      newErrors.dni = "*DNI debe tener exactamente 8 caracteres*";
      hasErrors = true;
    }
    if (hasErrors) {
      setErrors(newErrors);
      return;
    }
    
    // Aquí puedes manejar la navegación o cualquier otra acción que desees
    console.log("Datos:", { nombre, apellido, dni });
    navigation.navigate('Pagar');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.recuadro}>
        <View style={styles.form}>
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            style={styles.input}
            value={nombre}
            onChangeText={setNombre}
          />
          {errors.nombre && <Text style={styles.span}>{errors.nombre}</Text>}

          <Text style={styles.label}>Apellido</Text>
          <TextInput
            style={styles.input}
            value={apellido}
            onChangeText={setApellido}
          />
          {errors.apellido && <Text style={styles.span}>{errors.apellido}</Text>}

          <Text style={styles.label}>Número de DNI</Text>
          <TextInput
            style={styles.input}
            value={dni}
            onChangeText={setDni}
            keyboardType="numeric"
          />
          {errors.dni && <Text style={styles.span}>{errors.dni}</Text>}

          <Pressable style={styles.botonn} onPress={handleSubmit}>
            <Text style={styles.botontext}>Confirmar pago</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#404AA3',
  },
  botonn: {
    backgroundColor: '#737BFD',
    height: 45,
    width: "50%",
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    borderColor: '#737BFD',
    borderWidth: 2,
    marginLeft: "26.5%",
  },
  botontext: {
    color: 'white'
  },
  recuadro: {
    width: '90%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#737BFD',
    marginBottom: 10,
  },
  input: {
    height: 45,
    width: '100%',
    borderColor: '#00796b',
    borderWidth: 1.5,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    color: '#00796b',
  },
  span: {
    color: '#d32f2f',
    fontSize: 14,
    marginVertical: 5,
    paddingHorizontal: 10,
    width: '100%',
    textAlign: 'center',
  },
});

export default Infocliente;