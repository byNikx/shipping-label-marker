import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent, WizardNextStepDirective, WizardPrevStepDirective, WizardEndDirective } from './wizard/wizard.component';
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { MaterialModule } from '../material/material.module';
import { WizardHeaderComponent } from './wizard-header/wizard-header.component';
import { ShippingLabelComponent } from './shipping-label/shipping-label.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    WizardComponent,
    WizardStepComponent,
    WizardHeaderComponent,
    WizardNextStepDirective,
    WizardPrevStepDirective,
    WizardEndDirective,
    ShippingLabelComponent
  ],
  declarations: [
    WizardComponent,
    WizardStepComponent,
    WizardHeaderComponent,
    WizardNextStepDirective,
    WizardPrevStepDirective,
    WizardEndDirective,
    ShippingLabelComponent
  ]
})
export class SharedModule { }
