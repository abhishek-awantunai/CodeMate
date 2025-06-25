/*

What is ngcc?
The ngcc(Angular Compatibility Compiler) is a tool which upgrades node_module compiled with non-ivy ngc into ivy compliant format. The postinstall script from package.json will make sure your node_modules will be compatible with the Ivy renderer.

"scripts": {
   "postinstall": "ngcc"
}
Whereas, Ivy compiler (ngtsc), which compiles Ivy-compatible code.

*/