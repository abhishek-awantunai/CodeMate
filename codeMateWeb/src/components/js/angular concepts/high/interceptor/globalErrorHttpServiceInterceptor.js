/**

  @Injectable()
  export class GlobalErrorHttpServiceInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler) {
      return next.handler(request);
    }
  }

 */

