import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AirQualityHeaderComponent } from './air-quality-header/air-quality-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { HomeComponent } from './home/home.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AirQualityHeaderComponent,
    MainSidebarComponent,
    HomeComponent,
    RoomDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
