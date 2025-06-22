/*

Is it mandatory to use injectable on every service class?
No. The @Injectable() decorator is not strictly required if the class has other Angular decorators on it or does not have any dependencies. But the important thing here is any class that is going to be injected with Angular is decorated. i.e, If we add the decorator, the metadata design:paramtypes is added, and the dependency injection can do it's job. That is the exact reason to add the @Injectable() decorator on a service if this service has some dependencies itself. For example, Let's see the different variations of AppService in a root component,

The below AppService can be injected in AppComponent without any problems. This is because there are no dependency services inside AppService.
export class AppService {
constructor() {
    console.log('A new app service');
}
}
The below AppService with dummy decorator and httpService can be injected in AppComponent without any problems. This is because meta information is generated with dummy decorator.
function SomeDummyDecorator() {
return (constructor: Function) => console.log(constructor);
}

@SomeDummyDecorator()
export class AppService {
constructor(http: HttpService) {
    console.log(http);
}
}
and the generated javascript code of above service has meta information about HttpService, js var AppService = (function () { function AppService(http) { console.log(http); } AppService = __decorate([ core_1.Injectable(), __metadata('design:paramtypes', [http_service_1.HttpService]) ], AppService); return AppService; }()); exports.AppService = AppService; 3. The below AppService with @injectable decorator and httpService can be injected in AppComponent without any problems. This is because meta information is generated with Injectable decorator. js @Injectable({ providedIn: 'root', }) export class AppService { constructor(http: HttpService) { console.log(http); } }


How do you configure injectors with providers at different levels?
    - You can configure injectors with providers at different levels of your application by setting a metadata value. The configuration can happen in one of three places,

    - In the @Injectable() decorator for the service itself
    - In the @NgModule() decorator for an NgModule
    - In the @Component() decorator for a component


Can I share services using modules?
    - No, it is not recommended to share services by importing module. i.e Import modules when you want to use directives, pipes, and components only. The best approach to get a hold of shared services is through 'Angular dependency injection' because importing a module will result in a new service instance.

*/