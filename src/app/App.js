import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
//import { PokeDetail } from '../features/poke_detail/page/PokeDetail.js';
import { DisplayPokemon } from '../features/display_all_pokemon/page/DisplayPokemon';
import { AppLayout } from '../layouts/AppLayout';

export default function App() {

  return (
    <SafeAreaProvider style={styles.container}>
      <AppLayout>
        <DisplayPokemon />
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

