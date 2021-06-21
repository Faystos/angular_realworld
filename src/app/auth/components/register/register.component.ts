import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { registerAction } from "../../store/actions/register.action";
import { isSubmittingSelector } from "../../store/selectors";
import {AuthService} from "../../services/auth.service";
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";

@Component({
  selector: 'rw-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit{
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authSevice: AuthService) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm = (): void => {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: ''
    });
  }

  initializeValues = (): void => {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  onSubmit = (): void => {
    console.log(this.form.valid);
    this.store.dispatch(registerAction(this.form.value));
    this.authSevice.register(this.form.value).subscribe();
  }
}
