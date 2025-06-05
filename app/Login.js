import { Text, Platform, View, ImageBackground, Image, TextInput, Button, Alert} from 'react-native';
import React,{useState, useEffects} from 'react';
import { BlurView } from 'expo-blur';
import { Link , useRouter } from 'expo-router';
import TestUsers from './Test_List/Test_usersNative';

const BACKEND_IP = 'localhost'; // Asegúrate de que esta sea la IP de tu servidor backend
const BACKEND_PORT = 5000;
const LOGIN_URL = `http://${BACKEND_IP}:${BACKEND_PORT}/login`;

export default function Login() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [loading, setLoading] = useState(false); // Estado para controlar el indicador de carga
const [error, setError] = useState(null); // Estado para almacenar mensajes de error

const router = useRouter(); // Hook para manejar la navegación

// Función para manejar el inicio de sesión
  const handleLogin = async () => {
    // Limpiar errores y activar el indicador de carga
    setError(null);
    setLoading(true);

    alert(`Intentando iniciar sesión con ${username} y ${password}...`);
    try {
      const response = await fetch(LOGIN_URL, {
        method: 'POST', // Indicar que es una solicitud POST
        headers: {
          'Content-Type': 'application/json', // Indicar que el cuerpo es JSON
        },
        body: JSON.stringify({
          nombre: username,     // <-- Ahora el backend recibirá 'nombre' con el valor de 'username'
          contrasena: password, // <-- Ahora el backend recibirá 'contrasena' con el valor de 'password'
        }),
      });

      alert('fecht iniciado');

      const data = await response.json(); // Parsea la respuesta JSON del servidor
      alert('data:', data.message)
      if (response.ok) { 
        alert('Login exitoso', data.message);
        // Aquí puedes redirigir al usuario a la pantalla principal o donde desees
        router.push({
            pathname: '/usuario/music',
            params: {
                userName: username,
            },
          });
       } else {
        alert('Login fallido', data.message );
      }

    } catch (e) {
      alert(e.message);
      alert('Error de Conexión con el servidor', e.message );
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