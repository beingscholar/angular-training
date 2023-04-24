import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ChildComponent,
  Sample04Component,
} from './sample04/sample04.component';
import { UserCountComponent } from './sample04/userCount.component';
import { TitlePipe } from './sample04/title.pipe';
import { UserService } from './services/user.service';
import { AddEditUserComponent } from './sample04/add-edit-user/add-edit-user.component';
import { UserReactiveFormComponent } from './sample04/user-reactive-form/user-reactive-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    Sample04Component,
    UserCountComponent,
    TitlePipe,
    ChildComponent,
    AddEditUserComponent,
    UserReactiveFormComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, NgbModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
