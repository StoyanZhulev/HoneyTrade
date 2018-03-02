import { Component, OnInit } from '@angular/core';
import { Message } from '../../../models/view-models/message.model';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  public messages: Message[];

  constructor(
    private messagesService: MessageService
  ) { }

  ngOnInit() {
    this.messagesService.messagesRecieved$.subscribe(messages => {
      console.log(messages)
      this.messages = messages;
    })
  }

}
