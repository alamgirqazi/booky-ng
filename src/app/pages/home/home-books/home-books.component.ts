import { Component, OnInit } from "@angular/core";
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from "@angular/animations";

import { UserService } from "src/sdk/services/user.service";

export const fadeAnimation = trigger("fadeAnimation", [
  transition(":enter", [
    style({ opacity: 0 }),
    animate("300ms", style({ opacity: 1 })),
  ]),
  transition(":leave", [
    style({ opacity: 1 }),
    animate("300ms", style({ opacity: 0 })),
  ]),
]);

const listAnimation = trigger("listAnimation", [
  transition("* <=> *", [
    query(
      ":enter",
      [
        style({ opacity: 0 }),
        stagger("60ms", animate("600ms ease-out", style({ opacity: 1 }))),
      ],
      { optional: true }
    ),
    query(":leave", animate("200ms", style({ opacity: 0 })), {
      optional: true,
    }),
  ]),
]);

@Component({
  selector: "app-home-books",
  templateUrl: "./home-books.component.html",
  styleUrls: ["./home-books.component.scss"],
  animations: [fadeAnimation, listAnimation],
})
export class HomeBooksComponent implements OnInit {
  constructor(private userService: UserService) {}
  loading = false;
  listView = true;
  search_name;
  statusBooks = "all";
  bookResults = [];
  skeletonItems = [1, 2, 3];
  displaybookResults = [];
  selectedType = "All";
  lastEvent;
  ngOnInit(): void {
    this.getAll();
  }
  getAll(again = false) {
    this.loading = true;
    this.userService.getUserBooks().subscribe(
      (response) => {
        console.log("response->", response);
        this.bookResults = [...response.data];
        this.displaybookResults = [...response.data];

        // setTimeout(() => {
        if (again) {
          console.log("lastEvent", this.lastEvent);
          this.filterChanged(this.lastEvent || "All");
        }
        this.loading = false;
        // }, 0);
      },
      (error) => {
        console.log("error", error);
        this.loading = false;
      }
    );
  }

  search() {}

  filterChanged(e) {
    this.lastEvent = e;
    if (e === "All") {
      this.displaybookResults.length = 0;
      this.displaybookResults = [...this.bookResults];
    } else {
      this.displaybookResults.length = 0;
      this.displaybookResults = this.bookResults.filter((ev) => {
        return ev.reading_status === e;
      });
    }
  }
  updateList() {
    this.getAll(true);
  }
}
