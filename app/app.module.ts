import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import{
    EventsListComponent, 
    EventThumbnailComponent, 
    EventService, 
    EventDetailsComponent, 
    CreateEventComponent,
    EventRouteActivator, 
    EventListResolver 
} from './events/index'

// import { EventRouteActivator } from './events/event-details/event-route-activator.service'
// import { EventListResolver } from './events/events-list-resolver.service' 
// import { EventsListComponent } from './events/events-list.component'
// import { EventThumbnailComponent } from './events/event-thumbnail.component'
// import { CreateEventComponent } from './events/create-event.component'
// import { EventDetailsComponent } from './events/event-details/event-details.component'
// import { EventService } from './events/shared/event.service'

import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { ToastrService } from './common/toastr.service'
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
        ],
    declarations: [
        EventsAppComponent,
        EventsListComponent, 
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent, 
        CreateEventComponent,
        Error404Component
        ],
    providers: [
                EventService, //another way to denote this is { provide:EventService, useValue: EventService}
                ToastrService,
                EventRouteActivator,
                EventListResolver,
                AuthService,
                { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
                ], //<-- now it's registered as a provider, Ng's injector is aware of this and so
                               //whenever we request it in another component/service, Ng will know where to get this service
    bootstrap: [EventsAppComponent]
})

export class AppModule {}

function checkDirtyState(component:CreateEventComponent){
    if(component.isDirty)
        return window.confirm('You have not saved your work. Are you sure you want to cancel?')
    return true
}