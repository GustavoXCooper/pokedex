import { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SearchBar } from './SearchBar.js';

export const MainMenu = () => {
    const [search, setSearch] = useState('')

    const handleSearch = (text) => {
        setSearch(text);
        console.log('Buscando:', text);
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/pokedex-title.png')}
                style={styles.title_img}
                rezizeMode='center'
            />
            <SearchBar onSearch={handleSearch} />
            <Text>Você está buscando por: {search}</Text>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '20%',
        backgroundColor: 'red'
    },
    title_img: {
        height: undefined,
        aspectRatio: 656 / 64,
        width: '80%'
    }
})