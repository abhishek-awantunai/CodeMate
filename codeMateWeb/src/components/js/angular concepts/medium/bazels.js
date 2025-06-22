/**

It is a tool used by Angular to support incremental build in Angular i.e only new changes will be complied not the whole build every time also only the changes files will be updated during build.

So first build takes time but afterwards it won't take much time.

Bazel is a powerful build tool developed and massively used by Google and it can keep track of the dependencies between different packages and build targets. In Angular8, you can build your CLI application with Bazel. Note: The Angular framework itself is built with Bazel.

What are the advantages of Bazel tool?
    Below are the list of key advantages of Bazel tool,

    It creates the possibility of building your back-ends and front-ends with the same tool
    The incremental build and tests
    It creates the possibility to have remote builds and cache on a build farm.

How do you run Bazel directly?
    Sometimes you may want to bypass the Angular CLI builder and run Bazel directly using Bazel CLI. You can install it globally using @bazel/bazel npm package. i.e, Bazel CLI is available under @bazel/bazel package. After you can apply the below common commands,

    bazel build [targets] // Compile the default output artifacts of the given targets.
    bazel test [targets] // Run the tests with *_test targets found in the pattern.
    bazel run [target]: Compile the program represented by target and then run it.

How do you use Bazel with Angular CLI?
    The @angular/bazel package provides a builder that allows Angular CLI to use Bazel as the build tool.
    
    To Use in an existing application: Add @angular/bazel using CLI
    ng add @angular/bazel

    Use in a new application: Install the package and create the application with collection option
    npm install -g @angular/bazel
    ng new appName --collection=@angular/bazel
    
    When you use ng build and ng serve commands, Bazel is used behind the scenes and outputs the results in dist/bin folder.

*/