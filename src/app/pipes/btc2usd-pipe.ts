import { Pipe, PipeTransform } from '@angular/core';
import { APP_CONSTANES } from '../config/constantes';
// export const BTCUSD = 91048;
@Pipe({
  name: 'btc2usd'
})
export class Btc2usdPipe implements PipeTransform {

  transform(amount: number, isBtc2Usd = true): number {
    return isBtc2Usd ? amount * APP_CONSTANES.btcusd : amount / APP_CONSTANES.btcusd;
  }

}
