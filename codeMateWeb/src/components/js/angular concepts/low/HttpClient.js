/**

Most of the Front-end applications communicate with backend services over HTTP protocol using either XMLHttpRequest interface or the fetch() API. Angular provides a simplified client HTTP API known as HttpClient which is based on top of XMLHttpRequest interface. This client is available from @angular/common/http package. You can import in your root module as below,

import { HttpClientModule } from '@angular/common/http';
The major advantages of HttpClient can be listed as below,

    Contains testability features
    Provides typed request and response objects
    Intercept request and response
    Supports Observable APIs
    Supports streamlined error handling


*/