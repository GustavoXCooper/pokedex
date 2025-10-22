import { View, TextInput, StyleSheet, Image } from 'react-native';

export const SearchBar = ({ onSearch }) => {

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/lupe-icon.png')}
                style={styles.icon}
            />

            <TextInput
                placeholder="Search"
                onChangeText={(text) => onSearch(text)}
                autoFocus={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0,
        borderColor: '#fff',
        borderRadius: 50,
        width: '80%'
    },
    icon: {
        height: 20,
        width: 20,
        padding: 10,
        margin: 10,
        tintColor: 'red'
    }
})


