import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-count',
  templateUrl: './userCount.component.html',
  styleUrls: ['./sample04.component.css'],
})
export class UserCountComponent {
  @Input()
  allCount: number | undefined;

  @Input()
  maleCount: number | undefined;

  @Input()
  femaleCount: number | undefined;

  selectedRadio: string = 'all';

  @Output()
  selectedRadioChangedEvent: EventEmitter<string> = new EventEmitter<string>();

  changeHandler(): void {
    this.selectedRadioChangedEvent.emit(this.selectedRadio);
  }

  constructor() {}
}
