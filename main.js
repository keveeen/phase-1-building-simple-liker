// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// span.likeglyph.addEventListener('Click', mimicServerCall)
// .then(res => res.json())


const hearts = document.querySelectorAll('.like-glyph')

for (let heart of hearts) {
  console.log(heart)

  heart.addEventListener('click', heartClickHandler)

}

function heartClickHandler(e){
  mimicServerCall()
.then((data) => resolve(data, e.target))
.catch(reject)
}




function reject(errMessage){
  console.log(errMessage)
  document.getElementById('modal')
  .removeAttribute('hidden')
  document.getElementById('modal-message').innerText = errMessage
  setTimeout(returnHidden, 3000)

  function returnHidden(){
    document.getElementById('modal')
    .setAttribute('hidden','hidden')
  }
}



function resolve(data, heart){  

  heart.innerText = '♥'
      heart.setAttribute('class', 'activated-heart')

    // if (heart.target === EMPTY_HEART){
    //   heart.innerText = '♥'
    //   heart.setAttribute('class', 'activated-heart')

    // }

    // else if (heart.target === FULL_HEART){

    //   heart.innerText = EMPTY_HEART
    //   heart.removeAttribute('class', 'activated-heart')

    // }

    

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
