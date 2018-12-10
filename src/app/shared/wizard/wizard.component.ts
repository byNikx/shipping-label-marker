import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
  Directive,
  Host,
  HostListener
} from '@angular/core';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';

enum WizardAction {
  Prev = -1,
  Next = 1,
  End = 2
}

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit, AfterViewInit {


  private _activeStep: WizardStepComponent;
  private _activeIndex = 0;
  private progress = 0;
  @Input() wizardContext: any;
  @ContentChildren(WizardStepComponent)
  private _steps: QueryList<WizardStepComponent>;

  @Output() complete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._steps.forEach((step: WizardStepComponent, index) => {
      if (index === 0) {
        step.wizardContext = this.wizardContext;
        this._activeIndex = index;
        this._activeStep = step;
      } else {
        step.hide();
      }
    });
  }

  toggleMovement(movement) {
    this.wizardContext = this._activeStep.wizardContext;
    const nextStep = this._steps.find((step, index) => {
      return index === this._activeIndex + (movement);
    });
    if (nextStep) {
      this._activeStep.hide();
      nextStep.wizardContext = this.wizardContext;
      nextStep.show();
      this._activeIndex += movement;
      this._activeStep = nextStep;
    }
    this.progress += movement * (100 / this._steps.length);
  }

  next(): void {
    this.toggleMovement(WizardAction.Next);
  }
  prev(): void {
    this.toggleMovement(WizardAction.Prev);
  }
  end(): void {
    this.markComplete();
  }

  markComplete() {
    this.progress = 100;
    this.complete.emit(this._activeStep.wizardContext);
  }

}

@Directive({
  selector: '[appWizardNextStepDirective]'
})
export class WizardNextStepDirective {
  constructor(@Host() private _wizard: WizardComponent) { }
  @HostListener('click') clickHandler() {
    this._wizard.next();
  }
}

@Directive({
  selector: '[appWizardPrevStepDirective]'
})
export class WizardPrevStepDirective {
  constructor(@Host() private _wizard: WizardComponent) { }
  @HostListener('click') clickHandler() {
    this._wizard.prev();
  }
}

@Directive({
  selector: '[appWizardEndDirective]'
})
export class WizardEndDirective {
  constructor(@Host() private _wizard: WizardComponent) { }
  @HostListener('click') clickHandler() {
    this._wizard.end();
  }
}
