import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';


const routes: Routes = [
  { path: '', redirectTo: 'Acceuil', pathMatch: 'full' },
  { path: 'Acceuil', component: AcceuilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
