import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title',
})
export class TitlePipe implements PipeTransform {
  transform(fName: string, gender: string) {
    return gender === 'male' ? `Mr. ${fName}` : `Ms. ${fName}`;
  }
}
