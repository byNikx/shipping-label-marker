import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { ShippingLabelComponent } from './shared/shipping-label/shipping-label.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  context: any = {};
  receiverInfo: FormGroup;
  senderInfo: FormGroup;
  weightInfo: FormGroup;
  shippingOption: FormGroup;

  constructor(
    private dialog: MatDialog,
    private _fb: FormBuilder) { }

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
      weight: new FormControl(0, Validators.required)
    });
    this.shippingOption = this._fb.group({
      shippingOption: new FormControl('', Validators.required)
    });
  }
  onComplete(shippingInfo: any): void {
    const dialogRef = this.dialog.open(ShippingLabelComponent, {
      width: '300px',
      data: shippingInfo
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
    //    console.log(shippingInfo);
  }

}
