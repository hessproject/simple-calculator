var app = angular.module('calcApp',[]);

app.controller('calcController', ['$scope',function($scope){
  //set default display
  $scope.display = "--";
 
  $scope.buttonPress = function(btnStr){
    var lastChar = $scope.display.charAt($scope.display.length-1);
    if ($scope.display==="--"){
      if ("*/0".indexOf(btnStr) === -1){
        $scope.display = btnStr;
      } else {
        $scope.display = $scope.display;
      }
    } else if ("+-/*.".indexOf(lastChar) != -1 && "+/*".indexOf(btnStr) != -1 || lastChar =="." && btnStr == "."){
    $scope.display = $scope.display;
    }
    else {
      $scope.display = $scope.display.concat(btnStr);
    }
  };
  $scope.equals = function(){
    var decimals = document.getElementById("decimalplaces").value;
    $scope.display = eval($scope.display).toFixed(decimals).toString();
  };
  $scope.clear = function(){
    $scope.display = "--";
  };
  $scope.backspace = function (){
    var length = $scope.display.length
    if (length > 1 && $scope.display !== "--"){
      $scope.display = $scope.display.substring(0, length - 1)
    } else {
      $scope.display = "--";
    }
  }
}])