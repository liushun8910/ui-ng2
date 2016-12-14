import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { COMPILER_PROVIDERS } from '@angular/compiler';

import { AppComponent }   from './app.component';

@NgModule({
    imports:      [
        BrowserModule
    ],
    declarations: [ AppComponent],
    providers: [
        COMPILER_PROVIDERS // this is an app singleton declaration
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
