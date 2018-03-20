import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { WhiteComponent } from './components/white/white.component';

const appRoutes: Routes = [
  { path: 'view1',
    component: HelloComponent
  },
  {
    path: '**',
    component: WhiteComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    WhiteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
