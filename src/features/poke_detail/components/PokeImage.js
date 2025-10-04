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
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2, // 🔥 Valor ALTO, fica na frente
        elevation: 2,
    },
    image: {
        width: '150%',
        height: '150%'
    }
})