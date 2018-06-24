import { Component, OnInit } from '@angular/core';
import {ContactsService} from './contacts.service';
import {ContactInterface} from './interfaces/contact.interface';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: ContactInterface[] = [];

  constructor(private contactService: ContactsService) { }

  ngOnInit() {
    this.contacts = this.contactService.contacts;
  }

}
