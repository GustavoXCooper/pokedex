import { DisplaySingle } from '../../components/DisplaySingle'
import { useRoute } from '@react-navigation/native';

const PokemonDetailScreen = () => {
    const route = useRoute();
    const { id } = route.params;

    return <DisplaySingle pokemonId={id} />;
}

export default PokemonDetailScreen

