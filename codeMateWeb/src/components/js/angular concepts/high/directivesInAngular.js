/**

Directives :-

Directives are responsible for instructing Angular about how to transform the DOM when rendering a template.

We use directives to modify a DOM :-
- Two types:
  a) Structural
    - Modify the structure of the DOM
  b) Attribute
    - Modify the attributes of the DOM


    <div *ngIf="courses.length > 0; then coursesExist else noCourses"></div>
    <ng-template #coursesExist>
      Courses exist
    </ng-template>
    <ng-template #noCourses>
      Courses Empty
    </ng-template>


    <div [hidden]="courses.length > 0">
      <p>Courses Empty</p>
    </div>
    <div [hidden]="courses.length === 0">
      <p>Courses exist</p>
    </div>

    ngIf vs hidden
    - while using hidden the element do exist in DOM but for ngIf it is not there in DOM



    Custom Structural Directives :-

    @Directive({
      selector: '[appShowPerson]'
    })

    export class ShowPersonDirective{

      private template: TemplateRef<any>,
      private viewContainerRef: ViewContainerRef;

      @Input() set appShowPerson(age: number){
        if(age>50) {
          let view = this.viewContainerRef.createEmbeddedView(this.template);

        } else {
          this.viewContainerRef.clear();
        }
      }
    }


*/