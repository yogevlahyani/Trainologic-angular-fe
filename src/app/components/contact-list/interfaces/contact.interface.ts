import {ContactsArrayInterface} from './contacts-array.interface';

export interface ContactInterface {
  id: number;
  name: string;
  type: string;
  contacts?: ContactsArrayInterface[];
}
