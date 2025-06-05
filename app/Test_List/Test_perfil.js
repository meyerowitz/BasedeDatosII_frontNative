import {Text, View} from 'react-native';
import React,{useEffect, useState} from 'react';
import { useLocalSearchParams } from 'expo-router'; // Importa useLocalSearchParams

const BACKEND_IP = 'localhost'; // Asegúrate de que esta sea la IP de tu servidor backend
const BACKEND_PORT = 5000;

export default function Test_Perfil() {
const params = useLocalSearchParams();
const { userName } = params; // <-- Extrae el nombre de usuario de los parámetros de navegación


const [userData, setUserData] = useState(null);
const [loading, setLoading] = useState(false); // Estado para controlar el indicador de carga
const [error, setError] = useState(null); // Estado para almacenar mensajes de error

    useEffect(() => {
        // Llamar a la función para obtener los datos del usuario al montar el componente
          const fechtUser = async () => {
                try { 
                    setLoading(true); // Activar el indicador de carga
                    setError(null); // Limpiar cualquier error previo
                    // 3. Realizar la solicitud al servidor
                    const URL = `http://${BACKEND_IP}:${BACKEND_PORT}/login/${userName}`; 
                    const response = await fetch(URL, {
                    method: 'GET', // Método GET explícito
                    headers: {
                        'Content-Type': 'application/json', // Aunque GET no suele llevar body, es buena práctica
                    },
                    });

                // 4. Procesar la respuesta del servidor
                    const responseData = await response.json(); // Parsea la respuesta JSON

                if (response.ok) { // Si el código de estado es 2xx (éxito)
                    setUserData(responseData); // Almacena los datos del usuario
                    alert('Éxito, Usuario encontrado correctamente.');
                } else { // Si el código de estado no es 2xx (error del servidor, ej. 400, 404, 500)
                    const errorMessage = responseData.error || responseData.message || 'Error desconocido del servidor.';
                    setError(errorMessage);
                    alert('Error '+ errorMessage );
                }
                } catch (e) {
                    // 5. Manejar errores de red o cualquier otra excepción
                    setError('No se pudo conectar con el servidor. Verifica tu conexión o la IP/Puerto.');
                    alert('Error de Conexión'+'Verifica si el servidor está corriendo o la configuración de IP/Puerto.');
                } finally {
                    setLoading(false); // Desactivar el indicador de carga al finalizar
                }
            }
                fechtUser(); // Llamar a la función para obtener los datos del usuario

        }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente
    // Renderizar el componente
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Music Screen</Text>
        <Text>{JSON.stringify(params)}</Text>
        <Text>Usuario: {userName}</Text>
        <loading />
        {loading && <Text>Cargando...</Text>} <Text>Datos del Usuario: {JSON.stringify(userData)}</Text>
        </View>
    );
}