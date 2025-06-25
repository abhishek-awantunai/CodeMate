/*

How do you perform Error handling?
If the request fails on the server or failed to reach the server due to network issues then HttpClient will return an error object instead of a successful response. In this case, you need to handle in the component by passing error object as a second callback to subscribe() method.

Let's see how it can be handled in the component with an example,

fetchUser() {
    this.userService.getProfile()
    .subscribe(
      (data: User) => this.userProfile = { ...data }, // success path
      error => this.error = error // error path
    );
}
It is always a good idea to give the user some meaningful feedback instead of displaying the raw error object returned from HttpClient.







*/