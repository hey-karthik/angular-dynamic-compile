import { ScrollingModule } from '@angular/cdk/scrolling';
import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, Compiler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatMenuModule, MatSelectModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { fixturepropertyPaneDirective } from './fixturepropertPane.directive';
import { propertyPaneDirective } from './propertyPane.directive';



@Component({
  selector: 'custom-dynamic',
  template: `
              <div class="dynamic">
                <h3>property pane</h3>
                <ng-template propertPane></ng-template>
                <br>
                <br>
                <!-- <h3>fixture property pane</h3> -->
                <ng-template fixturepropertPane></ng-template>
              </div>
              <br>
              <br>
              <button (click)="updateValues()">UPDATE</button>
            `
})
export class CustomDynamic implements OnInit, OnDestroy {
  @ViewChild(propertyPaneDirective, {static: true}) propertyPane! : propertyPaneDirective;
  @ViewChild(fixturepropertyPaneDirective, {static: true}) fixturepropertPane! : fixturepropertyPaneDirective;
  private cmpRef;
  constructor(private compiler:Compiler) { }

  loadComponent(){


    let template = `<span>{{CPItitle}}</span><input placeholder="Ex. Pizza" [value]="CPI" >
    <mat-form-field appearance="fill">
    <mat-label>Select</mat-label>
    <mat-select name="Days">
      <mat-option *ngFor="let item of items" [value]="item.value">
        {{item.value}}
      </mat-option>
    </mat-select></mat-form-field>`;




    const propertyPaneComponent = Component({template})(class{});
    //const sectionpropertyPaneComponent = Component({template})(class{ public items = [];});
    const fixturepropertyPaneComponent = Component({template})(class{});
    const tmpModule = NgModule({declarations:[propertyPaneComponent,fixturepropertyPaneComponent],imports: [MatMenuModule ,BrowserModule,ScrollingModule,MatSelectModule, MatFormFieldModule , FormsModule ,FormsModule,BrowserAnimationsModule],exports:[]})(class{});
    this.compiler.compileModuleAndAllComponentsAsync(tmpModule).then((factories)=>{
      let len = factories.componentFactories.length - 1;
      const f = factories.componentFactories[len];
      this.cmpRef = this.propertyPane.viewContainerRef.createComponent(f);
      //const fixcmpRef = this.fixturepropertPane.viewContainerRef.createComponent(f);

      this.cmpRef.instance.name = 'dynamic';
      this.cmpRef.instance.CPItitle = 'CPI';
      this.cmpRef.instance.CPI = '10';
      this.cmpRef.instance.items = [{"text":"Today","value":"one"},{"text":"Tomorrow","value":"two"}]





      // fixcmpRef.instance.name = 'dynamic';
      // fixcmpRef.instance.CPItitle = 'Fixture width';
      // fixcmpRef.instance.CPI = '10';
      // fixcmpRef.instance.items = [{"text":"Today","value":"one"},{"text":"Tomorrow","value":"two"}]

    });
  }

  public updateValues():void{
    this.cmpRef.instance.CPI = '999';
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.loadComponent();
  }




}
