import { Component } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../interface/user';
import { ApiService } from '../../service/api.service';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, CommonModule, InputTextModule, FloatLabelModule, ButtonModule, AlertComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})

export class RegistrationComponent {
  constructor(
    private message: MessageService,
    private api: ApiService
  ){}

  invalidFields:string[] = [];

  user:User = {
    id: '',
    name: '',
    email: '',
    password: '',
    confirm: '',
    role: false,
  }

  registration(){
    this.api.userRegistration(this.user).subscribe((res:any) => {
      if (this.invalidFields.length == 0){
        this.message.showMessage('OK', res.message, 'success');
        this.user = {
          id: '',
          name: '',
          email: '',
          password: '',
          confirm: '',
          role: false,
        }
      }else{
        this.message.showMessage('HIBA', res.message, 'danger');
      }
    });
  }

}
