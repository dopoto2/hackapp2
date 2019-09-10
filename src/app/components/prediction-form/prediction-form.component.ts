import { Component, OnInit } from '@angular/core';
import { PredictionSettings, predictionRole } from 'src/app/models/prediction.model';
import { ViggoService } from 'src/app/services/viggo.service';

@Component({
  selector: 'app-prediction-form',
  templateUrl: './prediction-form.component.html',
  styleUrls: ['./prediction-form.component.less']
})
export class PredictionFormComponent implements OnInit {
  predictionFormModel = {} as PredictionSettings;

  constructor(private viggoService: ViggoService) { }

  ngOnInit() {
    this.viggoService.emit('');
    this.predictionFormModel.role = predictionRole.accountant;
  }

  ngOnDestroy() {
    this.viggoService.emit('');
  }

  saveForm(): void {
    this.viggoService.emit('SaveConfigurationSuggestion', this.predictionFormModel.role);
  }

  selectRole(userType: number): void {
    this.predictionFormModel.role = userType;
  }
}
