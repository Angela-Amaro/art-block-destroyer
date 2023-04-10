//Variables to randomize the prompt
var animals = [
  "zebra",
  "lion",
  "tiger",
  "elephant",
  "anteater",
  "giraffe",
  "monkey",
  "gorilla",
  "chimpanzee",
  "orangutan",
  "lemur",
  "kangaroo",
  "wallaby",
  "koala",
  "wombat",
  "koala",
  "cat",
  "dog",
  "mouse",
  "rat",
  "rabbit",
  "hamster",
  "squirrel",
  "chipmunk",
  "beaver",
  "deer",
  "moose",
  "elk",
  "buffalo",
  "cow",
  "pig",
  "horse",
  "sheep",
  "goat",
  "llama",
  "alpaca",
  "camel",
  "dromedary",
  "llama",
  "alpaca",
  "camel",
  "dromedary",
  "whale",
  "dolphin",
  "shark",
  "seal",
  "sea lion",
  "walrus",
  "penguin",
  "seagull",
  "parrot",
  "crow",
  "raven",
  "owl",
  "eagle",
  "vulture",
  "falcon",
  "hawk",
  "hummingbird",
  "flamingo",
  "pelican",
  "duck",
  "goose",
  "swan",
  "crane",
  "stork",
  "ostrich",
  "emu",
  "kiwi",
  "rooster",
  "chicken",
  "turkey",
  "peacock",
  "frog",
  "toad",
  "lizard",
  "snake",
  "turtle",
  "tortoise",
  "alligator",
  "crocodile",
  "iguana",
  "gecko",
  "chameleon",
  "newt",
  "salamander",
  "spider",
  "scorpion",
  "tarantula",
  "centipede",
  "millipede",
  "crab",
  "lobster",
  "shrimp",
  "snail",
  "slug",
  "clam",
  "oyster",
  "mussel",
  "squid",
  "octopus",
  "jellyfish",
  "starfish",
  "sea urchin",
  "sea cucumber",
  "butterfly",
  "moth",
  "dragonfly",
  "beetle",
  "grasshopper",
  "cricket",
  "cockroach",
  "ant",
  "termite",
  "wasp",
  "bee",
  "hornet",
  "ferret",
  "pangolin",
];

var person = [
  "wizard",
  "witch",
  "princess",
  "prince",
  "king",
  "queen",
  "ninja",
  "samurai",
  "pirate",
  "viking",
  "cowboy",
  "cowgirl",
  "soldier",
  "policeman",
  "policewoman",
  "firefighter",
  "doctor",
  "nurse",
  "teacher",
  "student",
  "astronaut",
  "alien",
  "robot",
  "monster",
  "ghost",
  "vampire",
  "werewolf",
  "zombie",
  "demon",
  "angel",
  "clown",
  "jester",
  "mummy",
];

var adjective = [
  "happy",
  "sad",
  "angry",
  "scared",
  "confused",
  "confident",
  "tired",
  "hungry",
  "thirsty",
  "bored",
  "excited",
  "silly",
  "funny",
  "crazy",
  "weird",
  "strange",
  "odd",
  "scary",
  "creepy",
  "gross",
  "disgusting",
  "nasty",
  "smelly",
  "dirty",
  "clean",
  "pretty",
  "ugly",
  "beautiful",
  "handsome",
  "cute",
  "adorable",
  "tiny",
  "small",
  "big",
  "huge",
  "fat",
  "skinny",
  "slim",
  "muscular",
  "strong",
  "weak",
  "fast",
  "slow",
];

var verb = [
  "running",
  "jumping",
  "singing",
  "dancing",
  "playing",
  "swimming",
  "flying",
  "hopping",
  "skipping",
  "crawling",
  "walking",
  "sitting",
  "standing",
  "lying",
  "sleeping",
  "eating",
  "drinking",
  "reading",
  "writing",
  "drawing",
  "painting",
  "screaming",
  "laughing",
  "crying",
  "fighting",
  "hugging",
  "kissing",
  "hiding",
  "climbing",
  "fishing",
];

var place = [
  "home",
  "school",
  "store",
  "park",
  "beach",
  "mountain",
  "forest",
  "cave",
  "castle",
  "city",
  "town",
  "village",
  "farm",
  "house",
  "mansion",
  "apartment",
  "hotel",
  "restaurant",
  "cafe",
  "bar",
  "library",
  "museum",
  "zoo",
  "circus",
  "theater",
  "cinema",
  "amusement park",
  "theme park",
  "water park",
  "space",
  "ocean",
  "lake",
  "river",
  "pond",
  "swamp",
  "desert",
  "jungle",
  "rainforest",
  "countryside",
  "island",
  "volcano",
];

var color = [
  "red",
  "blue",
  "white",
  "clear",
  "rainbow",
  "purple",
  "iridescent",
  "orange",
  "yellow",
  "green",
  "indigo",
  "violet",
  "fuchsia",
  "cerulean",
  "brown",
  "pink",
  "grey",
  "black",
  "teal",
  "gold",
  "bronze",
  "silver",
  "steel",
  "amber",
  "cream",
];

//generated based on users inputs of wants and dont wants
var genlibrary = [];
//this function will write the prompt
function writePrompt() {
  var artPrompt = generatePrompt();
  var promptText = document.getElementById("genartprompt");
  promptText.value = artPrompt;
}

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
  //if yes, then the category will be added, select a random element from the category,and then adds it to the genlibrary variable
  if (confirm("Do you want your prompt to contain adjectives?")) {
    adj = true;
    let genAdj = adjective[Math.floor(Math.random() * adjective.length)];
    genlibrary.push(genAdj);
  }
  if (confirm("Do you want your prompt to contain colors?")) {
    col = true;
    let genCol = color[Math.floor(Math.random() * color.length)];
    genlibrary.push(genCol);
  }

  if (confirm("Do you want your prompt to contain people?")) {
    per = true;
    let genPer = person[Math.floor(Math.random() * person.length)];
    genlibrary.push(genPer);
  }

  if (confirm("Do you want your prompt to contain animals?")) {
    ani = true;
    let genAni = animals[Math.floor(Math.random() * animals.length)];
    genlibrary.push(genAni);
  }

  if (confirm("Do you want your prompt to contain verbs?")) {
    ver = true;
    let genVer = verb[Math.floor(Math.random() * verb.length)];
    genlibrary.push(genVer);
  }

  if (confirm("Do you want your prompt to contain places?")) {
    pla = true;
    let genPla = place[Math.floor(Math.random() * place.length)];
    genlibrary.push(genPla);
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
}
var generateButton = document.getElementById("mybtn");
// this is an event listener for when the generate button is clicked
generateButton.addEventListener("click", writePrompt);
