//constructors:
// rapper, rhymes, location

var superRapBattle = (function(){
  var westRhymes = [
    “Ay yo Dre, stick to producing / Calling me Arnold, but you Benedict / Eazy-E saw your ass and went in quick / You got jealous when I got my own company / But I’m a man, and ain’t nobody humping me / Trying to sound like Amerikkka’s Most / You could yell all day, but you don’t come close / Cause you know I’m the one that flowed / Ya done run 100 miles, but you still got one to go / With the L-E-N-C-H-M-O-B, and y’all disgrace the C-P-T / Cause you’re getting fucked out your green by a White boy / With no Vaseline.”,
    “Go against Jigga, yo ass is dense / I’m about a dollar, what the fuck is 50 Cents?”,
    "A bitch nigga wit an attitude named Cube/Step to the Com wit' a feud/Now what the fuck I look like dissing a whole coast/You ain't made shit dope since AmeriKKKa's Most.",
    "Used to be my homie, used to be my ace/Now I wanna slap the taste out yo' mouth/Make you bow down to the Row/Fuckin' me, now I'm fuckin' you, little hoe.",
    "I hope that your fans understand when you talk about sprayin' me/The same records that you makin' is payin' me.",
    "The symbol on my arm is off limits to challengers /You hold the rusty sword, I swing the Excalibur",
  ];
  var eastRhymes = [
    “Manhattan keeps on making it, Brooklyn keeps on taking it / Bronx keeps creating it, and Queens keeps on faking it.”,
    “What you know about being bullied over half your life / Oh that’s right, you should know what that’s like, you’re half white / Vanilla Ice, spill the beans and rice / I’m eating you alive inside, Jesus Christ!”,
    "You's a pop tart sweetheart, you soft in the middle/I eat you for breakfast, the watch was exchanged for your necklace.",
    "I don't need your little fucking magazine. I got XXL's number anyways.... And y'all can't stand it 'cause they gettin' bigger than y'all",
  ];
  function Rapper(options){
    var options = options || {};
    this.name = options.name;
    this.coast = options.coast;
    this.power = options.power;
    this.flow = options.flow;
    this.fortitude = options.fortitude;
    this.spit = function(opponent){
      var random = Math.floor(Math.random() * 10);
      if(random > this.flow) {
        console.log("Your flow is weak son!");
      } else {

      }
    },
    this.dissed = function(opponent){
      var random = Math.floor(Math.random() * 10);
    },
    this.equip = function(options){
      this.arsenal = new Rhymes(options);
    }
  };

  function Rhymes(options) {
    var options = options || {};
    this.style = options.style;
    this.rhymes = options.rhymes;
    this.rhyme = function(){
      return this.rhymes[Math.floor(Math.random() * this.rhymes.length)]
    },
  };

  function Place(options) {
    var options = options || {};
    this.opponents = options.opponents;
    this.name = options.name;
    this.coast = Math.floor(Math.random() * 2) === 1 ? "East" : "West";
    this.advantage = function(){
      this.opponents.forEach(function(el){
        if(el.coast === this.coast){
          el.power * 2;
          el.fortitude * 2;
        }
      });
    };
  };

  return {
    rapper = Rapper,
    rhymes = Rhymes,
    place = place
  }
})();
