import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing, AppRoutingProviders } from './app-routing.module';
import { NewsComponent } from './news/news.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    RegisterComponent,
    HomeComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingProviders,
    ReactiveFormsModule,
    routing,
    ModalModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
