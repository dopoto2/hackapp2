import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ViggoEvent } from "../models/viggo-event.model";

@Injectable({
  providedIn: 'root'
})
export class ViggoService {

  const data = [
    { name: "ValidationFailed" }
  ];

  eventsSubject = new BehaviorSubject<ViggoEvent>(<ViggoEvent>{});

  emit(eventName: string) {
    // TODO Load from list
    const event = <ViggoEvent>{ name: eventName };
    this.eventsSubject.next(event);
  }
}
