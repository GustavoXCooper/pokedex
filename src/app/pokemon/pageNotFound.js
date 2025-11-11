import { View, Text, Image, StyleSheet } from 'react-native'
import { useRouter } from "expo-router"
import { Link } from 'expo-router';

const PageNotFound = () => {
    const router = useRouter()
    const buttonTitle = 'Return'

    return (
        <View style={styles.container}>
            <Text>Página não encontrada</Text>
            <Link
                title={buttonTitle}
                style={styles.button}
                href="/"
            >
                Voltar ao Início
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        margin: 25,
        padding: 20,
        backgroundColor: 'red',
        borderRadius: 25,
        fontFamily: 'Poppins_Bold'
    }
})


export default PageNotFound

