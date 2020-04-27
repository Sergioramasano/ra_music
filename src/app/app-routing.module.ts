import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {BrowserModule} from "@angular/platform-browser";
import { AppComponent } from './app.component';
import {SelectivePreloadingStrategyServiceService} from "./services/selective-preloading-strategy-service.service";
import {AboutPageComponent} from "./pages/about-page/about-page.component";


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    data: { state: 'home' }
  },
  {
    path: 'about',
    component: AboutPageComponent,
    data: { state: 'about' }
  },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes,
    {
      enableTracing: false, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategyServiceService,
    }
  )],
  bootstrap:    [ AppComponent ],
})
export class AppRoutingModule {}
