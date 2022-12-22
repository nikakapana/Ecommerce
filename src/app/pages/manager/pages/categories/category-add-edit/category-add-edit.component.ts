import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../../../../core/services/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {of, switchMap} from "rxjs";

@Component({
  selector: 'app-category-add-edit',
  templateUrl: './category-add-edit.component.html',
  styleUrls: ['./category-add-edit.component.scss']
})
export class CategoryAddEditComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),

  })


  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.route.params.pipe(
      switchMap((params: any) => {
        if(params['id']) {
          this.categoryService.getOne(params['id'])

        }
     return of(null)
      })
    ).subscribe(res => {
      if (res) {
        this.form.patchValue(res)
      }
    })

  }

  submit() {
    if(this.form.invalid) {
      return
    }
    if(this.form.value.id) {
      this.categoryService.update(this.form.value.id, this.form.value)
        .pipe()
        .subscribe(res => {

          this.router.navigate(['/manager/categories'])
            .then(() => {
              this.form.reset()
            })
        })
    }
    else {

        this.categoryService.create(this.form.value)
          .pipe()
          .subscribe(res => {
            this.router.navigate(['/manager/categories'])
              .then(() => {
                this.form.reset()
              })
          })
      }
    }



}
