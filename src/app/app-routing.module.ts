import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutusAdminComponent } from './Admin/aboutus-admin/aboutus-admin.component';
import { AdminComponent } from './Home/admin/admin.component';
import { NgoAdminComponent } from './Admin/ngo-admin/ngo-admin.component';
import { TraineesAdminComponent } from './Admin/trainees-admin/trainees-admin.component';
import { AboutUsComponent } from './Home/about-us/about-us.component';
import { FAQComponent } from './Home/faq/faq.component';
import { LandPComponent } from './Home/land-p/land-p.component';
import { NgoComponent } from './Home/ngo/ngo.component';
import { SchemesComponent } from './Home/schemes/schemes.component';
import { StepComponent } from './Home/step/step.component';
import { CriteriaComponent } from './NGO/criteria/criteria.component';
import { FaqNGOComponent } from './NGO/faq-ngo/faq-ngo.component';
import { FundingnormsComponent } from './NGO/fundingnorms/fundingnorms.component';
import { OrganizationsComponent } from './NGO/organizations/organizations.component';
import { RegistrationNGOComponent } from './NGO/registration-ngo/registration-ngo.component';
import { StatusNGOComponent } from './NGO/status-ngo/status-ngo.component';
import { AboutusComponent } from './STEP/aboutus/aboutus.component';
import { FaqStepComponent } from './STEP/faq-step/faq-step.component';
import { GuidelinesComponent } from './STEP/guidelines/guidelines.component';
import { NgoStepComponent } from './STEP/ngo-step/ngo-step.component';
import { RegistrationStepComponent } from './STEP/registration-step/registration-step.component';
import { StatusStepComponent } from './STEP/status-step/status-step.component';
import { TrainingsectorsComponent } from './STEP/trainingsectors/trainingsectors.component';

const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full"},
    { path: "home", component: SchemesComponent },
    { path: "aboutus", component: AboutUsComponent },
    { path: "legislationandpolicy", component: LandPComponent },
    { path: "faq", component: FAQComponent },
    { 
        path: "step", 
        component: StepComponent,
        children : [
            { path: "", redirectTo: "aboutusstep", pathMatch: "prefix"},
            { path: "aboutusstep", component: AboutusComponent },
            { path: "guidelines", component: GuidelinesComponent },
            { path: "ngoStep", component: NgoStepComponent },
            { path: "registrationStep", component: RegistrationStepComponent },
            { path: "statusStep", component: StatusStepComponent },
            { path: "faqStep", component: FaqStepComponent },
            { path: "trainingsectors", component: TrainingsectorsComponent }
        ]
    },
    {
        path: "ngo",
        component: NgoComponent,
        children: [
            { path: "", redirectTo: "criteria", pathMatch: "full"},
            { path: "criteria", component: CriteriaComponent},
            { path: "organizations", component: OrganizationsComponent},
            { path: "fundingnorms", component: FundingnormsComponent},
            { path: "registrationNGO", component: RegistrationNGOComponent},
            { path: "statusNGO", component: StatusNGOComponent},
            { path: "faqNGO", component: FaqNGOComponent}
        ]
    },
    {
        path: "admin",
        component: AdminComponent,
        children: [
            { path: "", redirectTo: "aboutusAdmin", pathMatch: "full"},
            { path: "aboutusAdmin", component: AboutusAdminComponent},
            { path: "ngoAdmin", component: NgoAdminComponent},
            { path: "traineesAdmin", component: TraineesAdminComponent},
        ]
    }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }