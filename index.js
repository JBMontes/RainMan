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

let img = document.querySelector("img");
let alphabet = document.querySelectorAll("li");
let count = 0;
let trys = 5;

for (let letter of alphabet) {
  letter.addEventListener("click", (e) => {
  
    e.preventDefault();

    let one = document.querySelector(".one")
    let two = document.querySelector(".two")
    let three = document.querySelector(".three");
    let four = document.querySelector(".four");
    let five = document.querySelector(".five");
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
      }
      if (trys == 3) {
       ;
        two.style.visibility = "visible";
        one.style.visibility = "hidden"
      }
      if (trys == 2) {
        
        three.style.visibility = "visible";
        two.style.visibility = "hidden";
      }
      if (trys == 1) {
     
        four.style.visibility = "visible";
        three.style.visibility = "hidden";
      }
      if (trys == 0) {
       
        five.style.visibility = "visible";
        four.style.visibility = "hidden";
        document.querySelector(".wordArray").removeAttribute("style")
        document.querySelector(".over").style.visibility = "visible";
       
      }
      
    }

    for (let letters of singleLetter) {
      if (e.target.innerText === letters.innerText) {
        letters.style.color = "black";
        e.target.style.color = "transparent";
      }
    }
  });
}

let button = document.querySelector("button")
button.addEventListener("click", (e)=>{

location.reload()

})