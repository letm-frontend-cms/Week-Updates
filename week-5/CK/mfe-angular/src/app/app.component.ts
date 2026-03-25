import { Component } from '@angular/core';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { send } from '@mfe-demo/event-bus';
import { EventBusService } from './event-bus.service';

const SOURCE = 'angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, JsonPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  text = '';

  constructor(public eventBus: EventBusService) {}

  sendMessage(): void {
    send('text', this.text.trim() || '(empty)', SOURCE);
  }
}
