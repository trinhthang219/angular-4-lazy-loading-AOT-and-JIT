import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainAppComponent } from './main-app.component';
import { routing } from "./main.routing";
import { MainHomeComponent } from "./home/main-home.component";
import { MainAboutComponent } from "./about/main-about.component";

// import { SubHomeComponent } from "../sub/sub-home.component";
// import { SubAppComponent } from "../sub/sub-app.component";

@NgModule({
  imports: [
    BrowserModule,
    routing,
  ],
  declarations: [
    MainAppComponent,
    MainHomeComponent,
    MainAboutComponent,
    // SubAppComponent,
    // SubHomeComponent,
  ],
  bootstrap: [ MainAppComponent ],
})
export class MainModule { }

