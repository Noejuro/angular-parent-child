import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text: string = 'Hide Child';
  childState: boolean = true;

  onClick() {
    this.childState = !this.childState;
    this.text = this.childState ? 'Hide Child' : 'Show Child'
  }
}
