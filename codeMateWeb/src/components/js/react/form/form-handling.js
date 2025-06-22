/*

What is the popular choice for form handling?
    Formik is a form library for react which provides solutions such as validation, keeping track of the visited fields, and handling form submission.

    In detail, You can categorize them as follows,

    Getting values in and out of form state
    Validation and error messages
    Handling form submission
    It is used to create a scalable, performant, form helper with a minimal API to solve annoying stuff.

What are the advantages of formik over redux form library?
    Below are the main reasons to recommend formik over redux form library,

    The form state is inherently short-term and local, so tracking it in Redux (or any kind of Flux library) is unnecessary.
    Redux-Form calls your entire top-level Redux reducer multiple times ON EVERY SINGLE KEYSTROKE. This way it increases input latency for large apps.
    Redux-Form is 22.5 kB minified gzipped whereas Formik is 12.7 kB


*/