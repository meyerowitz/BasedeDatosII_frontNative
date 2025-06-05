import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';


export default function PerfilCircular({  size = 70, userName, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={{ flexDirection: 'column', alignItems: 'center' ,marginBlock:5, width: size+10, height:size+10}}>
        <View style={{ width: size, height: size, borderRadius: size / 2, overflow: 'hidden', borderWidth:5, borderColor: 'black', marginBottom: 25 }}>
      <Image
        source={require('../../assets/images/webs/iconlog.png') } // Placeholder image if no image is provided
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      />
       </View>
    <Text style={{ position: 'absolute', bottom: 0, left: 0, right: 0, textAlign: 'center', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>{userName}</Text>
   
    </View>
    </TouchableOpacity>
  );
}