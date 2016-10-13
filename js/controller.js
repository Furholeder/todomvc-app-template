/*
* @Author: Administrator
* @Date:   2016-10-13 08:05:17
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-13 13:06:58
*/

'use strict';
(function(angular){
    var app = angular.module("myApp")
     app.controller("mainCtrl",["$scope","TodoService","$location",
      function($scope,TodoService,$location){
       $scope.text = ""
       $scope.todoFilter = {}
       $scope.currentId = 0
       $scope.toggleAll = false
       $scope.todos = TodoService.getAll()
       // console.log(JSON.stringify($scope.todos))
       // $scope.todos = [
      //   { id: 1, text: '吃饭', completed: false },
      //   { id: 2, text: '睡觉', completed: false },
      //   { id: 3, text: '打豆豆', completed: true },
      //   { id: 4, text: '写代码', completed: false },
      //   { id: 5, text: '约会', completed: true },
      //   { id: 6, text: 'hello world', completed: true }
      // ]
      $scope.todos.forEach(function(todo,index){
      	console.log(todo.id);
      })
      $scope.add=function(){
        if($scope.text.trim().length===0){
        	return;
        }
        TodoService.add($scope.text)
        $scope.text= ""
      }


      $scope.getEditing=function(id){
        console.log("ni shuo sha ")
        $scope.currentId =id;
      }

      $scope.edit =function(){
        $scope.currentId = 0;
      }
      $scope.removeId = function(id){
        TodoService.removeId(id)
      }
      $scope.removeCompleted=function(){
        TodoService.removeCompleted();
        $scope.todos = TodoService.getAll();
      }
      $scope.select = function(){
      	if($scope.todos.every(function(todo,index){
      		return todo.completed
      	})){
      		$scope.toggleAll = true;
      	}
      	else{
      		$scope.toggleAll = false;
      	}
      	TodoService.save();
      }
       	if($scope.todos.every(function(todo,index){
      		return todo.completed
      	})){
      		$scope.toggleAll = true
      	}
      $scope.selectAll =function(){
      	TodoService.selectAll($scope.toggleAll)
      }
      // console.log($location)
      $scope.$location = $location
      $scope.$watch('$location.url()',function(newValue,oldValue){
      	switch(newValue){
      		case '/':
      		$scope.todoFilter={};break;
      		case '/active':
      		$scope.todoFilter={completed:false};break;
      		case '/completed':
      		$scope.todoFilter={completed:true};break;
      		default:
      		$scope.todoFilter={};break;
      	}
      })
     }])
})(angular)
