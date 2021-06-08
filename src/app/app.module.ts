import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { Compiler, Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDynamic } from './dynamic.component';
import { propertyPaneDirective } from './propertyPane.directive';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { fixturepropertyPaneDirective } from './fixturepropertPane.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomDynamic,
    propertyPaneDirective,
    fixturepropertyPaneDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

  ],
  exports:[
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [{provide:Compiler},Component,NgModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

// export function createJitCompiler() {
//   return new JitCompilerFactory().createCompiler();
// }
