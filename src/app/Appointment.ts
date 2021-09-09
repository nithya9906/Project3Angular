import { Doctor } from "./Doctor";
import { Family } from "./Family";
import { Patient } from "./Patient";

export class Appointment{
    applicationId:number=0;
	applicationDate:Date|any;
	purpose:String='';
	availability:String='';
	patient:Patient=new Patient();
	member:Family=new Family();
    doctor:Doctor=new Doctor();
	
}	
	