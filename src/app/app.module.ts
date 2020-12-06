import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './Home/about-us/about-us.component';
import { LandPComponent } from './Home/land-p/land-p.component';
import { FAQComponent } from './Home/faq/faq.component';
import { SchemesComponent } from './Home/schemes/schemes.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    LandPComponent,
    FAQComponent,
    SchemesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
