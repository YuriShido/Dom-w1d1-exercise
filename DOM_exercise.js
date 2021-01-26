/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
// const p = document.querySelector('p');
// const words = p.innerText.split(' ');
// for(let word of words) {
//   if(word.length >= 8) {
//    word.style.backgroundColor = "yellow".join;
    

//   }
// }
// const p = document.querySelector('p');
// const words = p.innerText.split(' ');
// for(let word of words) {
//   if(word.length >= 8) {
//    p.innerHTML += "<span style = 'background-color = yellow'>" + word + "</span>";

//   } else {
//     p.innerHTML += "<span>" + word + "</span>";
//   }
//   words.join(' ');

const p = document.querySelector('p');
p.innerHTML = p.innerText
.split(' ')
.map(word => word.length > 8 ? `<span style="background-color: yellow">${word}</span>` : word)
.join(' ');
/*

  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
const link = document.createElement('a');
link.href="http://officeipsum.com/";
link.innerText ="Add the link from javascript";
document.body.appendChild(link);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
p.innerHTML = p.innerHTML.split('.').join('.<br>');

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
  const number = p.innerText.split(' ').length;
  const countor = document.createElement('p');
  countor.innerText = `${number} words`;
  const rtn = document.body.insertBefore(countor, p);

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

// p.innerHTML = p.innerText.split('')
// .forEach(element => {
  
//   if(element === "?") {
//     element.innerHTML = '🤔';

//   } else if(element === "!") {
//     element.innerHTML = '😲';
//   } else element;
// })
// .join('');

Array.from(document.querySelectorAll('p')).forEach(element => {
  element.innerHTML = element.innerHTML
  .replace(/\?/g, '🤔')
  .replace(/\!/g,'😲' );
})