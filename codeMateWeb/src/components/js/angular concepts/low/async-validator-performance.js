/*

Since all validators run after every form value change, it creates a major impact on performance with async validators by hitting the external API on each keystroke. This situation can be avoided by delaying the form validity by changing the updateOn property from change (default) to submit or blur. The usage would be different based on form types,

Template-driven forms: Set the property on ngModelOptions directive
<input [(ngModel)]="name" [ngModelOptions]="{updateOn: 'blur'}">
Reactive-forms: Set the property on FormControl instance
name = new FormControl('', {updateOn: 'blur'});


*/