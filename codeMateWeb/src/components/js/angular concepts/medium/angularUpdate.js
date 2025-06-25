/**

First check which version of angular you want to migrate in.
Then check for global angular cli version and then update node, npm as well angular cli to the desired version.


If we want to move to one upper version of angular then we can use 
ng update @angular/cli @angular/core

Or manually you can update them by the following steps :-
    - first install desired version of @angular/cli globally
    - then install angular core, animation, compiler, common, router, forms, platform-browser etc to the desired version.
    - then update local dependencies such as devkit, compiler, cli
    - then install other related dependencies such as rxjs
    - install update version of typescript as required by the updated angular version
    - update tsconfig
    - update syntax
    - if error comes remove package-lock.json and node_modules and run npm install

*/