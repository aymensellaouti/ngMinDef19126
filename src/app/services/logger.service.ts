import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class LoggerService {
  log(message: unknown) {
    console.log('From LoggerService');
    console.log({message});
  }
}
