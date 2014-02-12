document.addEventListener('intel.xdk.device.ready', function() {

  // Lock orientation
  intel.xdk.device.setRotateOrientation('portrait');
  intel.xdk.device.setAutoRotate(false);

  // Manage power
  intel.xdk.device.managePower(true,false);

  // Hide splash screen
  intel.xdk.device.hideSplashScreen();

  angular.bootstrap(document, ['Main']);
}, false);