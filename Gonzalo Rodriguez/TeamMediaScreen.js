import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TeamMediaScreen({ onBack }) {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Image source={require('/apa/papa/Imagenes/ES.png')} style={styles.logo} />
      </View>

      <Pressable style={styles.backButton} onPress={onBack}>
        <Icon name="arrow-left" size={30} color="#000" />
      </Pressable>

      <View style={styles.teamNameContainer}>
        <Text style={styles.teamName}>Chupachichis</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Fotos y Videos del Equipo Estrella</Text>

        <View style={styles.largeImageContainer}>
          <Image 
            source={{ uri: 'https://example.com/large-photo.jpg' }} 
            style={styles.largeImage} 
          />
        </View>

        <View style={styles.smallImagesContainer}>
          <View style={styles.smallImageWrapper}>
            <Image 
              source={{ uri: 'https://example.com/small-photo1.jpg' }} 
              style={styles.smallImage} 
            />
          </View>
          <View style={styles.smallImageWrapper}>
            <Image 
              source={{ uri: 'https://example.com/small-photo2.jpg' }} 
              style={styles.smallImage} 
            />
          </View>
        </View>

        <View style={styles.videoContainer}>
          <Text style={styles.videoText}>Aquí se mostrará el video</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#404aa3',
  },
  logo: {
    width: 400,
    height: 50,
    alignItems:'center',
    resizeMode: 'contain',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:10,
    backgroundColor: '#1a224c',
  },
  shield: {
    width: 370,
    height: 50,
    resizeMode: 'contain',
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
  largeImageContainer: {
    width: '100%',
    height: 160,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#ddd',
    elevation: 4,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Actualiza la propiedad shadow
  },
  largeImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  smallImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  smallImageWrapper: {
    flex: 1,
    marginHorizontal: 5,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#ddd',
    elevation: 4,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Actualiza la propiedad shadow
  },
  smallImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  videoContainer: {
    width: '50%',
    height: 100,
    backgroundColor: '#ddd',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoText: {
    fontSize: 18,
    color: '#666',
  },
  backButton: {
    position: 'absolute',
    top: 80,
    left: 20,
    zIndex: 1,
  },
});
