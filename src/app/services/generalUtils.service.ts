import { Injectable } from '@angular/core';

@Injectable()
export class GeneralUtilsService {

constructor() { }

public createRange(number) {
    const items: number[] = [];
    for (let i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

}
