import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './Home/about-us/about-us.component';
import { LandPComponent } from './Home/land-p/land-p.component';
import { FAQComponent } from './Home/faq/faq.component';
import { SchemesComponent } from './Home/schemes/schemes.component';
import { AppRoutingModule } from './app-routing.module';
import { TrainingsectorsComponent } from './STEP/trainingsectors/trainingsectors.component';
import { AboutusComponent } from './STEP/aboutus/aboutus.component';
import { StepComponent } from './Home/step/step.component';
import { NgoComponent } from './Home/ngo/ngo.component';
import { CriteriaComponent } from './NGO/criteria/criteria.component';
import { GuidelinesComponent } from './STEP/guidelines/guidelines.component';
import { NgoStepComponent } from './STEP/ngo-step/ngo-step.component';
import { RegistrationStepComponent } from './STEP/registration-step/registration-step.component';
import { StatusStepComponent } from './STEP/status-step/status-step.component';
import { FaqStepComponent } from './STEP/faq-step/faq-step.component';
import { OrganizationsComponent } from './NGO/organizations/organizations.component';
import { FundingnormsComponent } from './NGO/fundingnorms/fundingnorms.component';
import { RegistrationNGOComponent } from './NGO/registration-ngo/registration-ngo.component';
import { StatusNGOComponent } from './NGO/status-ngo/status-ngo.component';
import { FaqNGOComponent } from './NGO/faq-ngo/faq-ngo.component';
import { AdminComponent } from './Home/admin/admin.component';
import { AboutusAdminComponent } from './Admin/aboutus-admin/aboutus-admin.component';
import { NgoAdminComponent } from './Admin/ngo-admin/ngo-admin.component';
import { TraineesAdminComponent } from './Admin/trainees-admin/trainees-admin.component';
import { RegistrationComponent } from './Home/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    LandPComponent,
    FAQComponent,
    SchemesComponent,
    TrainingsectorsComponent,
    AboutusComponent,
    StepComponent,
    NgoComponent,
    CriteriaComponent,
    GuidelinesComponent,
    NgoStepComponent,
    RegistrationStepComponent,
    StatusStepComponent,
    FaqStepComponent,
    OrganizationsComponent,
    FundingnormsComponent,
    RegistrationNGOComponent,
    StatusNGOComponent,
    FaqNGOComponent,
    AdminComponent,
    AboutusAdminComponent,
    NgoAdminComponent,
    TraineesAdminComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
