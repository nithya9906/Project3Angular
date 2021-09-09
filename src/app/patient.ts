import { Family } from './Family';

export interface Patient{
    p_id:number;
    userName:string
    password:any
	firstName:string
	lastName:string
    age:number
    gender:string
	mobileNo:any;
	address:string
    email:any;
    members:Family;
	
	
}