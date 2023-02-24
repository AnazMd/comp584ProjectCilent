import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchbooksComponent } from './fetchbooks/fetchbooks.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'fetchbooks', component: FetchbooksComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
