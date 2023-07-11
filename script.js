// dom work with html
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// data to store
let apiQuotes=[];

// show loading
function loading() {
    loader.hidden= false;
    quoteContainer.hidden= true;
}
// hide loading
function complete() {
    quoteContainer.hidden= false;
    loader.hidden= true;
}
// show new quote
function newQuote(){
    loading();
    // random quote
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //check author  is there or not 
  if (!quote.author){
    authorText.textContent = 'unknown !';
  } else{
    authorText.textContent = quote.author;
  }
  //   check quote length and minimize size
   if (quote.text.length > 120){
    quoteText.classList.add('long-quote');
   } else{
    quoteText.classList.remove('long-quote');
   }
   
    // set quote
    quoteText.textContent = quote.text;
    complete();
}


// get quotes from api first
async function getQuotes(){
    loading();
    const apiUrl='https://type.fit/api/quotes';
    try{
       const response= await fetch(apiUrl);
    //    global variable
     apiQuotes = await response.json();
     newQuote();
} catch(error){
        // error message

    }
}

// twitter btn to work
function tweetQuote(){
    const twitterUrl= `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, '_blank')
}

// event listeners 
newQuoteBtn.addEventListener('click',newQuote)
twitterBtn.addEventListener('click', tweetQuote)



// time change image code
// Get the current time
var currentTime = new Date();
var currentHour = currentTime.getHours();

// Get the image container element
var imageContainer = document.getElementById("imageContainer");

// Define the image sources based on the time
var imageSources = {
  morning: "10399731.png",
  afternoon: "9045220.png",
  evening: "10619339.png",
  night: "10399660.png"
};

// Determine the appropriate image based on the current time
var imageSource;
if (currentHour >= 5 && currentHour < 12) {
  imageSource = imageSources.morning;
} else if (currentHour >= 12 && currentHour < 17) {
  imageSource = imageSources.afternoon;
} else if (currentHour >= 17 && currentHour < 20) {
  imageSource = imageSources.evening;
} else {
  imageSource = imageSources.night;
}

// Create an image element and set the source
var image = document.createElement("img");
image.src = imageSource;

// Append the image to the container
imageContainer.appendChild(image);


// greetings
// Get the current time
var currentTime = new Date();
var currentHour = currentTime.getHours();

// Get the greeting container element
var greetingContainer = document.getElementById("greetingContainer");

// Define the greetings based on the time
var greetings = {
  morning: "Good morning !",
  afternoon: "Good afternoon !",
  evening: "Good evening !",
  night: "Good night !"
};

// Determine the appropriate greeting based on the current time
var greeting;
if (currentHour >= 5 && currentHour < 12) {
  greeting = greetings.morning;
} else if (currentHour >= 12 && currentHour < 17) {
  greeting = greetings.afternoon;
} else if (currentHour >= 17 && currentHour < 20) {
  greeting = greetings.evening;
} else {
  greeting = greetings.night;
}

// Set the greeting text in the container
greetingContainer.textContent = greeting;


// on load
getQuotes();
