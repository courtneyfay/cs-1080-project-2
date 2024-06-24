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

const showPlayerGameBoard = () => {
    const gameBoard = document.querySelector('.player-game-board')
    // loop through all character cards
    for (let i = 0; i < characters.length; i++) {
        // 1. create character card div and add class
        const characterCard = document.createElement('div')
        characterCard.classList.add('character-card')
        // 2. add image to character card div
        const image = document.createElement('img')
        image.src = characters[i].imageSrc
        image.alt = 'Image of ' + characters[i].name
        characterCard.appendChild(image)
        // 3. add name to character card div
        const name = document.createElement('p')
        name.innerHTML = characters[i].name
        characterCard.appendChild(name)
        // 4. append character card div to player game board div
        gameBoard.appendChild(characterCard)
    }
}

const startGame = () => {
    console.log('Game has begun - HUZZAH!')
    // 1. Show all character cards
    showPlayerGameBoard()
}