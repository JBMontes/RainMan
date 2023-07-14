
function displayCard(word){
    let card = document.querySelector(".card")
    let words = document.querySelector(".word")
let letterInput = document.querySelector(".letterInput")

    for(let letter of word){
       
        let gameWord = document.createElement("p")
        gameWord.innerText = letter.toUpperCase()
        
        words.append(gameWord)
        

        letterSplit = letter.split("")
        letterSplit.forEach((singleLetter)=> {
        let single = document.createElement("p")
        single.classList.add("letter")
        let dash = " "
         single.innerText = dash
         
        letterInput.append(single)
            card.append(letterInput)
        })
       
    }
   
}

fetch("https://random-word-api.herokuapp.com/word")
.then((response) => response.json())
.then((JSONresponse) => (displayCard(JSONresponse)))
.catch((err) => {
    console.log(err);
  });