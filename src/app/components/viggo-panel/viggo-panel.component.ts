import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ViggoService } from "../../services/viggo.service";
import { ViggoEvent } from '../../models/viggo-event.model';

@Component({
  selector: 'app-viggo-panel',
  templateUrl: './viggo-panel.component.html',
  styleUrls: ['./viggo-panel.component.less']
})
export class ViggoPanelComponent implements OnInit {

  currentViggoEvent: ViggoEvent;

  popContent: ElementRef;

  constructor(private viggoService: ViggoService) { }

  ngOnInit() {
    this.viggoService.eventsSubject.subscribe(res => {
      this.currentViggoEvent = res;
      if (this.popContent) {(<any>this.popContent).open();}
    });
  }
}
