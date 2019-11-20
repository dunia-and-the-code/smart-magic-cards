

let suit = '';
const cards = [];

const cardsWrapper = document.querySelector('.cards-wrapper');
const buttonsWrapper = document.querySelector('.btns-wrapper');


function createCards(suitNumber) {
  // Create an array with objects containing the value and the suit of each card
  for (let i = 1; i <= 13; i += 1) {
    const cardObject = {
      value: i,
      suit,
    };
    cards.push(cardObject);
  }


  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = (360 * suitNumber) + (i * 30);
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}


function create4Suits() {
  suit = 'hearts';
  createCards(0);
  suit = 'clubs';
  createCards(1);
  suit = 'spades';
  createCards(2);
  suit = 'diamonds';
  createCards(3);
}


// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  const shuffleButtonElement = document.createElement('button');
  shuffleButtonElement.innerHTML = 'Shuffle';
  shuffleButtonElement.className = 'btn btn-lg btn-secondary';
  shuffleButtonElement.setAttribute('id', 'shuffle');
  shuffleButtonElement.style.margin = '5px';
  buttonsWrapper.append(shuffleButtonElement);

  const showHideButtonElement = document.createElement('button');
  showHideButtonElement.innerHTML = 'Hide';
  showHideButtonElement.className = 'btn btn-lg btn-secondary';
  showHideButtonElement.setAttribute('id', 'show-hide');
  showHideButtonElement.style.margin = '5px';
  buttonsWrapper.append(showHideButtonElement);

  const magicButtonElement = document.createElement('button');
  magicButtonElement.innerHTML = 'Magic';
  magicButtonElement.className = 'btn btn-lg btn-secondary';
  magicButtonElement.setAttribute('id', 'magic');
  magicButtonElement.style.margin = '5px';
  buttonsWrapper.append(magicButtonElement);
}


// Fisher-Yates Algorithm used to shuffle cards array
function shuffleCards() {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
  create4Suits();
}


// Function to set cards element CSS to none hiding the deck
// it then changes the show/hide buttons eventListener to call the showCards function
function hideCards() {
  let cardsWrapper = document.getElementById('cards-wrapper');

  cardsWrapper.style.display = 'none';

  document.getElementById('show-hide').addEventListener('click', showCards);
  document.getElementById('show-hide').innerHTML = 'Show';
}


// Function to set cards element CSS to none showing the deck
// it then changes the show/hide buttons eventListener to call the hideCards function
function showCards() {
  let cardsWrapper = document.getElementById('cards-wrapper');

  cardsWrapper.style.display = 'block';

  document.getElementById('show-hide').addEventListener('click', hideCards);
  document.getElementById('show-hide').innerHTML = 'Hide';
}


// Function to empty cards array and recreate the deck as sorted by suit and value
function magic() {
  cards.length = 0;
  create4Suits();
}


// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  document.getElementById('start-game').style.display = 'none';
  createButtons();
  create4Suits();
  document.getElementById('shuffle').addEventListener('click', shuffleCards);
  document.getElementById('show-hide').addEventListener('click', hideCards);
  document.getElementById('magic').addEventListener('click', magic);
}


document.getElementById('start-game').addEventListener('click', startGame);
