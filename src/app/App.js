import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { MainMenu } from '../features/main_menu/components/MainMenu';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <MainMenu />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24
  }
})

