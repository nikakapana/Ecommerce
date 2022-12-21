import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../core/services";
import {Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

  form: FormGroup  = new FormGroup( {
    firstName: new FormControl('', Validators.required),
    lastName:  new FormControl('', Validators.required),
    email:  new FormControl('', [Validators.required, Validators.email]),
    password:  new FormControl('', Validators.required),
    confirmPassword:  new FormControl('', Validators.required)

  })
  errorMessage?: string
  sub$ = new Subject()
  constructor(
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.form.markAllAsTouched()

    if (this.form.invalid) return

    this.authService.signUp(this.form.value)
      .pipe(takeUntil(this.sub$))

      .subscribe( {
        next: res => {
          if(res) {
            console.log(res)
            this.router.navigate(['/'])
          }
        },
        error: (error) => {
          console.log(error)
          this.errorMessage = error.error.message
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }
}
