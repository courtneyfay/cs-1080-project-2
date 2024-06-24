const characters = [
    {
        name: 'Fawkes',
    },
    {
        name: 'Gollum',
    },
    {
        name: 'Lady',
    },
    {
        name: 'Cowardly Lion',
    },
    {
        name: 'Epona',
    },
    {
        name: 'Voldemort',
    },
    {
        name: 'Sarumon',
    },
    {
        name: 'Joffrey',
    },
    {
        name: 'Wicked Witch of the West',
    },
    {
        name: 'Ganondorf',
    },
    {
        name: 'Ron',
    },
    {
        name: 'Frodo',
    },
    {
        name: 'Tyrion',
    },
    {
        name: 'Tin Man',
    },
    {
        name: 'Link',
    },
    {
        name: 'Professor McGonagall',
    },
    {
        name: 'Arwen',
    },
    {
        name: 'Arya',
    },
    {
        name: 'Dorothy',
    },
    {
        name: 'Princess Zelda',
    },
    {
        name: 'Dobby',
    },
    {
        name: 'Treebeard',
    },
    {
        name: 'Scarecrow',
    },
    {
        name: 'Navi',
    },
]

const showPlayerGameBoard = () => {
    const gameBoard = document.querySelector('.player-game-board')
    // loop through all character cards
    for (let i = 0; i < characters.length; i++) {
        // 1. create character card div and add class
        const characterCard = document.createElement('div')
        characterCard.classList.add('character-card')
        // 2. add name to character card div
        const name = document.createElement('p')
        name.innerHTML = characters[i].name
        characterCard.appendChild(name)
        // 3. add color to character card div
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
        characterCard.style.background = randomColor
        // 4. append character card div to player game board div
        gameBoard.appendChild(characterCard)
    }
}

const startGame = () => {
    console.log('Game has begun - HUZZAH!')
    // 1. Show all character cards
    showPlayerGameBoard()
}