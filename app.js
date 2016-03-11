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
    $('header').on('click', '#clearCharacters', superRapBattle.clearCharacters);
    $('header').on('click', '#confirmCharacters', superRapBattle.confirmCharacters);
  },
  selectCharacter: function(event){
    if (!superRapBattle.player2) {
      if(!superRapBattle.player1){
        superRapBattle.player1 = $(this).data('character');
        $(this).addClass('selectedOne');
      } else if (superRapBattle.player1 && !$(this).hasClass('selectedOne')) {
        superRapBattle.player2 = $(this).data('character');
        $(this).addClass('selectedTwo');
        $('header').append(
          '<div id="confirmContainer">' +
            '<button id="clearCharacters">Clear</button>' +
            '<button id="confirmCharacters">Confirm!</button>' +
          '</div>'
        );
        $(window).scrollTop(0);
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
