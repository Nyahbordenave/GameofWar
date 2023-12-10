// created 3 arrays determining the values, suits, and faces of the cards in a traditional deck of 52 cards
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const faces= ['J', 'Q', 'K', 'A']; 

// Created a function called createDeck to iterate the suits and values
function createDeck() {
  const deck = [];
for (let i=0; i < values.length; i++) {
  for (const suit of suits) {
    const card = {
      value: values[i],suit, 
      index: i+2}; 
    
      // made sure call card under "J" were to iterate as their values, and all cards above 9 are going to show their index values instead of just their faces
  if (i >= 9) {
    card.faces = faces [i-9];
  }
deck.push (card);
  }
}
return deck;
}

// function to shuffle the deck of card
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  } // / borrowed code created by dr3nan (https://stackoverflow.com/questions/73603123/function-for-shuffling-a-deck-of-cards-js)
}

// console.log the printed shuffled deck, listing the Value, Suit and the Index of the cards
const deck = createDeck();
shuffleDeck(deck);
console.log("Shuffled Deck:");
for (const card of deck) {
  console.log(`${card.value}  ${card.suit} (${card.index})`);
} 

// create gameofWar as a new function to begin building the game, this is referencing the above code so far
function gameofWar () {
  const deck = createDeck(); 
  shuffleDeck (deck); 

// splitting the cards in half, each player getting 26 cards each
const player1Cards = deck.slice (0,26); 
const player2Cards = deck.slice (26, 52);

// Message that Game of War has Began
console.log ("Game of War Begins!"); 

// creating point system for the players, beginning at zero points 
let player1Points = 0; 
let player2Points= 0; 

// created for loop to determine who is playing first 
for(let turn =1; turn <= 26; turn ++) {
  console.log (`\nTurn ${turn}:`); 

  // will bring out last element used in array, changes the length of the total array to avoid repeats
const newCardForPlayer1 = player1Cards.pop (); 
const newCardforPlayer2 = player2Cards.pop (); 

// declaring what player draws each round 
console.log (`Player One Puts Down: ${newCardForPlayer1.value} ${newCardForPlayer1.suit}`); 

console.log (`Player Two Puts Down: ${newCardforPlayer2.value} ${newCardforPlayer2.suit}`); 

// created if, else loops to compare the index of player 1 and player 2 to determine who won for the round. 
if (newCardForPlayer1.index > newCardforPlayer2.index) {
  console.log (`Player One Wins This Round!`); 
  player1Cards.unshift (newCardForPlayer1, newCardforPlayer2); player1Points +=1;  // unshift was added to add to the beginning of the array to return the new length 
} else if (newCardForPlayer1.index < newCardforPlayer2.index) {
  console.log (`Player Two Wins This Round!`)
  player2Cards.unshift (newCardforPlayer2, newCardForPlayer1); player2Points +=1; // // unshift was added to add to the beginning of the array to return the new length 
} else {
  console.log (`It's a tie! A War has been declared!`);
  }
}

console.log ("\nThe Game of War has ended!")

// rallying up the amount of points accumulated from each player 
console.log ("The Final Scores:"); 

console.log (`Player One has: ${player1Points} points!`); 

console.log (`Player Two has: ${player2Points} points!`); 

 // created if else loop to determine and list the winner 
 if (player1Points > player2Points) {
  console.log ( "Player One wins!");
  } else if (player1Points < player2Points) {
      console.log ("Player Two wins!"); 
      } else {
        console.log ("It's a Draw!");
      }
    }
  

gameofWar (); 