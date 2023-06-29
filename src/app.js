//First variables
let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

//Function
function generator(who, action, what, when) {
  const randomWho = Math.floor(Math.random() * who.length);
  const randomAction = Math.floor(Math.random() * action.length);
  const randomWhat = Math.floor(Math.random() * what.length);
  const randomWhen = Math.floor(Math.random() * when.length);
  return `${who[randomWho]} ${action[randomAction]} ${what[randomWhat]} ${when[randomWhen]}`;
}

//Final variables and html link
let excuseGenerator = generator(who, action, what, when);
const htmlText = document.getElementById("heading");
htmlText.innerText = excuseGenerator;

//console.log(excuseGenerator);




