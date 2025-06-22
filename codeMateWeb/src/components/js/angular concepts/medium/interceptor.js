/*

You can use same instance of HttpInterceptors for the entire app by importing the HttpClientModule only in your AppModule, and add the interceptors to the root application injector. For example, let's define a class that is injectable in root application.

    @Injectable()
    export class MyInterceptor implements HttpInterceptor {
        intercept(
            req: HttpRequest<any>,
            next: HttpHandler
        ): Observable<HttpEvent<any>> {
            return next.handle(req).do(event => {
                if (eventt instanceof HttpResponse) {
                    // Code goes here
                }
            });
        }
    }

    After that import HttpClientModule in AppModule

    @NgModule({
        declarations: [AppComponent],
        imports: [BrowserModule, HttpClientModule],
        providers: [
            { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
        ],
        bootstrap: [AppComponent]
    })
    export class AppModule {}

    The HTTP Interceptors can be used for different variety of tasks,

        Authentication
        Logging
        Caching
        Fake backend
        URL transformation
        Modifying headers

    Angular supports multiple interceptors at a time. You could define multiple interceptors in providers property:

    providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyFirstInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: MySecondInterceptor, multi: true }
    ],
    The interceptors will be called in the order in which they were provided. i.e, MyFirstInterceptor will be called first in the above interceptors configuration.

    Http Interceptors are part of @angular/common/http, which inspect and transform HTTP requests from your application to the server and vice-versa on HTTP responses. These interceptors can perform a variety of implicit tasks, from authentication to logging.

    The syntax of HttpInterceptor interface looks like as below,

    interface HttpInterceptor {
        intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    }

*/
