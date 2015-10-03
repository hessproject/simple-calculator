var app = angular.module('calcApp',[]);

app.controller('calcController', ['$scope',function($scope){
  //set default display
  $scope.display = "--";
  //check if last button hit was equals
  $scope.hitEquals = false;
  $scope.buttonPress = function(btnStr){
    var lastChar = $scope.display.charAt($scope.display.length-1)
    //if display is blank or the last button hit was equals, start new display
    if ($scope.display==="--" || $scope.hitEquals){
      $scope.hitEquals = false;
      if ("*/0".indexOf(btnStr) === -1){
        $scope.display = btnStr;
      } else {
        $scope.display = $scope.display;
      }
    } else if ("+-/*.".indexOf(lastChar) != -1 && "+/*-".indexOf(btnStr) != -1 || lastChar =="." && btnStr == "."){
      $scope.display = $scope.display;
    }
    else {
      $scope.display = $scope.display.concat(btnStr);
    }
  };
  $scope.equals = function(){
    var lastChar = $scope.display.charAt($scope.display.length-1)
    $scope.hitEquals = true;
    //if last button entered before equals was a function, remove it and still evaluate
    if ("+-/*.".indexOf(lastChar) != -1){
      $scope.display = $scope.display.substr(0,$scope.display.length-1)
    }
    var decimals = document.getElementById("decimalplaces").value;
    $scope.display = eval($scope.display).toFixed(decimals).toString();
  };
  $scope.clear = function(){
    $scope.hitEquals = false;
    $scope.display = "--";
  };
  $scope.backspace = function (){
    $scope.hitEquals = false;
    var length = $scope.display.length
    if (length > 1 && $scope.display !== "--"){
      $scope.display = $scope.display.substring(0, length - 1)
    } else {
      $scope.display = "--";
    }
  }
}])