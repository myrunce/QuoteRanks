import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-list-component',
  templateUrl: './quote-list-component.component.html',
  styleUrls: ['./quote-list-component.component.css']
})
export class QuoteListComponentComponent implements OnInit {
  @Input() quotes;
  @Output() upvoteEmitter = new EventEmitter();
  @Output() downvoteEmitter = new EventEmitter();
  @Output() deleteEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  upvoteEvent(index) {
    this.upvoteEmitter.emit(index);
  }

  downvoteEvent(index) {
    this.downvoteEmitter.emit(index);
  }

  deleteEvent(index) {
    this.deleteEmitter.emit(index);
  }
}
