import { Text, View, StyleSheet } from "react-native"

export const StatBar = ({ value }) => {
    const percentage = (value / 252) * 100;
    const getBarColor = (val) => {
        if (val >= 200) return '#4CAF50'; // Verde - Excelente
        if (val >= 150) return '#8BC34A'; // Verde claro - Muito bom
        if (val >= 100) return '#FFC107'; // Amarelo - Bom
        if (val >= 50) return '#FF9800';  // Laranja - Regular
        return '#F44336';                 // Vermelho - Fraco
    }

    const barColor = getBarColor(value);
    return (
        <View style={styles.container}>
            <Text style={styles.value}>{value}</Text>
            <View style={styles.bar_container}>
                <View style={[styles.bar, {
                    width: `${percentage}%`,
                    backgroundColor: barColor
                }]}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        marginRight: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    value: {
        marginRight: 5,
        width: 30,
        fontFamily: 'Poppins_Regular'
    },
    bar_container: {
        width: '100%',
        height: 8,
    },
    bar: {
        height: '100%',
        borderRadius: 5
    }
})