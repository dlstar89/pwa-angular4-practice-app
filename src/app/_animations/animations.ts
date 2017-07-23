import { animate, animateChild, keyframes, query, state, style, transition, trigger } from '@angular/animations';

export const fadeInAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('fadeInAnimation', [
    state('in', style({ opacity: 1, transform: 'translateX(0%)' })),
    // route 'enter' transition
    transition(':enter', [
      // css styles at start of transition
      style({ opacity: 0, transform: 'translateX(100%)' }),
      // animation and styles at end of transition
      animate(300)
    ]),
    transition(':leave', [
      animate(300, keyframes([
        style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
        style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
        style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
      ]))
    ])
  ]);



export const flyIn =
  trigger('flyInOut', [
    state('in', style({ transform: 'translateX(0) scale(1)' })),
    transition(':enter', [
      style({ transform: 'translateX(-100%) scale(0)' }),
      animate(300)
    ]),
    transition(':leave', [
      animate(300, keyframes([
        style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
        style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
        style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
      ]))
    ])
  ]);
