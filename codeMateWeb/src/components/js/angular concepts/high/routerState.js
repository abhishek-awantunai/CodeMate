/*

The RouteState is an interface which represents the state of the router as a tree of activated routes.

interface RouterState extends Tree {
  snapshot: RouterStateSnapshot
  toString(): string
}
You can access the current RouterState from anywhere in the Angular app using the Router service and the routerState property

What are the router imports?
  The Angular Router which represents a particular component view for a given URL is not part of Angular Core. It is available in library named @angular/router to import required router components. For example, we import them in app module as below,

  import { RouterModule, Routes } from '@angular/router';


What is router outlet?
  The RouterOutlet is a directive from the router library and it acts as a placeholder that marks the spot in the template where the router should display the components for that outlet. Router outlet is used like a component,

  <router-outlet></router-outlet>
  <!-- Routed components go here -->

What are router links?
  The RouterLink is a directive on the anchor tags give the router control over those elements. Since the navigation paths are fixed, you can assign string values to router-link directive as below,

  <h1>Angular Router</h1>
  <nav>
    <a routerLink="/todosList" >List of todos</a>
    <a routerLink="/completed" >Completed todos</a>
  </nav>
  <router-outlet></router-outlet>


What are active router links?
  RouterLinkActive is a directive that toggles css classes for active RouterLink bindings based on the current RouterState. i.e, The Router will add CSS classes when this link is active and remove when the link is inactive. For example, you can add them to RouterLinks as below.

  <h1>Angular Router</h1>
  <nav>
    <a routerLink="/todosList" routerLinkActive="active">List of todos</a>
    <a routerLink="/completed" routerLinkActive="active">Completed todos</a>
  </nav>
  <router-outlet></router-outlet>

What is router state?
  RouterState is a tree of activated routes. Every node in this tree knows about the "consumed" URL segments, the extracted parameters, and the resolved data. You can access the current RouterState from anywhere in the application using the Router service and the routerState property.

  @Component({templateUrl:'template.html'})
  class MyComponent {
    constructor(router: Router) {
      const state: RouterState = router.routerState;
      const root: ActivatedRoute = state.root;
      const child = root.firstChild;
      const id: Observable<string> = child.params.map(p => p.id);
      //...
    }
  }

What is activated route?
  ActivatedRoute contains the information about a route associated with a component loaded in an outlet. It can also be used to traverse the router state tree. The ActivatedRoute will be injected as a router service to access the information. In the below example, you can access route path and parameters,

  @Component({...})
  class MyComponent {
    constructor(route: ActivatedRoute) {
      const id: Observable<string> = route.params.pipe(map(p => p.id));
      const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
      // route.data includes both `data` and `resolve`
      const user = route.data.pipe(map(d => d.user));
    }
  }


What is the purpose of Wildcard route?
  If the URL doesn't match any predefined routes then it causes the router to throw an error and crash the app. In this case, you can use wildcard route. A wildcard route has a path consisting of two asterisks to match every URL.

  For example, you can define PageNotFoundComponent for wildcard route as below

  { path: '**', component: PageNotFoundComponent }










*/