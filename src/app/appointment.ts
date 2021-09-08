import { Doctor } from './Doctor';
import { Family } from './family';
import { Patient } from './patient';

export interface Appointment {
  applicationId: number;
  applicationDate: Date;
  purpose: string;
  availability: string;
  patient: Patient;
  family: Family;
  doctor: Doctor;
}
