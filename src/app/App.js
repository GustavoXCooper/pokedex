import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { MainMenu } from '../features/main_menu/components/MainMenu'
import { DisplayIcon } from '../features/poke_display_icon/components/DisplayIcon'

import * as pokemock from '../pokemock/pokemock.js'

export default function App() {
  const pokeExample = pokemock.getSinglePokemon('bulbasaur')

  return (
    <SafeAreaProvider style={styles.container}>
      <MainMenu />
      <DisplayIcon
        pokemon={pokeExample}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24
  }
})

