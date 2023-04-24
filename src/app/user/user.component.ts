import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  lName: string = 'Agarwal';
  fName: string = 'Mayank';
  imgPath: string =
    'https://www.telusinternational.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-ti.0de9b743.png%3Ffm%3Dwebp&w=640&q=75';
  imgTitle: string = 'Telus International';
  isDisabled: boolean = false;
  inputClass: string = 'myClass otherClass';
  isApplied: boolean = false;
  users: any[] = [
    { fName: 'Mayank', lName: 'Agarwal' },
    { fName: 'Amit', lName: 'Kumar' },
    { fName: 'Rajeev', lName: 'Yadav' },
    { fName: 'Athrva', lName: 'Agarwal' },
  ];

  ngOnInit(): void {}

  displayFullName(item: any): string {
    return item.fName + ' ' + item.lName;
  }

  alertFullName(): void {
    alert(this.fName + ' ' + this.lName);
  }
}
