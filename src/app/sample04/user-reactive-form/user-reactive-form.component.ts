import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { UserTypes } from '../sample04.component';
import { UserService } from 'src/app/services/user.service';

function numberValidator(control: AbstractControl): ValidationErrors | null {
  if (isNaN(control.value)) {
    return { ['salaryError']: 'Salary can be numeric only.' };
  } else {
    return null;
  }
}

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: [
    '../../user/user.component.css',
    '../add-edit-user/add-edit-user.component.css',
    './user-reactive-form.component.css',
  ],
})
export class UserReactiveFormComponent implements OnInit {
  showContainer: boolean = false;

  /* @Output()
  showReactiveContainer: EventEmitter<boolean> = new EventEmitter<boolean>(); */

  @Output()
  saveUserEvent: EventEmitter<UserTypes> = new EventEmitter<UserTypes>();

  userForm: FormGroup;

  constructor(private shwReactive: UserService) {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.min(5)]),
      lastName: new FormControl('', [Validators.required, Validators.min(5)]),
      gender: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      city: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      salary: new FormControl('', [
        Validators.required,
        Validators.min(10000),
        Validators.max(1000000),
        numberValidator,
      ]),
    });
  }

  ngOnInit(): void {}

  /* toggleDisplayDiv(): void {
    this.showContainer = !this.showContainer;
    this.showReactiveContainer.emit(this.showContainer);
  } */

  saveUser(): void {
    /* const { firstName, lastName, gender, email, city, dob, salary }: UserTypes =
      this.userForm.value;
    const user: UserTypes = {
      firstName,
      lastName,
      gender,
      email,
      city,
      dob,
      salary,
    }; */
    // debugger;
    console.log(this.userForm.valid);

    // this.saveUserEvent.emit(user);
  }

  
}
