import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  showReactiveModel1: boolean = false;

  getFullName(fName: string, lName: string): string {
    return `${fName} ${lName}`;
  }
}
