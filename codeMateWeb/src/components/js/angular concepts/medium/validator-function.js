/*

Q1) What are the types of validator functions?

    - In reactive forms, the validators can be either synchronous or asynchronous functions,

    Sync validators: 
        - These are the synchronous functions which take a control instance and immediately return either a set of validation errors or null. Also, these functions passed as second argument while instantiating the form control. The main use cases are simple checks like whether a field is empty, whether it exceeds a maximum length etc.
    
    Async validators: 
        - These are the asynchronous functions which take a control instance and return a Promise or Observable that later emits a set of validation errors or null. Also, these functions passed as second argument while instantiating the form control. The main use cases are complex validations like hitting a server to check the availability of a username or email.
        
    The representation of these validators looks like below

    this.myForm = formBuilder.group({
        firstName: ['value'],
        lastName: ['value', *Some Sync validation function*],
        email: ['value', *Some validation function*, *Some asynchronous validation function*]
    });

*/