"user strict";

define(function (require) {
    var activity = require("sugar-web/activity/activity");
    var datastore = require("sugar-web/datastore");
    var jquery = require("jquery");
    var interact = require("interact");
    var math = require("math");
    var swal = require("sweetalert");
    //matrices
    var acelerando = require("../js/acelerando.js");
    var atiempo = require("../js/atiempo.js");
    //bloqueo de niveles
    var level2AC = true;
    var level3AC = true;
    var level1AT = true;
    var level2AT = true;

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
      if(e.keyCode == 13) {
        $('#activity-button').focus();
      } else {
          var blank = false;
          $('.input_row').each(function(index){
            if (this.value == '')
              blank = true;
          });
          if (blank != true){
            $('#validate-button-acelerando').removeClass('hidden');
          } else{
            $('#validate-button-acelerando').addClass('hidden');
          }
      }
    });

    $(document).on('click', '#mathematic-r', function(){
      validateMatrixAT();
    });

    $(document).on('click', '.mathematic-button', function(){
      validateOperation(this.id);
    });

    $(document).on('click', '#drag-back', function(){
      /*gameAt.matrix = [];
      $.each(gameAtBU, function(index, value){
        gameAt.matrix.push(value);
      });
      updateMatrix();*/
      $('#modal-content').addClass('modal-content-menu');
      $('#modal-content').removeClass('modal-content-game');
      $('#modal-content').css('background-image', 'url(img/help-atiempo-2.png)');
      $('#modal').removeClass('hidden');
      $('#modal-content').removeClass('hidden');
    });

    $(document).on('click', '#validate-button-acelerando', function(){

    });

    function dragMoveListener (event) {
      var target = event.target, x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx, y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
      target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    }

    //Game functions level 1

    function initA(level){
      healthA = 9; //cantidad de vidas para el nivel
      $('#container-statusA-health').empty();
      for (var i = 1; i <= healthA; i++) {
         $('#container-statusA-health').append('<button id="h'+i+'-A" class="game-button health-gameAC">'+i+'</button>');
      }
      hitsA = 0;
      $('#contA-game').html(hitsA);
      levelA = level;
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
          //console.log('bien'); 
          var blank = false;
          $('.input_row').each(function(index){
            if (this.value == '')
              blank = true;
          });
          if (blank != true){
            $('#validate-button-acelerando').addClass('hidden');
            swal('¡Buen trabajo!', '', 'success');
            playHit(); //sonido para indicar cifra correcta
            hitsA++;
            if ((levelA == 1 && hitsA == 15) || (levelA == 2 && hitsA == 10) || (levelA == 3 && hitsA == 5)) { //Editar cantidad de ejercicios por nivel
              if (levelA == 1) { $('#acelerando-level-2').removeClass('level-locked-2'); level2AC = true;}
              if (levelA == 2) { $('#acelerando-level-3').removeClass('level-locked-3'); level3AC = true;}
              if (levelA == 3) { $('#atiempo-level-1').removeClass('level-locked-1'); level1AT = true}

              levelA++;
              if (levelA <= 3) {
                $('#menu').toggle();
                $('#acelerando').toggle();
                $('#acelerando-dialog').fadeToggle();
                if(!($('#atiempo-dialog').css('display') == 'none')){
                  $('#atiempo-dialog').fadeToggle();
                }

                swal('¡Felicidades, Has alcanzado el ' + levelA + ' nivel de dificultad!', '', 'success');
                //sonido para indicar cambio de dificultad
                hitsA = 0;
                matrixA = matrixAcelerando(levelA);
              }else{ 
                //Felicitaciones y desbloqueo de segundo juego
                swal({
                  title: '¡Perfecto!',
                  text: 'Has recibido un obsequio que ayudará a Tota.',
                  imageUrl: 'img/acelerando-complete.png',
                  imageSize: '450x300',
                  confirmButtonText: 'Siguiente',
                  closeOnConfirm: false,
                }, function (isConfirm) {
                  if (isConfirm) {
                    swal({
                      title: 'Tota tiene ahora una patineta!',
                      text: 'Ahora podrá llegar más rápido a la escuela.',
                      imageUrl: 'img/acelerando-complete-2.png',
                      imageSize: '450x300',
                      confirmButtonText: 'Continuar'
                    });
                  }
                });
                $('#menu').toggle();
                $('#acelerando').toggle();
                $('#atiempo-dialog').fadeToggle();
                if(!($('#acelerando-dialog').css('display') == 'none')){
                  $('#acelerando-dialog').fadeToggle();
                }
              }
            }
            $('#contA-game').html(hitsA);
            $('#container-level-1').empty();
            gameAC();
          }
        }else{
          $('#'+id).val('');
          //console.log('error');
          if (healthA >= 1) { 
            playError(); //sonido de error
            $('#h'+healthA+'-A').fadeToggle();
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

    function initAT(level) {
      healthAT = 9;
      $('#container-statusAT-health').empty();
      for (var i = 1; i <= healthAT; i++) {
         $('#container-statusAT-health').append('<button id="h'+i+'-AT" class="game-button health-gameAT">'+i+'</button>');
      }
      hitsAT = 0;
      $('#contAT-game').html(hitsAT);
      levelAT = level;
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
        playHit(); //sonido para indicar operacion correcta
        hitsAT++; 
        if ((levelAT == 1 && hitsAT == 10) || (levelAT == 2 && hitsAT == 5)) { //Editar cantidad de ejercicios por nivel
          levelAT++; 
          if (levelAT <= 2) {
            $('#atiempo-level-2').removeClass('level-locked-2'); 
            level2AT = true;

            $('#menu').toggle();
            $('#atiempo').toggle();
            $('#atiempo-dialog').fadeToggle();
            if(!($('#acelerando-dialog').css('display') == 'none')){
              $('#acelerando-dialog').fadeToggle();
            }
            swal('¡Felicidades, Has alcanzado el ' + levelAT + ' nivel de dificultad!', '', 'success');
            //sonido para indicar cambio de dificultad
            hitsAT = 0;
            matrixAT = matrixATiempo(levelAT);
          }else{ 
            //Felicitaciones y finalizacion del juego
            $('#modal-content').addClass('modal-content-game');
            $('#modal-content').removeClass('modal-content-menu');
            $('#modal-content').css('background-image', 'url(img/finish.png)');
            $('#modal').removeClass('hidden');
            $('#modal-content').removeClass('hidden');
            // Sonido de victoria final
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
            if (healthAT >= 1) { 
              playError(); //sonido de error
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
          if (healthAT >= 1) { 
            playError(); //sonido de error
            swal('Combinación incorrecta, ¡Inténtalo de nuevo!', '', 'error');
            $('#h'+healthAT+'-AT').fadeToggle();
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
        for (var i = 0; i < 5; i++) {
          $('#indicator-menu-acelerando').fadeOut(1000);
          $('#indicator-menu-acelerando').fadeIn(1000);
          //
          $('#indicator-menu-atiempo').fadeOut(1000);
          $('#indicator-menu-atiempo').fadeIn(1000);
        }
      });
      $('#acelerando-button').on('click', function(){
        $('#acelerando-dialog').fadeToggle();
        if(!($('#atiempo-dialog').css('display') == 'none')){
          $('#atiempo-dialog').fadeToggle();
        }
      });
      $('#acelerando-level-1').on('click', function(){
        $('#menu').toggle();
        $('#acelerando').toggle();
        $('#acelerando-dialog').toggle();
        //
        initA(1);
      });
      $('#acelerando-level-2').on('click', function(){
        if (level2AC == true) {
          $('#menu').toggle();
          $('#acelerando').toggle();
          $('#acelerando-dialog').toggle();
          //
          initA(2);
        }
      });
      $('#acelerando-level-3').on('click', function(){
        if (level3AC == true) {
          $('#menu').toggle();
          $('#acelerando').toggle();
          $('#acelerando-dialog').toggle();
          //
          initA(3);
        }
      });
      $('#atiempo-button').on('click', function(){
        $('#atiempo-dialog').fadeToggle();
        if(!($('#acelerando-dialog').css('display') == 'none')){
          $('#acelerando-dialog').fadeToggle();
        }
      });
      $('#atiempo-level-1').on('click', function(){
        if (level1AT == true) {
          $('#menu').toggle();
          $('#atiempo').toggle();
          $('#atiempo-dialog').toggle();
          //
          initAT(1);
        }
      });
      $('#atiempo-level-2').on('click', function(){
        if (level2AT == true) {
          $('#menu').toggle();
          $('#atiempo').toggle();
          $('#atiempo-dialog').toggle();
          //
          initAT(2);
        }
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
        $('#play-help').addClass('hidden');
      });
      $('#history').on('click', function(){
        $('#play-help').removeClass('hidden');
        //
        $('#modal-content').addClass('modal-content-game');
        $('#modal-content').removeClass('modal-content-menu');
        $('#modal-content').css('background-image', 'url(img/history.png)');
        $('#modal').removeClass('hidden');
        $('#modal-content').removeClass('hidden');
      });
      $('#play-help').on('click', function(){
        $(this).addClass('hidden');
        $('#modal').addClass('hidden');
        $('#modal-content').addClass('hidden');
        $('#opening').toggle();
        $('#menu').toggle();
        //
        for (var i = 0; i < 5; i++) {
          $('#indicator-menu-acelerando').fadeOut(1000);
          $('#indicator-menu-acelerando').fadeIn(1000);
          //
          $('#indicator-menu-atiempo').fadeOut(1000);
          $('#indicator-menu-atiempo').fadeIn(1000);
        }
      });
      $('#help-menu').on('click', function(){
        $('#modal-content').addClass('modal-content-menu');
        $('#modal-content').removeClass('modal-content-game');
        $('#modal-content').css('background-image', 'url(img/help-menu.png)');
        $('#modal').removeClass('hidden');
        $('#modal-content').removeClass('hidden');
      });
      $('#helpA-game').on('click', function(){
        $('#modal-content').addClass('modal-content-game');
        $('#modal-content').removeClass('modal-content-menu');
        $('#modal-content').css('background-image', 'url(img/help-acelerando.png)');
        $('#modal').removeClass('hidden');
        $('#modal-content').removeClass('hidden');
      });
      $('#helpAT-game').on('click', function(){
        $('#modal-content').addClass('modal-content-game');
        $('#modal-content').removeClass('modal-content-menu');
        $('#modal-content').css('background-image', 'url(img/help-atiempo.png)');
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
