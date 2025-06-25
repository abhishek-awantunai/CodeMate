/*

Template Expression

    A template expression produces a value similar to any Javascript expression. Angular executes the expression and assigns it to a property of a binding target; the target might be an HTML element, a component, or a directive. In the property binding, a template expression appears in quotes to the right of the = symbol as in [property]="expression". In interpolation syntax, the template expression is surrounded by double curly braces. For example, in the below interpolation, the template expression is {{username}},

    <h3>{{username}}, welcome to Angular</h3>
    The below javascript expressions are prohibited in template expression

    assignments (=, +=, -=, ...)
    new
    chaining expressions with ; or ,
    increment and decrement operators (++ and --)


Template Statement

    A template statement responds to an event raised by a binding target such as an element, component, or directive. The template statements appear in quotes to the right of the = symbol like (event)="statement".

    Let's take an example of button click event's statement

    <button (click)="editProfile()">Edit Profile</button>
    In the above expression, editProfile is a template statement. The below JavaScript syntax expressions are not allowed.

    new
    increment and decrement operators, ++ and --
    operator assignment, such as += and -=
    the bitwise operators | and &
    the template expression operators



*/