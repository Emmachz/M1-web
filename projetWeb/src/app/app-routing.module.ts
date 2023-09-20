import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path:'', redirectTo: 'AppComponent', pathMatch:'full'},
  { path: '', component: AppComponent},
  { path: 'list', component: ListComponent },
  { path: 'not-found', component: NotFoundComponent},
  { path: 'home', component: HomeComponent},
  { path: '**',redirectTo:'/not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
