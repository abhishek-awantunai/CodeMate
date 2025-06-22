/*

The server-side XSS protection is supported in an angular application by using a templating language that automatically escapes values to prevent XSS vulnerabilities on the server. But don't use a templating language to generate Angular templates on the server side which creates a high risk of introducing template-injection vulnerabilities.

Angular has built-in support for preventing http level vulnerabilities such as as cross-site request forgery (CSRF or XSRF) and cross-site script inclusion (XSSI). Even though these vulnerabilities need to be mitigated on server-side, Angular provides helpers to make the integration easier on the client side.

HttpClient supports a token mechanism used to prevent XSRF attacks
HttpClient library recognizes the convention of prefixed JSON responses(which non-executable js code with ")]}',\n" characters) and automatically strips the string ")]}',\n" from all responses before further parsing

Is safe to use direct DOM API methods in terms of security?
No,the built-in browser DOM APIs or methods don't automatically protect you from security vulnerabilities. In this case it is recommended to use Angular templates instead of directly interacting with DOM. If it is unavoidable then use the built-in Angular sanitization functions.


How do you prevent automatic sanitization?







*/