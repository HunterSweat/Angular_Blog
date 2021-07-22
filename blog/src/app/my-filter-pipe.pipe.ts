import { Pipe, PipeTransform } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BlogPost } from './Post';

@Pipe({
  name: 'myFilterPipe',
  pure: false
})
export class MyFilterPipePipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    
    return items.filter(item => (item.title !== 'The Beginning'));
  }

}
