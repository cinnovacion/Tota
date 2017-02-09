"user strict";

define(function (require) {
    var activity = require("sugar-web/activity/activity");
    var datastore = require("sugar-web/datastore");
    var jquery = require("jquery");
    var interact = require("interact");
    var math = require("math");
    var sweetalert = require("sweetalert");
    //matrices
    var acelerando = require("../js/acelerando.js");
    var atiempo = require("../js/atiempo.js");

    var healthA = null;
    var hitsA = null;
    var levelA = null;
    var matrixA = null;
    var gameA = null;

    var healthAT = null;
    var hitsAT = null;
    var levelAT = null;
    var matrixAT = null;
    var gameAt = null;
    var gameAtBU = null;
    //
    var dropResp1 = null;
    var dropResp2 = null;
    var operation = null;

    $(document).on('focusout', '.input_row', function(){
      validateMatrix(this.id, this.value);
    });

    $(document).on('keyup', '.input_row', function(e){
      if(e.keyCode == 13)
        $('#activity-button').focus();
    });

    $(document).on('click', '#mathematic-r', function(){
      validateMatrixAT();
    });

    $(document).on('click', '.mathematic-button', function(){
      validateOperation(this.id);
    });

    $(document).on('click', '#drag-back', function(){
      gameAt.matrix = [];
      $.each(gameAtBU, function(index, value){
        gameAt.matrix.push(value);
      });
      updateMatrix();
    });

    function dragMoveListener (event) {
      var target = event.target, x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx, y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
      target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    }

    //Game functions level 1

    function initA(){
      healthA = 9; //cantidad de vidas para el nivel
      $('#container-statusA-health').empty();
      for (var i = 1; i <= healthA; i++) {
         $('#container-statusA-health').append('<button id="h'+i+'-A" class="game-button health-gameAC">'+i+'</button>');
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
      $('#container-level-1').empty();
      var row = 1;
      var inputs = 0;
      for (var i = 1; i <= 5; i++) {
        $('#container-level-1').append('<div class="row" ><div class="content-row" id="R'+row+'"></div></div>');
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
            swal('¡Buen trabajo!', '', 'success');
            hitsA++;
            if ((levelA == 1 && hitsA == 5) || (levelA == 2 && hitsA == 4) || (levelA == 3 && hitsA == 3)) { //Editar cantidad de ejercicios por nivel
              levelA++;
              if (levelA <= 3) {
                swal('¡Felicidades, Has alcanzado el ' + levelA + ' nivel de dificultad!', '', 'success');
                //sonido para indicar cambio de dificultad
                hitsA = 0;
                matrixA = matrixAcelerando(levelA);
              }else{ 
                //Felicitaciones y desbloqueo de segundo juego
                swal('¡Desbloqueaste el segundo nivel del Juego!', '(aqui va lo de la patineta XD )', 'success');
                $('#menu').toggle();
                $('#acelerando').toggle();
              }
            }
            $('#contA-game').html(hitsA);
            $('#container-level-1').empty();
            gameAC();
          }
        }else{
          $('#'+id).val('');
          console.log('error');
          if (healthA >= 1) { //sonido de error
            $('#h'+healthA+'-A').toggle();
            healthA--;
          }else{
            swal('¡Has perdido, intentalo de nuevo!', '', 'error');
            $('#menu').toggle();
            $('#acelerando').toggle();
          }
        }
      }
    }

    //Game functions level 2

    function initAT() {
      healthAT = 4;
      $('#container-statusAT-health').empty();
      for (var i = 1; i <= healthAT; i++) {
         $('#container-statusAT-health').append('<button id="h'+i+'-AT" class="game-button health-gameAT">'+i+'</button>');
      }
      hitsAT = 0;
      $('#contAT-game').html(hitsAT);
      levelAT = 1;
      matrixAT = matrixATiempo(levelAT);  
      gameAT();
    }

    function gameAT() {
      dropResp1 = null;
      dropResp2 = null;
      operation = null;
      var pos = Math.floor(Math.random()*matrixAT.length);
      gameAt = matrixAT[pos];
      gameAtBU = [];
      matrixAT.splice(pos,1);
      $('.mathematic-button').each(function(index, item){
        $(item).removeClass('mathematic-off');
      });
      $('#mathematic-r').attr('disabled', true);
      $('#mathematic-r').addClass('mathematic-off');
      $('#mathematic-r').removeClass('mathematic-resp-on');

      $('#content-resp').empty();
      $('#content-resp').append('<div style="width:30px;height:100%;float:left;"></div>');
      $.each(gameAt.matrix, function(index, value){
        gameAtBU.push(value);
        $('#content-resp').append('<div id="drag-start'+(index+1)+'" class="drag-start"><div id="drop'+(index+1)+'" class="draggable drag-drop" data="'+value+'">'+value+'</div></div>');
        $('#content-resp').append('<div style="width:30px;height:100%;float:left;"></div>');
      });
      $('#dropzoneR').html(gameAt.resp);

      if (levelAT == 2) {
        $('#drag-back').removeClass('hidden');
      }else{
        $('#drag-back').addClass('hidden');
      }
    }

    function validateMatrixAT () {
      var resp = $('#'+dropResp1).attr('data')+operation+$('#'+dropResp2).attr('data');

      if (math.eval(resp) == gameAt.resp) {
        swal('¡Buen trabajo!', '', 'success');
        hitsAT++; //sonido para indicar operacion correcta
        if ((levelAT == 1 && hitsAT == 4) || (levelAT == 2 && hitsAT == 3)) { //Editar cantidad de ejercicios por nivel
          levelAT++; 
          if (levelAT <= 2) {
            swal('¡Felicidades, Has alcanzado el ' + levelAT + ' nivel de dificultad!', '', 'success');
            //sonido para indicar cambio de dificultad
            hitsAT = 0;
            matrixAT = matrixATiempo(levelAT);
          }else{ 
            //Felicitaciones y finalizacion del juego
            swal('¡Ahora Tota llegará temprano!', '(Fin del juego XD )', 'success');
            $('#menu').toggle();
            $('#atiempo').toggle();
          }
        }
        $('#contAT-game').html(hitsAT);
        gameAT();
      }else{
        if (levelAT == 2) {
          var bool = false;
          $.each(gameAt.first, function(index, value){
            if (math.eval(resp) == value) bool = true;
          });
          if (bool == true) {
            var bool1 = true;
            var bool2 = true;
            $.each(gameAt.matrix, function(index, value){
              if (value == $('#'+dropResp1).attr('data') && bool1 == true) {
                gameAt.matrix.splice(index, 1);
                bool1 = false;
              };
            });
            $.each(gameAt.matrix, function(index, value){
              if (value == $('#'+dropResp2).attr('data') && bool2 == true) {
                gameAt.matrix.splice(index, 1);
                bool2 = false;
              };
            });
            gameAt.matrix.push(math.eval(resp));
            dropResp1 = null;
            dropResp2 = null;
            updateMatrix();
          }else{
            if (healthAT >= 1) { //sonido de error
              swal('Combinación incorrecta, ¡Inténtalo de nuevo!', '', 'error');
              $('#h'+healthAT+'-AT').toggle();
              healthAT--;
              dropResp1 = null;
              dropResp2 = null;
              updateMatrix();
            }else{
              swal('¡Has perdido!', '', 'error');
              $('#menu').toggle();
              $('#atiempo').toggle();
            }
          }
        }else{
          if (healthAT >= 1) { //sonido de error
            swal('Combinación incorrecta, ¡Inténtalo de nuevo!', '', 'error');
            $('#h'+healthAT+'-AT').toggle();
            healthAT--;
            dropResp1 = null;
            dropResp2 = null;
            updateMatrix();
          }else{
            swal('¡Has perdido!', '', 'error');
            $('#menu').toggle();
            $('#atiempo').toggle();
          }
        }
      }
    }

    function validateOperation (id){
      switch(id) {
        case 'mathematic-sum':
          operation = '+';
          break;
        case 'mathematic-subtraction':
          operation = '-';
          break;
        case 'mathematic-multiplication':
          operation = '*';
          break;
        case 'mathematic-divition':
          operation = '/';
          break;
      }
      $('.mathematic-button').each(function(index, item){
        if (id != item.id) {
          $(item).addClass('mathematic-off');
        }else{
          $(item).removeClass('mathematic-off');
        }
      });
      validateDrag();
      updateMatrix();
    }

    function validateDrag (){
      var cont = 0;
      $('#container-operations').children().each(function(index, item){
        var bool = false;
        $(item.classList).each(function(index2, item2){
          if (item2 == 'mathematic-off') { bool = true;}
        });
        if (bool == true) {
          cont++;
        }
      });

      if (dropResp1 != null && dropResp2 != null && cont > 0) {
        $('#mathematic-r').removeAttr('disabled');
        $('#mathematic-r').removeClass('mathematic-off');
        $('#mathematic-r').addClass('mathematic-resp-on');
      }else{
        $('#mathematic-r').attr('disabled', true);
        $('#mathematic-r').addClass('mathematic-off');
        $('#mathematic-r').removeClass('mathematic-resp-on');
      }
    }

    function updateMatrix (){
      $.each(gameAt.matrix, function(index, value){
        if ( ('drop'+(index+1)) != dropResp1 && ('drop'+(index+1)) != dropResp2 ) {
          //var id = $('#drop'+(index+1)).parent()[0].id;
          $('#drag-start'+(index+1)).empty();
          $('#drag-start'+(index+1)).append('<div id="drop'+(index+1)+'" class="draggable drag-drop" data="'+value+'">'+value+'</div>');
        }
      });
      if (gameAt.matrix.length != 5) {
        $('#drag-start5').empty();
      }
    }

    require(['domReady!'], function (doc) {
      activity.setup();

      //Button functions
      $('#play').on('click', function(){
        $('#opening').toggle();
        $('#menu').toggle();
        playSound();
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
        //
        initAT();
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

      //
      $('#close-modal').on('click', function(){
        $('#modal').addClass('hidden');
        $('#modal-content').addClass('hidden');
      });
      $('#history').on('click', function(){
        $('#modal').removeClass('hidden');
        $('#modal-content').removeClass('hidden');
      });
      $('#help-menu').on('click', function(){
        $('#modal').removeClass('hidden');
        $('#modal-content').removeClass('hidden');
      });
      $('#helpA-game').on('click', function(){
        $('#modal').removeClass('hidden');
        $('#modal-content').removeClass('hidden');
      });
      $('#helpAT-game').on('click', function(){
        $('#modal').removeClass('hidden');
        $('#modal-content').removeClass('hidden');
      });

      //elementos arrastrables
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
        },
        ondragleave: function (event) {
          // remove the drop feedback style
          event.target.classList.remove('drop-target');
          event.relatedTarget.classList.remove('can-drop');
        },
        ondrop: function (event) {
          //dropzone para la primera respuesta
          if (event.target.id == 'dropzone1' && dropResp1 != null && event.relatedTarget.id != dropResp1) {
            var id = $('#'+dropResp1).parent()[0].id;
            $('#'+id).empty();
            var pos = dropResp1.substr(4,1);
            $('#'+id).append('<div id="'+dropResp1+'" class="draggable drag-drop" data="'+(gameAt.matrix[pos-1])+'">'+(gameAt.matrix[pos-1])+'</div>');
            dropResp1 = null; 
          }
          if (event.target.id == 'dropzone1'){
            dropResp1 = event.relatedTarget.id;
            if (dropResp2 == event.relatedTarget.id)
              dropResp2 = null;
          }

          //dropzone para la segunda respuesta
          if (event.target.id == 'dropzone2' && dropResp2 != null && event.relatedTarget.id != dropResp2) {
            var id = $('#'+dropResp2).parent()[0].id;
            $('#'+id).empty();
            var pos = dropResp2.substr(4,1);
            $('#'+id).append('<div id="'+dropResp2+'" class="draggable drag-drop" data="'+(gameAt.matrix[pos-1])+'">'+(gameAt.matrix[pos-1])+'</div>');
            dropResp2 = null; 
          }
          if (event.target.id == 'dropzone2'){
            dropResp2 = event.relatedTarget.id;
            if (dropResp1 == event.relatedTarget.id)
              dropResp21 = null;
          }

          updateMatrix();
        },
        ondropdeactivate: function (event) {
          // remove active dropzone feedback
          event.target.classList.remove('drop-active');
          event.target.classList.remove('drop-target');
        }
      });
      interact('.draggable').draggable({
        inertia: false,
        restrict: { restriction: "#container-level-2", endOnly: true, elementRect: { top: 0, left: 0, bottom: 1, right: 1 } },
        autoScroll: true,
        onmove: dragMoveListener,
        onend: function (event) {
          var bool = false;
          $(event.target.classList).each(function(index, item){
            if (item == 'can-drop') {
              bool = true;
            }
          });
          if(bool == false){
            if (dropResp1 == event.target.id) {
              dropResp1 = null;
            }
            if (dropResp2 == event.target.id) {
              dropResp2 = null;
            }
          }
          
          validateDrag();
        }
      });
      window.dragMoveListener = dragMoveListener;

    });

});
