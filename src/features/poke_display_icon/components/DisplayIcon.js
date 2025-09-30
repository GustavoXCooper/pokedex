import { View, Text, StyleSheet, Image } from 'react-native';


export const DisplayIcon = ({ pokemon }) => {

    return (
        <View style={styles.container}>
            <View style={styles.id}>
                <Text style={styles.idText}>#003</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: pokemon.sprite }}
                    resizeMode="contain"
                    onError={(e) => console.log('Erro ao carregar imagem:', e.nativeEvent.error)}
                />
            </View>
            <View style={styles.bottom} />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: 150,
        width: 150,
        borderWidth: 0,
        borderRadius: 10,
        margin: 10,
        position: 'relative',
        backgroundColor: '#fff',
        shadowRadius: 15,
        elevation: 10,
    },
    id: {
        display: 'flex',
        alignItems: 'flex-end',
        padding: 10,
        zIndex: 1,
    },
    idText: {
        fontSize: 15,
        color: '#828282',
        fontWeight: 'bold'
    },
    bottom: {
        backgroundColor: '#efefef',
        height: '40%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 10
    },
    imageContainer: {
        position: 'absolute',
        top: 20,
        left: 10,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    image: {
        width: '200%',
        height: '200%'
    },
})