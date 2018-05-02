import { Component } from '@angular/core';

@Component({
    selector: 'dialog-window',
    templateUrl:'./window.component.html'
})
export class WindowDemoComponent {
    public opened = false;
    public dataSaved = false;

    public close() {
      this.opened = false;
    }

    public open() {
      this.opened = true;
    }

    public submit() {
        this.dataSaved = true;
        this.close();
    }
}

