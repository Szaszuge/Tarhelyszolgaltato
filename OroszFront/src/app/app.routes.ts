import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LogoutComponent } from './components/logout/logout.component';
import { WorkoutComponent } from './components/workout/workout.component';

export const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'logout', component: LogoutComponent
  },
  {
    path: 'registration', component: RegistrationComponent
  },
  {
    path: '', redirectTo: 'registration', pathMatch: 'full'
  },
  {
    path: 'workout', component: WorkoutComponent
  },
  {
    path: '**', component: NotfoundComponent
  }
];
