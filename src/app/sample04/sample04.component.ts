import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { UserService } from '../services/user.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sample04',
  templateUrl: './sample04.component.html',
  styleUrls: ['../user/user.component.css', './sample04.component.css'],
})
export class Sample04Component {
  imgPath: string =
    'https://www.telusinternational.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-ti.0de9b743.png%3Ffm%3Dwebp&w=640&q=75';
  imgTitle: string = 'Telus International';

  users: UserTypes[] = [];
  filteredUsers: UserTypes[] = [];
  selectedValue: string = 'all';
  sample: string = 'Sample Value';
  showReactiveButton: boolean = true;
  showUserButton: boolean = true;

  allCount: number | undefined;

  closeResult: string = '';
  showModelContainer: boolean = false;
  shwReactive1: boolean = this.userService.showReactiveModel1;

  constructor(
    private userService: UserService,
    private modalService: NgbModal
  ) {
    console.log('Parent Constructor');

    this.users = [
      {
        firstName: 'Mayank',
        lastName: 'Agarwal',
        gender: 'male',
        email: 'Mayank.Agarwal@email.com',
        city: 'Delhi',
        dob: new Date(1990, 3, 14),
        salary: 32000,
      },
      {
        firstName: 'Athrva',
        lastName: 'Agarwal',
        gender: 'male',
        email: 'Athrva.Agarwal@email.com',
        city: 'Gzb',
        dob: new Date(2004, 1, 19),
        salary: 8000,
      },
      {
        firstName: 'Ruhi',
        lastName: 'Jain',
        gender: 'female',
        email: 'Ruhi.Jain@email.com',
        city: 'Noida',
        dob: new Date(1995, 12, 12),
        salary: 10000,
      },
      {
        firstName: 'Rajesh',
        lastName: 'Kumar',
        gender: 'male',
        email: 'Rajesh.Kumar@email.com',
        city: 'Delhi',
        dob: new Date(1980, 5, 14),
        salary: 36000,
      },
      {
        firstName: 'Jyoti',
        lastName: 'Sharma',
        gender: 'female',
        email: 'Jyoti.Sharma@email.com',
        city: 'Gurgaon',
        dob: new Date(1992, 8, 25),
        salary: 50000,
      },
      {
        firstName: 'Shubham',
        lastName: 'Jain',
        gender: 'male',
        email: 'Shubham.Jain@email.com',
        city: 'Delhi',
        dob: new Date(1989, 7, 5),
        salary: 12000,
      },
      {
        firstName: 'Rajesh',
        lastName: 'Kumar',
        gender: 'male',
        email: 'Rajesh.Kumar@email.com',
        city: 'Noida',
        dob: new Date(2001, 5, 14),
        salary: 18000,
      },
    ];
    // this.filteredUsers = this.users;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Parent Method ngOnChanges.');
    this.shwReactive1 = this.userService.showReactiveModel1;
  }
  ngOnDestroy(): void {
    console.log('Parent Method ngOnDestroy.');
  }
  ngOnInit(): void {
    console.log('Parent Method ngOnInit.');
    this.getAllCount();

    /* const numbers = [1, 2, 3, 4, 67, 68, 43, 5, 6, 5677, 8, 68];

    for (let i in numbers) {
      console.log(numbers[i]);
    } */
  }

  getAllCount(): void {
    this.allCount = this.users.length;
  }
  getMaleCount(): number {
    return this.users.filter((m) => m.gender === 'male').length;
  }
  getFemaleCount(): number {
    return this.users.filter((m) => m.gender === 'female').length;
  }

  onSelectedRadioChangedEvent(selectedRadio: string): void {
    // console.log(selectedRadio);
    /* this.filteredUsers = this.users.filter(
      (f) => selectedRadio === 'all' || f.gender === selectedRadio
    ); */
    this.selectedValue = selectedRadio;
  }

  showFullName(user: UserTypes): void {
    // alert(user.firstName);
    const { firstName, lastName } = user;
    const fullName = this.userService.getFullName(firstName, lastName);
    alert(fullName);
  }

  shwFullNameUser(firstName: string, lastName: string): void {
    const fullName = this.userService.getFullName(firstName, lastName);
    console.log(fullName);
  }

  onSaveUserEvent(user: UserTypes): void {
    console.log({ ...user });

    // const { firstName, lastName } = user;
    this.users.push({ ...user });
    this.getAllCount();
    this.getDismissReason('on save');
  }

  onCloseUserContainer(showContainer: boolean): void {
    this.showReactiveButton = !showContainer;
  }
  /* onShowReactiveContainer(showContainer: boolean): void {
    this.showUserButton = !showContainer;
  } */

  open(template: TemplateRef<any>): void {
    this.modalService
      .open(template, { ariaLabelledBy: 'model-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    // console.log(reason);

    if (reason === ModalDismissReasons.ESC) {
      console.log('1', reason);
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      console.log('2', reason);
      return 'by clicking on a backdrop';
    } else {
      console.log('3', reason);
      return `with: ${reason}`;
    }
  }
}

export type UserTypes = {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  city: string;
  dob: Date;
  salary: number;
};

@Component({
  selector: 'child',
  template: `<span>{{ defaultText }}</span>`,
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {
  constructor() {
    console.log('Child Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child Method ngOnChanges.', changes);
  }
  ngOnDestroy(): void {
    console.log('Child Method ngOnDestroy.');
  }
  ngOnInit(): void {
    console.log('Child Method ngOnInit.');
  }

  @Input()
  defaultText: string | undefined;

  
}
