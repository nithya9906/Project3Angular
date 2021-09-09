import { Patient } from './Patient';

export interface Family {
  family_id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: String;
  mobileNo: any;
  address: string;
  email: any;
  patient: Patient;
}
