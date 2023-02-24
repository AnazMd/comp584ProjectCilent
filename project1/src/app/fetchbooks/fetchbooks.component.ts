import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fetchbooks',
  templateUrl: './fetchbooks.component.html',
  styleUrls: ['./fetchbooks.component.css']
})
export class FetchbooksComponent {
  public books: BookList[] = [];
  baseUrl = "https://localhost:7162/";

  constructor(http: HttpClient) {
            http.get<BookList[]>(this.baseUrl + 'booklist').subscribe(result => {
      this.books = result;
    }, error => console.error(error));
  }
}

interface BookList {
  BookTitle: string;
  Rating: number;
}