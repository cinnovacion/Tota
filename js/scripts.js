$(function(){
	var matrixA = matrixAcelerando();
	console.log(matrixA);
	game(matrixA[Math.floor(Math.random()*matrixA.length)]);

});

function game(matrix){
	console.log(matrix);
	var row = 1;
	var inputs = 0;
	for (var i = 1; i <= 5; i++) {
		$('#container_matrix').append('<div class="row" id="R'+row+'"></div>');
		for (var j = 1; j <=row; j++) {
			if (matrix.inputs[inputs] == 0) {
				$('#R'+row).append('<input type="number" class="input_row" id="C'+(inputs+1)+'">');
				inputs++;
			}else{
				$('#R'+row).append('<div class="input_row_false" id="C'+(inputs+1)+'">'+matrix.matrix[inputs]+'</div>');
				inputs++;
			}
		}
		row++;
	}
}