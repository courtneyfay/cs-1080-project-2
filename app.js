const characters = [
    {
        name: 'Fawkes',
        imageSrc: 'images/fawkes.jpg',
        attributes: {
            animal: true,
            harryPotter: true,
            tall: false,
        },
    },
    {
        name: 'Gollum',
        imageSrc: 'images/gollum.jpg',
        },
    {
        name: 'Lady',
        imageSrc: 'images/lady.jpg',
    },
    {
        name: 'Cowardly Lion',
        imageSrc: 'images/cowardly-lion.jpg',
    },
    {
        name: 'Epona',
        imageSrc: 'images/epona.png',
    },
    {
        name: 'Voldemort',
        imageSrc: 'images/voldemort.jpg',
    },
    {
        name: 'Sarumon',
        imageSrc: 'images/sarumon.jpg',
    },
    {
        name: 'Joffrey',
        imageSrc: 'images/joffrey.png',
    },
    {
        name: 'Wicked Witch of the West',
        imageSrc: 'images/wicked-witch-of-the-west.jpg',
    },
    {
        name: 'Ganondorf',
        imageSrc: 'images/ganondorf.png',
    },
    {
        name: 'Ron',
        imageSrc: 'images/ron.jpg',
    },
    {
        name: 'Frodo',
        imageSrc: 'images/frodo.jpg',
    },
    {
        name: 'Tyrion',
        imageSrc: 'images/tyrion.png',
    },
    {
        name: 'Tin Man',
        imageSrc: 'images/tin-man.jpg',
    },
    {
        name: 'Link',
        imageSrc: 'images/link.jpg',
    },
    {
        name: 'Professor McGonagall',
        imageSrc: 'images/professor-mcgonagall.jpg',
    },
    {
        name: 'Arwen',
        imageSrc: 'images/arwen.jpg',
    },
    {
        name: 'Arya',
        imageSrc: 'images/arya.jpg',
    },
    {
        name: 'Dorothy',
        imageSrc: 'images/dorothy.jpg',
    },
    {
        name: 'Princess Zelda',
        imageSrc: 'images/princess-zelda.jpg',
    },
    {
        name: 'Dobby',
        imageSrc: 'images/dobby.jpg',
    },
    {
        name: 'Treebeard',
        imageSrc: 'images/treebeard.jpg',
    },
    {
        name: 'Scarecrow',
        imageSrc: 'images/scarecrow.jpg',
    },
    {
        name: 'Navi',
        imageSrc: 'images/navi.png',
    },
]

const PLAYER = 'player'
const COMPUTER = 'computer'

const gameData = {
    whoseTurn: PLAYER,
    turnsTaken: 0,
    playerCard: '',
    computerCard: '',
}

const takePlayerTurn = () => {
    console.log('hitting player turn')
    // 1. player asks yes/no question from preselected list to computer
    // 2. computer responds yes or no
    // 3. player knocks down cards manually based on information
    // 4. change to computer's turn
    // TODO: how does the computer know when it's their turn?
}

const takeTurn = () => {
    console.log('takeTurn', gameData.whoseTurn)
    if (gameData.whoseTurn === PLAYER) {
        takePlayerTurn()
    } else if (gameData.whoseTurn === COMPUTER) {
        // TODO: what happens when it's the computer's turn?
        console.log('hitting computer turn')
    } else {
        // game is over?
        console.log('hitting else')
    }
}

const chooseRandomCard = (array) => {
    // choose random card
    const index = Math.floor(Math.random() * array.length)
    const randomCard = array[index]

    // remove from array
    array.splice(index, 1)

    return randomCard
}

const chooseCards = () => {
    const charactersCopy = [...characters]

    // 1. choose random card for player and save to gameData variable
    const randomPlayerCard = chooseRandomCard(charactersCopy)
    gameData.playerCard = randomPlayerCard

    // 2. create player card and append
    const chosenPlayerCard = generateCharacterCard(randomPlayerCard.name, randomPlayerCard.imageSrc)
    const chosenCardDiv = document.querySelector('.player-chosen-card')
    chosenCardDiv.appendChild(chosenPlayerCard)

    // 3. choose random computer card and save to gameData variable
    const randomComputerCard = chooseRandomCard(charactersCopy)
    gameData.computerCard = randomComputerCard
}

const generateCharacterCard = (name, imageSrc) => {
    // create character card div and add class
    const cardElement = document.createElement('div')
    cardElement.classList.add('character-card')

    // add image to character card div
    const imageElement = document.createElement('img')
    imageElement.src = imageSrc
    imageElement.alt = 'Image of ' + name
    cardElement.appendChild(imageElement)

    // add name to character card div
    const nameElement = document.createElement('p')
    nameElement.innerHTML = name
    cardElement.appendChild(nameElement)

    return cardElement
}

const showGameBoard = () => {
    const gameBoardDiv = document.querySelector('.player-game-board')

    // loop through all character cards
    for (let i = 0; i < characters.length; i++) {
        // generate character card div with name and image
        const characterCard = generateCharacterCard(characters[i].name, characters[i].imageSrc)

        // append character card div to card list div
        gameBoardDiv.appendChild(characterCard)
    }
}

const startGame = () => {
    console.log('Game has begun - HUZZAH!')
    showGameBoard()
    chooseCards()
    takeTurn()
    // 4. TODO: Take a turn to see if you can win - player 1 asks if it is X character - RIGHT: you win, WRONG: player 2's turn

    // 5. TODO: Keep looping turns
    // let x = 0
    // TODO: change to !gameOver value
    // while (gameData.turnsTaken < 3) {
    //     console.log('while loop')
    //     takeTurn()
    //     x += gameData.turnsTaken
    // }
}