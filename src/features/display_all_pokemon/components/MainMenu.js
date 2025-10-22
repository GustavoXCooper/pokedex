import { View, StyleSheet, Image } from 'react-native';
import { SearchBar } from './SearchBar.js';

export const MainMenu = ({ onSearch }) => {

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/pokedex-title.png')}
                style={styles.title_img}
                rezizeMode='center'
            />
            <View style={styles.search_container}>
                <SearchBar onSearch={onSearch} />
                <Image
                    source={require('../assets/button.png')}
                    style={styles.button}
                />
            </View>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 25,
        backgroundColor: 'red',
        width: '100%'
    },
    title_img: {
        height: undefined,
        marginBottom: 35,
        aspectRatio: 656 / 64,
        width: '80%'
    },
    search_container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    button: {
        height: 40,
        width: 40
    }
})