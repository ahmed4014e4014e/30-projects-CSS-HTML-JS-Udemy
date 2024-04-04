const arrayOfQuotes = [
  {
    author: "Nelson Mandela",
    quote:
      "The gratest glory in living lies not in never falling, but in rising every time we fall.",
  },
  {
    author: "Mahatma Gandhi",
    quote: "You must be the change you wish to see in the world.",
  },
  {
    author: "Mother Teresa",
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
  },
  {
    author: "Fraklin D. Roosevelt",
    quote: "The only thing we have to fear is fear itself.",
  },
  {
    author: "Martin Luther King",
    quote:
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
  },
 
];

document.getElementById("quoteBtn").onclick = () => {
  let random = parseInt(Math.random() * arrayOfQuotes.length + 1);
  
  document.getElementById(
    "quoteOutput"
  ).innerHTML = `<span>${arrayOfQuotes[random].quote}</span>`;

  document.getElementById(
    "authorOutput"
  ).innerHTML = `<small>${arrayOfQuotes[random].author}</small>`;
};
