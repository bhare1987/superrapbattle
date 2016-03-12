function Rapper(options){
  var options = options || {};
  this.name = options.name;
  this.player = options.player || undefined;
  this.fire = options.fire;
  this.flow = options.flow;
  this.fortitude = options.fortitude;
  this.rally = options.rally || 1;
  this.img = options.img;
  this.hometown = options.hometown;
};

Rapper.prototype = {
  constructor: Rapper,
  spit: function(opponent){
    var random = Math.floor(Math.random() * 10);
    if(random > this.flow) {
      superRapBattle.pushTextToContainer({content: "Your flow is weak son!"}, '.textContainer', 'textItem');
    } else {
      superRapBattle.pushTextToContainer(this.arsenal.rhyme(), '.textContainer', 'textItem');
      opponent.dissed(this);
    }
  },
  dissed: function(opponent){
    var random = Math.floor(Math.random() * 10);
    this.fortitude = this.fortitude - (opponent.arsenal.damage + opponent.fire);
    superRapBattle.pushTextToContainer({content:"Brutal diss!"}, '.textContainer', 'textItem');
    var selector = '.' + this.player;
    $(selector).html(superRapBattle.buildTmpl('character', this));
    superRapBattle.pushTextToContainer({player: this.player}, '.' + this.player, 'gameButtons');
    if(this.fortitude < 1) {
      superRapBattle.pushTextToContainer({content: this.name + " got knocked the fuck out son! " + opponent.name + " wins!"}, '.textContainer', 'textItem');
      superRapBattle.endGame();
    }
  },
  rallyCrowd: function() {
    if (this.rally) {
      this.fortitude = this.fortitude + (Math.floor(this.fortitude * 0.2));
      this.rally--;
      superRapBattle.pushTextToContainer({content: "You rallied the crowd and regained some fortitude."}, '.textContainer', 'textItem');
      var selector = '.' + this.player;
      $(selector).html(superRapBattle.buildTmpl('character', this));
      superRapBattle.pushTextToContainer({player: this.player}, selector, 'gameButtons');
    }
  },
  buildArsenal: function(options) {
    this.arsenal = new Rhymes(options);
  }
};

function Rhymes(options){
  var options = options || {};
  this.style = options.style || "fresh";
  this.rhymes = options.rhymes || data.rhymes;
  this.damage = Math.floor(Math.random() * 5 + 1);
};

Rhymes.prototype = {
  constructor: Rhymes,
  rhyme: function() {
    return {
      content: this.rhymes[Math.floor(Math.random() * this.rhymes.length)]
    }
  },
};

function Place(options){
  var options = options || {};
  this.opponents = options.opponents;
  this.name = options.name;
};

Place.prototype = {
  constructor: Place,
  advantage: function() {
    this.opponents.forEach((function(el){
      var random = Math.floor(Math.random() * 3);
      if(el.hometown === this.name){
        if(random === 0) {
          el.fire = el.fire * 1.5;
        }
        else if(random === 1) {
          el.fortitude = el.fortitude * 1.5;
        }
        else if(random === 2) {
          el.rally++;
        }
      }
    }).bind(this));
  }
};
