import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Services
import { ContactsService } from './components/contact-list/contacts.service';

// Components
import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactItemComponent } from './components/contact-list/contact-item/contact-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
