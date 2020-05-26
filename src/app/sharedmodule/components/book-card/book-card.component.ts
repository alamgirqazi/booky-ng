import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "shared-book-card",
  templateUrl: "./book-card.component.html",
  styleUrls: ["./book-card.component.scss"],
})
export class BookCardComponent implements OnInit {
  constructor() {}
  @Input() bookInfo;
  ngOnInit(): void {}
}
