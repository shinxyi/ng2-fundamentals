import { Routes } from '@angular/router'
import { Error404Component } from './errors/404.component'
// import { EventRouteActivator } from './events/event-details/event-route-activator.service'
// import { EventListResolver } from './events/events-list-resolver.service' 
// import { EventsListComponent } from './events/events-list.component'
// import { EventDetailsComponent } from './events/event-details/event-details.component'
// import { CreateEventComponent } from './events/create-event.component'

import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent, 
    EventRouteActivator, 
    EventListResolver
} from './events/index'

export const appRoutes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] }, 
    { path: 'events', component: EventsListComponent, resolve: {events:EventListResolver}  }, 
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' }, //pathMatch has 2 options: prefix or full
                                                            //prefix means redirect if the URL starts with the specified path string
                                                            //and full means redirect if it fully matches the specified path string 
    { path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]