import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-analytics",
  templateUrl: "./home-analytics.component.html",
  styleUrls: ["./home-analytics.component.scss"],
})
export class HomeAnalyticsComponent implements OnInit {
  constructor() {}
  isVisible = false;
  ngOnInit(): void {}

  closeModal() {
    this.isVisible = false;
  }
  showModal() {
    this.isVisible = true;
  }
}
