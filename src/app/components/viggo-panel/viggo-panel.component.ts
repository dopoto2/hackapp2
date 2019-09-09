import { Component, OnInit } from '@angular/core';
import { ViggoService } from "../../services/viggo.service";

@Component({
  selector: 'app-viggo-panel',
  templateUrl: './viggo-panel.component.html',
  styleUrls: ['./viggo-panel.component.less']
})
export class ViggoPanelComponent implements OnInit {

  isVisible = false;

  constructor(private viggoService: ViggoService) { }

  ngOnInit() {

    this.viggoService.eventsSubject.subscribe(res => {
      if (res && res.name === "ValidationFailed") {
        this.isVisible = true;
      }
    });
  }
}
