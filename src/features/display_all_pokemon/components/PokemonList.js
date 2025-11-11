import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { DisplayIcon } from './DisplayIcon'
import { useRouter } from 'expo-router';


export const Pokemonlist = ({ pokemon, search }) => {
    const router = useRouter()

    const filteredPokemon = pokemon.filter(pokemon =>
        pokemon.name.toLowerCase().includes(search.toLowerCase().trim())
    );

    const renderItem = ({ item }) => {
        const shouldHide = !item.name.toLowerCase().includes(search.toLowerCase().trim());
        return (
            <TouchableOpacity
                style={[
                    styles.iconContainer,
                    shouldHide && styles.innactive
                ]}
                onPress={() => router.push({ pathname: '/pokemon/[id]', params: { id: item.id } })}
                activeOpacity={0.7}
            >
                <DisplayIcon pokemon={item} />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                style={{
                    borderWidth: 0,
                    borderRadius: 10,
                    padding: 10
                }}
                data={filteredPokemon}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        borderWidth: 0,
        borderRadius: 10
    },
    iconContainer: {
        width: '30%',
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: '1.5%',
    },
    innactive: {
        display: 'none'
    }
})