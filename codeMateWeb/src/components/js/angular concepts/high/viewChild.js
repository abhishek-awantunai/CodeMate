/**

@ViewChild & @ViewChildren

if we want to access an element or child component in component / parent component we can use @viewChild and since @viewChild returns only the first instance of the component we do have @ViewChildren to get all the instances of component in the form of array

ElementRef, QueryList

content projected

@ContentChild and @ContentChildren


Is mandatory to pass static flag for ViewChild?
In Angular 8, the static flag is required for ViewChild. Whereas in Angular9, you no longer need to pass this property. Once you updated to Angular9 using ng update, the migration will remove { static: false } script everywhere.

@ViewChild(ChildDirective) child: ChildDirective; // Angular9 usage
@ViewChild(ChildDirective, { static: false }) child: ChildDirective; //Angular8 usage

*/