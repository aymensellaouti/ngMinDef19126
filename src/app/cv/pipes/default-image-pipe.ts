import { Pipe, PipeTransform } from '@angular/core';
import { APP_CONSTANES } from '../../config/constantes';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    return path.trim() ? path : APP_CONSTANES.defaultImage;
  }

}
