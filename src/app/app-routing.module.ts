import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { PsychologistComponent } from './views/psychologist/psychologist.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full' },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'psychologist', component:PsychologistComponent },
  { path: 'login', component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ DashboardComponent, LoginComponent, PsychologistComponent ]
