import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerform!:FormGroup;
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
   this.registerform=this.fb.group({
    firstname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/),Validators.minLength(3)]],
    lastname:['',Validators.required],
    address:['',Validators.required],
    city:['',Validators.required],
    state:['',Validators.required],
    pincode:['', [Validators.required,Validators.minLength(6)]],
    phonenumber:['',Validators.required],
    email: ['', [Validators.required, Validators.email,Validators.minLength(5)]],
    password:['',Validators.required],

   })
  }

  onSubmit(){
    if(this.registerform.valid){
      console.log(this.registerform.value);
    }
    else{
      console.log("invalid");
    }

  }
  get emailControl() {
    return this.registerform.get('email');
  }


}
