import { Booking } from './../_models/booking';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class FilterPipe implements PipeTransform {

  transform(list: Booking[], value: string) {
    return value ? list.filter(item => {         
        item.bookingId.toString().toLowerCase().indexOf(value.toLowerCase()) != -1;
     }) : list;
  }

}