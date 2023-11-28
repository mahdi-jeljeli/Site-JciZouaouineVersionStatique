import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PortfelioComponent } from './portfelio/portfelio.component';
import { NOSACTIONSComponent } from './nos-actions/nos-actions.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DelayResolver } from './DelayResolver';
import { JoinusComponent } from './joinus/joinus.component';
import { QuiSommeNousForAcceuilComponent } from './SousComponent/qui-somme-nous-for-acceuil/qui-somme-nous-for-acceuil.component';
import { WhyJciForAcceuilComponent } from './SousComponent/why-jci-for-acceuil/why-jci-for-acceuil.component';
import { CardsForAcceuilComponent } from './SousComponent/cards-for-acceuil/cards-for-acceuil.component';
import { FoundationForAcceuilComponent } from './SousComponent/foundation-for-acceuil/foundation-for-acceuil.component';
import { ActionComponent } from './SousComponent/action/action.component';



const routes: Routes = [
  { path: '', redirectTo: 'Acceuil', pathMatch: 'full' },
  { path: 'Acceuil', component: AcceuilComponent },
  { path: 'about', component: AboutUsComponent},
  { path: 'portfelio', component: PortfelioComponent },
  { path: 'NOSACTIONS', component: NOSACTIONSComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'footer', component: FooterComponent},
  { path: 'joinus', component: JoinusComponent},
  { path: 'fouders', component: FoundationForAcceuilComponent},
  { path: 'action/:id',component: ActionComponent , },
  { path: 'ActionComponent',component: ActionComponent , },
  { path: 'test',component: PortfelioComponent , },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
