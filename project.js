const button = document.getElementById('btn');
const coffeeImage = document.getElementById('random-image');

button.addEventListener('click', () => {
  fetch('https://coffee.alexflipnote.dev/random.json')
    .then(response => response.json())
    .then(data => {
      coffeeImage.src = data.file;
      coffeeImage.alt = data.title;
    })
    .catch(error => console.log(error));
});

// Get the buttons and count
const likeBtn = document.querySelector(".like-btn");

const dislikeBtn = document.querySelector(".dislike-btn");

const likeCount = document.querySelector(".like-count");

// Set initial count

let count = 0;

// Listen for click events
likeBtn.addEventListener("click", () => {
  count++;
  likeCount.textContent = count;
});

dislikeBtn.addEventListener("click", () => {
  count--;
  likeCount.textContent = count;
});




const imgE1 = document.getElementById('random-image');

const btn = document.getElementById('btn');

const srcArray = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];



btn.addEventListener('click', () => {
    randomImage();
});


let index;


randomImage();
function randomImage() {

    const randomIndex = Math.floor(Math.random()*srcArray.length);

    if(randomIndex !== index) {

        imgE1.src = srcArray[randomIndex];

        index = randomIndex;

    } else{
        randomImage();
    }

   
};
