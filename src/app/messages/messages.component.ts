import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  standalone: true,
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  imports: [FormsModule, NgIf, NgFor, UpperCasePipe, HeroDetailComponent],
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
