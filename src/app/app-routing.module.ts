import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutUsComponent } from './Home/about-us/about-us.component';
import { FAQComponent } from './Home/faq/faq.component';
import { LandPComponent } from './Home/land-p/land-p.component';
import { SchemesComponent } from './Home/schemes/schemes.component';

const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full"},
    { path: "home", component: SchemesComponent },
    { path: "aboutus", component: AboutUsComponent },
    { path: "legislationandpolicy", component: LandPComponent },
    { path: "faq", component: FAQComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }