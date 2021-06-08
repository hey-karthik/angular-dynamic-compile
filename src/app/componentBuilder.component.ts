import { Component } from '@angular/core';

export class ComponentBuilder {

  public createComponent(template: string,properties?) : any {

    @Component({
      template:template
    })
    class CustomComponent {

      // The name of the root property we'll bind to. Can be
      // anything, just needs to be something we can expose.
      public props: any;
      public config = properties;

    };

    return CustomComponent;
  }
}
