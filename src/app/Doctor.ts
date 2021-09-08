import { DoctorAvailability } from "./DoctorAvailability";

export class Doctor{
    doctorId:number=0;
	firstName:string='';
	lastName:string='';
	email:any;
	phno:any;
	fees:number=0;
	designation:string='';
	specialization:string='';
	doctorAvailability:DoctorAvailability=new DoctorAvailability();
	password:any;
}