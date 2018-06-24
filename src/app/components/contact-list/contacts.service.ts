import { Injectable } from '@angular/core';
import {ContactInterface} from './interfaces/contact.interface';

@Injectable()
export class ContactsService {
  private _contacts: ContactInterface[] = [
    {
      id: 1,
      name: 'Friends',
      type: 'Group',
      contacts: [
        {id: 2, name: 'Udi', type: 'Contact'},
        {id: 3, name: 'Tommy', type: 'Contact'},
        {
          id: 6,
          name: 'Old Friends',
          type: 'Group',
          contacts: [
            {id: 7, name: 'Itay', type: 'Contact'},
          ]
        },
      ]
    },
    {
      id: 4,
      name: 'Family',
      type: 'Group',
      contacts: [
        {id: 5, name: 'Roni', type: 'Contact'},
      ]
    },
    {id: 8, name: 'Ori', type: 'Contact'},
  ];

  get contacts(): ContactInterface[] {
    return this._contacts;
  }

  constructor() { }

}
