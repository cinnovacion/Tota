"user strict";

define(function (require) {
    var activity = require("sugar-web/activity/activity");
    var datastore = require("sugar-web/datastore");
    var jquery = require("jquery");
    var interact = require("interact");
    var acelerando = require("../js/acelerando.js");

    var healthA = null;
    var hitsA = null;
    var levelA = null;
    var matrixA = null;
    var gameA = null;

    $(document).on('focusout', '.input_row', function(){
      validateMatrix(this.id, this.value);
    });

    $(document).on('keyup', '.input_row', function(e){
      if(e.keyCode == 13){
          $('#activity-button').focus();
            //validateMatrix(this.id, this.value);
        }
    });

    function initA(){
      healthA = 3;
      $('#container-statusA-health').empty();
      for (var i = 1; i <= healthA; i++) {
         $('#container-statusA-health').append('<button id="h'+i+'-A" class="game-button">'+i+'</button>');
      }
      hitsA = 0;
      $('#contA-game').html(hitsA);
      levelA = 1;
      matrixA = matrixAcelerando(levelA);
      game();
    }

    function game(){
      //console.log(matrixA);
      var pos = Math.floor(Math.random()*matrixA.length);
      gameA = matrixA[pos];
      matrixA.splice(pos, 1);
      //console.log(gameA);
      $('#container_matrix').empty();
      var row = 1;
      var inputs = 0;
      for (var i = 1; i <= 5; i++) {
        $('#container_matrix').append('<div class="row" id="R'+row+'"></div>');
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
            game();
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

        //a tiempo
        interact('.dropzone').dropzone({
          // only accept elements matching this CSS selector
          accept: '#yes-drop',
          // Require a 75% element overlap for a drop to be possible
          overlap: 0.75,

          // listen for drop related events:

          ondropactivate: function (event) {
            // add active dropzone feedback
            event.target.classList.add('drop-active');
          },
          ondragenter: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;

            // feedback the possibility of a drop
            dropzoneElement.classList.add('drop-target');
            draggableElement.classList.add('can-drop');
            draggableElement.textContent = 'Dragged in';
          },
          ondragleave: function (event) {
            // remove the drop feedback style
            event.target.classList.remove('drop-target');
            event.relatedTarget.classList.remove('can-drop');
            event.relatedTarget.textContent = 'Dragged out';
          },
          ondrop: function (event) {
            event.relatedTarget.textContent = 'Dropped';
          },
          ondropdeactivate: function (event) {
            // remove active dropzone feedback
            event.target.classList.remove('drop-active');
            event.target.classList.remove('drop-target');
          }
        });
        interact('.draggable')
          .draggable({
            // enable inertial throwing
            inertia: true,
            // keep the element within the area of it's parent
            restrict: {
              restriction: "parent",
              endOnly: true,
              elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
            },
            // enable autoScroll
            autoScroll: true,

            // call this function on every dragmove event
            onmove: dragMoveListener,
            // call this function on every dragend event
            onend: function (event) {
              var textEl = event.target.querySelector('p');

              textEl && (textEl.textContent =
                'moved a distance of '
                + (Math.sqrt(event.dx * event.dx +
                             event.dy * event.dy)|0) + 'px');
            }
          });

          function dragMoveListener (event) {
            var target = event.target,
                // keep the dragged position in the data-x/data-y attributes
                x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

            // translate the element
            target.style.webkitTransform =
            target.style.transform =
              'translate(' + x + 'px, ' + y + 'px)';

            // update the posiion attributes
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
          }
        window.dragMoveListener = dragMoveListener;


    });

});
