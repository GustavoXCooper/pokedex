import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { PokeImage } from '../components/PokeImage'
import { Type } from '../components/Type'
import { About } from '../components/About'
import { BaseStats } from '../components/BaseStats'
import { ChangePokeButton } from "../components/ChangePokeButton.js"
import { useRouter } from "expo-router"
import { useEffect } from "react"

import * as pokemock from '../../../pokemock/pokemock.js'

export const PokeDetail = ({ pokemonId }) => {
    const router = useRouter()
    const pokemon = pokemock.getSinglePokemonByID(parseInt(pokemonId))


    useEffect(() => {
        if (!pokemon) {
            router.replace('/pokemon/pageNotFound')
        }
    }, [pokemon, router])
    if (!pokemon) return null

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.name}>{pokemon.name}</Text>
                <Text style={styles.id}>#{pokemon.id}</Text>
            </View>
            <View style={styles.img_container}>
                <ChangePokeButton
                    isPrevious={true}
                    currentPokemonId={pokemonId}
                />
                <View style={styles.imageWrapper}>
                    <PokeImage pokemon={pokemon} />
                </View>
                <ChangePokeButton
                    isPrevious={false}
                    currentPokemonId={pokemonId}
                />
            </View>

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
        </View >
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
    },
    img_container: {
        width: '100%',
        height: 300,
        paddingHorizontal: '5%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 50,
        zIndex: 2,
    },
    button: {
        height: 25,
        width: 25,
        margin: 0,
        backgroundColor: 'red',
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageWrapper: {
        flex: 1,
        height: '100%',
        maxHeight: 200,
        maxWidth: 200,
        marginHorizontal: 10
    }
})