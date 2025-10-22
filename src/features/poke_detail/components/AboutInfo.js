import { View, Image, Text, StyleSheet } from 'react-native'

export const AboutInfo = ({ title, data, icon, middle = false }) => {

    return (
        <View style={[
            styles.container,
            middle && styles.middle
        ]}>
            <View style={styles.data_container}>
                {title === 'moves'.toLowerCase() ? (
                    <View style={styles.moves_container}>
                        {data.map((move, index) =>
                            <Text
                                key={index}
                                style={{
                                    textTransform: 'capitalize', fontFamily: 'Poppins_Regular'
                                }}
                            >{move}</Text>
                        )}
                    </View>
                ) : (
                    <View style={styles.info}>
                        <Image
                            style={styles.icon}
                            source={icon}
                        />
                        <Text style={{ fontFamily: 'Poppins_Regular', marginTop: 3 }}>{data}</Text>
                    </View>
                )}
            </View>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        height: undefined,
        aspectRatio: 512 / 512,
        width: 15,
        marginRight: 5
    },
    data_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 25,
        marginLeft: 25,
        paddingBottom: 15,
        height: '100%',
    },
    title: {
        color: '#666666',
        fontSize: 10,
        textTransform: 'capitalize',
        position: 'absolute',
        bottom: 0,
        fontFamily: 'Poppins_Regular'
    },
    middle: {
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: '#b8b8b8'
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center'
    }
})