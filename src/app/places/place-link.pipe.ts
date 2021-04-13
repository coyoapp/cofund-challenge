import { Pipe, PipeTransform } from '@angular/core';
import { Place } from './place';

@Pipe({
  name: 'placeLink'
})
export class PlaceLinkPipe implements PipeTransform {

  transform(value: Place): string {
    return `https://www.google.com/maps/place/?q=place_id:${value.placeId}`;
  }
}
