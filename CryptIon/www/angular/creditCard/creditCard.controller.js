app.controller('creditCardController', function($scope){
  $scope.accounts = masterObj.creditCard;
})

app.controller('creditCardSingleController', function($scope, $stateParams, $timeout){
  console.log($stateParams);
  $scope.account = $stateParams.accountData;
  $scope.isActive = null
  $scope.copyText = function (text, className){
    $scope.isActive = className;
    cordova.plugins.clipboard.copy(text)
    $timeout(function(){
      $scope.isActive = null
    }, 2000);
  }
})


app.controller('addcreditCardController', function($scope, $state, $stateParams, $rootScope){

	   var utilities = require('../angular/utilities/encrypt.utility.js');
     var encrypt = utilities.encrypt;
     var decryptData = utilities.decrypt;
     var dropboxUtils = require('../angular/utilities/dropbox.utility.js');
     var idGenerator = require('../angular/utilities/hash.utility.js').idGenerator;
     var moment = require('moment')
  $scope.creditCard = {
    name: null,
    cardNumber: null,
    ccv: null,
    expiration: null,
    firstName: null,
    lastName: null,
    type: null,
  }

  $scope.createCard = function() {
    var newId = idGenerator($scope.creditCard);
    $scope.creditCard.id = newId
    $scope.creditCard.createdAt = moment().format('MMMM Do YYYY, h:mm:ss a');
    $scope.creditCard.lastUpdated = moment().format('MMMM Do YYYY, h:mm:ss a');
    if ($scope.creditCard) masterObj.creditCard.push($scope.creditCard)
    var encrypted = encrypt(JSON.stringify(masterObj), globalMasterPass)
    dropboxUtils.fileUpload(encrypted, '/mobileData.txt')
    .then(function(){
      $rootScope.$evalAsync()
      $state.go('app.creditCard')
    })
    .catch(function(err){
      console.log(err);
    })
  }

})
