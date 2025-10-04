import { View, Text, StyleSheet } from 'react-native'

import getTypeColor from '../../../utils/pokemonColorType'

export const Type = ({ type }) => {
    const backgroundColor = getTypeColor(type)

    return (
        <View style={[styles.container, { backgroundColor: backgroundColor }]}>
            <Text style={styles.text}>{type}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 25,
        width: 75,
        color: '#fff',
        margin: 10,
        borderWidth: 0,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontWeight: '700',
        textTransform: 'capitalize',
    }
})