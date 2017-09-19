import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddQuoteComponentComponent } from './add-quote-component/add-quote-component.component';
import { QuoteListComponentComponent } from './quote-list-component/quote-list-component.component';
import { QuoteComponentComponent } from './quote-list-component/quote-component/quote-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AddQuoteComponentComponent,
    QuoteListComponentComponent,
    QuoteComponentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
