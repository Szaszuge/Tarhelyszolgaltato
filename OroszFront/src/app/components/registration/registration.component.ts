import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { MessageService } from '../../service/message.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../interface/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})

export class RegistrationComponent {
  constructor(
    private api: ApiService,
    private message: MessageService
  ){}

  invalidFields:string[] = [];

  user:User = {
    id: '',
    name: '',
    email: '',
    passwd: '',
    confirm: '',
    role: false,
  }

  registration(){
    this.api.registration('users', this.user).subscribe((res:any) => {
      this.invalidFields = res.invalid;
      if (this.invalidFields.length == 0){
        this.message.showMessage('OK', res.message, 'success');
        this.user = {
          id: '',
          name: '',
          email: '',
          passwd: '',
          confirm: '',
          role: false,
        }
      }else{
        this.message.showMessage('HIBA', res.message, 'danger');
      }
    });
  }

  isInvalid(field:string){
    return this.invalidFields.includes(field);
  }

}
