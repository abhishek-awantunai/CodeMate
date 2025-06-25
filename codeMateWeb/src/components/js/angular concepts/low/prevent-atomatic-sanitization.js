/*

Sometimes the applications genuinely need to include executable code such as displaying <iframe> from an URL. In this case, you need to prevent automatic sanitization in Angular by saying that you inspected a value, checked how it was generated, and made sure it will always be secure. Basically it involves 2 steps,

Inject DomSanitizer: You can inject DomSanitizer in component as parameter in constructor

Mark the trusted value by calling some of the below methods

bypassSecurityTrustHtml
bypassSecurityTrustScript
bypassSecurityTrustStyle
bypassSecurityTrustUrl
bypassSecurityTrustResourceUrl
For example,The usage of dangerous url to trusted url would be as below,

constructor(private sanitizer: DomSanitizer) {
this.dangerousUrl = 'javascript:alert("XSS attack")';
this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);



*/