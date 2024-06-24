const characters = [
    {
        name: 'character 1',
        color: 'red',
        attributes: [],
    },
    {
        name: 'character 2',
        color: 'yellow',
        attributes: [],
    },
    {
        name: 'character 3',
        color: 'blue',
        attributes: [],
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
        characterCard.style.background = characters[i].color
        // 4. append character card div to player game board div
        gameBoard.appendChild(characterCard)
    }
}

const startGame = () => {
    console.log('Game has begun - HUZZAH!')
    // 1. Show all character cards
    showPlayerGameBoard()
}