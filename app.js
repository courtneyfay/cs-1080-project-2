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

const questions = [
    {
        question: 'Is your character an animal?',
        value: 'animal',
    },
    {
        question: 'Is your character from Harry Potter?',
        value: 'harryPotter',
    },
    {
        question: 'Is your character tall?',
        value: 'tall',
    },
]

const PLAYER = 'player'
const COMPUTER = 'computer'

const gameData = {
    whoseTurn: PLAYER,
    turnCount: 0,
    playerCard: '',
    computerCard: '',
}

const handleYes = (questionKey) => {
    console.log('hitting yes!', questionKey)
    const value = true
    // TODO: run through computer's card array (not UI) and change ?? to X if value IS a match
    const allCards = document.querySelector('.computer-game-board').querySelectorAll('.computer-character-card')

    for (var index = 0; index < allCards.length; index++) {
        const currentCard = allCards[index]
        console.log('currentCard', currentCard.textContent)
        const isMatch = currentCard.textContent.includes(chosenCard)
        
        if (isMatch) {
            // "flip" card over by hiding p and img tags
            const img = currentCard.children[0]
            const name = currentCard.children[1]

            img.classList.add('hide')
            name.classList.add('hide')
        }
    }

    // change whoseTurn to player

    // increment turnCount
    // gameData.turnCount = gameData.turnCount++
    // console.log('new turn count', gameData.turnCount)
}

const handleNo = (questionKey) => {
    console.log('hitting no!', questionKey)
    const value = false
    // value = false NOT an animal
    // const selectedOption = document.forms['selected-question'].question.value
    // const value = gameData.computerCard.attributes[selectedOption]
    // const answer = value === true ? 'Yes' : 'No'
    // TODO: run through computer's cards and change ?? to X if value is NOT a match

    // change whoseTurn to player

    // increment turnCount
    // gameData.turnCount = gameData.turnCount++
    // console.log('new turn count', gameData.turnCount)
}

const takeComputerTurn = () => {
    // hide player question
    const playerQuestion = document.querySelector('.player-question')
    playerQuestion.classList.add('hide')

    // show computer's yes/no question for the player
    const computerQuestionDiv = document.querySelector('.computer-question')
    const questionElem = document.createElement('p')
    // TODO: randomize the question picking
    questionElem.textContent = questions[0].question
    const yesButton = document.createElement('button')
    yesButton.textContent = 'Yes!'
    yesButton.addEventListener('click', handleYes.bind(null, questions[0].value))
    const noButton = document.createElement('button')
    noButton.textContent = 'No'
    noButton.addEventListener('click', handleNo.bind(null, questions[0].value))
    computerQuestionDiv.append(questionElem)
    computerQuestionDiv.append(yesButton)
    computerQuestionDiv.append(noButton)
}

const handleComputerTurn = (event) => {
    event.preventDefault()

    gameData.whoseTurn = COMPUTER

    takeTurn()
}

const handleQuestionSubmit = (event) => {
    event.preventDefault()
    console.log('gameData.computerCard', gameData.computerCard)
    
    // find value of question in the computer's chosen card
    const selectedOption = document.forms['selected-question'].question.value
    const value = gameData.computerCard.attributes[selectedOption]

    // show yes or no answer to player
    const answerDiv = document.querySelector('.yes-no-answer')
    const answerElement = document.createElement('p')
    const answer = value === true ? 'Yes' : 'No'
    answerElement.textContent = answer
    const instructionsElement = document.createElement('p')
    instructionsElement.textContent = "Click on cards to hide them. When you're finished with your turn, click the 'OKAY' button to allow the computer to play its turn."
    answerElement.append(instructionsElement)
    answerDiv.appendChild(answerElement)

    // disable submit button
    document.getElementById('submit-button').disabled = true

    // show computer turn button
    const computerTurnButton = document.createElement('button')
    computerTurnButton.textContent = "OKAY"
    computerTurnButton.addEventListener('click', handleComputerTurn)
    answerDiv.appendChild(computerTurnButton)
}

const takePlayerTurn = () => {
    // listen for input from selected question submission
    const submitButton = document.getElementById('submit-button')
    submitButton.addEventListener('click', handleQuestionSubmit)
}

const takeTurn = () => {
    if (gameData.turnCount >= 3) {
        // game ends after 3 complete turns, regardless of who is winning
        console.log('hitting game over!')
    }

    if (gameData.whoseTurn === PLAYER) {
        takePlayerTurn()
    } else if (gameData.whoseTurn === COMPUTER) {
        takeComputerTurn()
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

const handleClick = (event) => {
    const chosenCard = event.currentTarget.textContent
    const allCards = document.querySelector('.player-game-board').querySelectorAll('.character-card')

    for (var index = 0; index < allCards.length; index++) {
        const currentCard = allCards[index]
        const isMatch = currentCard.textContent.includes(chosenCard)
        
        if (isMatch) {
            // "flip" card over by hiding p and img tags
            const img = currentCard.children[0]
            const name = currentCard.children[1]

            img.classList.add('hide')
            name.classList.add('hide')
        }
    }
}

const generateCharacterCard = (name, imageSrc) => {
    // create character card button and add class and click handler
    const cardButton = document.createElement('button')
    cardButton.classList.add('character-card')

    // add click handler to button so wrong cards can be flipped over
    cardButton.onclick = handleClick

    // add image to character card div
    const imageElement = document.createElement('img')
    imageElement.src = imageSrc
    imageElement.alt = 'Image of ' + name
    cardButton.appendChild(imageElement)

    // add name to character card div
    const nameElement = document.createElement('p')
    nameElement.classList.add('character-card-name')
    nameElement.textContent = name
    cardButton.appendChild(nameElement)

    return cardButton
}

const randomizeCharacterList = () => {
    const randomized = [...characters]
    let currentIndex = randomized.length
    
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
    
        // Pick a remaining element...
        const randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;
    
        // And swap it with the current element.
        [randomized[currentIndex], randomized[randomIndex]] = [randomized[randomIndex], randomized[currentIndex]]
    }

    return randomized
}

const createPlayerGameBoard = () => {
    const playerGameBoardDiv = document.querySelector('.player-game-board')
    const randomizedCharacters = randomizeCharacterList()

    for (let i = 0; i < randomizedCharacters.length; i++) {
        // generate character card div with name and image
        const characterCard = generateCharacterCard(randomizedCharacters[i].name, randomizedCharacters[i].imageSrc)

        // append character card div to card list div
        playerGameBoardDiv.appendChild(characterCard)
    }
}

const createComputerGameBoard = () => {
    const computerGameBoardDiv = document.querySelector('.computer-game-board')
    const randomizedCharacters = randomizeCharacterList()

    for (let i = 0; i < randomizedCharacters.length; i++) {
        // generate computer ?? card div
        const characterCard = document.createElement('div')
        characterCard.classList.add('computer-character-card')
        characterCard.textContent = '??'

        // append character card div to card list div
        computerGameBoardDiv.appendChild(characterCard)
    }
}

const showGameBoards = () => {
    createPlayerGameBoard()
    createComputerGameBoard()
}

const startGame = () => {
    showGameBoards()
    chooseCards()
    takeTurn()
}