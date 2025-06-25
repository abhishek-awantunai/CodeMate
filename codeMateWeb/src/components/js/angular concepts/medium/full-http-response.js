/*

    The response body doesn't may not return full response data because sometimes servers also return special headers or status code which which are important for the application workflow. Inorder to get full response, you should use observe option from HttpClient,

    getUserResponse(): Observable<HttpResponse<User>> {
    return this.http.get<User>(
        this.userUrl, { observe: 'response' });
    }
    Now HttpClient.get() method returns an Observable of typed HttpResponse rather than just the JSON data.

*/