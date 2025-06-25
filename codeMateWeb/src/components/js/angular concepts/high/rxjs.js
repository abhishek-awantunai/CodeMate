/*

RxJs is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback based code.

Funnel like approach using pipes makes it easier to work with and also provides many features to work with. 

Reactive Programming : Programming paradigm concerned with data streams and the propagation of change

Promises are one way of dealing asynchronous things in JS. They begin when they are created and are completed when they are resolved or rejected.

Observables are a new push system of providing data from producer to consumer.Or in lame terms its a wrapper around some data source.

Observable is a producer of multiple values pushing them to Observers. ( Consumers ) 

Observer is a consumer of values delivered by an Observable.
Observer are three functions :-
    next
    error
    complete

Subject is a special type of Observable that allows values to be multi-casted to many observers. 
BehaviorSubject is a special type of Observable that allows values to be multi-casted to many observers and latest update is fetched as soon as it is subscribed. 

Individual observables are called First Order Observables (Inner Observables)
And multiple observers combine to form Higher Order Observables

Operators:- Project Functions to manipulate source Observable values

Map Operator :- It applies a given project function to each emitted value by the source observable and emits the resulting values as an observable.

CombineLatest Operator :- Combines multiple observables to create an observable whose values are calculated from the latest values of each of it's input observables.

WithLatestFrom Operator :- It combines the source observable with the other observables to create an observable whose values are calculated from latest value from each of the input observables. ( But only when the source emits )

SwitchMap :- This operator projects each source value to an observable which is merged in the output Observable, emitting values.Only from the most recently projected Observable. 

-------------(data)
                    -------------(data)
                                        -------------(data)----------------> (final output observable)

Whenever new data comes it stops reading old data and immediately switches to the new data source.

ConcatMap :- It projects each source value to an observable which is merged in the output variable in a serialized fashion waiting for each one to complete before merging the next.

This is similar to SwitchMap but with one major difference that it lets the execution of previous data to be finished then

-----------(data)---------------
                                ------------(data)-------------
                                                                ----------(data)-------> (final output observable)
MergeMap Operator :- It projects each source value to an observable which is merged in the output observable


SwitchMap, ConcatMap, MergeMap :-
SwitchMap:- switches to the new one as soon as it comes in.
ConcatMap:- switches to the new one as soon as the first previous one is completed.
MergeMap:- Older and newer valued both go at the same time 
MergeAll:- It converts a higher order observable to a first order observable which concurrently delivers all the values that are emitted in the inner observable 


*/

// RxJS operators facilitate us to change the original observable in some manner and return a new observable.

// Pipes in RXJS are standalone functions that can be used to combine multiple RxJS operators to compose asynchronous operations 

const button = document.getElementById('button');
console.log(button);

// button.addEventListener('click',(e) => {
//     console.log(e.clientY);
// });

Rx.Observable.fromEvent(button, 'click')
    .map(data => data.clientY)
    .throttleTime(1000)
    .subscribe(coordinate => {
    console.log(coordinate);
});