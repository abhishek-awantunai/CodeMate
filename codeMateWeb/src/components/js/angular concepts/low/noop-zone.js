/*

What is NoopZone?
Zone is loaded/required by default in Angular applications and it helps Angular to know when to trigger the change detection. This way, it make sure developers focus on application development rather core part of Angular. You can also use Angular without Zone but the change detection need to be implemented on your own and noop zone need to be configured in bootstrap process. Let's follow the below two steps to remove zone.js,

- Remove the zone.js import from polyfills.ts.
- Zone JS is required by default for Angular itself.

// import 'zone.js/dist/zone';  // Included with Angular CLI.
Bootstrap Angular with noop zone in src/main.ts.
platformBrowserDynamic().bootstrapModule(AppModule, {ngZone: 'noop'})
  .catch(err => console.error(err));

*/