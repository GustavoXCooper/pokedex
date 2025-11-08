import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

import prevImg from '../assets/prev.png'
import nextImg from '../assets/next.png'

export const ChangePokeButton = ({ currentPokemonId, isPrevious }) => {
    const router = useRouter()
    let nextId
    const setNextId = () => {
        if (currentPokemonId <= 0) {
            router.push({ pathname: '/pokemon/pageNotFound' })
        }

        if (isPrevious) {
            nextId = parseInt(currentPokemonId) - 1
        } else {
            nextId = parseInt(currentPokemonId) + 1
        }
        return nextId
    }
    const pokemonToMove = setNextId()
    return (
        <TouchableOpacity
            onPress={() => router.push({ pathname: '/pokemon/[id]', params: { id: pokemonToMove } })}
            activeOpacity={0.7}
            style={styles.container}
        >
            <View style={styles.button}>
                <Image
                    style={styles.img}
                    source={isPrevious ? prevImg : nextImg}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 25,
        width: 25,
        margin: 0,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        height: 35,
        width: 35,
        borderRadius: 100,
    }
})