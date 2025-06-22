/**

@Component({
  template:`
    <div @popOverState >
      <p>This is a simple state.</p>
    </div>
  `
  animations: [
    trigger('popOverState',[
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 1
      })),
      transition('show'=>'hide', animate('600ms ease-out')),
      transition('hide'=>'show', animate('1000ms ease-in'))
    ])
  ]
})

*/