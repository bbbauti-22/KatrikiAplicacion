import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity,Modal, Button, Pressable} from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

export default function Disponibilidad() {
  const navigation= useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [canchaUno, setCanchaUno] = useState('no-asignado');
  const [canchaDos, setCanchaDos] = useState('no-asignado');
  const [canchaTres, setCanchaTres] = useState('no-asignado');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [fecha, setFecha] = useState('');

  // Mostrar y ocultar el selector de fecha
  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  // Manejar la confirmación de la fecha seleccionada
  const handleConfirm = (date) => {
    setFecha(format(date, 'yyyy-MM-dd'));
    hideDatePicker(); // Ocultar el selector después de seleccionar la fecha
  };

  // Manejar el envío de datos
  const handleSubmit = () => {
    setModalVisible(true);
  };

  // Cancelar la acción del modal
  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
    
      <Text style={styles.label}>Cancha N°1</Text>
      <Picker
        selectedValue={canchaUno}
        style={styles.input}
        onValueChange={(itemValue) => setCanchaUno(itemValue)}
      >
        <Picker.Item label="Ninguno" value="no-asignado" />
        <Picker.Item label="13:00 a 14:00 hs" value="hora1" />
        <Picker.Item label="14:00 a 15:00 hs" value="hora2" />
        <Picker.Item label="15:00 a 16:00 hs" value="hora3" />
        <Picker.Item label="16:00 a 17:00 hs" value="hora4" />
        <Picker.Item label="17:00 a 18:00 hs" value="hora5" />
        <Picker.Item label="18:00 a 19:00 hs" value="hora6" />
        <Picker.Item label="19:00 a 20:00 hs" value="hora7" />
        <Picker.Item label="21:00 a 22:00 hs" value="hora8" />
        <Picker.Item label="22:00 a 23:00 hs" value="hora9" />
      </Picker>

      <Text style={styles.label}>Cancha N°2</Text>
      <Picker
        selectedValue={canchaDos}
        style={styles.input}
        onValueChange={(itemValue) => setCanchaDos(itemValue)}
      >
        <Picker.Item label="Ninguno" value="no-asignado" />
        <Picker.Item label="13:00 a 14:00 hs" value="hora1" />
        <Picker.Item label="14:00 a 15:00 hs" value="hora2" />
        <Picker.Item label="15:00 a 16:00 hs" value="hora3" />
        <Picker.Item label="16:00 a 17:00 hs" value="hora4" />
        <Picker.Item label="17:00 a 18:00 hs" value="hora5" />
        <Picker.Item label="18:00 a 19:00 hs" value="hora6" />
        <Picker.Item label="19:00 a 20:00 hs" value="hora7" />
        <Picker.Item label="21:00 a 22:00 hs" value="hora8" />
        <Picker.Item label="22:00 a 23:00 hs" value="hora9" />
      </Picker>
      <Text style={styles.label}>Cancha N°3</Text>
      <Picker
        selectedValue={canchaTres}
        style={styles.input}
        onValueChange={(itemValue) => setCanchaTres(itemValue)}
      >
        <Picker.Item label="Ninguno" value="no-asignado" />
        <Picker.Item label="13:00 a 14:00 hs" value="hora1" />
        <Picker.Item label="14:00 a 15:00 hs" value="hora2" />
        <Picker.Item label="15:00 a 16:00 hs" value="hora3" />
        <Picker.Item label="16:00 a 17:00 hs" value="hora4" />
        <Picker.Item label="17:00 a 18:00 hs" value="hora5" />
        <Picker.Item label="18:00 a 19:00 hs" value="hora6" />
        <Picker.Item label="19:00 a 20:00 hs" value="hora7" />
        <Picker.Item label="21:00 a 22:00 hs" value="hora8" />
        <Picker.Item label="22:00 a 23:00 hs" value="hora9" />
      </Picker>


      <Text style={styles.label}>Fecha de reserva</Text>
      <Pressable style={styles.input} onPress={showDatePicker}>
        <Text style={styles.Se}>{fecha ? fecha : 'Selecciona una fecha'}</Text>
      </Pressable>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <TouchableOpacity 
        onPress={handleSubmit}
        style={{
          backgroundColor: "#737BFD",
          padding: 10,
          marginTop: "20%",
          width: "50%",
          alignSelf: "center",
          borderRadius: 10,
        }}>
        <Text style={{
          fontSize: 15,
          textAlign: "center",
          color: "white",
        }}>
          Enviar
        </Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>¿Confirma la reserva?</Text>
            <View style={styles.modalButtons}>
              <Button title="Sí" onPress={() => { setModalVisible(false); navigation.navigate("Stack"); }} color="green" />
              <Button title="No" onPress={handleCancel} color="red" />
            </View>
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404AA3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'white'
  },
  input: {
    height: 45,
    width: '80%',
    borderColor: '#404aa3',
    borderWidth: 1.5,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 13,
    backgroundColor: '#ffffff',
    color: '#404aa3',
    textAlign:'center',
    justifyContent:'center'
  },
  Se: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#404aa3',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});