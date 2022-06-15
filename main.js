// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modalDiv = document.querySelector("#modal");
modalDiv.classList.add("hidden");

function heartClick(e) {
  const heart = e.target
  heart.innerText = EMPTY_HEART
  mimicServerCall()
  .then(function (response) {
    if(heart.innerText === EMPTY_HEART){
      heart.innerText = FULL_HEART
      heart.classList.add("activated-heart")
    }
    else{
      heart.innerText = EMPTY_HEART
      heart.classList.remove("activated-heart")
    }
  })
  .catch(function(error) {
    modalDiv.classList.remove("hidden");
    modalDiv.querySelector("#modal-message").textContent = error;
    setTimeout( () => {
      modalDiv.classList.add("hidden")
    }, 3000)
  })
}
const littleHearts = document.querySelectorAll(".like-glyph");
for(const glyph of littleHearts) {
  glyph.addEventListener("click", heartClick );
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
