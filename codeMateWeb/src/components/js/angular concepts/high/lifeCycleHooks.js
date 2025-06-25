/**

All components and directives do have life cycle hooks
Components have more life cycle hooks than directives

Component & Directive common life cycle hooks :-
    - ngOnInit, ngOnChanges, ngDoCheck, ngOnDestroy

Life cycle hooks that run only on Components :-
    - ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked


Lifecycle Hooks :-

A number of different phases a component goes through from birth to death.

ngOnChanges :- ( runs on self component ) // Hooks for Component itself
- invoked every time there is a change in one of the @Input properties of the component.

ngOnInit :- ( runs on self component ) // Hooks for Component itself
- invoked when the given component has been initialized and is called once after the first ngOnChange invocation

ngDoCheck - ( runs on self component ) // Hooks for Component itself
- invoked when the change detector of the given component is invoked.It allows us to implement our own change detection algorithm for the given component.You should never implement doCheck and onChanges on the same component

ngAfterContentInit - ( runs on component's children also only called on component not directives )
- invoked after angular performs content projection into the component's view

ngAfterContentChecked - ( runs on component's children also only called on component not directives )
- invoked each time the content of the given component has been checked by the change detection mechanism of Angular.

ngAfterViewInit - ( runs on component's children also only called on component not directives )
- invoked when the component's child view has been fully initialized

ngAfterViewChecked - ( runs on component's children also only called on component not directives )
- invoked every time the view of the given component's child has been checked by the change detection mechanism of Angular

ngOnDestroy - ( runs on self component ) // Hooks for Component itself
- invoked just before Angular destroys the component.use this hook to unsubscribe Observables or to detach event handlers so as to avoid memory leaks.

*/