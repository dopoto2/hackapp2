import { Component, OnInit } from '@angular/core';
import { ViggoService } from '../../services/viggo.service';
import { ViggoEvent } from '../../models/viggo-event.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viggo-panel',
  templateUrl: './viggo-panel.component.html',
  styleUrls: ['./viggo-panel.component.less']
})
export class ViggoPanelComponent implements OnInit {
  currentViggoEvent: ViggoEvent;
  currentUserType = 1;
  isIbanHelperVisible = false;

  constructor(private viggoService: ViggoService, private router: Router) {}

  ngOnInit() {
    this.viggoService.eventsSubject.subscribe(res => {
      this.currentViggoEvent = res;
      if (!!res){
        this.currentUserType = !res.userType ? res.userType : 1;
      }

    });
  }

  close() {
    this.currentViggoEvent = null;
  }

  showIbanHelper() {
    this.isIbanHelperVisible = true;
  }

  navigateToPredictedPage() {
      this.router.navigate(['predicted-settings', { userType: this.currentUserType }]);
  }

  closeAndChange() {
    this.router.navigateByUrl('dashboard');
  }
}
