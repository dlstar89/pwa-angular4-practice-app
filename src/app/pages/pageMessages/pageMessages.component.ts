import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../../services/messaging.service';
import { routeFadeIn } from '../../_animations/animations';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-pageMessages',
  templateUrl: './pageMessages.component.html',
  styleUrls: ['./pageMessages.component.css'],
  animations: [routeFadeIn]
})
export class PageMessagesComponent implements OnInit {

  message;
  items;

  constructor(public msg: MessagingService, private db: AngularFirestore) { }

  ngOnInit() {

    this.items = this.db.collection('items').valueChanges();

    const user = {
      uid: 'F63AexV9qHeZJLdwDsZU3jzPIZ63'
    };

    if (user) {
      this.msg.getPermission(user);
      this.msg.monitorRefresh(user);
      this.msg.receiveMessages();
    }
  }

}
