/**

  Observables, Observers, Subscriptions

  Observables :-
  - It is basically a wrapper around some data source.Data source basically means a stream of values.We basically use Observables for asynchronous data.
  We can also wrap it around a synchronous data source.

  We have stream of data possibly asynchronous so possible multiple values will come over time  and we want to do something whenever a new data comes that is the job of Observer.

  Observer :-
  The observer is there to execute some code whenever we receive a value or error or completion notifier.
  So observer is the part handling the incoming data. So we need observer to connect to an observable.

  Observer implements three methods :

  next() :-
  - It is called by the observable whenever a new value is emitted

  error()
  - It is called whenever the Observable throws an error.

  complete()
  - It is called when the Observable is done emitting values.

  Subscription :-
  The connection between an observer and Observable is made via subscription.
  It basically means with subscribe method we tell an Observable ( our wrapper around that stream of values ) that someone is caring about these values.

*/