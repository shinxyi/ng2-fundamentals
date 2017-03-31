import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'
import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { appRoutes } from './routes'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'
import { EventListResolver } from './events/events-list-resolver.service' 

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