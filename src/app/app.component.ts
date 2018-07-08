import { Component } from '@angular/core';
import { ButtonClick } from './button-click';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string;
  displayParagraph = true;
  clicks: ButtonClick[] = [];

  onUsernameButtonClick(): void {
    this.username = null;
  }

  onParagraphToggle(): void {
    this.displayParagraph = !this.displayParagraph;
    this.clicks.push(new ButtonClick(this.clicks.length + 1, new Date()));
  }
}
