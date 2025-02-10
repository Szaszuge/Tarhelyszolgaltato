import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MenubarModule,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'OroszFront';
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
          label: 'Order',
          icon: 'pi pi-cart-plus',
      },
        {
            label: 'Login',
            icon: 'pi pi-sign-in',
            route: 'login',
        },
        {
            label: 'Register',
            icon: 'pi pi-user-plus',
            route: 'registration',
        },
        {
            label: 'Admin',
            icon: 'pi pi-user',
        }
    ]
}
}
