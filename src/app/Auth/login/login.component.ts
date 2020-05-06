import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/common/shared.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public firstFormGroup: FormGroup;
 public secondFormGroup: FormGroup;
 public fisrtValue: any;
 public secondValue: any;

  constructor(private _formBuilder: FormBuilder,
    private sharedService: SharedService,
    private toaster: ToastrService,
    private router:Router) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    
  }
  firstFormGroupControl() {
    this.fisrtValue = this.firstFormGroup.value.firstCtrl;
    console.log(this.fisrtValue);
    
  }
  secondFormGroupControl() {
    this.secondValue = this.secondFormGroup.value.secondCtrl; 
    console.log(this.secondValue);
    this.submitData();
  }
  submitData() {
    const obj = {
      email: this.fisrtValue,
      password:this.secondValue
    };
    console.log(obj);
    this.sharedService.loginUser(obj).subscribe((result) => {
      console.log(result);
      if (result) {
        localStorage.setItem('token', result.token);
        this.toaster.success('User Login Successfully');
        this.router.navigate(['/dashboard']);
      }
      else {
        this.router.navigate(['/login']);
      }
     });

  }
}
