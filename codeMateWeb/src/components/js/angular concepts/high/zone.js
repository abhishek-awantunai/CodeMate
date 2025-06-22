/*

https://www.youtube.com/watch?v=moUCZoJfhwY

Change Detection is what makes data binding work i.e it keeps view in sync with data model which is provided by component instance.

It is heavily tied to angular performance 

If we have a tree of components Then angular keeps change detector for each of those components so the application has shadowed change detector tree. Each component has its own change detector.When there is a change then we run through change detector tree from top to bottom manner.
Script snippet #4
To Boost performance :-
Reduce duration of change detection cycle
Reduce amount of binding
Avoid binding to getters and functions
Keep CD cycle < 16ms

Use Profiling or enableDebugTools

Reducing the Amount of Calling Change Detection

Zone.js and NgZone
How to detect a change?
In angular dependencies we can see zone.js ( a 3rd party library )
- provided by angular also called meta monkey patch
- Zone JS attaches to anything in your browser that can lead to potential change of the application state . For ex it can be any async events such as setTimeout, setInterval, click, focus, mousemove, api calls

When we boot our Angular application it creates a Global Zone and has control over all the possible things that can happen and when angular application kicks in it forks the NgZone from global zone.
So everything now happens on NgZone but not on global zone.

NgZone catches async operations from angular app and when there is no task remaining for the current VM turn, the NgZone will trigger a change detection cycle (tick)    

Angular itself binds to NgZone 
NgZone.onMicroTaskEmpty()

Change Detection Strategy :-
This strategy which is used by Angular to detect changes in DOM.
- Default 
- onPush

NgZoneService is implementation of Zone.js and angular is providing that to run some things which is not possible in angular such as setTimeout, setInterval, event Handlers, third party API calls

We can add anything to the NgZone area so that change detection can detect that also we can use NgZone to avoid change detection 

Adding the context to angular change detection and removing the context from angular change detection

Zone.js
- It is the implementation by Angular to detect all out asynchronous functions like setTimeout, promise, intervals, event handlers and tun change detection
It will ask angular to detect the change



Q1) How do you change the settings of zone-js?
    You can change the settings of zone by configuring them in a separate file and import it just after zone-js import. For example, you can disable the requestAnimationFrame() monkey patch to prevent change detection for no data update as one setting and prevent DOM events(a mousemove or scroll event) to trigger change detection. Let's say the new file named zone-flags.js,

    // disable patching requestAnimationFrame
    (window as any).__Zone_disable_requestAnimationFrame = true;

    // disable patching specified eventNames
    (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove'];
    The above configuration file can be imported in a polyfill.ts file as below,

    * Zone JS is required by default for Angular.

    import `./zone-flags`;
    import 'zone.js/dist/zone';  // Included with Angular CLI.

Q2) What are the methods of NgZone used to control change detection?
    -run()  
      - NgZone service provides a run() method that allows you to execute a function inside the angular zone. This function is used to execute third party APIs which are not handled by Zone and trigger change detection automatically at the correct time.

      export class AppComponent implements OnInit {
        constructor(private ngZone: NgZone) {}
        ngOnInit() {
          // use ngZone.run() to make the asynchronous operation in the angular zone
          this.ngZone.run(() => {
            someNewAsyncAPI(() => {
                // update the data of the component
            });
          });
        }
      }

    -runOutsideAngular()
      - Whereas runOutsideAngular() method is used when you don't want to trigger change detection.

    export class AppComponent implements OnInit {
      constructor(private ngZone: NgZone) {}
      ngOnInit() {
          // Use this method when you know no data will be updated
          this.ngZone.runOutsideAngular(() => {
          setTimeout(() => {
              // update component data and don't trigger change detection
          });
        });
      }
    }


Q3) What is a zone context?

  - Execution Context is an abstract concept that holds information about the environment within the current code being executed. A zone provides an execution context that persists across asynchronous operations is called as zone context. For example, the zone context will be same in both outside and inside setTimeout callback function,

    zone.run(() => {
      // outside zone
      expect(zoneThis).toBe(zone);
      setTimeout(function() {
        // the same outside zone exist here
        expect(zoneThis).toBe(zone);
      });
    });
    The current zone is retrieved through Zone.current


Q4) What are the possible data update scenarios for change detection?
  - The change detection works in the following scenarios where the data changes needs to update the application HTML.

      - Component initialization: 
        - While bootstrapping the Angular application, Angular triggers the ApplicationRef.tick() to call change detection and View Rendering.
      - Event listener: 
        - The DOM event listener can update the data in an Angular component and trigger the change detection too.
      
        @Component({
          selector: 'app-event-listener',
          template: `
            <button (click)="onClick()">Click</button>
            {{message}}`
        })
        export class EventListenerComponent {
          message = '';

          onClick() {
            this.message = 'data updated';
          }
        }
      - HTTP Data Request: 
        - You can get data from a server through an HTTP request
          data = 'default value';
          constructor(private httpClient: HttpClient) {}

          ngOnInit() {
            this.httpClient.get(this.serverUrl).subscribe(response => {
              this.data = response.data; // change detection will happen automatically
            });
          }

      - Macro tasks
        - setTimeout() or setInterval(): 
          - You can update the data in the callback function of setTimeout or setInterval
          data = 'default value';

        ngOnInit() {
          setTimeout(() => {
            this.data = 'data updated'; // Change detection will happen automatically
          });
        }
        
      - Micro tasks Promises: 
        - You can update the data in the callback function of promise

        data = 'initial value';

        ngOnInit() {
          Promise.resolve(1).then(v => {
            this.data = v; // Change detection will happen automatically
          });
        }
      - Async operations like Web sockets and Canvas: The data can be updated asynchronously using WebSocket.onmessage() and Canvas.toBlob().


*/