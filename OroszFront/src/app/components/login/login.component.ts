import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../interface/user';
import { MessageService } from '../../service/message.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  constructor(
    private api: ApiService,
    private auth: AuthService,
    private message: MessageService,
    private router: Router
  ){}

  invalidFields:string[] = [];

  user:User = {
    id: '',
    name: '',
    email: '',
    passwd: '',
    confirm: '',
    role: false
  }

  login(){
    this.api.login('users', this.user).subscribe((res:any) => {
      this.invalidFields = res.invalid;
      if (this.invalidFields.length == 0){
        this.message.showMessage('OK', res.message, 'success');
        this.auth.login(res.token);
        this.router.navigateByUrl('/');
      }else{
        this.message.showMessage('HIBA', res.message, 'danger');
      }
    });
  }

  isInvalid(field:string){
    return this.invalidFields.includes(field);
  }

}
