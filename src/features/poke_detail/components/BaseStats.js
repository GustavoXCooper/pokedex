import { View, StyleSheet, Text } from 'react-native'
import { StatBar } from './StatBar'

export const BaseStats = ({ pokemon }) => {
    const stats = [
        { label: 'HP', value: pokemon.base_stats.hp },
        { label: 'ATK', value: pokemon.base_stats.attack },
        { label: 'DEF', value: pokemon.base_stats.defense },
        { label: 'SATK', value: pokemon.base_stats.special_attack },
        { label: 'SDEF', value: pokemon.base_stats.special_defense },
        { label: 'SPD', value: pokemon.base_stats.speed }
    ];

    return (
        <View style={styles.container}>
            <View style={styles.description}>
                {stats.map((stat, index) => (
                    <Text key={index} style={styles.item}>
                        {stat.label}
                    </Text>
                ))}
            </View>
            <View style={styles.stats}>
                {stats.map((stat, index) => {
                    return (<StatBar key={index} value={stat.value} />)
                }

                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    description: {
        paddingRight: 15,
        paddingLeft: 15,
        borderRightWidth: 2,
        borderColor: '#b8b8b8',
        justifyContent: 'space-between',
    },
    item: {
        fontFamily: 'Poppins_Bold',
        color: '#b8b8b8',
        fontSize: 14,
        textAlign: 'left',
    },
    stats: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'space-between',
    }
});