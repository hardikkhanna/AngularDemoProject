import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { ServersComponent } from './servers/servers.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { ServerComponent } from './server/server.component';

import { Assingnment2Component } from './assingnment2/assingnment2.component';
@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    Assignment1Component,
    ServerComponent,
    Assingnment2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
