import { View, StyleSheet } from "react-native"
import { useState } from "react"
import { MainMenu } from "../components/MainMenu"
import { Pokemonlist } from '../components/PokemonList'
import * as pokemock from '../../../pokemock/pokemock.js'

export const DisplayPokemon = () => {
    const pokemon = pokemock.getAllPokemon();
    const [search, setSearch] = useState('');

    const handleSearch = (text) => {
        setSearch(text);
    }

    return (
        <View style={styles.container}>
            <MainMenu onSearch={handleSearch} search={search} />
            <View style={styles.body}>
                <Pokemonlist pokemon={pokemon} search={search} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        padding: 10,
        flex: 1,
        paddingBottom: 25
    },
    body: {
        flex: 1,
        borderRadius: 15,
        backgroundColor: '#fff',
    },
    flatListContent: {
        flexGrow: 1,
        width: '100%',
    },
    iconContainer: {
        width: '30%',
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: '1.5%',
    }
})