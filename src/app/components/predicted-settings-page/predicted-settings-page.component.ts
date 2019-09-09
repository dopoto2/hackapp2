import { Component, OnInit } from '@angular/core';
import { PredictedSettings } from 'src/app/models/prediction.model';

@Component({
  selector: 'app-settings-page',
  templateUrl: './predicted-settings-page.component.html',
  styleUrls: ['./predicted-settings-page.component.less']
})
export class PredictedSettingsPageComponent implements OnInit {

  predictedModel = {} as PredictedSettings;

  constructor() { }

  ngOnInit() {
    this.predictedModel.predictedSettings1 = 1;
  }


  saveForm() {
    console.log('save form');
  }
}
