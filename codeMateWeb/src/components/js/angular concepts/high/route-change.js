/*

In Angular7, you can subscribe to router to detect the changes. The subscription for router events would be as below,

this.router.events.subscribe((event: Event) => {})
Let's take a simple component to detect router changes

import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {

    constructor(private router: Router) {

        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                // Show loading indicator and perform an action
            }

            if (event instanceof NavigationEnd) {
                // Hide loading indicator and perform an action
            }

            if (event instanceof NavigationError) {
                // Hide loading indicator and perform an action
                console.log(event.error); // It logs an error for debugging
            }
        });
    }
}

*/