import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as reducers from './../../store/reducers/';
import * as actions from './../../store/actions/';
import { Subject, takeUntil } from 'rxjs';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Field } from 'src/app/models/Field';

@Component({
  selector: 'app-form-render',
  templateUrl: './form-render.component.html',
  styleUrls: ['./form-render.component.scss'],
})
export class FormRenderComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();
  formData: Array<Field> | undefined;
  renderForm: any;

  private createDynamicForm(data: Array<Field>) {
    let group: any = {};
    data.forEach((elem: Field) => {
      group[elem.field] = new FormControl('');
      if (elem.mandatory) {
        group[elem.field].setValidators([Validators.required]);
      }
    });
    this.renderForm = this.fb.group(group);
  }

  constructor(
    private store: Store<reducers.AppState>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.store
      .select(reducers.getData)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        if (data) {
          this.formData = data;
          this.createDynamicForm(data);
        }
      });
    this.store.dispatch(new actions.GetData());
  }

  onSubmit(): void {
    console.log(this.renderForm?.value);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }
}
