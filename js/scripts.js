var matrixA = null;
var gameA = null;

$(function(){
	matrixA = matrixAcelerando();
	init();
});

$(document).on('focusout', '.input_row', function(){
	validateMatrix(this.id, this.value);
});

$(document).on('keyup', '.input_row', function(e){
	if(e.keyCode == 13){
    	$('#activity-button').focus();
        //validateMatrix(this.id, this.value);
    }
});

function init(){
	//console.log(matrixA);
	var pos = Math.floor(Math.random()*matrixA.length);
	gameA = matrixA[pos];
	matrixA.splice(pos, 1);
	game(gameA);
}

function game(matrix){
	//console.log(matrix);
	var row = 1;
	var inputs = 0;
	for (var i = 1; i <= 5; i++) {
		$('#container_matrix').append('<div class="row" id="R'+row+'"></div>');
		for (var j = 1; j <=row; j++) {
			if (matrix.inputs[inputs] == 0) {
				$('#R'+row).append('<input type="number" class="input_row" id="C'+(inputs+1)+'" >');
				inputs++;
			}else{
				$('#R'+row).append('<div class="input_row_false" id="C'+(inputs+1)+'">'+matrix.matrix[inputs]+'</div>');
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
			console.log('bien');
			var blank = false;
			$('.input_row').each(function(index){
				if (this.value == '')
					blank = true;
			});
			if (blank != true){
				window.alert('Has terminado!');
				//
				$('#container_matrix').empty();
				init();
				//
			}
		}else{
			$('#'+id).val('');
			console.log('error');
		}
	}
}