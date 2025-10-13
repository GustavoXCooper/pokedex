import { View, Text, StyleSheet, Image } from "react-native"
import { PokeImage } from '../components/PokeImage'
import { Type } from '../components/Type'
import { About } from '../components/About'
import { BaseStats } from '../components/BaseStats'

import * as pokemock from '../../../pokemock/pokemock.js'

export const PokeDetail = () => {
    const pokemon = pokemock.getSinglePokemon('Blastoise')

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
                    {pokemon.types.map((type, index) =>
                        <Type
                            type={type}
                            key={index}
                        />
                    )}
                </View>
                <View>
                    <Text style={styles.title}>About</Text>
                    <About pokemon={pokemon} />

                    <Text style={styles.title}>Base Stats</Text>
                    <BaseStats
                        pokemon={pokemon}
                    />
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
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15
    },
    name: {
        color: '#fff',
        fontSize: 30,
        fontFamily: 'Poppins_Bold'
    },
    id: {
        color: '#fff',
        fontSize: 15,
        paddingTop: 5,
        fontFamily: 'Poppins_SemiBold'
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
        height: '75%',
        zIndex: 1,
        elevation: 1,
        paddingTop: 80
    },
    title: {
        margin: 15,
        textAlign: 'center',
        fontFamily: 'Poppins_Bold',
        color: '#b8b8b8'
    }
})