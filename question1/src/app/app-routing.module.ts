import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { garde } from './guards/garde.guard';
import { chatGarde } from './guards/chat-garde.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
 
  { path: 'home', component: HomeComponent, canActivate : [garde], children: [
 { path: 'cat', component: CatComponent, canActivate : [garde, chatGarde] },
  { path: 'dog', component: DogComponent, canActivate : [garde] },

  ] }, 
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
