import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'actions',
  standalone: true
})
export class ActionsPipe implements PipeTransform {

  transform(action: string): string {
    if (action.endsWith('cion')) {
      return action.replace('cion', 'ción');
    }
    return action.replace(/([A-Z])/g, ' $1').trim().toLowerCase();
  }

}
