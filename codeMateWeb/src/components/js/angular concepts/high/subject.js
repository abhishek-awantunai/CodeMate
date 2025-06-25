/**


Subject -
An RxJS Subject is a special type of Observable that allows values to be multi-casted to many Observers. While plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subjects are multicast. A Subject is like an Observable, but can multicast to many Observers.

BehaviorSubject -
A BehaviorSubject is a type of observable (i.e. a stream of data that we can subscribe to like the observable returned from HTTP requests in Angular). ... When you subscribe to it, it will immediately return the last value that was emitted immediately (or the initial value if no data has been emitted yet)


A BehaviorSubject holds one value. When it is subscribed it emits the value immediately. A Subject doesn't hold a value.

Subject example (with RxJS 5 API):

const subject = new Rx.Subject();
subject.next(1);
subject.subscribe(x => console.log(x));
Console output will be empty

BehaviorSubject example:

const behaviorSubject = new Rx.BehaviorSubject(0);
behaviorSubject.next(1);
behaviorSubject.subscribe(x => console.log(x));
Console output: 0
Console output: 1

*/