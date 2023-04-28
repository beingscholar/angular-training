import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { Sample04Component } from './sample04/sample04.component';
import { UserCountComponent } from './sample04/userCount.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'user-detail', component: UserDetailComponent },
  { path: 'sample-04', component: Sample04Component },
  { path: 'user-count', component: UserCountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
