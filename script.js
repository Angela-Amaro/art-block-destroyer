//selects the button on the HTML document
var generateButton = document.getElementById("#generate");

//Variables to randomize the prompt
var animals =
  "zebra, lion, tiger, elephant, giraffe, monkey, gorilla, hippo, rhino, panda, koala, kangaroo, cheetah, leopard, jaguar, wolf, fox, bear, penguin, ostrich, peacock, flamingo, toucan, parrot, owl, eagle, hawk, falcon, hummingbird, bat, whale, dolphin, shark, octopus, squid, crab, lobster, turtle, frog, lizard, snake, alligator, crocodile, ant, bee, butterfly, caterpillar, dragonfly, ladybug, spider, wasp, beetle, cicada, pangolin, secretary bird, fish, shark, stingray, jellyfish, starfish, seahorse, seagull, pufferfish, anteater";

var person =
  "wizard, coder, teacher, student, doctor, nurse, police, firefighter, soldier, astronaut, chef, farmer, mechanic, artist, musician, dancer, actor, actress, singer, athlete, coach, referee, umpire, judge, lawyer, judge, politician, president, king, queen, prince, princess, knight, pirate, cowboy, cowgirl, chief, president, fairy, alien, ghost, vampire, werewolf, zombie, witch";

var adjective =
  "happy, sad, angry, excited, sleepy, hungry, thirsty, tired, bored, scared, confused, silly, crazy, weird, funny, cool, awesome, amazing, beautiful, ugly, cute, adorable, smart, dumb, strong, weak, fast, slow, big, small, tall, short, fat, skinny, skinny, fat, bubbly";

var verb =
  "runing, jumping, swiming, flying, walk, crawl, skip, hop, dance, sing, laugh, cry, eat, drink, sleep, play, fight, hide, seek, chase, hug, kiss, bite, scratch, lick, smell, touch, tickle, talk, yell, whisper, scream, laugh, cry, eat, drink, sleep, play, fight, hide, seek, chase, hug, kiss, bite, scratch, lick, smell, touch, tickle, talk, yell, whisper, scream";

var place =
  "home, school, park, zoo, beach, forest, jungle, river, lake, ocean, mountain, cave, desert, farm, garden, kitchen, bathroom, bedroom, living room, dining room, garage, attic, basement, closet, hallway, classroom, office, library, store, restaurant, movie theater, concert hall, stadium, circus, amusement park, playground, museum, art";

var color =
  "red, blue, white, clear, rainbow, purple, iridescent, orange, yellow, green, indigo, violet, fuchsia, cerulean, brown, pink, grey, black, teal, gold, bronze, silver, steel, amber, cream";

//generated based on users inputs of wants and dont wants
var genlibrary = "";

//this will randomly choose from each category
// function ranAnimal(){
//     var remember = "";
//     var genAni= animals.length * Math.random();
//     remember +=genlibrary.charAt(genAni)
// }
// return remember
// }

//this function will write the prompt
function writePrompt() {
  var artPrompt = generatePrompt();
  var promptText = document.querySelector("#genartprompt");

  promptText.value = artPrompt;
}

//this is an event listener for when the generate button is clicked
generateButton.addEventListener("click", writePrompt);

function generatePrompt() {
var genReady = prompt("Are you ready to get rid of your art block?");
if (genReady == "yes") {
  alert("Great! Let's get started!");
} else {
  alert("Okay, come back when you are ready!");
  return false;
}
//this variable bank will be shortcuts in the statements depending on the users input
var ani = false;
var per = false;
var adj = false;
var ver = false;
var pla = false;
var col = false;

//this will check the boolean based on the users input to be true or false
if (confirm("Do you want your prompt to contain animals?")) {
  ani = true;
  genlibrary += animals;
}

if (confirm("Do you want your prompt to contain people?")) {
  per = true;
  genlibrary += person;
}

if (confirm("Do you want your prompt to contain adjectives?")) {
  adj = true;
  genlibrary += adjective;
}

if (confirm("Do you want your prompt to contain verbs?")) {
  ver = true;
  genlibrary += verb;
}
if (confirm("Do you want your prompt to contain places?")) {
  pla = true;
  genlibrary += place;
}
if (confirm("Do you want your prompt to contain colors?")) {
  col = true;
  genlibrary += color;
}
console.log(genlibrary);

//below is a safety check to make sure the user has selected at least one category
if (
  ani == false &&
  per == false &&
  adj == false &&
  ver == false &&
  pla == false &&
  col == false
) {
  alert("You must select at least one category");
}

//this function will generate the prompt
// function generatePrompt() {
  var prompt = "";
  var library = genlibrary.split(", ");
  var libraryLength = library.length;
  var random = Math.floor(Math.random() * libraryLength);
  prompt += library[random];
  return prompt;
}
