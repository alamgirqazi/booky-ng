import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CoreConfig } from "../core.config";
import { HttpClient, HttpParams } from "@angular/common/http";
import { NzMessageService } from "ng-zorro-antd/message";

type MessageTypes = "success" | "error" | "warning";

@Injectable({
  providedIn: "root",
})
export class HelperService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  createMessage(type: MessageTypes = "success", msg = ""): void {
    this.message.create(type, msg);
  }
}
