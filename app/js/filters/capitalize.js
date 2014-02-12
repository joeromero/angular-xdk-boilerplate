angular.module('Main')
.filter('capitalize', function() {

  return function(input) {
    if(!input) return;

    return input.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

});