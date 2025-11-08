// src/app/_layout.js
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppLayout } from '../layouts/AppLayout';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <SafeAreaProvider style={styles.container}>
      <AppLayout>
        <Stack screenOptions={{ headerShown: false }} />
      </AppLayout>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24 // tem que ver como tirar isso dps
  }
});