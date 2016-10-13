/*
* @Author: Administrator
* @Date:   2016-10-13 08:05:17
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-13 09:38:00
*/

'use strict';
(function(angular){
    var app = angular.module("myApp")
     app.controller("mainCtrl",["$scope",function($scope){
       $scope.text = ""
       $scope.todoFilter = {}
       $scope.currentId = 1
       $scope.todos = [
        { id: 1, text: '吃饭', completed: false },
        { id: 2, text: '睡觉', completed: false },
        { id: 3, text: '打豆豆', completed: true },
        { id: 4, text: '写代码', completed: false },
        { id: 5, text: '约会', completed: true },
        { id: 6, text: 'hello world', completed: true }
      ]
      $scope.add=function(){
        var maxId=0;
        $scope.todos.forEach(function(todo,index){
          if(maxId<todo.id){
            maxId=todo.id
          }
        })
        var todo ={
          id:maxId,
          text:$scope.text,
          completed:false
        }
        $scope.todos.push(todo) 
      }
      
      
      $scope.getEditing=function(id){
        console.log("ni shuo sha ")
        $scope.currentId =id;
      }
  
      $scope.edit =function(){
        $scope.currentId = 0;
      }
      $scope.removeId = function(id){
         var rmIndex ;
         $scope.todos.some(function(todo,index){
          if(id===todo.id){
            rmIndex = index;
            return true;
          }
         })
  
         $scope.todos.splice(rmIndex,1);
      }
      $scope.remove=function(){
        var uncompleted=[]
        $scope.todos.forEach(function(todo,index){
          if(!todo.completed){
            uncompleted.push(todo)
          }
        })
        $scope.todos = uncompleted
      }
     }])
})(angular)