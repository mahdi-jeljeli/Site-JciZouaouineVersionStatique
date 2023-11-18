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
    MatNativeDateModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
