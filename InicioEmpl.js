import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { db } from '../../firebaseconfig';

export default function Inicioempl() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    // Cargar los datos desde Firestore
    const obtenerReservas = async () => {
      try {
        const snapshot = await db.collection('reservas').get();
        const reservasData = snapshot.docs.map(doc => doc.data());
        setReservas(reservasData);
      } catch (error) {
        console.error("Error al obtener las reservas: ", error);
      }
    };
    obtenerReservas();
  }, []);

  return (
    <View style={styles.container}>  
      <View style={styles.reservasContainer}>
        <Text style={styles.reservasTitle}>Datos</Text>
        <FlatList
          data={reservas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.reserva}>
              <Text style={styles.reservaText}>{item.nombreEmpleado} {item.accion} turno para {item.nombreUsuario} el {item.fecha}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#404AA3',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    reservasContainer: {
        position: 'absolute',
        flex: 1, 
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 30,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        width: '70%', // Ajusta el ancho del recuadro
        height:'60%',
        marginTop: '30%', // Ajustar según necesidad
    },
    reserva: {
        marginVertical: 10,
        padding: 20,
        backgroundColor: '#fff', // Blanco para las cajas
        borderRadius: 5, // Bordes redondeados
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 1,
    },
    reservaText: {
        fontSize: 16,
        color: '#333',
        justifyContent:'center',
        alignItems:'center',
        margin:'center'
    },
    reservasTitle:{
        marginLeft:'36%',
        fontSize:24
    }
});
