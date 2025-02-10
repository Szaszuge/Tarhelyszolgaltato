import { Component } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-home',
  imports: [AlertComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(
    private message: MessageService,
  ){}
}
