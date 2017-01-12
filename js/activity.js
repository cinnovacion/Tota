"user strict";

define(function (require) {
    var activity = require("sugar-web/activity/activity");
    var datastore = require("sugar-web/datastore");
    var jquery = require("jquery");
    var interact = require("interact");
    var acelerando = require("../js/acelerando.js");
    var atiempo = require("../js/atiempo.js");

    var healthA = null;
    var hitsA = null;
    var levelA = null;
    var matrixA = null;
    var gameA = null;

    $(document).on('focusout', '.input_row', function(){
      validateMatrix(this.id, this.value);
    });

    $(document).on('keyup', '.input_row', function(e){
      if(e.keyCode == 13)
        $('#activity-button').focus();
    });

    function dragMoveListener (event) {
      var target = event.target, x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx, y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
      target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    }

    //Game functions

    function initA(){
      healthA = 9; //cantidad de vidas para el nivel
      $('#container-statusA-health').empty();
      for (var i = 1; i <= healthA; i++) {
         $('#container-statusA-health').append('<button id="h'+i+'-A" class="game-button">'+i+'</button>');
      }
      hitsA = 0;
      $('#contA-game').html(hitsA);
      levelA = 1;
      matrixA = matrixAcelerando(levelA);
      gameAC();
    }

    function gameAC(){
      //console.log(matrixA);
      var pos = Math.floor(Math.random()*matrixA.length);
      gameA = matrixA[pos];
      matrixA.splice(pos, 1);
      //console.log(gameA);
      $('#container_matrix').empty();
      var row = 1;
      var inputs = 0;
      for (var i = 1; i <= 5; i++) {
        $('#container_matrix').append('<div class="row" ><div class="content-row" id="R'+row+'"></div></div>');
        for (var j = 1; j <=row; j++) {
          if (gameA.inputs[inputs] == 0) {
            $('#R'+row).append('<input type="number" class="input_row" id="C'+(inputs+1)+'" >');
            inputs++;
          }else{
            $('#R'+row).append('<div class="input_row_false" id="C'+(inputs+1)+'">'+gameA.matrix[inputs]+'</div>');
            inputs++;
          }
        }
        row++;
      }
    }

    function validateMatrix(id, value){
      var pos = id.substr(1,2);
      if ($('#'+id).val() != '') {
        if (value == gameA.matrix[pos-1]) {
          console.log('bien'); //sonido para indicar cifra correcta
          var blank = false;
          $('.input_row').each(function(index){
            if (this.value == '')
              blank = true;
          });
          if (blank != true){
            window.alert('¡Sigue así!');
            hitsA++;
            if ((levelA == 1 && hitsA == 5) || (levelA == 2 && hitsA == 4) || (levelA == 3 && hitsA == 3)) { //Editar cantidad de ejercicios por nivel
              levelA++;
              if (levelA <= 3) {
                window.alert('¡Felicidades, Has alcanzado el ' + levelA + ' nivel de dificultad!');
                //sonido para indicar cambio de dificultad
                hitsA = 0;
                matrixA = matrixAcelerando(levelA);
              }else{ 
                //Felicitaciones y desbloqueo de segundo juego
                window.alert('¡Desbloqueaste el segundo nivel del Juego! (aqui va lo de la patineta XD )');
                $('#menu').toggle();
                $('#acelerando').toggle();
              }
            }
            $('#contA-game').html(hitsA);
            $('#container_matrix').empty();
            gameAC();
          }
        }else{
          $('#'+id).val('');
          console.log('error');
          console.log(healthA)
          if (healthA >= 1) { //sonido de error
            $('#h'+healthA+'-A').toggle();
            healthA--;
          }else{
            window.alert('¡Has perdido, intentalo de nuevo!')
            $('#menu').toggle();
            $('#acelerando').toggle();
          }
        }
      }
    }

    require(['domReady!'], function (doc) {
      activity.setup();

      //Button functions

      $('#play').on('click', function(){
        $('#opening').toggle();
        $('#menu').toggle();
      });
      $('#acelerando-button').on('click', function(){
        $('#menu').toggle();
        $('#acelerando').toggle();
        //
        initA();
      });
      $('#atiempo-button').on('click', function(){
        $('#menu').toggle();
        $('#atiempo').toggle();
      });
      $('#back-opening').on('click', function(){
        $('#menu').toggle();
        $('#opening').toggle();
      });
      $('#backA-menu').on('click', function(){
        $('#menu').toggle();
        $('#acelerando').toggle();
      });
      $('#backAT-menu').on('click', function(){
        $('#menu').toggle();
        $('#atiempo').toggle();
      });

      interact('.numeric-dropzone').dropzone({
        accept: '.draggable',
        overlap: 0.9,

        ondropactivate: function (event) {
          event.target.classList.add('drop-active'); //dropzone
        },
        ondragenter: function (event) {
          var draggableElement = event.relatedTarget, dropzoneElement = event.target; //element in the dropzone
          dropzoneElement.classList.add('drop-target');
          draggableElement.classList.add('can-drop');
          //draggableElement.textContent = 'Dragged in';
        },
        ondragleave: function (event) {
          // remove the drop feedback style
          event.target.classList.remove('drop-target');
          event.relatedTarget.classList.remove('can-drop');
          //event.relatedTarget.textContent = 'Dragged out';
        },
        ondrop: function (event) {
          //event.relatedTarget.textContent = 'Dropped';
        },
        ondropdeactivate: function (event) {
          // remove active dropzone feedback
          event.target.classList.remove('drop-active');
          event.target.classList.remove('drop-target');
        }
      });

      interact('.draggable').draggable({
        inertia: false,
        restrict: { restriction: "#container_matrix", endOnly: true, elementRect: { top: 0, left: 0, bottom: 1, right: 1 } },
        autoScroll: true,
        onmove: dragMoveListener,
        onend: function (event) { // call this function on every dragend event
          var textEl = event.target.querySelector('p');
          textEl && (textEl.textContent = 'moved a distance of ' + (Math.sqrt(event.dx * event.dx + event.dy * event.dy)|0) + 'px');
        }
      });

      window.dragMoveListener = dragMoveListener;
    });

});
