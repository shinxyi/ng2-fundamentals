import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventService } from './shared/event.service'

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService:EventService){

    }

    resolve(){
        return this.eventService.getEvents().map(events => events) //<-- this is short for ((events) => {return events})
        // ^^ typically, when you listen to an observerable, you would use .subscribe() as opposed to .map()
        //but since this is a resolver, we need to return the observerable to Angular so that Angular can 
        // watch the observerable and see when it finishes. If we were to run subscribe, subscribe returns 
        //a subscription and not the observerable, and so we use map which does kinda the same thing as the 
        //subscription AND it returns the observerable. So since we're returning our events in our map expression, 
        //these events will then get passed along to the component defined in our route
    }
}