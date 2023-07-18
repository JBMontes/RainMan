function displayCard(word) {
  let card = document.querySelector(".card");
  let words = document.querySelector(".word");
  let letterInput = document.querySelector(".letterInput");

  for (let letter of word) {
    let gameWord = document.createElement("p");
    gameWord.classList.add("wordArray");
    gameWord.style.visibility= "hidden"
    gameWord.innerText = letter.toUpperCase();

    words.append(gameWord);

    letterSplit = letter.split("");
    letterSplit.forEach((singleLetter) => {
      let single = document.createElement("p");
      single.classList.add("letter");
      single.innerText = singleLetter.toUpperCase();
      letterInput.append(single);
      card.append(letterInput);

    });
  }
}

fetch("https://random-word-api.herokuapp.com/word")
  .then((response) => response.json())
  .then((JSONresponse) => displayCard(JSONresponse))
  .catch((err) => {
    console.log(err);
  });
  let imgDiv = document.querySelector(".img")
let img = document.querySelector("img");
let alphabet = document.querySelectorAll("li");
let count = 0;
let trys = 5;
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");


for (let letter of alphabet) {
  letter.addEventListener("click", (e) => {
  
    e.preventDefault();

  
    let singleLetter = document.querySelectorAll(".letter");
    
    let wordArray = document.querySelector(".wordArray");
   let innerT = wordArray.innerHTML
 
    let text = e.target.innerText
    
    if (!innerT.includes(text)) {
     
      trys -= 1;
      console.log(trys)
      if (trys == 4) {
     ;
        one.style.visibility = "visible";
        e.target.style.color = "transparent";
      }
      if (trys == 3) {
       ;
        two.style.visibility = "visible";
        one.style.visibility = "hidden";
        e.target.style.color = "transparent";
      }
      if (trys == 2) {
        
        three.style.visibility = "visible";
        two.style.visibility = "hidden";
        e.target.style.color = "transparent";
      }
      if (trys == 1) {
     
        four.style.visibility = "visible";
        three.style.visibility = "hidden";
        e.target.style.color = "transparent";
      }
      if (trys == 0) {
       
        five.style.visibility = "visible";
        four.style.visibility = "hidden";
        document.querySelector(".wordArray").removeAttribute("style")
        document.querySelector(".over").style.visibility = "visible";
        e.target.style.color = "transparent";
    
       
      }
      
    }

    for (let letters of singleLetter) {
      if (e.target.innerText === letters.innerText) {
        count++
        
        
        letters.style.color = "black";
        e.target.style.color = "transparent";
      }
    }
    if(count === innerT.length){
     
      imgDiv.style.backgroundImage = "url(./assets/confetti.gif)";
      one.style.visibility = "hidden";
      two.style.visibility = "hidden"
      three.style.visibility = "hidden"
      four.style.visibility = "hidden"
      five.style.visibility = "hidden"
      let winner = document.querySelector(".winner")
      winner.style.color = "black"
      
    }
  });
}

let button = document.querySelector("button")
button.addEventListener("click", (e)=>{

location.reload()

})

