/*

What is an optional dependency?
The optional dependency is a parameter decorator to be used on constructor parameters, which marks the parameter as being an optional dependency. Due to this, the DI framework provides null if the dependency is not found. For example, If you don't register a logger provider anywhere, the injector sets the value of logger(or logger service) to null in the below class.

import { Optional } from '@angular/core';

constructor(@Optional() private logger?: Logger) {
if (this.logger) {
    this.logger.log('This is an optional dependency message');
} else {
    console.log('The logger is not registered');
}
}

*/