var angular = require("angular");
var shoppingListDirectiveApp = angular.module("ShoppingListDirectiveApp", []);
shoppingListDirectiveApp
    .factory('ShoppingListFactory', require("./shopping-list.service"))
    .controller('ShoppingListController', require("./shopping-list.controller"))
    .directive('shoppingList', require('./shopping-list-directive'))
    ;

module.exports = shoppingListDirectiveApp;