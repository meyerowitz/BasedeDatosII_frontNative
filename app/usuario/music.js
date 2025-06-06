import {Text, View , Image, TouchableOpacity} from 'react-native';
import React,{useEffect, useState} from 'react';
import { BlurView } from 'expo-blur';
import { useLocalSearchParams } from 'expo-router'; // Importa useLocalSearchParams

import SearchBar from '../componentes/SearchBar'; // Asegúrate de que la ruta sea correcta
import PerfilCircular from '../componentes/PerfilCircular'; // Asegúrate de que la ruta sea correcta
import SongCirculor from '../componentes/SongCircular'; // Asegúrate de que la ruta sea correcta
import Reproductor from '../componentes/principales/Reproductor';
import Ranking from '../componentes/principales/Ranking'; // Asegúrate de que la ruta sea correcta

const BACKEND_IP = 'localhost'; // Asegúrate de que esta sea la IP de tu servidor backend
const BACKEND_PORT = 5000;

export default function Music() {
const params = useLocalSearchParams();
const { userName } = params; // <-- Extrae el nombre de usuario de los parámetros de navegación
const [nameMusica, setNameMusica] = useState('Titulo de la cancion'); // Estado para almacenar el nombre de la música
const [autor, setAutor] = useState('Autor de la cancion'); // Estado para almacenar el autor de la música
const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar si la música está reproduciéndose

    return (
        <View style={{ flex: 1, width: '100%', height: '100%'}}>
            {/*barra de busqueda , historial y perfil */}
                <View style={{ flexDirection: 'row', height: '15%'}}>
                    <View style={{width:'50%', flexDirection: 'row',paddingVertical:5}}>
                         <Image source={require('../../assets/images/webs/Logo1.png')} style={{marginLeft:'10%', width: 100, height: 100}}/>         
                        <SearchBar onSearch={(term) => console.log('Buscar:', term)} />
                    </View>
                    {/*Perfil y canciones favoritas*/}
                    <View style={{width:'50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'right'}}>
                        <View style={{flexDirection: 'row', marginRight:40 }}>
                            <PerfilCircular userName={userName} onPress={() => alert('Perfil Circular Presionado')}/>
                            <SongCirculor userName={'mis canciones'} onPress={() => alert('Mis canciones favoritas')}/>
                        </View>
                    </View>
                </View>
            {/*Contenido Principal*/}
                <View  style={{ flexDirection: 'row', height:'85%' }}>
                    {/*Contenido de la izquierda y reproductor*/}
                        <Reproductor/>
                    {/*Contenido de la derecha , categorias y tops segun ciudad y demas*/}
                    <View style={{ width: '35%', backgroundColor: 'green', padding: 10 , borderRadius:40, marginLeft:'5%'}}>
                        <Ranking/>
                    </View>
                </View>
        </View>
    );
}