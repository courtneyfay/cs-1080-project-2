const characters = [
    {
        name: 'Fawkes',
        imageSrc: 'images/fawkes.jpg',
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

const gameData = {
    playerCard: '',
    computerCard: '',
}

const chooseCards = () => {
    // 1. make a copy of the characters array, and choose a random card for player from array copy
    const charactersCopy = [...characters]
    const index = Math.floor(Math.random() * charactersCopy.length)
    const randomPlayerCard = charactersCopy[index]
    // 1. save player card to global value, and remove element from the array copy
    gameData.playerCard = randomPlayerCard
    charactersCopy.splice(index, 1)
    // 2. create player card and append to the dom
    const chosenPlayerCard = generateCharacterCard(randomPlayerCard.name, randomPlayerCard.imageSrc)
    const chosenCardDiv = document.querySelector('.player-chosen-card')
    chosenCardDiv.appendChild(chosenPlayerCard)
    // 3. choose random computer card and remove from copy array
    // 4. save computer card to global value
    console.log('characters', characters.length)
    console.log('charactersCopy', charactersCopy.length)
    console.log('gameData', gameData)
}

const generateCharacterCard = (name, imageSrc) => {
    // 1. create character card div and add class
    const cardElement = document.createElement('div')
    cardElement.classList.add('character-card')

    // 2. add image to character card div
    const imageElement = document.createElement('img')
    imageElement.src = imageSrc
    imageElement.alt = 'Image of ' + name
    cardElement.appendChild(imageElement)

    // 3. add name to character card div
    const nameElement = document.createElement('p')
    nameElement.innerHTML = name
    cardElement.appendChild(nameElement)

    return cardElement
}

const showGameBoard = () => {
    const gameBoardDiv = document.querySelector('.player-game-board')

    // loop through all character cards
    for (let i = 0; i < characters.length; i++) {
        // 1. generate character card div with name and image
        const characterCard = generateCharacterCard(characters[i].name, characters[i].imageSrc)

        // 2. append character card div to card list div
        gameBoardDiv.appendChild(characterCard)
    }
}

const startGame = () => {
    console.log('Game has begun - HUZZAH!')
    showGameBoard()

    // Show player's chosen card
    chooseCards()
    // 3. TODO: Take a turn (player 1 asks yes/no question from preselected list, player 2 responds yes or no (corrected if you choose wrong), player 1 knocks down cards)
    // 3b. TODO: Keep looping turns
    // 3a. TODO: Take a turn to see if you can win - player 1 asks if it is X character - RIGHT: you win, WRONG: player 2's turn
}