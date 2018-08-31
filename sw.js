
// Service Worker

// commented out this waitUntil code.
// This will be used in the registration object section   --->  Example 1
// Once you un-comment this, leave it un-commented for the rest of the exercises.

// self.addEventListener('install', (e) => {
//   e.waitUntil(new Promise (resolve => {
//     setTimeout(resolve, 5000);
//   }))
// });

self.addEventListener('activate', () => {
  console.log('SW: Active');
});
