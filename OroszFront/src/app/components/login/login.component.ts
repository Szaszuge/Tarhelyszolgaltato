import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../interface/user';
import { MessageService } from '../../service/message.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { AlertComponent } from '../alert/alert.component';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, InputTextModule, FloatLabelModule, ButtonModule, AlertComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
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
    password: '',
    confirm: '',
    role: false
  }

  login(){
    
    this.api.login(this.user).subscribe(async (res:any) => {
      
      if (res.status == 200){
        this.auth.login(res.token);
        this.message.showMessage('OK', res.message, 'success');
        this.router.navigateByUrl('');
      }else{
        this.message.showMessage('HIBA', res.message, 'danger');
      }

    });
    

  }

  isInvalid(field:string){
    return this.invalidFields.includes(field);
  }

}
