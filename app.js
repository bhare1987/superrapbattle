//constructors:
// rapper, rhymes, location

// var superRapBattle = (function() {
//   var westRhymes = [
//     "Ay yo Dre, stick to producing\nCalling me Arnold, but you Benedict\nEazy-E saw your ass and went in quick \n You got jealous when I got my own company \n But I’m a man, and ain’t nobody humping me \n Trying to sound like Amerikkka’s Most \n You could yell all day, but you don’t come close \n Cause you know I’m the one that flowed \n Ya done run 100 miles, but you still got one to go \n With the L-E-N-C-H-M-O-B, and y’all disgrace the C-P-T \n Cause you’re getting fucked out your green by a White boy \n With no Vaseline.",
//     "Go against Jigga, yo ass is dense / I’m about a dollar, what the fuck is 50 Cents?",
//     "A bitch nigga wit an attitude named Cube\nStep to the Com wit' a feud\nNow what the fuck I look like dissing a whole coast\nYou ain't made shit dope since AmeriKKKa's Most.",
//     "Used to be my homie, used to be my ace\nNow I wanna slap the taste out yo' mouth\nMake you bow down to the Row\nFuckin' me, now I'm fuckin' you, little hoe.",
//     "I hope that your fans understand when you talk about sprayin' me\nThe same records that you makin' is payin' me.",
//     "The symbol on my arm is off limits to challengers\nYou hold the rusty sword, I swing the Excalibur",
//   ];
//   var eastRhymes = [
//     "Manhattan keeps on making it, Brooklyn keeps on taking it\nBronx keeps creating it, and Queens keeps on faking it.",
//     "What you know about being bullied over half your life / Oh that’s right, you should know what that’s like, you’re half white\nVanilla Ice, spill the beans and rice\nI’m eating you alive inside, Jesus Christ!",
//     "You's a pop tart sweetheart, you soft in the middle\nI eat you for breakfast, the watch was exchanged for your necklace.",
//     "I don't need your little fucking magazine. I got XXL's number anyways.... And y'all can't stand it 'cause they gettin' bigger than y'all",
//   ];
//   var player1;
//   var player2;
//   var battleground;
//   var characterSelect = [
//     {
//       name: "Kanye",
//       coast: "West",
//       fire: 7,
//       flow: 7,
//       fortitude: 30
//     },
//     {
//       name: "Jay-Z",
//       coast: "East",
//       fire: 8,
//       flow: 5,
//       fortitude: 80
//     },
//     {
//       name: "Eminem",
//       coast: "East",
//       fire: 6,
//       flow: 9,
//       fortitude: 60
//     },
//     {
//       name: "DMX",
//       coast: "East",
//       fire: 10,
//       flow: 6,
//       fortitude: 70
//     },
//     {
//       name: "Dr. Dre",
//       coast: "West",
//       fire: 8,
//       flow: 5,
//       fortitude: 90
//     },
//     {
//       name: "Snoop Dogg",
//       coast: "West",
//       fire: 5,
//       flow: 8,
//       fortitude: 70
//     }
//   ];
//
//   function Rapper(options){
//     var options = options || {};
//     this.name = options.name;
//     this.coast = options.coast;
//     this.fire = options.fire;
//     this.flow = options.flow;
//     this.fortitude = options.fortitude;
//     this.spit = function(opponent){
//       var random = Math.floor(Math.random() * 10);
//       if(random > this.flow) {
//         console.log("Your flow is weak son!");
//       } else {
//         console.log(this.arsenal.rhyme());
//         opponent.dissed(this);
//       }
//     };
//     this.dissed = function(opponent){
//       var random = Math.floor(Math.random() * 10);
//       this.fortitude = this.fortitude - (opponent.arsenal.damage + opponent.fire);
//       if(this.fortitude < 1) {
//         console.log("You got knocked the fuck out son!");
//       }
//     };
//     this.buildArsenal = function(options) {
//       this.arsenal = new Rhymes(options);
//     };
//   }
//
//   function Rhymes(options) {
//     var options = options || {};
//     this.style = options.style;
//     this.rhymes = options.rhymes;
//     this.damage = Math.floor(Math.random() * 3);
//     this.rhyme = function(){
//       return this.rhymes[Math.floor(Math.random() * this.rhymes.length)]
//     };
//   }
//
//   function Place(options) {
//     var options = options || {};
//     this.opponents = options.opponents;
//     this.name = options.name;
//     this.coast = Math.floor(Math.random() * 2) === 1 ? "East" : "West";
//     this.advantage = function () {
//       this.opponents.forEach(function(el){
//                           if(el.coast === this.coast){
//                             el.fire = el.fire * 2;
//                             el.fortitude = el.fortitude * 2;
//                           }
//                         });
//     };
//
//   }
//
//   function startGame() {
//     var player1Rapper = prompt("Welcome to the fight y'all! Player 1, select your character.");
//     var player2Rapper = prompt("Player 2, select your character.");
//     var location = prompt("Enter your battleground!");
//     player1 = new Rapper(characterSelect.filter(function(el){
//           return el.name === player1Rapper;
//     }))
//     player2 = new Rapper(characterSelect.filter(function(el){
//           return el.name === player2Rapper;
//     }))
//     battleground = new Place({
//       opponents: [player1, player2],
//       name: location
//     })
//   }
//
//   function getPlayer(player) {
//     return player;
//   }
//
//   function getBattleground() {
//     return battleground;
//   }
//
//   function setItem(item, data) {
//     item = data;
//   }
//
//   return {
//     rapper: Rapper,
//     place: Place,
//     start: startGame,
//     player: getPlayer,
//     setup: setItem,
//     battleground: getBattleground
//   }
// })();

var westRhymes = [
  "Ay yo Dre, stick to producing\nCalling me Arnold, but you Benedict\nEazy-E saw your ass and went in quick \n You got jealous when I got my own company \n But I’m a man, and ain’t nobody humping me \n Trying to sound like Amerikkka’s Most \n You could yell all day, but you don’t come close \n Cause you know I’m the one that flowed \n Ya done run 100 miles, but you still got one to go \n With the L-E-N-C-H-M-O-B, and y’all disgrace the C-P-T \n Cause you’re getting fucked out your green by a White boy \n With no Vaseline.",
  "Go against Jigga, yo ass is dense\nI’m about a dollar, what the fuck is 50 Cents?",
  "A bitch nigga wit an attitude named Cube\nStep to the Com wit' a feud\nNow what the fuck I look like dissing a whole coast\nYou ain't made shit dope since AmeriKKKa's Most.",
  "Used to be my homie, used to be my ace\nNow I wanna slap the taste out yo' mouth\nMake you bow down to the Row\nFuckin' me, now I'm fuckin' you, little hoe.",
  "I hope that your fans understand when you talk about sprayin' me\nThe same records that you makin' is payin' me.",
  "The symbol on my arm is off limits to challengers\nYou hold the rusty sword, I swing the Excalibur",
  "Lookin' like straight bozo\nI saw it comin', that's why I went solo.",
  "Your reign on the top was short like leprechauns\nAs I crush so-called willies, thugs, and rapper-dons",
  "This goes out for those that choose to use\nDisrespectful views on the King of N.Y.\nFuck that, why try, throw bleach in your eye\nNow ya brailling it, snatch that light shit, I'm scaling it",
  "You can't handle the whole weight\nSkin needs lotion, teeth need Colgate\nWise up, you little burnt-up french fry\nI'm that type of guy."

];
var eastRhymes = [
  "Manhattan keeps on making it, Brooklyn keeps on taking it\nBronx keeps creating it, and Queens keeps on faking it.",
  "What you know about being bullied over half your life\nOh that’s right, you should know what that’s like, you’re half white\nVanilla Ice, spill the beans and rice\nI’m eating you alive inside, Jesus Christ!",
  "You's a pop tart sweetheart, you soft in the middle\nI eat you for breakfast, the watch was exchanged for your necklace.",
  "I don't need your little fucking magazine. I got XXL's number anyways.... And y'all can't stand it 'cause they gettin' bigger than y'all",
  "Em, you claim your mother's a crackhead and Kim is a known slut\nSo what's Hailie gonna be when she grows up?",
  "And you can't spit, so you obviously must swallow.",
  "So pimpin' 'be easy' quit catching feelings, cause you worth a couple hundred grand and I'm worth millions\n No body's thinkin' bout you, plus your beef ain't legit, so please stay off the T-I-P on my d*ck.",
  "Mad at me 'cause I kick that shit real niggas feel\nWhile 99 percent of your fans wear high heels",
  "I heard a little little homie talking reckless in Vibe\nThat's quite a platform you chose, you should've kept it inside\nOh, you tried\nIt's so childish calling my name on the world stage\nYou need to act your age and not your girl's age",
  "So why don't you wise up, show all the people in the place that you are wack\nInstead of tryna take out LL, you need to take your homeboys off the crack.",
  "How ya like me now? I'm getting busier\nI'm double platinum, I'm watching you get dizzier.",
  "Dre beating on Dee from Pump It Up\nStep to the Dog and get fucked up."

];
var player1;
var player2;
var battleground;
var characterSelect = [
  {
    name: "Kanye",
    coast: "East",
    fire: 7,
    flow: 7,
    fortitude: 30
  },
  {
    name: "Jay-Z",
    coast: "East",
    fire: 8,
    flow: 5,
    fortitude: 80
  },
  {
    name: "Eminem",
    coast: "East",
    fire: 6,
    flow: 9,
    fortitude: 60
  },
  {
    name: "DMX",
    coast: "East",
    fire: 10,
    flow: 6,
    fortitude: 70
  },
  {
    name: "Dr. Dre",
    coast: "West",
    fire: 8,
    flow: 5,
    fortitude: 90
  },
  {
    name: "Snoop Dogg",
    coast: "West",
    fire: 5,
    flow: 8,
    fortitude: 70
  },
  {
    name: "Busta Rhymes",
    coast: "East",
    fire: 8,
    flow: 10,
    fortitude: 70
  },
  {
    name: "Ice Cube",
    coast: "West",
    fire: 10,
    flow: 8,
    fortitude: 80
  },
  {
    name: "Tupac",
    coast: "West",
    fire: 7,
    flow: 9,
    fortitude: 80
  },
  {
    name: "Easy-E",
    coast: "West",
    fire: 8,
    flow: 7,
    fortitude: 90
  }

];

function Rapper(options){
  var options = options || {};
  this.name = options.name;
  this.coast = options.coast;
  this.fire = options.fire;
  this.flow = options.flow;
  this.fortitude = options.fortitude;
  this.spit = function(opponent){
    var random = Math.floor(Math.random() * 10);
    if(random > this.flow) {
      console.log("Your flow is weak son!");
    } else {
      console.log(this.arsenal.rhyme());
      opponent.dissed(this);
    }
  };
  this.dissed = function(opponent){
    var random = Math.floor(Math.random() * 10);
    this.fortitude = this.fortitude - (opponent.arsenal.damage + opponent.fire);
    console.log("Brutal! Your fortitude is: " + this.fortitude);
    if(this.fortitude < 1) {
      console.log("You got knocked the fuck out son!");
    }
  };
  this.buildArsenal = function(options) {
    this.arsenal = new Rhymes(options);
  };
}

function Rhymes(options) {
  var options = options || {};
  this.style = options.style;
  this.rhymes = options.rhymes;
  this.damage = Math.floor(Math.random() * 3);
  this.rhyme = function(){
    return this.rhymes[Math.floor(Math.random() * this.rhymes.length)]
  };
}

function Place(options) {
  var _this = this;
  var options = options || {};
  this.opponents = options.opponents;
  this.name = options.name;
  this.coast = Math.floor(Math.random() * 2) === 1 ? "East" : "West";
  this.advantage = function () {
    this.opponents.forEach(function(el){
                        if(el.coast === _this.coast){
                          el.fire = el.fire * 2;
                          el.fortitude = el.fortitude * 2;
                        }
                      });
  };
}

function startGame() {
  var charStr = "";
  characterSelect.forEach(function(el, idx, arr){
    if(arr.length === (idx - 1)) {
      charStr += ("and " + el.name + ".");
    } else {
    charStr += (el.name + ", ");
    }
  });
  console.log("Welcome to the fight y'all! Today's contestants are: " + charStr);
  var player1Rapper = prompt("Player 1, select your character.");
  var player2Rapper = prompt("Player 2, select your character.");
  var location = prompt("Enter your battleground!");
  player1 = new Rapper(characterSelect.filter(function(el){
    return el.name === player1Rapper;
  })[0])
  player2 = new Rapper(characterSelect.filter(function(el){
    return el.name === player2Rapper;
  })[0])
  battleground = new Place({
    opponents: [player1, player2],
    name: location
  })
  battleground.advantage();
  player1.buildArsenal({
   style: "Wu Tang",
   rhymes: chooseRhymeSet(player1)
  });
  player2.buildArsenal({
   style: "Shaolin",
   rhymes: chooseRhymeSet(player2)
  });
}

function chooseRhymeSet(player){
  if(player.coast === "East"){
    return eastRhymes
  } else {
    return westRhymes
  }
}
