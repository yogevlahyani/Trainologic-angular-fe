import {Component, Input, OnInit} from '@angular/core';
import {ContactInterface} from '../interfaces/contact.interface';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() contact: ContactInterface;
  showContact = false;

  constructor() { }

  ngOnInit() {
  }

  toggleList(): void {
    this.showContact = !this.showContact;
  }

}
