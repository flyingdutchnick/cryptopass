app.controller('creditCardController', function($scope){
  $scope.accounts = masterObj.creditCard;
})

app.controller('creditCardSingleController', function($scope, $stateParams){
  console.log($stateParams);
  $scope.account = $stateParams.accountData;
})


// app.controller('addLoginController', function($scope, $state, $stateParams, $rootScope){
// 	   // var dropboxUtilities = require('../../utilities/dropbox/dropbox.utilities.js')
// 	   var utils = require('../../utilities/encrypt.file.js');
// 	   var utilities = require('../../utilities/encrypt.utility.js');
// 	   var validate = utils.validate;
// 	   var decryptFile = utils.decryptFile;
//        var encryptFile = utils.encryptFile;
//        var encrypt = utilities.encrypt;
//        var decryptData = utilities.decrypt;
//        var getDataEncrypted = utils.getDataEncrypted
//        var createRandom = require('../../utilities/password-utilities/pass.gen').createRandom
//        var generateSecret = utils.generateSecret;

// 		$scope.login = {
// 		name: null,
// 		username: null,
// 		password: null
// 	}
// 	$scope.gen = null

// 	$scope.generate = function (){
// 		$scope.gen = !$scope.gen
// 	}

// 	$scope.generatePassword = function (leng, syms, nums){
// 		$scope.login.password = createRandom(+leng, +syms, +nums)
// 	}

// 	$scope.createLogin = function (){
// 		console.log('hellooooooooooooo',login.password)
// 		var newId = masterObj.login.length ? masterObj.login[masterObj.login.length - 1].id + 1 : 1;
// 		$scope.login.id = newId
// 		masterObj.login.push($scope.login)
// 		var encrypted = encrypt(JSON.stringify(masterObj), masterPass)
// 		socket.emit('addFromElectron', {data: encrypted})
// 		$rootScope.$evalAsync()
// 		$state.go('app.loginSingle', {id: newId}, {reload: true})
// 	}

// })