import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PortfelioComponent } from './portfelio/portfelio.component';
import { NOSACTIONSComponent } from './nos-actions/nos-actions.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// OU
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { JoinusComponent } from './joinus/joinus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuiSommeNousForAcceuilComponent } from './SousComponent/qui-somme-nous-for-acceuil/qui-somme-nous-for-acceuil.component';
import { WhyJciForAcceuilComponent } from './SousComponent/why-jci-for-acceuil/why-jci-for-acceuil.component';
import { CardsForAcceuilComponent } from './SousComponent/cards-for-acceuil/cards-for-acceuil.component';
import { FoundationForAcceuilComponent } from './SousComponent/foundation-for-acceuil/foundation-for-acceuil.component';
import { OURProjectforAcceuilComponent } from './SousComponent/ourprojectfor-acceuil/ourprojectfor-acceuil.component';
import { MatCardModule } from '@angular/material/card';
import { ActionComponent } from './SousComponent/action/action.component';
import { AlbomPhotosComponent } from './SousComponent/albom-photos/albom-photos.component';
import { AllActionComponent } from './SousComponent/all-action/all-action.component';
import { LightboxModule } from 'ngx-lightbox';
import { SlideShowPhotoForOneActionComponent } from './SousComponent/slide-show-photo-for-one-action/slide-show-photo-for-one-action.component';
import { WhySectionComponent } from './SousComponent/why-section/why-section.component';
import { JoinUsSectionComponent } from './SousComponent/join-us-section/join-us-section.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';







@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    NavbarComponent,
    AboutUsComponent,
    PortfelioComponent,
    NOSACTIONSComponent,
    FooterComponent,
    ContactUsComponent,
    JoinusComponent,
    SearchResultsComponent,
    QuiSommeNousForAcceuilComponent,
    WhyJciForAcceuilComponent,
    CardsForAcceuilComponent,
    FoundationForAcceuilComponent,
    OURProjectforAcceuilComponent,
    ActionComponent,
    AlbomPhotosComponent,
    AllActionComponent,
    SlideShowPhotoForOneActionComponent,
    WhySectionComponent,
    JoinUsSectionComponent,
    SideNavBarComponent,
 

  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule,
    ReactiveFormsModule, 
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    LightboxModule,
  

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
