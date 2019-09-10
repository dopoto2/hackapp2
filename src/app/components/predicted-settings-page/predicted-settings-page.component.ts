import { Component, OnInit } from '@angular/core';
import { PredictedSettings } from 'src/app/models/prediction.model';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { ViggoService } from 'src/app/services/viggo.service';
import { ViggoEvent } from 'src/app/models/viggo-event.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-settings-page',
  templateUrl: './predicted-settings-page.component.html',
  styleUrls: ['./predicted-settings-page.component.less']
})
export class PredictedSettingsPageComponent implements OnInit {
  predictedModel = {} as PredictedSettings;
  userType = 1;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private viggoService: ViggoService
  ) {}

  ngOnInit() {
    this.viggoService.emit('');

    this.userType = parseInt(this.route.snapshot.paramMap.get('userType'), 10);

    this.viggoService.emit('predictioninfo');

    if (this.userType === 0) {
      this.predictedModel.predictedSettings1 = 0;
      this.predictedModel.predictedSettings2 = 1;
      this.predictedModel.predictedSettings3 = 0;
    } else if (this.userType === 1) {
      this.predictedModel.predictedSettings1 = 1;
      this.predictedModel.predictedSettings2 = 0;
      this.predictedModel.predictedSettings3 = 1;
    } else if (this.userType === 2 ) {
      this.predictedModel.predictedSettings1 = 1;
      this.predictedModel.predictedSettings2 = 1;
      this.predictedModel.predictedSettings3 = 1;
    }

  }

  ngOnDestroy() {
    this.viggoService.emit('');
  }

  saveForm() {
    this.router.navigateByUrl('dashboard');
  }
}
