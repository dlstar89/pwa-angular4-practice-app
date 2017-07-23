import { error } from 'util';
import { Injectable, EventEmitter } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';


@Injectable()
export class LoadingService {

  loadEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  emitChange(data: boolean) {
    if (data === true) {
      this.loadEventEmitter.emit(data);
    } else {
      setTimeout(() => {
        this.loadEventEmitter.emit(data);
      }, 100);
    }
  }
}

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  isLoading = false;

  constructor(private _loadingService: LoadingService) { }

  ngOnInit() {
    this._loadingService.loadEventEmitter.subscribe(
      (data) => {
        this.isLoading = data;
      });
  }

}
