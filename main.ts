import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';

import {TableBasicExample} from './app/table-basic-example';

import { EditableComponent } from './app/editable/editable.component';
import { ViewModeDirective } from './app/editable/view-mode.directive';
import { EditModeDirective } from './app/editable/edit-mode.directive';
import { FocusableDirective } from './app/focusable.directive';
import { EditableOnEnterDirective } from './app/editable/edit-on-enter.directive';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [TableBasicExample],
  declarations: [TableBasicExample,EditableComponent,ViewModeDirective,
  EditModeDirective, FocusableDirective, 
  EditableOnEnterDirective],
  bootstrap: [TableBasicExample],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */