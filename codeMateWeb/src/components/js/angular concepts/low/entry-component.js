/*

What is an entry component?
An entry component is any component that Angular loads imperatively(i.e, not referencing it in the template) by type. Due to this behavior, they can’t be found by the Angular compiler during compilation. These components created dynamically with ComponentFactoryResolver.

Basically, there are two main kinds of entry components which are following -

The bootstrapped root component
A component you specify in a route

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

Is it necessary for bootstrapped component to be entry component?
Yes, the bootstrapped component needs to be an entry component. This is because the bootstrapping process is an imperative process.

*/