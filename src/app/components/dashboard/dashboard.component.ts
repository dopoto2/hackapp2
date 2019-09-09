import { Component, OnInit } from '@angular/core';
import { ViggoService } from "../../services/viggo.service";
import { ViggoEvent } from "../../models/viggo-event.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(private viggoService: ViggoService) { }

  ngOnInit() {
  }

  show() {
    const evt: ViggoEvent = { name: "ValidationFailed" };
    this.viggoService.emit(evt);
  }
}
