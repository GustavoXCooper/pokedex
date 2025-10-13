import { View, StyleSheet, Text } from 'react-native'
import { AboutInfo } from './AboutInfo'
export const About = ({ pokemon }) => {
    return (
        <View style={styles.container}>
            <View style={styles.details_container}>
                <AboutInfo
                    title='weight'
                    data={pokemon.weight}
                    icon={require('../assets/weight.png')}
                />
                <AboutInfo
                    title='height'
                    middle={true}
                    data={pokemon.height}
                    icon={require('../assets/height.png')}
                />
                <AboutInfo
                    title='moves'
                    data={pokemon.moves}
                />
            </View>
            <View style={styles.description_container}>
                <Text styles={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis eros vitae tellus condimentum maximus sit amet in eros.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    details_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 60
    },
    description: {
        textAlign: 'center',
        fontFamily: 'Poppins_Regular',
    },
    description_container: {
        padding: 20,
    }
})