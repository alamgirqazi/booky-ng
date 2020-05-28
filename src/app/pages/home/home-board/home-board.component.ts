import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-home-board",
  templateUrl: "./home-board.component.html",
  styleUrls: ["./home-board.component.scss"],
})
export class HomeBoardComponent implements OnInit {
  constructor() {}
  todo = ["Get to work", "Pick up groceries", "Go home", "Fall asleep"];
  read = ["yes", "no"];
  check = false;
  done = ["Get up", "Brush teeth", "Take a shower", "Check e-mail", "Walk dog"];
  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
