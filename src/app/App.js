import { Text, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Text> Projeto zerado </Text>

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffff',
  }
})

