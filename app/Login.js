import { Text, Platform, View, ImageBackground, Image, TextInput, Button} from 'react-native';
import React,{useState, useEffects} from 'react';
import { BlurView } from 'expo-blur';
import { Link } from 'expo-router';
import TestUsers from './Test_List/Test_usersNative';

const BACKEND_IP = '192.168.100.10'; // Asegúrate de que esta sea la IP de tu servidor backend
const BACKEND_PORT = 5000;
const LOGIN_URL = `http://${BACKEND_IP}:${BACKEND_PORT}/login`;

export default function Login() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [loading, setLoading] = useState(false); // Estado para controlar el indicador de carga
const [error, setError] = useState(null); // Estado para almacenar mensajes de error

  const handleLogin = async () => {
    // Limpiar errores y activar el indicador de carga
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(LOGIN_URL, {
        method: 'POST', // Indicar que es una solicitud POST
        headers: {
          'Content-Type': 'application/json', // Indicar que el cuerpo es JSON
        },
        body: JSON.stringify({ // Convertir los datos a JSON y enviarlos en el cuerpo
          username: nombre, // El backend espera 'username'
          password: contrasena, // El backend espera 'password'
        }),
      });

      const data = await response.json(); // Parsea la respuesta JSON del servidor

      if (response.ok) { // Si la respuesta HTTP es exitosa (código 2xx)
        console.log('Inicio de sesión exitoso:', data);
        Alert.alert('Éxito', data.message); // Muestra un mensaje de éxito
        // Aquí podrías:
        // 1. Guardar el userId en AsyncStorage si lo necesitas para futuras sesiones.
        //    await AsyncStorage.setItem('userId', data.userId);
        // 2. Navegar a otra pantalla (ej. la pantalla principal de la app).
        //    navigation.navigate('Home');
      } else {
        // Si la respuesta HTTP NO es exitosa (ej. 400, 401, 500)
        console.error('Error de inicio de sesión:', data.message || 'Error desconocido');
        setError(data.message || 'Ocurrió un error. Inténtalo de nuevo.'); // Muestra el mensaje de error del servidor
        Alert.alert('Error', data.message || 'Error al iniciar sesión.');
      }
    } catch (e) {
      // Este catch se ejecuta si hay un error de red o algo que impida la comunicación
      console.error('Error de red o del servidor:', e);
      setError('No se pudo conectar al servidor. Verifica tu conexión o la IP del backend.');
      Alert.alert('Error de Conexión', 'No se pudo conectar al servidor. Inténtalo de nuevo.');
    } finally {
      setLoading(false); // Desactivar el indicador de carga al finalizar
    }
  };

    return (
         <>
            {Platform.OS === 'web' ? (

                <View style={{ flex: 1 }}>
                        
                    <ImageBackground
                        source={require('../assets/images/webs/Fondologin.png')}
                        style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                        resizeMode="cover">

                            <View style={{ width: '95%', height: '95%', flexDirection: 'row'}}>
                                <View style={{width:'50%', height:'100%'}}>
                                    <Image
                                        source={require('../assets/images/webs/bigcaset.png')}
                                        style={{ width: '100%', height: '90%', resizeMode: 'contain' }}
                                    />
                                </View>
                                <View style={{width:'50%', height:'100%'}}>
                                
                                    <View style={{ borderRadius:'100%', overflow:'hidden', width:'80%', height:'85%', margin: 'auto', borderColor:'white', borderWidth:1, backgroundColor: 'rgba(128, 128, 128, 0.5)'}}>
                                        
                                        <BlurView
                                        intensity={50}
                                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}
                                        tint="light">
                                                <Text style={{marginRight:100, fontSize:70, fontWeight:'bold', color:'white',marginBottom:15, marginTop:-35}}>LogIn</Text>
                                                <TextInput style={{width:'60%',height:'9%', backgroundColor:'white', borderRadius:10, marginVertical:10, padding:10}} placeholder='username' placeholderTextColor='gray' onChangeText={setUsername}></TextInput>
                                                <TextInput style={{width:'60%',height:'9%', backgroundColor:'white', borderRadius:10, marginVertical:10, padding:10}} placeholder='password' placeholderTextColor='gray' onChangeText={setPassword}></TextInput>
                                                <Link style={{marginTop:10}} href="/Test_List/Test_usersNative">
                                                    <Text>Forgot password?</Text>
                                                </Link>
                                                <View style={{width:'40%', marginTop:20}}>
                                                    <Button title='Log In' onPress={handleLogin}></Button>
                                                </View>
                                                
                                        </BlurView>
                                    </View>

                                    <View style={{height:'15%', flexDirection:'row', justifyContent:'center', alignItems:'center',marginVertical:10}}>
                                        <Image 
                                            source={require('../assets/images/webs/Disco.png')}
                                            style={{marginLeft:'70%', width: 100, height: 100}}/>
                                        <Image 
                                            source={require('../assets/images/webs/Logo1.png')}
                                            style={{ width: 100, height:100  }}/>
                                    </View>
                                    
                                </View>
                            </View>
                            
                        </ImageBackground>
                      
                   
                </View>
        
            ) : (
                <TestUsers/>
            )}
        </>
    );
}