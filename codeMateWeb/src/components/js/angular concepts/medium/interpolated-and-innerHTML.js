/*

What is the purpose of innerHTML?
    The innerHtml is a property of HTML-Elements, which allows you to set it's html-content programmatically. Let's display the below html code snippet in a <div> tag as below using innerHTML binding,

    <div [innerHTML]="htmlSnippet"></div>
    and define the htmlSnippet property from any component

    export class myComponent {
        htmlSnippet: string = '<b>Hello World</b>, Angular';
    }

    Unfortunately this property could cause Cross Site Scripting (XSS) security bugs when improperly handled.


The main difference between interpolated and innerHTML code is the behavior of code interpreted. Interpolated content is always escaped i.e, HTML isn't interpreted and the browser displays angle brackets in the element's text content. Where as in innerHTML binding, the content is interpreted i.e, the browser will convert < and > characters as HTMLEntities. For example, the usage in template would be as below,

    <p>Interpolated value:</p>
    <div >{{htmlSnippet}}</div>
    <p>Binding of innerHTML:</p>
    <div [innerHTML]="htmlSnippet"></div>
    and the property defined in a component.

    export class InnerHtmlBindingComponent {
        htmlSnippet = 'Template <script>alert("XSS Attack")</script> <b>Code attached</b>';
    }
    
Even though innerHTML binding create a chance of XSS attack, Angular recognizes the value as unsafe and automatically sanitizes it.






*/