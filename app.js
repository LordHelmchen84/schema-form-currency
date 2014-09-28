/*global angular */
'use strict';

/**
 * The main app module
 * @name app
 * @type {angular.Module}
 */
var app = angular.module('app', ['pascalprecht.translate', 'schemaForm-currency'])
.controller('CurrencyController', function($scope){
  $scope.schema = {
    "type": "object",
    "title": "Story",
    "properties": {
      "title": {
        "title": "Title",
        "type": "string",
        "minLength": 10
      },
      "age": {
        "title": "Age",
        "type": "number"
      },
      "float": {
        "title": "Float",
        "type": "number",
        "format": 'currency',
        "multipleOf": 0.5
      }
    },
    "required": [
      "title",
      "float"
    ]
  }
  $scope.onSubmit = function(form) {
    $scope.$broadcast('schemaFormValidate')
    console.log(form.$valid);
    console.log($scope.model);
  }
  $scope.form = [
    {
      'key': 'title',
      'placeholder': 'Title'
    },
    {
      'key': 'age',
      'placeholder': 'Age'
    },
    {
      key: 'float',
      options: {
        unit: '$'
      }
    },
     {
        type: "submit",
        style: "btn-info",
        title: "OK"
      }
  ]
});
