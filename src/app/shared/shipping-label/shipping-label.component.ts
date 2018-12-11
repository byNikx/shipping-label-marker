import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

enum ShippingOption{
  Ground = 1,
  Priority = 2
}

@Component({
  selector: 'app-shipping-label',
  templateUrl: './shipping-label.component.html',
  styleUrls: ['./shipping-label.component.scss']
})
export class ShippingLabelComponent implements OnInit {

  @Input('shippingInfo') data: any;
  constructor(){}

  ngOnInit() {
  }
  
  get from(){
    return this.data.from;
  }
  get to(){
    return this.data.to;
  }
  get weight(){
    return this.data.weight;
  }
  get shippingOption(){
    const option = this.data.shippingOption;
    if(option == ShippingOption.Priority){
      return 'PRIORITY';
    }else{
      return 'GROUND';
    }
  }

  get shippingCost(){
    return this.data.shippingCost;
  }

}
