import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-add-quote-component',
  templateUrl: './add-quote-component.component.html',
  styleUrls: ['./add-quote-component.component.css']
})
export class AddQuoteComponentComponent implements OnInit {
  quote: Quote = new Quote();
  @Output() quoteAddedEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submitQuote() {
    this.quoteAddedEvent.emit(this.quote);
    this.quote = new Quote();
  }
}
