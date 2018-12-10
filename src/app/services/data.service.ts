import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _states: any;
  public get states(): any {
    return this._states;
  }
  public set states(value: any) {
    const temp = [];
    for(let state in value){
      temp.push({
        name: value[state],
        abbr: state
      })
    }
    this._states = temp;
  }

  private _cities: any;
  public get cities(): any {
    return this._cities;
  }
  public set cities(value: any) {
    this._cities = value;
  }
  constructor() { }

}
