const bulbasaur = {
    name: 'Bulbasaur',
    height: 7 / 10,
    base_stats: {
        hp: 45,
        attack: 49,
        defense: 49,
        special_attack: 65,
        special_defense: 65,
        speed: 45
    },
    types: ['grass', 'poison'],
    weight: 69 / 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
}

const charmander = {
    name: 'Charmander',
    height: 6 / 10,
    base_stats: {
        hp: 39,
        attack: 52,
        defense: 43,
        special_attack: 60,
        special_defense: 50,
        speed: 65
    },
    types: ['fire'],
    weight: 85 / 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
}

const squirtle = {
    name: 'Squirtle',
    height: 5 / 10,
    base_stats: {
        hp: 44,
        attack: 48,
        defense: 65,
        special_attack: 50,
        special_defense: 64,
        speed: 43
    },
    types: ['water'],
    weight: 90 / 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
}

const chikorita = {
    name: 'Chikorita',
    height: 9 / 10,
    base_stats: {
        hp: 45,
        attack: 49,
        defense: 65,
        special_attack: 49,
        special_defense: 65,
        speed: 45
    },
    types: ['grass'],
    weight: 64 / 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png'
}

const cyndaquil = {
    name: 'Cyndaquil',
    height: 5 / 10,
    base_stats: {
        hp: 39,
        attack: 52,
        defense: 43,
        special_attack: 60,
        special_defense: 50,
        speed: 65
    },
    types: ['fire'],
    weight: 79 / 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png'
}

const totodile = {
    name: 'Totodile',
    height: 6 / 10,
    base_stats: {
        hp: 50,
        attack: 65,
        defense: 64,
        special_attack: 44,
        special_defense: 48,
        speed: 43
    },
    types: ['water'],
    weight: 95 / 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png'
}

export const getAllPokemon = () => {
    return [
        bulbasaur, charmander, squirtle,
        chikorita, cyndaquil, totodile
    ]
}

export const getPokemonG1 = () => {
    return [bulbasaur, charmander, squirtle]
}

export const getPokemonG2 = () => {
    return [chikorita, cyndaquil, totodile]
}

export const getSinglePokemon = (pokename) => {
    const allPokemon =
        [
            bulbasaur, charmander, squirtle,
            chikorita, cyndaquil, totodile
        ]

    const pokemon = allPokemon.find(pokemon =>
        pokemon.name.toLowerCase() === pokename.toLowerCase()
    );

    return pokemon;
}