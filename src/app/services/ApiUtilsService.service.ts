import { Inject, Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { LoadingService } from './../components/loader/loader.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiUtilsService {

  constructor(private http: Http,
    private loadingService: LoadingService) { }

  public getDataObservable(url: string, successFunc, errorFunc?) {

    this.loadingService.emitChange(true);

    return this.http.get(url)
      .map(data => data).subscribe(
      data => { successFunc(data); this.loadingService.emitChange(false); },
      error => { if (errorFunc) { errorFunc(error); } this.loadingService.emitChange(false); },
      () => { }
      );
  }

  public postDataObservable(url: string, successFunc, errorFunc?, optionsJson?, headersJson?) {

    this.loadingService.emitChange(true);
    const headers = new Headers(headersJson);

    return this.http.post(url, optionsJson, { headers: headers })
      .map(data => data).subscribe(
      data => { successFunc(data); this.loadingService.emitChange(false); },
      error => { if (errorFunc) { errorFunc(error); } this.loadingService.emitChange(false); },
      () => { }
      );
  }

  public deleteDataObservable(url: string, headersJson, successFunc, errorFunc?) {

    this.loadingService.emitChange(true);

    return this.http.delete(url, { headers: new Headers(headersJson) })
      .map(data => data).subscribe(
      data => { successFunc(data); this.loadingService.emitChange(false); },
      error => { if (errorFunc) { errorFunc(error); } this.loadingService.emitChange(false); },
      () => { }
      );
  }

}
