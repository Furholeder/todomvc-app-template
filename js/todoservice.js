/*
* @Author: Administrator
* @Date:   2016-10-13 10:03:18
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-13 13:10:16
*/

'use strict';

(function(angular){
    var app=angular.module('myApp')
    app.service("TodoService",["$window",function($window){
      var todos = JSON.parse(window.localStorage.getItem("todos")||'[]');
    	this.save =function(){
    		window.localStorage.setItem("todos",JSON.stringify(todos))
    	}
      this.getAll = function(){
        return todos;
      }
      this.add=function(text){
        var maxId=0;
        todos.forEach(function(todo,index){
          if(maxId<todo.id){
            maxId=todo.id
          }
        })
        var todo ={
          id:maxId+1,
          text:text,
          completed:false
        }
        todos.push(todo)
        this.save();
      }
      this.removeId =function(id){
        var rmIndex ;
        todos.some(function(todo,index){
          if(id===todo.id){
            rmIndex = index;
            return true;
          }
         })

        todos.splice(rmIndex,1);
        this.save();
      }
      this.removeCompleted = function(){
        var uncompleted=[]
        todos.forEach(function(todo,index){
          if(!todo.completed){
            uncompleted.push(todo)
          }
        })
        todos = uncompleted
        this.save();
      }
      this.selectAll=function(toggleAll){
        todos.forEach(function(todo,index){
        	todo.completed =toggleAll;
        })
        this.save();
      }
    }])
})(angular)
