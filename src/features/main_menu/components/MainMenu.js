import { useState } from 'react';
import { View, Text } from 'react-native';
import { SearchBar } from './SearchBar';

export const MainMenu = () => {
    const [search, setSearch] = useState('')

    const handleSearch = (text) => {
        setSearch(text);
        console.log('Buscando:', text);
    }

    return (
        <View>
            <SearchBar onSearch={handleSearch} />
            <Text>Você está buscando por: {search}</Text>
        </View>
    );

}