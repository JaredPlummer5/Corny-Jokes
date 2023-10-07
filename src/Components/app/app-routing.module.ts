import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DocsComponent } from '../docs/docs.component';
import { NavComponent } from '../nav/nav.component';
import { HomeComponent } from '../home/home.component';
import { MLCompComponent } from '../ml-comp/ml-comp.component';
const routes: Routes = [
  { path: 'docs', component: DocsComponent },
  { path: '', component: HomeComponent },
  //{ path: '**', redirectTo: '/docs' } // This will catch any undefined routes and redirect to /docs
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
