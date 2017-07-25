/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GeneralUtilsService } from './generalUtils.service';

describe('Service: GeneralUtils', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneralUtilsService]
    });
  });

  it('should ...', inject([GeneralUtilsService], (service: GeneralUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
