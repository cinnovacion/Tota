//Matríz de conetenido
// 1 => estarán visibles
// 0 => el estudiante deberá escribirlo
function matrixATiempo(nivel){
	if (nivel == 1) {
		return [
			{"matrix":[10, 5, 9, 6, 2], "resp":4, "options":["10-6", "9-5"]},
			{"matrix":[10, 3, 6, 1, 3], "resp":2, "options":["3-1"]},
		];
	}
	if (nivel == 2){
		return [];
	}

}
