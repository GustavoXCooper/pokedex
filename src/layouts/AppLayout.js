// AppLayout.jsx
import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

SplashScreen.preventAutoHideAsync();

export const AppLayout = ({ children }) => {
    const [fontsLoaded, fontError] = useFonts({
        'Poppins_Regular': Poppins_400Regular,
        'Poppins_SemiBold': Poppins_600SemiBold,
        'Poppins_Bold': Poppins_700Bold
    });

    useEffect(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    // enquanto as fontes não carregam, mostra um loading
    if (!fontsLoaded && !fontError) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    // quando as fontes carregarem, renderiza os children
    return children;
}