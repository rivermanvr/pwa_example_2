
// Progressive Enhancement (SW supported)
// if ('serviceWorker' in navigator) {
if (navigator.serviceWorker) {

  // Register the SW
  navigator.serviceWorker.register('/sw.js')
    .then(function(registration){

      console.log('SW Registered');
      //comment out later....
      console.log(registration);

    }).catch(console.log);
}
