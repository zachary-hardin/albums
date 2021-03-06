import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AlbumLookupComponent} from './album-lookup/album-lookup.component';
import {LookupFormComponent} from './lookup-form/lookup-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AlbumContentComponent } from './album-content/album-content.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumLookupComponent,
    LookupFormComponent,
    AlbumContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
