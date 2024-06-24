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
    console.log('hitting showPlayerGameBoard')
    const gameBoard = document.querySelector(".player-game-board")
    // todo: make this a loop and do it for all character cards
    // 1. create character card div and add class
    const characterCard = document.createElement('div')
    characterCard.classList.add('character-card')
    // 2. add name to character card div
    const name = document.createElement('p')
    name.innerHTML = characters[0].name
    characterCard.appendChild(name)
    // 3. add color to character card div
    characterCard.style.background = characters[0].color
    // style.background = color;
    // 4. append character card div to player game board div
    gameBoard.appendChild(characterCard)
}

const startGame = () => {
    console.log('Game has begun - HUZZAH!')
    // 1. Show all character cards
    showPlayerGameBoard()
}