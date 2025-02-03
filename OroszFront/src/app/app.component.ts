import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MenubarModule
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
            icon: 'pi pi-sign-in'
        },
        {
            label: 'Register',
            icon: 'pi pi-user-plus'
        },
        {
            label: 'Admin',
            icon: 'pi pi-user'
        }
    ]
}
}
