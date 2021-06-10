import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysAgo'
})
export class DaysAgoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const userDate = new Date(value);
    const currentDate = new Date();
    const diffInSeconds = Math.round(Math.abs(currentDate.getTime() - userDate.getTime()) / 1000);
    const diffInDays = Math.round(diffInSeconds / (60 * 60 * 24));
    switch (diffInDays) {
      case 0:
        return 'today';
      case 1:
        return 'a day ago';
      default:
        return diffInDays + ' days ago';
    }
  }
}
