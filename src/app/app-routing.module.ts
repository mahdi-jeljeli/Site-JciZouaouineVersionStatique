import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NOSACTIONSComponent } from './nos-actions/nos-actions.component';
import { FooterComponent } from './footer/footer.component';
import { JoinusComponent } from './joinus/joinus.component';
import { FoundationForAcceuilComponent } from './SousComponent/foundation-for-acceuil/foundation-for-acceuil.component';
import { ActionComponent } from './SousComponent/action/action.component';
import { DevienirMembreComponent } from './devienir-membre/devienir-membre.component';

const routes: Routes = [
  { path: '', redirectTo: 'Acceuil', pathMatch: 'full' },
  { path: 'Acceuil', component: AcceuilComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'NOSACTIONS', component: NOSACTIONSComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'joinus', component: JoinusComponent },
  { path: 'fouders', component: FoundationForAcceuilComponent },
  { path: 'action/:id', component: ActionComponent, },
  { path: 'ActionComponent', component: ActionComponent, },
  { path: 'devenirUnMembre', component: DevienirMembreComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }