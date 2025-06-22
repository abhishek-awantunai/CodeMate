/*

Template Engine -> View Engine -> Ivy Engine

In view engine we do have Single Template Interpreter at runtime but in Ivy we do have broken that single template interpreter into several individual set of rendering functions / instructions.
It is almost like assembly language of angular templates  

Angular Ivy is a new rendering engine for Angular. You can choose to opt in a preview version of Ivy from Angular version 8.

You can enable ivy in a new project by using the --enable-ivy flag with the ng new command

ng new ivy-demo-app --enable-ivy
You can add it to an existing project by adding enableIvy option in the angularCompilerOptions in your project's tsconfig.app.json.

{
  "compilerOptions": { ... },
  "angularCompilerOptions": {
    "enableIvy": true
  }
}

Ivy is the code name for Angular's next-generation compilation and rendering pipeline. With the version 9 release of Angular, the new compiler and runtime instructions are used by default instead of the older compiler and runtime, known as View Engine.

You can expect below features with Ivy preview,

Generated code that is easier to read and debug at runtime
Faster re-build time
Improved payload size
Improved template type checking

Can I use AOT compilation with Ivy?
Yes, it is a recommended configuration. Also, AOT compilation with Ivy is faster. So you need set the default build options(with in angular.json) for your project to always use AOT compilation.

{
  "projects": {
    "my-project": {
      "architect": {
        "build": {
          "options": {
            ...
            "aot": true,
          }
        }
      }
    }
  }
}

*/