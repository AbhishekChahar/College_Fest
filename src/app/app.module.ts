import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { EventsComponent } from './events/events.component';
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';
import { WorkshopDetailsComponent } from './workshop/workshop-details/workshop-details.component';
import { WorkshopsComponent } from './workshops/workshops.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EventsComponent,
    WorkshopsComponent,
    RegistrationComponent,
    EventsDetailsComponent,
    WorkshopDetailsComponent,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
