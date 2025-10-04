import { View, Text, StyleSheet, Image } from "react-native"
import { PokeImage } from '../components/PokeImage'
import { Type } from '../components/Type'

import * as pokemock from '../../../pokemock/pokemock.js'

export const PokeDetail = () => {
    const pokemon = pokemock.getSinglePokemon('bulbasaur')

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.name}>{pokemon.name}</Text>
                <Text style={styles.id}>#{pokemon.id}</Text>
            </View>
            <PokeImage
                pokemon={pokemon}
            />
            <View style={styles.bottom}>
                <View style={styles.types}>
                    {pokemon.types.map(type =>
                        <Type type={type}></Type>
                    )}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#b8b8b8',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        position: 'relative',
    },
    top: {
        height: '7%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15
    },
    name: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '900'
    },
    id: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '700',
        paddingTop: 5
    },
    types: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center'
    },
    bottom: {
        backgroundColor: '#fff',
        width: '90%',
        borderWidth: 0,
        borderRadius: 5,
        bottom: 20,
        position: 'absolute',
        height: '67%',
        zIndex: 1,
        elevation: 1,
        paddingTop: 60
    }
})