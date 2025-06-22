/**


What are the different ways to remove duplicate service registration?
  If a module defines providers and declarations then loading the module in multiple feature modules will duplicate the registration of the service. Below are the different ways to prevent this duplicate behavior.

  Use the providedIn syntax instead of registering the service in the module.
  Separate your services into their own module.
  Define forRoot() and forChild() methods in the module.

  export class ExampleModule {
    static forRoot(): ModuleWithProviders{
      return {
        ngModule:ExampleModule,
        providers:[
          {
            provide:MyService,
            useClass:MyEagerService
          }
        ]
      };
    }
  }


  export class ExampleModule {
    static forChild(): ModuleWithProviders{
      return {
        ngModule:ExampleModule,
          providers:[{
            provide:MyService,
            useClass:MyLazyService
          }
        ]
      };
    } 
  }

How do you provide a singleton service?
  Set the providedIn property of the @Injectable() to "root". This is the preferred way(starting from Angular 6.0) of creating a singleton service since it makes your services tree-shakable.

  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root',
  })
  export class MyService {
  }
  Include the service in root module or in a module that is only imported by root module. It has been used to register services before Angular 6.0.

  @NgModule({
    ...
    providers: [MyService],
    ...
  })


How do you restrict provider scope to a module?
  It is possible to restrict service provider scope to a specific module instead making available to entire application. 
  There are two possible ways to do it.

  - Using providedIn in service:
    import { Injectable } from '@angular/core';
    import { SomeModule } from './some.module';

    @Injectable({
      providedIn: SomeModule,
    })
    export class SomeService {
    }

  - Declare provider for the service in module:
    import { NgModule } from '@angular/core';

    import { SomeService } from './some.service';

    @NgModule({
      providers: [SomeService],
    })
    export class SomeModule {
    }

What is the recommendation for provider scope?
  - You should always provide your service in the root injector unless there is a case where you want the service to be available only if you import a particular @NgModule.

What is a provider?
  - A provider is an instruction to the Dependency Injection system on how to obtain a value for a dependency(aka services created). The service can be provided using Angular CLI as below,

  ng generate service my-service
  The created service by CLI would be as below,

  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root', //Angular provide the service in root injector
  })
  export class MyService {
  }


*/