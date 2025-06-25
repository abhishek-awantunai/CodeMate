/*

Using async pipe we can directly use an Observable or a Promise in template. 

The AsyncPipe subscribes to an observable or promise and returns the latest value it has emitted. When a new value is emitted, the pipe marks the component to be checked for changes.

<div class="courses">
  <course-card *ngFor="let course of (courses$ | async)">
  </course-card>
</div>

courses$ = Observable<Course[]>;

ngOnInit(){
  this.courses$ = this.http.get<Course[]>('/api/courses', {params});
}

*/
