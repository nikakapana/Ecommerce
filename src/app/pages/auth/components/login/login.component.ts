import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService, CartService} from "../../../../core/services";
import {Router} from "@angular/router";
import {Subject, takeUntil, tap} from "rxjs";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup  = new FormGroup( {

    email:  new FormControl('', [Validators.required, Validators.email]),
    password:  new FormControl('', Validators.required),


  })
errorMessage?: string
  sub$ = new Subject()

  constructor(
    private authService: AuthService,
    private router: Router,
    private cartService: CartService

  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.form.markAllAsTouched()

    if (this.form.invalid) return

    this.authService.login(this.form.value)
      .pipe(
        takeUntil(this.sub$),
        tap( res => {
          this.cartService.getCart().subscribe()
        })
      )
      .subscribe( {
        next: res => {
        if(res) {
          console.log(res)
          this.router.navigate(['/'])
        }
        },
        error: (error) => {
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
