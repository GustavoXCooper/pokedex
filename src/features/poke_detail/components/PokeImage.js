import { View, StyleSheet, Image } from "react-native"

export const PokeImage = ({ pokemon }) => {
    return (
        <Image
            style={styles.image}
            source={{ uri: pokemon.sprite }}
            onError={(e) => console.log('Erro ao carregar imagem:', e.nativeEvent.error)}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'contain'
    }
})