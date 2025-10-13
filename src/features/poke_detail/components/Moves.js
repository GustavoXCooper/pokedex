import { View, Image, Text, StyleSheet } from 'react-native'

export const Moves = ({ data }) => {
    return (
        <View style={styles.container}>
            <View style={styles.data_container}>
                <Text>{data}</Text>
            </View>
            <Text style={styles.title}>moves</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        color: '#666666',
        fontWeight: '700',
        textTransform: 'capitalize',
        textAlign: 'center'
    },
})