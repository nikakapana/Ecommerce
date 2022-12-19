import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../core/services";
import {Router} from "@angular/router";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup  = new FormGroup( {
    firstName: new FormControl('', Validators.required),
    lastName:  new FormControl('', Validators.required),
    email:  new FormControl('', [Validators.required, Validators.email]),
    password:  new FormControl('', Validators.required),
    confirmPassword:  new FormControl('', Validators.required)

  })

  constructor(
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.form.markAllAsTouched()

    if (this.form.invalid) return

    this.authService.signUp(this.form.value).subscribe(res => {
      this.router.navigate(['auth/login'])
    })
  }
}
