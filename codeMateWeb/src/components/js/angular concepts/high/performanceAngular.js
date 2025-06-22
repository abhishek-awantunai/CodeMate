/**
  Improving Angular Application performance :-
  - Profiling

*/

/**

Best practices for Angular Application Speed

i) Code Splitting
ii) Bundle preloading
  - ngx-quicklink

iii) Efficient Serving
- Deploy using @angular/fire

*/


/*
  Quicklinkmodule


  import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';


  @NgModule({
    imports: [
      RouterModule.forRoot([
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'demo',
      loadChildren: () => import('./demo/demo.module).then(m => m.DemoModule)
    }
  ],
  {
    preloadingStrategy: QuicklinkStrategy
  }
  )
    ]
  })
*/


/*

Performance best practices :-

Build performance
Starter performance
Runtime performance

Starter performance

- enable in angular.json
  sourceMap: true
  namedChunks: true

- set budget in you angular app configuration


- Host your svg images as these are first processed from css -> javascript -> html page
- Be careful of what you import

*/




/*

Angular Run Time Performance :-

i) Don't over optimize

*/


/*

Change Detection :-

It is one of the top notch feature of Angular that makes data binding "just work".
It is strongly related to Angular performance

It makes sure that your view is in sync with your data model which is being provided by component instance.


When we write an Angular application a component tree is generated.
Angular keeps change detector for each of those components in component tree

Application has a shadowed Change Detector Tree, each component has a change detector

Whenever there is a change in any component we run through the change detector tree from top to bottom - for Default

detectChanges() [ it is a method in change detector ]
It is called when an event has occurred and bindings should be checked

This happens when we do have change in our Application.
And each change in our application leads to

- a change detection cycle occurs from top to bottom ( all components )
- unidirectional

Basically each change in your app leads to change detection cycle which may have side effects.

So we should reduce duration of a change detection cycle
  - by reducing amount of bindings (eg.GRIDS: virtual scrolling via CdK)
  - avoid binding to ( computationally intensive ) getters or functions.

Keep CD cycle < 16 ms

*/


/**

Zone JS is also called as meta monkey patch

When we boot our Angular application zone js creates a Global zone and has control over all those aynchronous operations that could possibly happen in your web app.

When angular application kicks in it will fork a ngzone from that global zone.

So now anything that will happen to the angular application will also happen to ngzone

Ngzone now catches async operations from the Angular App.

When no tasks are remaining for the current VM turn , the NgZone will trigger a change detection cycle ( tick ).


NgZone.onMicrotasksEmpty()     ------------->       ApplicationRef.tick()


                                    view1.detectChanges()             view2.detectChanges()

                                                  view3.detectChanges()


Angular itself binds to the NgZone and this has a event handler called NgZone.onMicrotasksEmpty() when there is no task remaining in current VM

Whenever this state is reached then Angular calls ApplicationRef.tick() the tick method of the ApplicationRef.

Internally all components are referred to as Views and then angular will quickly run across all of the different views and call detectchanges on the change  detector of that specific view.




Common pitfalls of ZoneJS

- Long CD cycles in combination with high frequency events
  - mousemove
  - scroll
  - requestAnimationFrame
  - setInterval with short intervals ( clock )



Avoid continuos cd cycle while a mouse move event :-

ngZone.runOutsideAngular(() => {
  // runs outside angular zone, for performance-critical code

  ngZone.run(()=>{
    // runs inside angular zone, for updating view  afterwards
  });
})

// frame updates after each 16 ms

When we subscribe to the mousemove event inside that  runOutsideAngular function then the mouse move event will be triggered on the global zone and since angular is not attached here so no change detection cycle will follow

we can disable patches (polyfill.ts) in zone js :-

(window as any).__Zone_disable_requestAnimationFrame = true;
// disable patch requestAnimationFrame = true

(window as any).__Zone_disable_on_property = true;
// disable patch on property such as onclick

(window as any).__Zone_symbol_BLACK_LISTED_EVENTS = ['scroll', 'mouseMove'];
// disable patch specified eventNames = true

by disable this the cd cycle wont run every 16ms.

But this my make your application run out of sync

default ChangeDetectionStrategy for component is default

Default:
Uses zone.js for detecting changes and updates bindings.
Always checks all the components.

OnPush:
Restricts change detection to changes of @Input parameters of that component

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})

*/