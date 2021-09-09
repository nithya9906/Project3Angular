import { Patient } from "./Patient";

export class Family{
    family_id:number=0;
	firstName:string='';
	lastName:string='';
    age:number=0;
    gender:String='';
	mobileNo:any;
	address:string='';
    email:any;
    patient:Patient=new Patient();
	
	
}