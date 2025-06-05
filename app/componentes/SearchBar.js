import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';



export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
      setSearchTerm(''); // Limpiar el campo de búsqueda después de buscar
    }
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
      <TextInput
        style={{
          flex: 1,
          borderWidth: 2,
          borderColor: 'gray',
          borderRadius: 10,
          padding: 10,boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
        }}
        placeholder="Buscar..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <TouchableOpacity onPress={handleSearch} style={{ marginLeft: 10 }}>
        <Text style={{ color: 'black' }}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
}