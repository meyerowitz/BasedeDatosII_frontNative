import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';



export default function Ranking() {
const [generos, setGeneros] = useState([{id:1, title:'Rock'}, {id:2,title:'Pop'}, {id:3,title:'Hip-Hop'}, {id:4,title:'Jazz'}, {id:5,title:'Reggaeton'}]);
const [ciudades, setCiudades] =useState([{id:1,title:'Ciudad de Mexico'}, {id:2,title:'Bogota'}, {id:3,title:'Buenos Aires'}, {id:4,title:'Madrid'}, {id:5,title:'Barcelona'}]);
    

const [Rank, SetRank]= useState('Ranking de Mejor Cancion');
const [Categorias, SetCategorias] = useState(generos);


    return (
        <>
            <View style={{ flexDirection:'row', width:'100%', height: '15%', backgroundColor: '#f0f0f0', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => {SetRank('Ranking de Canciones por Genero'), SetCategorias(generos)}} style={{borderRadius: 20, padding: 10, backgroundColor: '#d0d0d0', marginRight: 20, width:'25%'}}>
                    <Text style={{fontSize:10}}>Mejor cancion por genero</Text>
                </TouchableOpacity>
                 <TouchableOpacity onPress={() => {SetRank('Ranking de Canciones por Ciudad'), SetCategorias(ciudades)}} style={{borderRadius: 20, padding: 10, backgroundColor: '#d0d0d0', marginRight: 20, width:'25%'}}>
                    <Text style={{fontSize:10}}>Mejor cancion por ciudad</Text>
                </TouchableOpacity>
                 <TouchableOpacity onPress={() => {SetRank('Ranking de Mejor cancion'), SetCategorias([])}} style={{borderRadius: 20, padding: 10, backgroundColor: '#d0d0d0', marginRight: 20, width:'25%'}}>
                    <Text style={{fontSize:10}}>Mejor cancion </Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', width:'100%'}}>
                <FlatList data={Categorias}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={()=>{alert(item.title)}} style={{ justifyContent: 'center', padding: 5 , borderWidth:2, borderColor:'black', backgroundColor:'gray', borderRadius:20, width:100, color:'white',alignItems: 'center', marginHorizontal:5}}>
                                <Text style={{ fontSize: 18 }}>{item.title}</Text>
                            </TouchableOpacity>
                        )}/>
            </View>

            <ScrollView style={{ maxHeight:'80%' , borderRadius:30, marginTop:10}}>
                <View style={{ width: '100%', height: '100%', padding: 10, backgroundColor: '#f0f0f0', borderRadius: 20 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{Rank}</Text>
                    <FlatList
                        data={[
                            { id: '1', title: 'Canción 1', artist: 'Artista 1' },
                            { id: '2', title: 'Canción 2', artist: 'Artista 2' },
                            { id: '3', title: 'Canción 3', artist: 'Artista 3' },
                            { id: '4', title: 'Canción 4', artist: 'Artista 4' },
                            { id: '5', title: 'Canción 5', artist: 'Artista 5' },
                            { id: '6', title: 'Canción 6', artist: 'Artista 6' },
                            { id: '7', title: 'Canción 7', artist: 'Artista 7' },
                            { id: '8', title: 'Canción 8', artist: 'Artista 8' },
                            { id: '9', title: 'Canción 9', artist: 'Artista 3' },
                            { id: '10', title: 'Canción 4', artist: 'Artista 4' },
                            { id: '11', title: 'Canción 5', artist: 'Artista 5' },
                        ]}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={()=>{alert('cancion : '+item.id)}} style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 , borderBottomWidth:2, borderBottomColor:'black'}}>
                                <Text style={{ fontSize: 18 }}>{item.title}</Text>
                                <Text style={{ fontSize: 18, color: '#555' }}>{item.artist}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
        </>
    )
}