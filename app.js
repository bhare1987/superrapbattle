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
    $('.battleground').on('click', 'button[name="spit"]', superRapBattle.spit);
    $('.battleground').on('click', 'button[name="rally"]', superRapBattle.rally);
    $('header').on('click', 'button[name="restart"]', superRapBattle.restart);

  },
  selectCharacter: function(event){
    var _this = $(this);
    if (!superRapBattle.player2) {
      if(!superRapBattle.player1){
        var char1Data = data.characters.filter(function(el){
          return el.name === _this.data('character');
        });
        superRapBattle.player1 = new Rapper(char1Data[0]);
        superRapBattle.player1.player = "player1";
        superRapBattle.player1.buildArsenal();
        $(this).addClass('selectedOne');
      } else if (superRapBattle.player1 && !$(this).hasClass('selectedOne')) {
        var char2Data = data.characters.filter(function(el){
          return el.name === _this.data('character');
        });
        superRapBattle.player2 = new Rapper(char2Data[0]);
        superRapBattle.player2.player = "player2";
        superRapBattle.player2.buildArsenal();
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
  spit: function(event){
    event.preventDefault();
    if($(this).data('player') === superRapBattle.activePlayer){
      if(superRapBattle.player1.player === superRapBattle.activePlayer){
        superRapBattle.player1.spit(superRapBattle.player2);
      } else {
        superRapBattle.player2.spit(superRapBattle.player1);
      }
    }
    superRapBattle.setActivePlayer();
  },
  rally: function(event){
    event.preventDefault();
    if($(this).data('player') === superRapBattle.activePlayer){
      if(superRapBattle.player1.player === superRapBattle.activePlayer){
        superRapBattle.player1.rallyCrowd();
      } else {
        superRapBattle.player2.rallyCrowd();
      }
    }
    superRapBattle.setActivePlayer();
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
      opponents: [superRapBattle.player1, superRapBattle.player2],
      name: data.locations[random],
    });
  },
  addHeadlinersToDom: function(){
    superRapBattle.selectLocation();
    superRapBattle.battleground.advantage();
    $('.opponent1').html(superRapBattle.buildTmpl('character', superRapBattle.player1));
    $('.opponent2').html(superRapBattle.buildTmpl('character', superRapBattle.player2));
    $('.locationContainer h2 span').html(superRapBattle.battleground.name);
    setTimeout(superRapBattle.startGame, 4000);
  },
  startGame: function() {
    $('.headliners').addClass('hide');
    $('.battleground').removeClass('hide');
    superRapBattle.pushTextToContainer({content: "Welcome to the fight y'all! Today's contestants are: " + superRapBattle.player1.name + " and " + superRapBattle.player2.name + "."}, '.textContainer', 'textItem');
    $('.player1').html(superRapBattle.buildTmpl('character', superRapBattle.player1));
    superRapBattle.pushTextToContainer({player: "player1"}, '.player1', 'gameButtons');
    $('.player2').html(superRapBattle.buildTmpl('character', superRapBattle.player2));
    superRapBattle.pushTextToContainer({player: "player2"}, '.player2', 'gameButtons');
    superRapBattle.setActivePlayer();
  },
  pushTextToContainer: function(data, container, tmplName){
    var output = superRapBattle.buildTmpl(tmplName, data);
    $(container).append(output);
    document.querySelectorAll(container)[0].scrollTop = document.querySelectorAll(container)[0].scrollHeight;
  },
  setActivePlayer: function(){
    $('.battleground').find('.character').removeClass('activePlayer');
    if(!superRapBattle.activePlayer) {
      var random = Math.floor(Math.random() * 2);
       if(random === 1) {
         superRapBattle.activePlayer = superRapBattle.player1.player;
         $('.player1 > div.character').addClass('activePlayer');
      } else {
        superRapBattle.activePlayer = superRapBattle.player2.player;
        $('.player2 > div.character').addClass('activePlayer');
      }
    } else if(superRapBattle.activePlayer === superRapBattle.player1.player){
      superRapBattle.activePlayer = superRapBattle.player2.player;
      $('.player2 > div.character').addClass('activePlayer');
    } else if (superRapBattle.activePlayer === superRapBattle.player2.player) {
      superRapBattle.activePlayer = superRapBattle.player1.player;
      $('.player1 > div.character').addClass('activePlayer');
    }
  },
  endGame: function(){
    $('.gameButtons').remove();
    $('header').append('<button name="restart">Play Again?</button>');
  },
  restart: function(){
    location.reload();
  }
}

$(document).ready(function(){
  superRapBattle.init();
})
