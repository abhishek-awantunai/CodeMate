/**

Interceptors :

  - It is a feature in Angular that provides great way to mutate outgoing or incoming http request.

  - we can set authorization header, ensure outgoing requests to be Https instead of Http.
  - we can create global error catch in case Http request fails.
  - we can create mock response for or application to test


  multi - true
  this provides multiple classes for a single injection token

  for single injection token we are using multiple classes

  i.e for HTTP_INTERCEPTORS we are using HttpServiceInterceptor as well as GlobalErrorHttpServiceInterceptor due to this multi true



@Injectable()
export class HttpServiceInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handler(request);
  }
}


*/