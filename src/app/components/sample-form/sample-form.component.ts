import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ViggoService } from "../../services/viggo.service";
import { fromEvent } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.less']
})
export class SampleFormComponent implements OnInit {

  isWaitingInStuckInput = false;
  isValidationError = false;

  @ViewChild('stuckInput', { static: false }) stuckInput: ElementRef;
  @ViewChild('fieldValidationInput', { static: false }) fieldValidationInput: ElementRef;

  constructor(private viggoService: ViggoService) { }

  ngOnInit() {
    this.viggoService.emit("");
  }

  ngOnDestroy() {
    this.viggoService.emit("");
  }

  ngAfterViewInit() {
    var stuckInputFocus$ = fromEvent(this.stuckInput.nativeElement, 'focus');
    stuckInputFocus$
      .pipe(
        tap(() => { this.isWaitingInStuckInput = true }),
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

    var fieldValidationInput$ = fromEvent(this.fieldValidationInput.nativeElement, 'blur');
    fieldValidationInput$
      .subscribe(() => {
        const val = (<any>this.fieldValidationInput.nativeElement).value;
        if (val === "") {
          this.isValidationError = false;
        }
        else
        {
          this.isValidationError = true;
          this.viggoService.emit("ValidationFailed");
        }
      });
  }
}
