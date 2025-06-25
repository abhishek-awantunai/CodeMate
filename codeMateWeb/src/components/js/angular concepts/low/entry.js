/*

How do you manually bootstrap an application?
You can use ngDoBootstrap hook for a manual bootstrapping of the application instead of using bootstrap array in @NgModule annotation. This hook is part of DoBootstap interface.

interface DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef): void
}
The module needs to be implement the above interface to use the hook for bootstrapping.

class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef) {
    appRef.bootstrap(AppComponent); // bootstrapped entry component need to be passed
  }
}

Is it necessary for bootstrapped component to be entry component?
Yes, the bootstrapped component needs to be an entry component. This is because the bootstrapping process is an imperative process.


Do I still need to use entryComponents array in Angular9?
No. In previous angular releases, the entryComponents array of ngModule decorator is used to tell the compiler which components would be created and inserted dynamically in the view. In Angular9, this is not required anymore with Ivy.

Why is not necessary to use entryComponents array every time?
Most of the time, you don't need to explicity to set entry components in entryComponents array of ngModule decorator. Because angular adds components from both @NgModule.bootstrap and route definitions to entry components automatically.


What is a routed entry component?
The components referenced in router configuration are called as routed entry components. This routed entry component defined in a route definition as below,

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent // router entry component
  }
];
Since router definition requires you to add the component in two places (router and entryComponents), these components are always entry components.

Note: The compilers are smart enough to recognize a router definition and automatically add the router component into entryComponents.


What is a bootstrapped component?
A bootstrapped component is an entry component that Angular loads into the DOM during the bootstrap process or application launch time. Generally, this bootstrapped or root component is named as AppComponent in your root module using bootstrap property as below.

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // bootstrapped entry component need to be declared here
})


What is an entry component?
An entry component is any component that Angular loads imperatively(i.e, not referencing it in the template) by type. Due to this behavior, they can’t be found by the Angular compiler during compilation. These components created dynamically with ComponentFactoryResolver.

Basically, there are two main kinds of entry components which are following -

The bootstrapped root component
A component you specify in a route

*/