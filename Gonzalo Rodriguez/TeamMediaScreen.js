import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';

export default function TeamMediaScreen({ onBack }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('/apa/papa/Imagenes/ES.png')} style={styles.logo} />
      </View>

    
      <View style={styles.teamNameContainer}>
        <Text style={styles.teamName}>Chupachichis</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Fotos del Equipo Estrella</Text>

        <View style={styles.smallImagesContainer}>
          <View style={styles.smallImageWrapper}>
            <Image 
              source={require('/apa/papa/src/Foto3.jpg')} 
              style={styles.smallImage} 
            />
          </View>
          <View style={styles.smallImageWrapper}>
            <Image 
              source={require('/apa/papa/src/Foto2.jpg')} 
              style={styles.smallImage} 
            />
          </View>
          <View style={styles.smallImageWrapper}>
            <Image 
              source={require('/apa/papa/src/Foto1.jpg')} 
              style={styles.smallImage} 
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404aa3',
  },
  logo: {
    width: 400,
    height: 50,
    alignItems: 'center',
    resizeMode: 'contain',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#1a224c',
  },
  teamNameContainer: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  smallImagesContainer: {
    // Cambia la dirección a column para que las imágenes estén una debajo de la otra
    flexDirection: 'column',
    width: '100%',
    height: '50%',
    marginBottom: 40,
  },
  smallImageWrapper: {
    height: 500,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#ddd',
    elevation: 4,
    marginBottom: 10, // Espacio entre las imágenes
  },
  smallImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  
});