import { Component, OnInit, ElementRef, Renderer2, Output, EventEmitter, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.scss']
})
export class WizardStepComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() stepInfo: FormGroup;
  @Input() name: string;
  @Output() next: EventEmitter<any> = new EventEmitter();

  private _nativeElement: HTMLElement;
  set nativeElement(element: HTMLElement) {
    this._nativeElement = element;
  }
  get nativeElement(): HTMLElement {
    return this._nativeElement;
  }

  private _wizardContext: any;
  set wizardContext(context) {
    this._wizardContext = context;
  }
  get wizardContext() {
    return this._wizardContext;
  }

  private formSubscription: Subscription;


  constructor(
    _element: ElementRef, 
    private renderer: Renderer2) {
    this.nativeElement = _element.nativeElement;
  }

  ngOnInit() { }

  ngAfterViewInit() {
    if (this.stepInfo) {
      this.formSubscription = this.stepInfo.statusChanges.subscribe(status => {
        if (this.stepInfo.valid) {
          this.prepareWizardContext(this.name);
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.formSubscription) {
      this.formSubscription.unsubscribe();
    }
  }

  prepareWizardContext(key?: string): void {
    if (key) {
      this.wizardContext = Object.assign({}, this.wizardContext, { [key]: this.stepInfo.value });
    } else {
      this.wizardContext = Object.assign({}, this.wizardContext, this.stepInfo.value);
    }
  }

  show() {
    this.renderer.setStyle(this.nativeElement, 'display', 'block');
  }

  hide() {
    this.renderer.setStyle(this.nativeElement, 'display', 'none');
  }

}
