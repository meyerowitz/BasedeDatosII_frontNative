import {Text, View , Image} from 'react-native';
import React,{useEffect, useState} from 'react';
import { useLocalSearchParams } from 'expo-router'; // Importa useLocalSearchParams

import SearchBar from '../componentes/SearchBar'; // Asegúrate de que la ruta sea correcta
import PerfilCircular from '../componentes/PerfilCircular'; // Asegúrate de que la ruta sea correcta
import SongCirculor from '../componentes/SongCircular'; // Asegúrate de que la ruta sea correcta

const BACKEND_IP = 'localhost'; // Asegúrate de que esta sea la IP de tu servidor backend
const BACKEND_PORT = 5000;

export default function Music() {
const params = useLocalSearchParams();
const { userName } = params; // <-- Extrae el nombre de usuario de los parámetros de navegación



    return (
        <View style={{ flex: 1, width: '100%', height: '100%'}}>
                <View style={{ flexDirection: 'row', height: '15%'}}>
                    <View style={{width:'50%', flexDirection: 'row',paddingVertical:5}}>
                         <Image source={require('../../assets/images/webs/Logo1.png')} style={{marginLeft:'10%', width: 100, height: 100}}/>         
                        <SearchBar onSearch={(term) => console.log('Buscar:', term)} />
                    </View>
                    <View style={{width:'50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'right'}}>
                        <View style={{flexDirection: 'row', marginRight:40 }}>
                            <PerfilCircular userName={userName} onPress={() => alert('Perfil Circular Presionado')}/>
                            <SongCirculor userName={'mis canciones'} onPress={() => alert('Mis canciones favoritas')}/>
                        </View>
                    </View>
                    
                </View>
                <View style={{ backgroundColor:'red', flexDirection: 'row', height:'85%' }}>
                    <View style={{ width: '70%', backgroundColor: 'blue', padding: 10 , justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{ width: '50%', height: '80%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', flexDirection:'column', padding:50}}>
                            <View style={{ width: '80%', height: '80%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white',boxShadow: 'rgba(0, 0, 0, 0.53) 0px 5px 15px', borderRadius: 20}}>
                                <Image source={require('../../assets/images/webs/tocadisco.png') } style={{width:'100%', height:'100%'}} resizeMode='cover' />
                            </View>
                            <View style={{flexDirection:'row', backgroundColor:'blue'}}></View>
                            <View style={{ width: '100%', height: '30%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Bienvenido {userName}</Text>
                                <Text style={{ color: 'white', fontSize: 16 }}>Aquí puedes explorar tu música</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '30%', backgroundColor: 'green', padding: 10 }}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Contenido Principal</Text>
                        {/* Aquí puedes agregar el contenido principal de la pantalla */}
                    </View>
                </View>
        </View>
    );
}