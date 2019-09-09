import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ViggoEvent } from "../models/viggo-event.model";

@Injectable({
  providedIn: 'root'
})
export class ViggoService {

  data = [
    {
      name: "StuckInField",
      title: "Looks like you're having trouble with this field"
    },
    {
      name: "SomeOtherScenario",
      title: "Some other text..."
    }
    // ADD MORE SCENARIOS HERE...
  ];

  eventsSubject = new BehaviorSubject<ViggoEvent>(<ViggoEvent>{});

  emit(eventName: string) {
    const infoToShow = this.data.find(_ => _.name === eventName);
    this.eventsSubject.next(infoToShow);
  }
}
