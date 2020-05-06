import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Validation } from 'src/app/CustomValidation/validation';
import { SharedService } from 'src/app/common/shared.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public passwordError: any;
  public registerData: any;

  constructor(private fb: FormBuilder, private sharedService: SharedService,
    private toaster: ToastrService,private router:Router) {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(30),
        Validation.PasswordStrengthValidator,])],
      confirmPassword: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(30)])]
    },
      {
        validator: Validation.ConfirmedValidator('password', 'confirmPassword')
      }
    );
  }

  ngOnInit(): void {

  }

  submit(value) {
    this.registerData = {
      firstname: value.firstname,
      lastname: value.lastname,
      email: value.email,
      password: value.password
    }
    console.log('value', value);

    console.log('this.registerData', this.registerData);
    this.sharedService.registerUser(this.registerData).subscribe(result => {
            if (result) {
              this.toaster.success('User Register Successfully');
              this.router.navigate(['/login']);
      }
    });
  }


}
