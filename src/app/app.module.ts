import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import AnimatedNameComponent from '../components/animated-name/animated-name.component';
import LinksComponent from '../components/links/links.component';

// Views
import HomePage from '../views/home/home-page.view';
import PhimsSectionComponent from './../views/phims/phims-section.view';
import BioSectionComponent from '../views/bio/bio-section.view';
import CalwestSectionComponent from '../views/calwest/calwest-section.view';
import BraggingRightsSectionComponent from '../views/bragging-rights/bragging-rights-section.view';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    AnimatedNameComponent,
    LinksComponent,
    PhimsSectionComponent,
    BioSectionComponent,
    CalwestSectionComponent,
    BraggingRightsSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
