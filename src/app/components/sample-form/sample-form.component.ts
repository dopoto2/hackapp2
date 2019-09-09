import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ViggoService } from "../../services/viggo.service";
import { Subscription, of, Observable, fromEvent } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.less']
})
export class SampleFormComponent implements OnInit {

  isWaitingInStuckInput = false;

  @ViewChild('stuckInput', { static: false }) stuckInput: ElementRef;

  constructor(private viggoService: ViggoService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    var stuckInputFocus$ = fromEvent(this.stuckInput.nativeElement, 'focus');
    stuckInputFocus$
      .pipe(
        tap(() => { this.isWaitingInStuckInput = true}),
        delay(3000)
      )
      .subscribe(() => {
        if (this.isWaitingInStuckInput) {
          this.viggoService.emit("StuckInField");
        }
      });

    var stuckInputCancelWaiting$ = fromEvent(this.stuckInput.nativeElement, 'blur');
    stuckInputCancelWaiting$
      .subscribe(() => {
        this.isWaitingInStuckInput = false;
      });
  }
}
