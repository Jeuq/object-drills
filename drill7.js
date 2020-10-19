let characters = [];

const createCharacter = ({
    name = '',
    nickname = '',
    race = '',
    origin = '',
    attack = 0,
    defense = 0
} = {}) => ({
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
});
        

characters.push(createCharacter({name: 'Gandalf the White', nickname: 'gandalf', race: 'Wizard', origin: 'Middle Earth', attack: 10, defense: 8}));
characters.push(createCharacter({name: 'Bilbo Baggins', nickname: 'bilbo', race: 'Hobbit', origin: 'The Shire', attack: 2, defense: 1}));
characters.push(createCharacter({name: 'Froddo Baggins', nickname: 'frodo', race: 'Hobbit', origin: 'The Shire', attack: 3, defense: 2}));
characters.push(createCharacter({name: 'Aragorn son of Arathorn', nickname: 'aragorn', race: 'Man', origin: 'Dunnedain', attack: 6, defense: 8}));
characters.push(createCharacter({name: 'Legolas', nickname: 'legolas', race: 'Elf', origin: 'Woodland Realm', attack: 8, defense: 5}));

console.log(characters);


