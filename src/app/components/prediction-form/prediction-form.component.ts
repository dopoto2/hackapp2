import { Component, OnInit } from '@angular/core';
import { PredictionSettings } from 'src/app/models/prediction.model';

@Component({
  selector: 'app-prediction-form',
  templateUrl: './prediction-form.component.html',
  styleUrls: ['./prediction-form.component.less']
})
export class PredictionFormComponent implements OnInit {
  predictionFormModel = {} as PredictionSettings;

  constructor() { }

  ngOnInit() {
  }

  saveForm(): void {
    console.log('Save form from prediction form');
  }
}
