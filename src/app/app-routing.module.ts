import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PortfelioComponent } from './portfelio/portfelio.component';
import { NOSACTIONSComponent } from './nos-actions/nos-actions.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JoinusComponent } from './joinus/joinus.component';
import { FoundationForAcceuilComponent } from './SousComponent/foundation-for-acceuil/foundation-for-acceuil.component';
import { ActionComponent } from './SousComponent/action/action.component';
import { WhySectionComponent } from './SousComponent/why-section/why-section.component';

const routes: Routes = [
  { path: '', redirectTo: 'Acceuil', pathMatch: 'full' },
  { path: 'Acceuil', component: AcceuilComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'portfelio', component: PortfelioComponent },
  { path: 'NOSACTIONS', component: NOSACTIONSComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'joinus', component: JoinusComponent },
  { path: 'fouders', component: FoundationForAcceuilComponent },
  { path: 'action/:id', component: ActionComponent, },
  { path: 'ActionComponent', component: ActionComponent, },
  { path: 'test', component: PortfelioComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }