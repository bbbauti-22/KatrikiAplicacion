import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { db } from '/MiProyecto/config/'; 
import { collection, getDocs } from "firebase/firestore";

export default function Inicio() {
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
      const objetosCollection = collection(db, "Soli_Obj");
      const objetosSnapshot = await getDocs(objetosCollection);
      const objetosList = objetosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setObjetosPerdidos(objetosList);
    };

    fetchReservas();
    fetchObjetosPerdidos();
  }, []);

  const lastThreeReservas = reservas.slice(-3).reverse(); // Obtener las últimas 3 reservas
  const lastThreeObjetosPerdidos = objetosPerdidos.slice(-3).reverse(); // Obtener las últimas 3 solicitudes

  return (
    <View style={styles.container}>
     
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
              <Text style={styles.objetoText}>
                Solicitaste Objeto Perdido: {item.fileName.replace('.jpg', '')}
              </Text>
              <Text style={styles.objetoText}>
                Fecha: {item.requestedAt?.toDate().toLocaleString()}
              </Text>
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
    padding: 20,
    backgroundColor: '#404aa3',
    width: '100%',
    justifyContent: 'flex-start',
  },
  reservasContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    width: '100%',
    marginBottom: 20, // Espacio entre los contenedores
  },
  objetosContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    width: '100%',
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

