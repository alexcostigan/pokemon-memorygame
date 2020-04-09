document.addEventListener('DOMContentLoaded', () => {


    const cardArray = [{
            name: 'Bulbasaur',
            img: './images/Bulbasaur.png'
        },

        {
            name: 'Bulbasaur',
            img: './images/Bulbasaur.png'
        },

        {
            name: 'Charmander',
            img: './images/Charmander.png'
        },

        {
            name: 'Charmander',
            img: './images/Charmander.png'
        },

        {
            name: 'Pikachu',
            img: './images/Pikachu.png'
        },

        {
            name: 'Pikachu',
            img: './images/Pikachu.png'
        },

        {
            name: 'Squirtle',
            img: './images/Squirtle.png'
        },

        {
            name: 'Squirtle',
            img: './images/Squirtle.png'
        },

        {
            name: 'Eevee',
            img: './images/Eevee.png'
        },

        {
            name: 'Eevee',
            img: './images/Eevee.png'
        },

        {
            name: 'Pidgey',
            img: './images/Pidgey.png'
        },

        {
            name: 'Pidgey',
            img: './images/Pidgey.png'
        },

    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultsDisplay = document.querySelector('#result')
    var cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/PokeBall.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/PokeBall.png')
            cards[optionTwoId].setAttribute('src', 'images/PokeBall.png')
            alert('Sorry, try again')
        }

        cardsChosen = []
        cardsChosenId = []
        resultsDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultsDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})