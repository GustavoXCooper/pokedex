import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PokeDetail } from '../features/poke_detail/page/PokeDetail.js';

//import * as pokemock from '../pokemock/pokemock.js'

export default function App() {

  return (
    <SafeAreaProvider style={styles.container}>
      <PokeDetail></PokeDetail>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24
  }
})

