import { Component } from '@angular/core';
import { FormControl, FormArray, FormGroup, Validators } from '@angular/forms';

import {CoreService} from './services/core.service';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.core.list$;
  controls: FormArray;

  constructor(private core: CoreService){}

  ngOnInit() {
   
    const toGroups = this.core.list$.value.map(entity => {
      return new FormGroup({
        position:  new FormControl(entity.position, Validators.required),
        name: new FormControl(entity.name, Validators.required), 
        weight: new FormControl(entity.weight, Validators.required),
        symbol: new FormControl(entity.symbol, Validators.required)
      },{updateOn: "blur"});
    });

    this.controls = new FormArray(toGroups);

  }


  updateField(index, field) {
    const control = this.getControl(index, field);
    if (control.valid) {
      this.core.update(index,field,control.value);
    }

   }

  getControl(index, fieldName) {
    const a  = this.controls.at(index).get(fieldName) as FormControl;
    return this.controls.at(index).get(fieldName) as FormControl;
  }

}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */