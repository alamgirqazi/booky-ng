import { Component, OnInit } from "@angular/core";
import { BooksService } from "src/sdk/services/books.service";

@Component({
  selector: "app-home-search",
  templateUrl: "./home-search.component.html",
  styleUrls: ["./home-search.component.scss"],
})
export class HomeSearchComponent implements OnInit {
  constructor(private booksService: BooksService) {}
  searchValue = "";
  loading = false;
  bookResults = [];

  ngOnInit(): void {
    this.applySearch();
  }
  applySearch() {
    console.log("apply search!");
    this.loading = true;
    this.booksService.findBookByTitle(this.searchValue).subscribe(
      (response) => {
        console.log("response->", response);

        this.loading = false;
        const work = response?.data?.results?.work || [];
        this.bookResults = work;
        console.log("bookResults->", this.bookResults);
      },
      (error) => {
        console.log("error", error);
        this.loading = false;
      }
    );
  }
  inputEnter() {
    console.log("a");
    this.applySearch();
  }
  onBack() {
    console.log("a");
  }
}
