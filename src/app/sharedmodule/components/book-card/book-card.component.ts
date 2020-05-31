import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "src/sdk/services/auth.service";
import { UserService } from "src/sdk/services/user.service";
import { HelperService } from "src/sdk/services/helper.service";

type bookStatusTypes = "read" | "currently-reading" | "read-it-later";

@Component({
  selector: "shared-book-card",
  templateUrl: "./book-card.component.html",
  styleUrls: ["./book-card.component.scss"],
})
export class BookCardComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private helperService: HelperService
  ) {}
  @Input() bookInfo;
  @Input() userDisplay = false;
  @Input() goodreadData = true;
  @Input() showRibbon = false;
  @Output() output = new EventEmitter();

  loading = false;
  ngOnInit(): void {}

  addBookToUser(type: bookStatusTypes) {
    const token = this.authService.getdecodedAccessTokenId();
    const user_id = token._id;

    const publications = {
      original_publication_day: this.bookInfo?.original_publication_day?._,
      original_publication_month: this.bookInfo?.original_publication_month?._,
      original_publication_year: this.bookInfo?.original_publication_year?._,
    };

    const obj = {
      title: this.bookInfo?.best_book?.title,
      user_id,
      publications,
      reading_status: type,
      author: this.bookInfo?.best_book?.author.name,
      goodreads_id:
        this.bookInfo?.best_book?.id._ || this.bookInfo?.goodreads_id,
      goodreads_average_rating: this.bookInfo?.average_rating,
      image_url: this.bookInfo?.best_book?.image_url,
      small_image_url: this.bookInfo?.best_book?.small_image_url,
    };

    this.loading = true;

    this.userService.addBookToUser(obj).subscribe(
      (response) => {
        console.log("response->", response);
        const title = this.bookInfo?.best_book?.title || this.bookInfo?.title;
        const msg = `book ${title} successfully added to ${type}`;
        this.helperService.createMessage("success", msg);
        this.loading = false;
        this.output.emit(null);
      },
      (error) => {
        console.log("error", error);
        this.helperService.createMessage("error", error);
        this.loading = false;
      }
    );
  }
}
