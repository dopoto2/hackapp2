import { Component, OnInit } from '@angular/core';
import { ViggoService } from "../../services/viggo.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(private viggoService: ViggoService) { }

  ngOnInit() {
  }

  requestInfo() {
    this.viggoService.emit("dashboard");
  }
}
