import { PokeDetail } from '../features/poke_detail/page/PokeDetail'

export const DisplaySingle = ({ pokemonId }) => {
    return (
        <PokeDetail pokemonId={pokemonId} />
    )
}