import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';

export default function TestUsers(){
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ** MUY IMPORTANTE: CONFIGURA LA IP Y EL PUERTO DE TU BACKEND AQUÍ **
  // Si tu backend corre en la misma máquina que tu emulador/simulador:
  // - Para Android Emulator, usa '10.0.2.2'
  // - Para iOS Simulator, usa 'localhost' o '127.0.0.1'
  // Si tu backend corre en un dispositivo físico o una máquina diferente:
  // - Usa la IP real de tu máquina (la misma que usaste para broadcast_rpc_address en Cassandra)
  const BACKEND_IP = '192.168.100.10'; // Ejemplo: '192.168.100.10' o '10.0.2.2' para Android
  const BACKEND_PORT = 5000; // El puerto de tu servidor Node.js/Flask (ej: 3001 o 5000)
  const API_URL = `http://${BACKEND_IP}:${BACKEND_PORT}/users`;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error HTTP: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (e) {
        console.error('Error al obtener usuarios:', e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // El array vacío asegura que se ejecuta solo una vez al montar el componente

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Cargando usuarios...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Error: {error}</Text>
        <Text style={styles.errorText}>
          Asegúrate de que el servidor backend esté corriendo en{' '}
          {BACKEND_IP}:{BACKEND_PORT}
        </Text>
        <Text style={styles.errorText}>
          Verifica la IP y el puerto en el código de la app.
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lista de Usuarios (Cassandra)</Text>
      {users.length === 0 ? (
        <Text>No se encontraron usuarios.</Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item, index) => item.usuario_id ? item.usuario_id.toString() : index.toString()} // Usa id_usuario si existe, sino el índice
          renderItem={({ item }) => (
            <View style={styles.userItem}>
              {/* Ajusta esto para mostrar los campos reales de tu tabla 'usuarios' */}
              <Text style={styles.userId}>ID Usuario: {item.usuario_id}</Text>
              <Text>Nombre: {item.nombre}</Text>  </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  userItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
  },
  userId: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
  },
});
