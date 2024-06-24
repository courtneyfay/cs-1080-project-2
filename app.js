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
        attributes: {
            animal: false,
            harryPotter: false,
            tall: false,
        },
    },
    {
        name: 'Lady',
        imageSrc: 'images/lady.jpg',
        attributes: {
            animal: true,
            harryPotter: false,
            tall: false,
        },
    },
    {
        name: 'Cowardly Lion',
        imageSrc: 'images/cowardly-lion.jpg',
        attributes: {
            animal: true,
            harryPotter: false,
            tall: false,
        },
    },
    {
        name: 'Epona',
        imageSrc: 'images/epona.png',
        attributes: {
            animal: true,
            harryPotter: false,
            tall: true,
        },
    },
    {
        name: 'Voldemort',
        imageSrc: 'images/voldemort.jpg',
        attributes: {
            animal: false,
            harryPotter: true,
            tall: false,
        },
    },
    {
        name: 'Sarumon',
        imageSrc: 'images/sarumon.jpg',
        attributes: {
            animal: false,
            harryPotter: false,
            tall: false,
        },
    },
    {
        name: 'Joffrey',
        imageSrc: 'images/joffrey.png',
        attributes: {
            animal: false,
            harryPotter: false,
            tall: false,
        },
    },
    {
        name: 'Wicked Witch of the West',
        imageSrc: 'images/wicked-witch-of-the-west.jpg',
        attributes: {
            animal: false,
            harryPotter: false,
            tall: false,
        },
    },
    {
        name: 'Ganondorf',
        imageSrc: 'images/ganondorf.png',
        attributes: {
            animal: false,
            harryPotter: false,
            tall: true,
        },
    },
    {
        name: 'Ron',
        imageSrc: 'images/ron.jpg',
        attributes: {
            animal: false,
            harryPotter: true,
            tall: false,
        },
    },
    {
        name: 'Frodo',
        imageSrc: 'images/frodo.jpg',
        attributes: {
            animal: false,
            harryPotter: false,
            tall: false,
        },
    },
    {
        name: 'Tyrion',
        imageSrc: 'images/tyrion.png',
        attributes: {
            animal: false,
            harryPotter: false,
            tall: false,
        },
    },
    {
        name: 'Tin Man',
        imageSrc: 'images/tin-man.jpg',
        attributes: {
            animal: false,
            harryPotter: false,
            tall: false,
        },
    },
    {
        name: 'Link',
        imageSrc: 'images/link.jpg',
        attributes: {
            animal: false,
            harryPotter: false,
            tall: false,
        },
    },
    {
        name: 'Professor McGonagall',
        imageSrc: 'images/professor-mcgonagall.jpg',
        attributes: {
            animal: false,
            harryPotter: true,
            tall: false,
        },
    },
    {
        name: 'Arwen',
        imageSrc: 'images/arwen.jpg',
        attributes: {
            animal: false,
            harryPotter: false,
            tall: false,
        },
    },
    {
        name: 'Arya',
        imageSrc: 'images/arya.jpg',
        attributes: {
            animal: false,
            harryPotter: false,
            tall: false,
        },
    },
    {
        name: 'Dorothy',
        imageSrc: 'images/dorothy.jpg',
        attributes: {
            animal: false,
            harryPotter: false,
            tall: false,
        },
    },
    {
        name: 'Princess Zelda',
        imageSrc: 'images/princess-zelda.jpg',
        attributes: {
            animal: false,
            harryPotter: false,
            tall: false,
        },
    },
    {
        name: 'Dobby',
        imageSrc: 'images/dobby.jpg',
        attributes: {
            animal: false,
            harryPotter: true,
            tall: false,
        },
    },
    {
        name: 'Treebeard',
        imageSrc: 'images/treebeard.jpg',
        attributes: {
            animal: false,
            harryPotter: false,
            tall: true,
        },
    },
    {
        name: 'Scarecrow',
        imageSrc: 'images/scarecrow.jpg',
        attributes: {
            animal: false,
            harryPotter: false,
            tall: false,
        },
    },
    {
        name: 'Navi',
        imageSrc: 'images/navi.png',
        attributes: {
            animal: false,
            harryPotter: false,
            tall: false,
        },
    },
]

const PLAYER = 'player'
const COMPUTER = 'computer'

const gameData = {
    whoseTurn: PLAYER,
    question: '',
    turnsTaken: 0,
    playerCard: '',
    computerCard: '',
}

const handleSubmit = (event) => {
    event.preventDefault()
    const selectedOption = document.forms['selected-question'].question.value
    console.log('selectedOption', selectedOption)
    // console.log('computerCard', computerCard)
    const value = gameData.computerCard.attributes[selectedOption]
    console.log('value', value)
}

const takePlayerTurn = () => {
    console.log('hitting player turn')
    // listen for input from selected question submission
    const submitButton = document.getElementById('submit-button')
    submitButton.addEventListener('click', handleSubmit)

    // 2. computer evaluates question and responds yes or no
    // 3. player knocks down cards manually based on information
    // 4. change to computer's turn
}

const takeTurn = () => {
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