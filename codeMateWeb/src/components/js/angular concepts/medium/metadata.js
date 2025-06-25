/*

Metadata is used to decorate a class so that it can configure the expected behavior of the class. The metadata is represented by decorators.

    - Class decorators 
        @Component and @NgModule

    - Property decorators Used for properties inside classes, e.g. @Input and @Output
        @Input() title: string;

    - Method decorators Used for methods inside classes, e.g. @HostListener 
        @HostListener('click', ['$event'])
        onHostClick(event: Event) {
            // clicked, `event` available
        }

    - Parameter decorators Used for parameters inside class constructors, e.g. @Inject, Optional
        constructor(@Inject(MyService) myService) {
            console.log(myService); // MyService
        }


*/