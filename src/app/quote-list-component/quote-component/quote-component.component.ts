import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-component',
  templateUrl: './quote-component.component.html',
  styleUrls: ['./quote-component.component.css']
})
export class QuoteComponentComponent implements OnInit {
  @Input() quote;
  @Input() i;
  @Output() upvoteEmitter = new EventEmitter();
  @Output() downvoteEmitter = new EventEmitter();
  @Output() deleteEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  upvote(i){
    this.upvoteEmitter.emit(i);
  }

  downvote(i){
    this.downvoteEmitter.emit(i);
  }

  delete(i){
    this.deleteEmitter.emit(i);
  }
}
