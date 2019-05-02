import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModalModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [
    AppComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
