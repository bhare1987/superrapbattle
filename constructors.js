function Rapper(options){
  var options = options || {};
  this.name = options.name;
  this.coast = options.coast;
  this.fire = options.fire;
  this.flow = options.flow;
  this.fortitude = options.fortitude;
};

Rapper.prototype = {
  constructor: Rapper,
  spit: function(opponent){
    var random = Math.floor(Math.random() * 10);
    if(random > this.flow) {
      console.log("Your flow is weak son!");
    } else {
      console.log(this.arsenal.rhyme());
      opponent.dissed(this);
    }
  },
  dissed: function(opponent){
    var random = Math.floor(Math.random() * 10);
    this.fortitude = this.fortitude - (opponent.arsenal.damage + opponent.fire);
    console.log("Brutal! Your fortitude is: " + this.fortitude);
    if(this.fortitude < 1) {
      console.log("You got knocked the fuck out son!");
    }
  },
  buildArsenal: function(options) {
    this.arsenal = new Rhymes(options);
  }
};

function Rhymes(options){
  var options = options || {};
  this.style = options.style;
  this.rhymes = options.rhymes || data.rhymes;
  this.damage = Math.floor(Math.random() * 3);
};

Rhymes.prototype = {
  constructor: Rhymes,
  rhyme: function(){
    return this.rhymes[Math.floor(Math.random() * this.rhymes.length)]
  }
};

function Place(options){
  var _this = this;
  var options = options || {};
  this.opponents = options.opponents;
  this.name = options.name;
  this.coast = Math.floor(Math.random() * 2) === 1 ? "East" : "West";
};

Place.prototype = {
  constructor: Place,
  advantage: function() {
    this.opponents.forEach(function(el){
      if(el.coast === _this.coast){
        el.fire = el.fire * 2;
        el.fortitude = el.fortitude * 2;
      }
    });
  }
};
