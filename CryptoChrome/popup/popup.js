var EventListener = require('../event.listener')

var socket = io.connect('http://localhost:9999', { reconnect: true });
var angular = require('angular');
var app = angular.module('cryptoPass', [ /*, require('angular-animate'), 'ui.slider'*/ ])

var eventListener = new EventListener();

app.controller('cryptoCtrl', function($scope, $rootScope) {
  console.log('started angular')
  $scope.authenticate = false;

  $scope.authenticatePassword = function() {
    // need to validate password from chrome
    chrome.extension.sendMessage({master: $scope.master, eventName: 'authentication'})
    eventListener.on('validation', function (data) {
      $scope.authenticate = data.valid;
      $scope.$digest();
    })
    // socket.emit('chromeToValidate')
  }
})

chrome.extension.onMessage.addListener(function (req, sender, sendRes) {
  if (!eventListener[req.eventName]) return
  eventListener.emit(req.eventName, req);
})




$(document).ready(function() {
  console.log('ready');




})
