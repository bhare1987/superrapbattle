var superRapBattle = {
  init: function(){
    superRapBattle.presentation();
    superRapBattle.events();
  },
  presentation: function(){
    superRapBattle.addCharactersToDom(data.characters, '.characterSelect');
  },
  events: function(){
    $('.characterSelect').on('click', '.character', superRapBattle.selectCharacter);
    $('.characterSelect').on('click', '#clearCharacters', superRapBattle.clearCharacters);
    $('.characterSelect').on('click', '#confirmCharacters', superRapBattle.confirmCharacters);
  },
  selectCharacter: function(event){
    var _this = $(this);
    if (!superRapBattle.player2) {
      if(!superRapBattle.player1){
        superRapBattle.player1 = data.characters.filter(function(el){
          return el.name === _this.data('character');
        });
        $(this).addClass('selectedOne');
      } else if (superRapBattle.player1 && !$(this).hasClass('selectedOne')) {
        superRapBattle.player2 = data.characters.filter(function(el){
          return el.name === _this.data('character');
        });
        $(this).addClass('selectedTwo');
        $('.characterSelect').append(
          '<div id="confirmContainer">' +
            '<button id="clearCharacters">Clear</button>' +
            '<button id="confirmCharacters">Confirm!</button>' +
          '</div>'
        );
        window.scrollTo(0, document.body.scrollHeight);
      }
    }
  },
  clearCharacters: function(event){
    event.preventDefault();
    superRapBattle.player1 = undefined;
    superRapBattle.player2 = undefined;
    $('.characterSelect').children('.character').removeClass('selectedOne selectedTwo');
    $('#confirmContainer').remove();
  },
  confirmCharacters: function(event){
    event.preventDefault();
    $('.characterSelect').addClass('hide');
    $('.headliners').removeClass('hide');
    $('#confirmContainer').remove();
    superRapBattle.addHeadlinersToDom();
  },
  config: {
    player1: undefined,
    player2: undefined,
    battleground: undefined,
    activePlayer: undefined,
  },
  getTmpl: function(tmplName){
    return templates[tmplName];
  },
  buildTmpl: function(tmplName, data){
    var tmpl = _.template(superRapBattle.getTmpl(tmplName));
    return tmpl(data);
  },
  buildCharacters: function(tmplName, data){
    var output = superRapBattle.buildTmpl(tmplName, data);
    return output;
  },
  addCharactersToDom: function(arr, target){
    var output = "";
    arr.forEach(function(el){
      output += superRapBattle.buildCharacters('character', el);
    });
    $(target).html(output);
  },
  selectLocation: function(){
    var random = Math.floor(Math.random() * data.locations.length);
    superRapBattle.battleground = new Place({
      opponents: [superRapBattle.player1[0], superRapBattle.player2[0]],
      name: data.locations[random],
    });
  },
  addHeadlinersToDom: function(){
    superRapBattle.selectLocation();
    superRapBattle.battleground.advantage();
    $('.opponent1').html(superRapBattle.buildTmpl('character', superRapBattle.player1[0]));
    $('.opponent2').html(superRapBattle.buildTmpl('character', superRapBattle.player2[0]));
    $('.locationContainer h2 span').html(superRapBattle.battleground.name);
    setTimeout(superRapBattle.startGame, 4000);
  },
  startGame: function() {
    $('.headliners').addClass('hide');
    $('.battleground').removeClass('hide');
    superRapBattle.pushTextToContainer({content: "Welcome to the fight y'all! Today's contestants are: " + superRapBattle.player1[0].name + " and " + superRapBattle.player2[0].name + "."}, '.textContainer', 'textItem');
    $('.player1').html(superRapBattle.buildTmpl('character', superRapBattle.player1[0]));
    superRapBattle.pushTextToContainer({name: "Player1"}, '.player1', 'gameButtons');
    $('.player2').html(superRapBattle.buildTmpl('character', superRapBattle.player2[0]));
    superRapBattle.pushTextToContainer({name: "Player2"}, '.player2', 'gameButtons');
  },
  pushTextToContainer: function(data, container, tmplName){
    var output = superRapBattle.buildTmpl(tmplName, data);
    $(container).append(output);
  }
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

$(document).ready(function(){
  superRapBattle.init();
})

//ideas for powerups Rally the Crowd and get health back
