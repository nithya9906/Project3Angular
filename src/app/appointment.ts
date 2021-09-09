import { Doctor } from './Doctor';
import { Family } from './Family';
import { Patient } from './Patient';

export interface Appointment {
  applicationId: number;
  applicationDate: Date | any;
  purpose: string;
  availability: string;
  patient: Patient;
  member: Family;
  doctor: Doctor;
}
