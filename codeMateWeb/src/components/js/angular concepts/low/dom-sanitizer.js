/*

Sanitization is the inspection of an untrusted value, turning it into a value that's safe to insert into the DOM. 
Yes, Angular supports sanitization. It sanitizes untrusted values for HTML, styles, and URLs but sanitizing resource URLs isn't possible because they contain arbitrary code.

DomSanitizer is used to help preventing Cross Site Scripting Security bugs (XSS) by sanitizing values to be safe to use in the different DOM contexts.


What are the best practices for security in angular?
    Below are the best practices of security in angular,

    Use the latest Angular library releases
    Don't modify your copy of Angular
    Avoid Angular APIs marked in the documentation as “Security Risk.”

What are the security principles in angular?
    Below are the list of security principles in angular,

    You should avoid direct use of the DOM APIs.
    You should enable Content Security Policy (CSP) and configure your web server to return appropriate CSP HTTP headers.
    You should Use the offline template compiler.
    You should Use Server Side XSS protection.
    You should Use DOM Sanitizer.
    You should Preventing CSRF or XSRF attacks.
..0.
*/