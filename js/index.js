var app = angular.module('calcApp',[]);

app.controller('calcController', ['$scope',function($scope){
  //set default display
  $scope.display = "--";
  $scope.buttonPress = function(btnStr){
    var lastChar = $scope.display.charAt($scope.display.length-1)
    //if display is blank, start new sdisplay
    if ($scope.display=== "--"){
      if ("*/0".indexOf(btnStr) === -1){
        $scope.display = btnStr;
      }
    } else if (("+-/*.".indexOf(lastChar) != -1 && "+/*-".indexOf(btnStr) != -1) || (lastChar == "." && btnStr == ".")){
      $scope.display = $scope.display;
    }
    else {
      $scope.display = $scope.display.concat(btnStr);
    }
  };

  $scope.equals = function(){
    var lastChar = $scope.display.charAt($scope.display.length-1)
    //if last button entered before equals was a function button, remove it and still evaluate
    if ("+-/*.".indexOf(lastChar) != -1){
      $scope.display = $scope.display.substr(0,$scope.display.length-1)
    }
    var decimals = document.getElementById("decimalplaces").value;
    $scope.display.replace(/[^-()\d/*+.]/g, ''); //sanitize string for use in eval() function
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