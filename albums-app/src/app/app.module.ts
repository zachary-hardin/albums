import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumLookupComponent } from './album-lookup/album-lookup.component';
import { LookupFormComponent } from './lookup-form/lookup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumLookupComponent,
    LookupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
