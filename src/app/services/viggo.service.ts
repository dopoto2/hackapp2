import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ViggoEvent } from '../models/viggo-event.model';
import { predictionRole } from '../models/prediction.model';

@Injectable({
  providedIn: 'root'
})
export class ViggoService {
  data = [
    {
      name: 'StuckInField',
      title: 'Looks like you\'re having trouble with this field',
      userType: 1,
    },
    {
      name: 'ValidationFailed',
      userType: 1,
    },
    {
      name: 'dashboard',
      title: 'Some other text...',
      userType: 1,
    },
    {
      name: 'SomeOtherScenario',
      title: 'Some other text...',
      userType: 1,
    },
    {
      name: 'SaveConfigurationSuggestion',
      title: 'Other configuration suggestions',
      userType: 1,
    }
    // ADD MORE SCENARIOS HERE...
  ];

  eventsSubject = new BehaviorSubject<ViggoEvent>({} as ViggoEvent);

  emit(eventName: string, userType?: predictionRole) {
    const infoToShow = this.data.find(_ => _.name === eventName);

    if (!!infoToShow) {
      infoToShow.userType = userType;
    }

    this.eventsSubject.next(infoToShow);
  }
}
