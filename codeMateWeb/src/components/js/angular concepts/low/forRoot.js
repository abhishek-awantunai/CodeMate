/**

How does forRoot method helpful to avoid duplicate router instances?

If the RouterModule module didn’t have forRoot() static method then each feature module would instantiate a new Router instance, which leads to broken application due to duplicate instances. After using forRoot() method, the root application module imports RouterModule.forRoot(...) and gets a Router, and all feature modules import RouterModule.forChild(...) which does not instantiate another Router.


*/