import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { UserTypes } from '../sample04.component';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['../../user/user.component.css', './add-edit-user.component.css'],
})
export class AddEditUserComponent {
  showContainer: boolean = false;

  @Output()
  saveUserEvent: EventEmitter<UserTypes> = new EventEmitter<UserTypes>();

  @Output()
  closeUserContainer: EventEmitter<boolean> = new EventEmitter<boolean>();

  /* clear(userForm: NgForm): void {
    userForm.reset();
  } */

  constructor(
    private showRSevice: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  saveUser(userForm: UserTypes): void {
    const user: UserTypes = {
      firstName: userForm.firstName,
      lastName: userForm.lastName,
      gender: userForm.gender,
      email: userForm.email,
      city: userForm.city,
      dob: userForm.dob,
      salary: userForm.salary,
    };
    this.saveUserEvent.emit(user);
    // userForm.value = {};
  }

  toggleDisplayDiv(): void {
    this.showContainer = !this.showContainer;
    this.closeUserContainer.emit(this.showContainer);
    console.log('showContainer: ', this.showContainer);

    this.showRSevice.showReactiveModel1 = !this.showContainer;
    this.cdr.detectChanges();
  }
}
// https://github.com/beingscholar/angular-training