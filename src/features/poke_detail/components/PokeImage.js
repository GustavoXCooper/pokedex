import { View, StyleSheet, Image } from "react-native"

export const PokeImage = ({ pokemon }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: pokemon.sprite }}
                resizeMode="contain"
                onError={(e) => console.log('Erro ao carregar imagem:', e.nativeEvent.error)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 10,
        alignItems: 'center',
        top: 30,
        left: 0,
        right: 0,
        zIndex: 2,
        elevation: 2,
        height: 300,

    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})