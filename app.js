document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'sushi1',
        img: 'assets/sushi1.png'
      },
      {
        name: 'sushi2',
        img: 'assets/sushi2.jpeg'
      },
      {
        name: 'sushi3',
        img: 'assets/sushi3.jpeg'
      },
      {
        name: 'sushi4',
        img: 'assets/sushi4.png'
      },
      {
        name: 'sushi5',
        img: 'assets/sushi5.png'
      },
      {
        name: 'sushi6',
        img: 'assets/sushi6.png'
      },
      {
        name: 'sushi1',
        img: 'assets/sushi1.png'
      },
      {
        name: 'sushi2',
        img: 'assets/sushi2.jpeg'
      },
      {
        name: 'sushi3',
        img: 'assets/sushi3.jpeg'
      },
      {
        name: 'sushi4',
        img: 'assets/sushi4.png'
      },
      {
        name: 'sushi5',
        img: 'assets/sushi5.png'
      },
      {
        name: 'sushi6',
        img: 'assets/sushi6.png'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //BOARD CREATION
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'assets/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //MATCH CHECK
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'assets/blank.png')
        cards[optionTwoId].setAttribute('src', 'assets/blank.png')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'assets/white.png')
        cards[optionTwoId].setAttribute('src', 'assets/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'assets/blank.png')
        cards[optionTwoId].setAttribute('src', 'assets/blank.png')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'WINNER!'
      }
    }
  
    //FLIP CARD
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })