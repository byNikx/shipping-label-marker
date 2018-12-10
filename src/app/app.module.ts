import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';

export function bootstrapFactory(http: HttpClient, data: DataService){
  return ()=>new Promise((resolve, reject)=>{
    http.get('./assets/states.json')
      .toPromise()
      .then(states=>{
        data.states = states;
        resolve();
      });
  });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: bootstrapFactory,
      multi: true,
      deps:[
        HttpClient,
        DataService
      ]
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
