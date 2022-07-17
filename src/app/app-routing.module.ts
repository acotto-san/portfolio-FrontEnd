import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { LoginComponent } from './components/login/login.component';
import { Pagina404Component } from './components/pagina404/pagina404.component'

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'cv/:cvId', component:CurriculumComponent},
  {path: '**', component:Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
