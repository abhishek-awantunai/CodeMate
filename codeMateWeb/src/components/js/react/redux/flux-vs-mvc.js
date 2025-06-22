/*

Describe Flux vs MVC?

Traditional MVC patterns have worked well for separating the concerns of data (Model), UI (View) and logic (Controller) — but MVC architectures frequently encounter two main problems:

Poorly defined data flow: The cascading updates which occur across views often lead to a tangled web of events which is difficult to debug.
Lack of data integrity: Model data can be mutated from anywhere, yielding unpredictable results across the UI.
With the Flux pattern complex UIs no longer suffer from cascading updates; any given React component will be able to reconstruct its state based on the data provided by the store. The Flux pattern also enforces data integrity by restricting direct access to the shared data.

*/