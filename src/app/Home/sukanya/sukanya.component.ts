import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SukanyaAccount } from 'src/app/models/sukanyaaccount.model';
import { SukanyaService } from 'src/app/services/sukanya.service';

@Component({
  selector: 'app-sukanya',
  templateUrl: './sukanya.component.html',
  styleUrls: ['./sukanya.component.css']
})
export class SukanyaComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder, private myservice: SukanyaService) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      age: ['', [Validators.required, Validators.max(10)]],
      accountType: ['', Validators.required],
      accountNumber: ['', Validators.required],
      balance: ['', [Validators.required, Validators.min(1000)]],

    });
  }

  get f() { return this.registerForm.controls; }


  /*onSubmit() {
    this.submitted = true;
  
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
  
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  
    
  }*/

  message: string;

  onSubmit(addacc: SukanyaAccount): any {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    else {
      console.log(addacc);
      this.myservice.addSukanyaAccount(addacc).subscribe(data => {
        this.message = data
      });
      alert('SUCCESSFULLY Registered!! \n\n' + JSON.stringify(this.registerForm.value, null, 4));
      this.registerForm.reset();
    }
  }
}
