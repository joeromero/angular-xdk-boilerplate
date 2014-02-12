angular.module('Main', [
  'ngRoute',
  'ngTouch',
  'ngAnimate',
  'ngProgress',
  'pasvaz.bindonce',
  'MobileBoilerPlate'
])

.run(['MBP', function(MBP) {
  MBP.hideUrlBarOnLoad();
  MBP.enableActive();
  MBP.preventZoom();
  MBP.startupImage();
}])

.run(['ngProgress', function(ngProgress) {
  ngProgress.color('#86c85e');
  ngProgress.height('2px');
}])

.config(['$routeProvider', function($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'app/views/home.html',
    controller: 'HomeController'
  })
  .otherwise({
    redirectTo: '/'
  });

}]);