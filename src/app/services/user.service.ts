import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { User } from "../models";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private userSource = new BehaviorSubject<User>(null);
  currentUser = this.userSource.asObservable();
  constructor(private http: HttpClient) {}

  setCurrent(): void {
    const requestUrl = `../rest/ui/user/current`;
    this.http.get<User>(requestUrl).subscribe({
      next: (user) => this.userSource.next(user),
    });
  }
}
