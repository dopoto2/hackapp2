import { Component, OnInit } from '@angular/core';
import { ViggoService } from "../../services/viggo.service";

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.less']
})
export class SampleFormComponent implements OnInit {

  constructor(private viggoService: ViggoService) { }

  ngOnInit() {
  }

  requestInfo() {
    this.viggoService.emit("StuckInField");
  }
}
