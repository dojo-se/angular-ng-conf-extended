angular.module("app").controller('CaixaController', ['$scope', function($scope) {
  //$scope.saque;

  //$scope.numeroNotas = 10;
  $scope.numeroNotas = 0;

  $scope.notas = ['100', '50', '20', '10', '5'];

  $scope.calcularNotas = function(){
  	var valorSaque = parseInt($scope.saque);

  	var i, numeroNotas = 0, resto = 0;
  	for(i = 0; i < $scope.notas.length; i++){
  		
  		var nota = parseInt($scope.notas[i]);
  		if (nota <= valorSaque) {
	  		resto = (valorSaque % nota);
	  		numeroNotas += Math.floor(valorSaque / nota);
	  		if(resto === 0){
	  			break;
	  		}
	  		valorSaque = resto;
  		}


  	}

  	$scope.numeroNotas = numeroNotas;
  };

}]);
