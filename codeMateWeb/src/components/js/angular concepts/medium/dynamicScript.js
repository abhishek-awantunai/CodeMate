/*

How to inject the dynamic script in angular?
    Using DomSanitizer we can inject the dynamic Html, Style, Script, Url.

    import { Component, OnInit } from '@angular/core';
    import { DomSanitizer } from '@angular/platform-browser';
    @Component({
    selector: 'my-app',
    template: `
        <div [innerHtml]="htmlSnippet"></div>
    `,
    })
    export class App {
        constructor(protected sanitizer: DomSanitizer) {}
        htmlSnippet: string = this.sanitizer.bypassSecurityTrustScript("<script>safeCode()</script>");
    }

*/