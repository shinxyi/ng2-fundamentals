import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Ng2 Events</h1>
            <hr />
            <!-- <event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail> -->
            <div class="row">
                <div *ngFor="let event of events" class="col-md-5">
                    <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
                </div>
            </div>
        </div>
        `
//    templateUrl: 'app/events/events-list.component.html'
})

export class EventsListComponent implements OnInit{

    events:any[]
    //eventService
    constructor(private eventService: EventService, private toastr: ToastrService){ //<-- this is short hand for the other commented out things
                                                     // on the lines right above and below. The service is injected 
                                                     //into our constructor
        //this.eventService = eventService

        //this.events = this.eventService.getEvents() <-- don't want to put this in constructor since 
                                                    //it is potentially long running and eventually this will be an AJAX call
                                                    //Yet, we need to have this happen when our component first loads...
                                                    //so we put it into ngOnInit

    }

    ngOnInit(){ //<-- this is called when component is being loaded
        this.events = this.eventService.getEvents()
    }

    handleThumbnailClick(eventName){
        //toastr.success(eventName) <-- using this from the global scale (since it's imported via index.html) is bad
                                    //since ts doesn't know what it is and also we can't test it
        this.toastr.success(eventName)
    }
    // handleEventClicked(data){
    //     console.log('received:', data)
    // }

}