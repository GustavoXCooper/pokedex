import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PokeDetail } from '../features/poke_detail/page/PokeDetail.js';
import { AppLayout } from '../layouts/AppLayout';

//import * as pokemock from '../pokemock/pokemock.js'

export default function App() {

  return (
    <SafeAreaProvider style={styles.container}>
      <AppLayout>
        <PokeDetail />
      </AppLayout>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24 // tem que ver um jeito de nao precisar disso
  }
})

