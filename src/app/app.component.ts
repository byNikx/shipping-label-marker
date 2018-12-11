import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

import { WizardComponent } from './shared/wizard/wizard.component';
import { DataService } from './services/data.service';

enum ShippingOption{
  Ground = 1,
  Priority = 2
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  shippingInfo: any = {};
  receiverInfo: FormGroup;
  senderInfo: FormGroup;
  weightInfo: FormGroup;
  shippingOption: FormGroup;
  shippingCost = 0;
  completed: boolean;

  @ViewChild(WizardComponent) wizard: WizardComponent;

  constructor(
    private _fb: FormBuilder,
    public dataService: DataService) { }

  ngOnInit() {
    this.receiverInfo = this._fb.group({
      name: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required)
    });
    this.senderInfo = this._fb.group({
      name: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required)
    });
    this.weightInfo = this._fb.group({
      weight: new FormControl('', [Validators.required, Validators.min(1), Validators.max(200)])
    });
    this.shippingOption = this._fb.group({
      shippingOption: new FormControl('', Validators.required)
    });
  }

  private _calculateShippingCost(weight, shippingOption){
    const shippingRate = 0.40;
    const cost = weight * shippingRate * 
    (this.shippingInfo.shippingOption == ShippingOption.Ground? 1: 1.5);
    return cost;
  }

  onComplete(info: any): void {
    this.completed = true;
    this.shippingInfo = info;
    this.shippingCost = this._calculateShippingCost(this.shippingInfo.weight, this.shippingInfo.shippingOption);
    this.shippingInfo.shippingCost = this.shippingCost;
    this.wizard.hide();
  }

}
