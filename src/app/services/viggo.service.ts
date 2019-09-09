import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ViggoEvent } from "../models/viggo-event.model";

@Injectable({
  providedIn: 'root'
})
export class ViggoService {

  eventsSubject = new BehaviorSubject<ViggoEvent>(<ViggoEvent>{}); 

  emit(event: ViggoEvent) {
    this.eventsSubject.next(event);
  }


}
