import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [];

  quoteToDatabase(quote){
    console.log('quote added!')
    this.quotes.push(quote);
    this.sortByRank();
  }

  upvote(i) {
    this.quotes[i].rank++;
    this.sortByRank();
  }

  downvote(i) {
    this.quotes[i].rank--;
    this.sortByRank();
  }

  delete(i) {
    this.quotes.splice(i, 1);
    this.sortByRank();
  }

  sortByRank(){
    this.quotes.sort(function(a, b){
      return b.rank - a.rank;
    })
  }
}
