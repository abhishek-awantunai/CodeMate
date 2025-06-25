/**

Hot Observables :- 
    - They always emit values either we subscribe or not
    - They are multi casted ( share value between multiple subscribers )
    - fromEvent()
    - Subject, BehaviorSubject

Cold Observables : -
    - They start to emit values only when we subscribe to them
    - They are uni casted

- Some operators like share, shareReplay, publish, publishValues make cold observables hot

For Hot Observables data source is created outside the Observable and for cold observable data source is created inside observable.

https://www.youtube.com/watch?v=oKqcL-iMITY

*/