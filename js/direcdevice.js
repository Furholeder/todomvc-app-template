/*
* @Author: Administrator
* @Date:   2016-10-13 09:52:36
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-13 10:02:50
*/

'use strict';
(function(angular){
    var app = angular.module("myApp")
    app.directive("autoFocus",[function(){
      return {
        link:function($scope,iElm,Attrs,controller){
         iElm.on("dblclick",function(){
          angular.element(this).find('input').eq(1)[0].focus(); 
         })
        }
      }
    }])
})(angular)