app.config(function($stateProvider) {
  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'build/angular/login/login.view.html',
    controller: 'loginController'
  })
})


app.config(function($stateProvider) {
  $stateProvider.state('login.single', {
    url: '/login/:id',
    templateUrl: 'build/angular/login/login.single.view.html',
    controller: 'singleLoginController'
  })
})
