
// Progressive Enhancement (SW supported)
// if ('serviceWorker' in navigator) {
if (navigator.serviceWorker) {

  // Register the SW
  navigator.serviceWorker.register('/sw.js')
    .then(function(registration){

      console.log('SW Registered');

      // Un-comment for Example 1.
      //comment out when you are finished with Example 1 (service Worker Object)

      //console.log(registration);


      // This next code should be un-commented for Example 2
      // Re-comment when you are finished with Example 2 (service worker Object)

      // registration.onupdatefound = () => {
      //   console.log('New Service Worker Found');
      //   console.log(registration.installing);
      // }


      // This next code should be un-commented for Example 3
      // assign this new installing working to a variable once it is found
      // on this new service worker, we can also listen for a state change.
      // assign a handler function for when the state changes which will log
      // this new worker's state.


      // Re-comment when you are finished with Example 3 (service worker Object)

      // registration.onupdatefound = () => {
      //   console.log('New Service Worker Found');

      //   let newSW = registration.installing;
      //   newSW.onstatechange = () => {
      //     console.log(newSW.state);
      //   }

      // }

    }).catch(console.log);
}
