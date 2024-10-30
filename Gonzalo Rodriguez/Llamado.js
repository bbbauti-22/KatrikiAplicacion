import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { db } from '/MiProyecto/config/'; 
import { collection, getDocs } from "firebase/firestore";

export default function Inicio() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [reservas, setReservas] = useState([]);
  const [objetosPerdidos, setObjetosPerdidos] = useState([]);

  useEffect(() => {
    const fetchReservas = async () => {
      const reservasCollection = collection(db, "Reservas");
      const reservasSnapshot = await getDocs(reservasCollection);
      const reservasList = reservasSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setReservas(reservasList);
    };

    const fetchObjetosPerdidos = async () => {
      const objetosCollection = collection(db, "ObjetosPerdidos");
      const objetosSnapshot = await getDocs(objetosCollection);
      const objetosList = objetosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setObjetosPerdidos(objetosList);
    };

    fetchReservas();
    fetchObjetosPerdidos();
  }, []);

  const lastThreeReservas = reservas.slice(-3).reverse(); // Obtener las últimas 3 reservas
  const lastThreeObjetosPerdidos = objetosPerdidos.slice(-3).reverse(); // Obtener las últimas 3 solicitudes

  const handleSelectMenuOption = (screen) => {
    setMenuVisible(false);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setMenuVisible(true)} style={styles.menuButton}>
        <Text style={styles.menuButtonText}>Menu</Text>
      </TouchableOpacity>

      {menuVisible && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => handleSelectMenuOption("Reservas")}>
            <Text style={styles.menuItem}>Reservas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectMenuOption("Ubicacion")}>
            <Text style={styles.menuItem}>Ubicación</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectMenuOption("Equipo")}>
            <Text style={styles.menuItem}>Equipo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMenuVisible(false)}>
            <Text style={styles.closeMenu}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.reservasContainer}>
        <Text style={styles.reservasTitle}>Mis Reservas</Text>
        <FlatList
          data={lastThreeReservas}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.reserva}>
              {item.canchaUno && <Text style={styles.reservaText}>Cancha Uno: {item.canchaUno}</Text>}
              {item.canchaDos && <Text style={styles.reservaText}>Cancha Dos: {item.canchaDos}</Text>}
              {item.canchaTres && <Text style={styles.reservaText}>Cancha Tres: {item.canchaTres}</Text>}
              {item.fecha && <Text style={styles.reservaText}>Fecha: {item.fecha}</Text>}
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={styles.objetosContainer}>
        <Text style={styles.objetosTitle}>Solicitudes de Objetos Perdidos</Text>
        <FlatList
          data={lastThreeObjetosPerdidos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.objeto}>
              <Text style={styles.objetoText}>Solicitaste Objeto Perdido: {item.descripcion}</Text>
              {item.fecha && <Text style={styles.objetoText}>Fecha: {item.fecha}</Text>}
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404AA3',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  menuButton: {
    backgroundColor: '#737BFD',
    padding: 10,
    borderRadius: 10,
    margin: 20,
    marginTop: '10%',
    marginLeft: '-75%',
    justifyContent: 'center',
  },
  menuButtonText: {
    color: 'white',
    fontSize: 16,
  },
  menu: {
    position: 'absolute',
    top: 60,
    left: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    zIndex: 1,
  },
  menuItem: {
    padding: 10,
    fontSize: 18,
    color: '#404AA3',
  },
  closeMenu: {
    padding: 10,
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  reservasContainer: {
    position: 'absolute',
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    width: '70%',
    marginTop: '40%', // Ajusta según necesites
  },
  objetosContainer: {
    position: 'absolute',
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    width: '70%',
    marginTop: '60%', // Ajusta según necesites
  },
  reservasTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 7,
    color: '#404AA3',
    textAlign: 'center',
  },
  objetosTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 7,
    color: '#404AA3',
    textAlign: 'center',
  },
  reserva: {
    marginVertical: 5,
  },
  objeto: {
    marginVertical: 5,
  },
  reservaText: {
    fontSize: 16,
    color: '#333',
    padding: 2,
  },
  objetoText: {
    fontSize: 16,
    color: '#333',
    padding: 2,
  },
});
