const bulbasaur = {
    name: 'Bulbasaur',
    id: '001',
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
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    moves: ['move 1', 'move 2']
}

const ivysaur = {
    name: 'Ivysaur',
    id: '002',
    height: 10 / 10,
    base_stats: {
        hp: 60,
        attack: 62,
        defense: 63,
        special_attack: 80,
        special_defense: 80,
        speed: 60
    },
    types: ['grass', 'poison'],
    weight: 130 / 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    moves: ['move 1', 'move 2']
}
const venusaur = {
    name: 'Venusaur',
    id: '003',
    height: 20 / 10,
    base_stats: {
        hp: 80,
        attack: 82,
        defense: 83,
        special_attack: 100,
        special_defense: 100,
        speed: 80
    },
    types: ['grass', 'poison'],
    weight: 1000 / 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    moves: ['move 1', 'move 2']
}

const charmander = {
    name: 'Charmander',
    id: '004',
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
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    moves: ['move 1', 'move 2']
}

const charmeleon = {
    name: 'Charmeleon',
    id: '005',
    height: 11 / 10,
    base_stats: {
        hp: 58,
        attack: 64,
        defense: 58,
        special_attack: 80,
        special_defense: 65,
        speed: 80
    },
    types: ['fire'],
    weight: 190 / 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    moves: ['move 1', 'move 2']
}

const charizard = {
    name: 'Charizard',
    id: '006',
    height: 17 / 10,
    base_stats: {
        hp: 78,
        attack: 84,
        defense: 78,
        special_attack: 109,
        special_defense: 85,
        speed: 100
    },
    types: ['fire', 'flying'],
    weight: 905 / 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    moves: ['move 1', 'move 2']
}
const squirtle = {
    name: 'Squirtle',
    id: '007',
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
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    moves: ['move 1', 'move 2']
}

const wartortle = {
    name: 'Wartortle',
    id: '008',
    height: 10 / 10,
    base_stats: {
        hp: 59,
        attack: 63,
        defense: 80,
        special_attack: 65,
        special_defense: 80,
        speed: 58
    },
    types: ['water'],
    weight: 225 / 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
    moves: ['move 1', 'move 2']
}

const blastoise = {
    name: 'Blastoise',
    id: '009',
    height: 16 / 10,
    base_stats: {
        hp: 79,
        attack: 83,
        defense: 100,
        special_attack: 85,
        special_defense: 105,
        speed: 78
    },
    types: ['water'],
    weight: 855 / 10,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
    moves: ['move 1', 'move 2']
}

const chikorita = {
    name: 'Chikorita',
    id: '101',
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
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png',
    moves: ['move 1', 'move 2']
}

const cyndaquil = {
    name: 'Cyndaquil',
    id: '104',
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
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png',
    moves: ['move 1', 'move 2']
}

const totodile = {
    name: 'Totodile',
    id: '107',
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
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png',
    moves: ['move 1', 'move 2']
}

export const getAllPokemon = () => {
    return [
        bulbasaur, ivysaur, venusaur,
        charmander, charmeleon, charizard,
        squirtle, wartortle, blastoise,
        chikorita, cyndaquil, totodile
    ]
}

export const getPokemonG1 = () => {
    return [
        bulbasaur, ivysaur, venusaur,
        charmander, charmeleon, charizard,
        squirtle, wartortle, blastoise
    ]
}

export const getPokemonG2 = () => {
    return [chikorita, cyndaquil, totodile]
}

export const getSinglePokemon = (pokename) => {
    const allPokemon = getAllPokemon();
    const pokemon = allPokemon.find(pokemon =>
        pokemon.name.toLowerCase() === pokename.toLowerCase()
    );
    return pokemon;
}