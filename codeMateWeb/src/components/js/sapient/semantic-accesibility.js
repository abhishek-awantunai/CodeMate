/*

What are Semantic HTML?
In previous days we used to divide every section using div and used to use id=header /header / section for dividing the sections but with introduction of semantic or meaningful tags we were able to have more meaningful division of content of the document. 

Semantic HTML not only provide certain meaning to out HTML document but also it is beneficial from accessibility point of view.

Accessibility :-
    - ARIA ( Accessible Rich Internet Applications )
    - It is a set of attributes that define ways to make web content and web applications ( especially those developed with JavaScript ) more accessible to people with disabilities.

        - Such as we can add role attribute or we can add aria-label="Description of the overall image" for an image

The Guidelines :-
    1) Perceivable 1.1 :-
        People must be able to find your content i.e all non text content has a text alternative like img tag like :-
            <img src="http://dummy-image.com/sample.jpg" alt="an alternate text for that image" />

    2) Perceivable 1.2 :-
        There are alternative options for time based media

    3) Adaptable
        Content can be presented in different ways without loosing context.
        Like for small devices we can hide or collapse it in different forms but we don't want to make it inaccessible

    4) Distinguishable :-
        content can be separated from its background.

    5) Keyboard Accessible :-
        All part of website can be accessed using only keyword.
        Use links for links and buttons for buttons.

    6) Enough Time :-
        They are given enough time to use the content on your website

    7) Navigate :-
        People can navigate the website and understand where they are.

    8) It should be readable
        Use simple language and avoid jargon when possible

    9) Input assistance should be there.

    10) Compatible :-
        Build websites that work with current and future assistive technology.
        Write valid and semantic HTML and use ARIA to extend html.

*/