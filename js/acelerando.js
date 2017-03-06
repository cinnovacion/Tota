//Matríz de conetenido
// 1 => estarán visibles
// 0 => el estudiante deberá escribirlo
function matrixAcelerando(nivel){
	if (nivel == 1) {
		return [
			{"matrix":[65, 37, 28, 23, 14, 14, 13, 10, 4, 10, 6, 7, 3, 1, 9], "inputs":[1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0], },
			{"matrix":[48, 20, 28, 8, 12, 16, 3, 5, 7, 9, 1, 2, 3, 4, 5], "inputs":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
			{"matrix":[96, 40, 56, 16, 24, 32, 6, 10, 14, 18, 2, 4, 6, 8, 10], "inputs":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
			{"matrix":[30, 15, 15, 8, 7, 8, 4, 4, 3, 5, 2, 2, 2, 1, 4], "inputs":[0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0], },
			{"matrix":[32, 16, 16, 8, 8, 8, 4, 4, 4, 4, 2, 2, 2, 2, 2], "inputs":[1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1], },
			{"matrix":[71, 38, 33, 19, 19, 14, 10, 9, 10, 4, 8, 2, 7, 3, 1], "inputs":[0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1], },
			{"matrix":[96, 56, 40, 32, 24, 16, 18, 14, 10, 6, 10, 8, 6, 4, 2], "inputs":[0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0], },
			{"matrix":[64, 36, 28, 20, 16, 12, 11, 9, 7, 5, 6, 5, 4, 3, 2], "inputs":[0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0], },
			{"matrix":[16, 8, 8, 4, 4, 4, 2, 2, 2, 2, 1, 1, 1, 1, 1], "inputs":[0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0], },
			{"matrix":[97, 44, 53, 20, 24, 29, 9, 11, 13, 16, 3, 6, 5, 8, 8], "inputs":[1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1], },
			{"matrix":[44, 27, 17, 17, 10, 7, 10, 7, 3, 4, 4, 6, 1, 2, 2], "inputs":[0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0], },

			{"matrix":[24, 13, 11, 7, 6, 5, 4, 3, 3, 2, 3, 1, 2, 1, 1], "inputs":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
			{"matrix":[25, 11, 14, 5, 6, 8, 2, 3, 3, 5, 1, 1, 2, 1, 4], "inputs":[0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0], },
			{"matrix":[81, 31, 50, 10, 21, 29, 3, 7, 14, 15, 0, 3, 4, 10, 5], "inputs":[1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1], },
			{"matrix":[62, 33, 29, 18, 15, 14, 8, 10, 5, 9, 1, 7, 3, 2, 7], "inputs":[0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0], },
			{"matrix":[57, 30, 27, 16, 14, 13, 7, 9, 5, 8, 1, 6, 3, 2, 6], "inputs":[0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
			{"matrix":[41, 19, 22, 9, 10, 12, 4, 5, 5, 7, 2, 2, 3, 2, 5], "inputs":[1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1], },
			{"matrix":[23, 11, 12, 5, 6, 6, 2, 3, 3, 3, 1, 1, 2, 1, 2], "inputs":[0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
			{"matrix":[75, 34, 41, 15, 19, 22, 8, 7, 12, 10, 6, 2, 5, 7, 3], "inputs":[0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0], },
			{"matrix":[24, 12, 12, 6, 6, 6, 3, 3, 3, 3, 1, 2, 1, 2, 1], "inputs":[0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1], },
			{"matrix":[93, 39, 54, 16, 23, 31, 5, 11, 12, 19, 2, 3, 8, 4, 15], "inputs":[0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0], },
			{"matrix":[92, 44, 48, 21, 23, 25, 10, 11, 12, 13, 3, 7, 4, 8, 5], "inputs":[1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0], },

			{"matrix":[68, 38, 30, 24, 14, 16, 15, 9, 5, 11, 9, 6, 3, 2, 9], "inputs":[1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0], },
			{"matrix":[99, 50, 49, 25, 25, 24, 13, 12, 13, 11, 7, 6, 6, 7, 4], "inputs":[0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1], },
			{"matrix":[83, 42, 41, 21, 21, 20, 11, 10, 11, 9, 6, 5, 5, 6, 3], "inputs":[1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1], },
			{"matrix":[43, 25, 18, 16, 9, 9, 11, 5, 4, 5, 7, 4, 1, 3, 2], "inputs":[0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1], },
			{"matrix":[19, 10, 9, 5, 5, 4, 3, 2, 3, 1, 3, 0, 2, 1, 0], "inputs":[0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0], },
			{"matrix":[39, 11, 28, 1, 10, 18, 0, 1, 9, 9, 0, 0, 1, 8, 1], "inputs":[1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1], },
			{"matrix":[23, 7, 16, 2, 5, 11, 1, 1, 4, 7, 1, 0, 1, 3, 4], "inputs":[1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0], },
			{"matrix":[48, 24, 24, 12, 12, 12, 6, 6, 6, 6, 3, 3, 3, 3, 3], "inputs":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
			{"matrix":[64, 32, 32, 16, 16, 16, 8, 8, 8, 8, 4, 4, 4, 4, 4], "inputs":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
			{"matrix":[39, 19, 20, 11, 8, 12, 8, 3, 5, 7, 7, 1, 2, 3, 4], "inputs":[1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1], },
			{"matrix":[84, 37, 47, 16, 21, 26, 7, 9, 12, 14, 3, 4, 5, 7, 7], "inputs":[0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0], },
		];
	}
	if (nivel == 2){
		return [
			{"matrix":[130, 70, 60, 35, 35, 25, 15, 20, 15, 10, 5, 10, 10, 5, 5], "inputs":[0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0], },
			{"matrix":[500, 200, 300, 100, 100, 200, 50, 50, 50, 150, 25, 25, 25, 25, 125], "inputs":[1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1], },
			{"matrix":[112, 48, 64, 20, 28, 36, 8, 12, 16, 20, 3, 5, 7, 9, 11], "inputs":[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0], },
			{"matrix":[525, 260, 265, 140, 120, 145, 70, 70, 50, 95, 10, 60, 10, 40, 55], "inputs":[1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1], },
			{"matrix":[100, 45, 55, 20, 25, 30, 15, 10, 15, 15, 13, 2, 8, 7, 8], "inputs":[1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
			{"matrix":[700, 300, 400, 155, 145, 255, 100, 55, 90, 165, 50, 50, 5, 85, 80], "inputs":[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0], },
			{"matrix":[400, 220, 180, 120, 100, 80, 65, 55, 45, 35, 35, 30, 25, 20, 15], "inputs":[0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1], },
			{"matrix":[189, 88, 101, 34, 54, 47, 8, 26, 28, 19, 2, 6, 20, 8, 11], "inputs":[1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1], },
			{"matrix":[144, 84, 60, 48, 36, 24, 27, 21, 15, 9, 15, 12, 9, 6, 3], "inputs":[1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0], },
			{"matrix":[240, 140, 100, 80, 60, 40, 45, 35, 25, 15, 25, 20, 15, 10, 5], "inputs":[0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1], },
			{"matrix":[530, 310, 220, 180, 130, 90, 105, 75, 55, 35, 60, 45, 30, 25, 10], "inputs":[1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1], },

			{"matrix":[125, 59, 66, 27, 32, 34, 13, 14, 18, 16, 8, 5, 9, 9, 7], "inputs":[1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0], },
			{"matrix":[488, 279, 209, 160, 119, 90, 73, 87, 32, 58, 10, 63, 24, 8, 50], "inputs":[1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1], },
			{"matrix":[283, 129, 154, 58, 71, 83, 23, 35, 36, 47, 9, 14, 21, 15, 32], "inputs":[1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1], },
			{"matrix":[501, 278, 223, 143, 135, 88, 59, 84, 51, 37, 11, 48, 36, 15, 22], "inputs":[0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1], },
			{"matrix":[912, 339, 573, 131, 208, 365, 38, 93, 115, 250, 10, 28, 65, 50, 200], "inputs":[1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
			{"matrix":[638, 273, 365, 96, 177, 188, 29, 67, 110, 78, 9, 20, 47, 63, 15], "inputs":[0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1], },
			{"matrix":[758, 291, 467, 93, 198, 269, 16, 77, 121, 148, 2, 14, 63, 58, 90], "inputs":[1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0], },
			{"matrix":[794, 341, 453, 142, 199, 254, 61, 81, 118, 136, 12, 49, 32, 86, 50], "inputs":[0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0], },
			{"matrix":[357, 203, 154, 105, 98, 56, 44, 61, 37, 19, 8, 36, 25, 12, 7], "inputs":[1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
			{"matrix":[908, 473, 435, 218, 255, 180, 97, 121, 134, 46, 65, 32, 89, 45, 1], "inputs":[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], },
			{"matrix":[813, 391, 422, 156, 235, 187, 35, 121, 114, 73, 10, 25, 96, 18, 55], "inputs":[1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1], },

			{"matrix":[673, 384, 289, 201, 183, 106, 84, 117, 66, 40, 20, 64, 53, 13, 27], "inputs":[0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0], },
			{"matrix":[425, 213, 212, 114, 99, 113, 72, 42, 57, 56, 40, 32, 10, 47, 9], "inputs":[1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
			{"matrix":[192, 112, 80, 64, 48, 32, 36, 28, 20, 12, 20, 16, 12, 8, 4], "inputs":[0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1], },
			{"matrix":[331, 149, 182, 55, 94, 88, 16, 39, 55, 33, 10, 6, 33, 22, 11], "inputs":[0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0], },
			{"matrix":[212, 120, 92, 66, 54, 38, 36, 30, 24, 14, 20, 16, 14, 10, 4], "inputs":[1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0], },
			{"matrix":[950, 550, 400, 277, 273, 127, 103, 174, 99, 28, 3, 100, 74, 25, 3], "inputs":[1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
			{"matrix":[109, 52, 57, 24, 28, 29, 11, 13, 15, 14, 7, 4, 9, 6, 8], "inputs":[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1], },
			{"matrix":[480, 280, 200, 160, 120, 80, 90, 70, 50, 30, 50, 40, 30, 20, 10], "inputs":[0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
			{"matrix":[922, 448, 474, 216, 232, 242, 116, 100, 132, 110, 48, 68, 32, 100, 10], "inputs":[0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
			{"matrix":[592, 370, 222, 221, 149, 73, 116, 105, 44, 29, 30, 86, 19, 25, 4], "inputs":[1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0], },
			{"matrix":[644, 248, 396, 93, 155, 241, 40, 53, 102, 139, 25, 15, 38, 64, 75], "inputs":[1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
		];
	}
	if (nivel == 3){
		return [
			{"matrix":[1000, 550, 450, 275, 275, 175, 138, 137, 138, 37, 109, 29, 108, 30, 7], "inputs":[0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1], },
			{"matrix":[3489, 2027, 1462, 1204, 823, 639, 595, 609, 214, 425, 75, 520, 89, 125, 300], "inputs":[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], },
			{"matrix":[2690, 655, 2035, 100, 555, 1480, 45, 55, 500, 980, 10, 35, 20, 480, 500], "inputs":[0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0], },
			{"matrix":[10000, 5000, 5000, 3500, 1500, 3500, 2500, 1000, 500, 3000, 1700, 800, 200, 300, 2700], "inputs":[1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1], },
			{"matrix":[1406, 628, 778, 285, 343, 435, 142, 143, 200, 235, 89, 53, 90, 110, 125], "inputs":[0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0], },
			{"matrix":[1097, 575, 522, 319, 256, 266, 178, 141, 115, 151, 100, 78, 63, 52, 99], "inputs":[0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
			{"matrix":[3200, 1800, 1400, 1000, 800, 600, 550, 450, 350, 250, 300, 250, 200, 150, 100], "inputs":[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0], },
			{"matrix":[1600, 800, 800, 400, 400, 400, 200, 200, 200, 200, 100, 100, 100, 100, 100], "inputs":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
			{"matrix":[1600, 800, 800, 400, 400, 400, 200, 200, 200, 200, 100, 100, 100, 100, 100], "inputs":[0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0], },
			{"matrix":[1350, 600, 750, 250, 350, 400, 100, 150, 200, 200, 50, 50, 100, 100, 100], "inputs":[0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1], },
			{"matrix":[2410, 1315, 1095, 720, 595, 500, 300, 420, 175, 325, 30, 270, 150, 25, 300], "inputs":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], },

			{"matrix":[2500, 1200, 1300, 650, 550, 750, 300, 350, 200, 550, 50, 250, 100, 100, 450], "inputs":[0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1], },
			{"matrix":[10000, 5000, 5000, 3500, 1500, 3500, 2500, 1000, 500, 3000, 1700, 800, 200, 300, 2700], "inputs":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
			{"matrix":[1385, 717, 668, 368, 349, 319, 182, 186, 163, 156, 90, 92, 94, 69, 87], "inputs":[1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1], },
			{"matrix":[4962, 2039, 2923, 821, 1218, 1705, 333, 488, 730, 975, 150, 183, 305, 425, 550], "inputs":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
			{"matrix":[10000, 5000, 5000, 3500, 1500, 3500, 2500, 1000, 500, 3000, 1700, 800, 200, 300, 2700], "inputs":[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0], },
			{"matrix":[10340, 5170, 5170, 3630, 1540, 3630, 2610, 1020, 520, 3110, 1800, 810, 210, 310, 2800], "inputs":[1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1], },
			{"matrix":[8630, 2970, 5660, 1350, 1620, 4040, 500, 850, 770, 3270, 150, 350, 500, 270, 3000], "inputs":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
			{"matrix":[11900, 4550, 7350, 2750, 1800, 5550, 1400, 1350, 450, 5100, 400, 1000, 350, 100, 5000], "inputs":[1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1], },
			{"matrix":[14600, 6450, 8150, 3950, 2500, 5650, 2000, 1950, 550, 5100, 500, 1500, 450, 100, 5000], "inputs":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
			{"matrix":[17300, 7800, 9500, 4300, 3500, 6000, 2300, 2000, 1500, 4500, 800, 1500, 500, 1000, 3500], "inputs":[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0], },
			{"matrix":[8000, 4000, 4000, 2000, 2000, 2000, 1000, 1000, 1000, 1000, 500, 500, 500, 500, 500], "inputs":[0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1], },

			{"matrix":[10400, 5400, 5000, 2700, 2700, 2300, 1200, 1500, 1200, 1100, 400, 800, 700, 500, 600], "inputs":[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0], },
			{"matrix":[22000, 9000, 13000, 4000, 5000, 8000, 2000, 2000, 3000, 5000, 1000, 1000, 1000, 2000, 3000], "inputs":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
			{"matrix":[22000, 9000, 13000, 4000, 5000, 8000, 2000, 2000, 3000, 5000, 1000, 1000, 1000, 2000, 3000], "inputs":[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0], },
			{"matrix":[20480, 9660, 10820, 9640, 5020, 5800, 2420, 2220, 2800, 3000, 1000, 1420, 800, 2000, 1000], "inputs":[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], },
			{"matrix":[20480, 9660, 10820, 9640, 5020, 5800, 2420, 2220, 2800, 3000, 1000, 1420, 800, 2000, 1000], "inputs":[0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
			{"matrix":[6732, 2889, 3843, 846, 2043, 1800, 53, 793, 1250, 550, 10, 43, 750, 500, 50], "inputs":[1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1], },
			{"matrix":[4800, 2000, 2800, 800, 1200, 1600, 300, 500, 700, 900, 100, 200, 300, 400, 500], "inputs":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
			{"matrix":[8000, 4800, 3200, 2800, 2000, 1200, 1600, 1200, 800, 400, 900, 700, 500, 300, 100], "inputs":[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0], },
			{"matrix":[1850, 716, 1134, 454, 262, 872, 265, 189, 73, 799, 92, 173, 16, 57, 742], "inputs":[1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1], },
			{"matrix":[1101, 742, 359, 491, 251, 108, 305, 186, 65, 43, 156, 149, 37, 28, 15], "inputs":[0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
			{"matrix":[1101, 742, 359, 491, 251, 108, 305, 186, 65, 43, 156, 149, 37, 28, 15], "inputs":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], },
		];
	}
}
