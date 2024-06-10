import { Colors } from '@/constants/Colors';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const ButtonFloat = () => {
  return (
    <View style={styles.container}>
      {/* Otros componentes de tu aplicación */}
      <TouchableOpacity style={styles.floatingButton} onPress={() => console.log('Botón presionado')}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // ... otros estilos para tu contenedor
  },
  floatingButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 10,
    backgroundColor: Colors.light.tint,
    borderRadius: 20,
    elevation: 8,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
});

export default ButtonFloat;
