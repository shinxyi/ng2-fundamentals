import { Component } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    //we don't need a selector b/c this isn't a child component that will be included inside a 
    //parent component. It will be a page that is directly routed to.
    templateUrl:'/app/events/event-details/event-details.component.html', 
    styles: [`
        .contianer { padding-left: 20px; padding-right: 20px;}
        .event-image { height:100px; }
    `]

})

export class EventDetailsComponent{
    event:any

    constructor(private eventService:EventService, private route:ActivatedRoute){

    }

    ngOnInit(){
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
    }
}