import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { BlurView } from 'expo-blur';

import Tocadiscos from '../tocadiscos'; // Asegúrate de que la ruta sea correcta



export default function Reproductor() {
    return(
        <>
             <BlurView intensity={50} tint="light" style={{ width: '60%', padding: 10 }}>
                <View style={{ width: '100%', height: '80%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#928272', flexDirection:'column', padding:50,boxShadow: 'rgba(73, 42, 7, 0.53) 0px 5px 15px', borderTopEndRadius:20, borderTopStartRadius:20}}>
                        <Tocadiscos isPlaying={true}/>
                </View>
                <View style={{width:'100%', height:'5%', justifyContent:'center', alignItems:'center',boxShadow: 'rgba(0, 0, 0, 0.53) 0px 5px 15px'}}>   
                    <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold'}}>Titulo de la cancion</Text>  
                    <Text style={{ color: 'black', fontSize: 20}}>autor</Text>                                 
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', width:'100%', height:'10%', marginVertical:20}}>
                    <TouchableOpacity onPress={() => {alert('reproduccion en bucle')}} style={{marginRight:110}}>
                        <Image source={require('../../../assets/images/webs/flecha-de-bucle.png')} style={{ width: 40, height: 40}}/>   
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {alert('atras')}} style={{marginRight:70}}>
                        <Image source={require('../../../assets/images/webs/siguiente-icono2.png')} style={{ width: 40, height: 40}}/>   
                    </TouchableOpacity>
            
                    <TouchableOpacity onPress={() => {alert('play')}} >
                        <Image source={require('../../../assets/images/webs/botonplay.png')} style={{ width: 40, height: 40}}/>
                    </TouchableOpacity>
            
                    <TouchableOpacity onPress={() => {alert('siguiente')}} style={{marginLeft:70}}>
                        <Image source={require('../../../assets/images/webs/siguiente-icono.png')} style={{ width: 40, height: 40}}/>   
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {alert('reproduccion aleatoria')}} style={{marginLeft:110}}>
                        <Image source={require('../../../assets/images/webs/flechas-cruzadas.png')} style={{ width: 40, height: 40}}/>   
                    </TouchableOpacity>
                </View>
            </BlurView>
        </>
    )
}