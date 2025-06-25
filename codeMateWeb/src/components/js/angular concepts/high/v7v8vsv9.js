/**

  v1 :
    - It was a library rather than a framework that is now

    v2 : 
    - It is a framework which was developed keeping mobile in mind.
    - Template Engine was used to compile angular

  v4 :
    - Minimum Build Size
    - Compilation speed Increased
    - *ngIf -> else was introduced
    - Extended typescript from 1.8 to 2.1
    - Instead of Template Engine View Engine was Introduced
  
  v5 :
    - Http library was replaced with HttpClient ( 2 -> 7 support for both were given but later in 8 Http library support was removed )
    - Built in pipes were introduced
    - Build Optimized
    - Improved Compiler
    - Extended Typescript from 2.1 to 2.3

  v6 :
    - Cli was introduced -> ng update was introduced
    - RxJs library
    - Speed Increase
    - Tree Shaking

  v7 :
    - Unlike the previous versions of Angular, the 7th major release comes with splitting in @angular/core. This is done in order to reduce the size of the same. Typically, not each and every module is required by an Angular developer. Therefore, in Angular 7 each split of the @angular/core will have no more than 418 modules.

    - Also, Angular 7 brings drag - and - drop and virtual scrolling into play.The latter enable loading as well as unloading elements from the DOM.For virtual scrolling, the latest version of Angular comes with the package.Furthermore, Angular 7 comes with a new and enhanced version of the ng - compiler.

  V8 :
    - IVY was introduced but was given as an experimental basis like we can enable it
    - Differential Loading:
      - a Differential loading is a process by which the browser chooses between modern or legacy JavaScript based on its own capabilities
    - New lazy loading syntax
      - in place of the proprietary syntax to enable lazy loading, the framework has adopted the more common dynamic import syntax used widely in client-side web development
  V9 :
    - Ivy is enabled by default
      - Ivy is the code name for Angular's next-generation compilation and rendering pipeline. With the version 9 release of Angular, the new compiler and runtime instructions are used by default instead of the older compiler and runtime, known as View Engine.
    - Improves Build Size
    - Faster compilation

  v12 :
    - Support for IE11 removed
    - View Engine is deprecated and will remove in future
    - Nullish Coalescing operator has been added (??)
      {{ age != null || age != undefined ? age : calculateAge() }}    // is replaced with new check

      {{ age ?? calculateAge() }}
    - Planning to remove Protractor
    - Angular 12 comes with a tailwind support
    - Angular supports inline scss in style
    - Angular Document updated for better Learning
    
  v13 :
    - Typescript v4.4.4 support has been added
      - Core support for Typescript older than version v4.4.2 has been removed
    - View Engine Completely removed
    - View Engine completely replaced with IVY engine
    - NodeJS older than v12.20 are no longer supported
    - Current Node version 16
    - Angular CLI now supports persistent build cache
      - It can improve build time by 68%
      - Build Cache can be turn on and off in angular.json
    - RxJS v7.4 is used by default and v6 has to be updated manually
    - Does not support IE11 so some polyfills has been removed and angular becomes more faster
    
*/