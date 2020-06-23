import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ExecService {
  constructor(private http: HttpClient) {}

  execute(cmdId: string, values: any): Observable<any> {
    const formData = new FormData();
    for (let [key, value] of Object.entries(values)) {
      if (value == null) {
        formData.append(key, "");
      } else if (Array.isArray(value)) {
        (<Array<string>>value).forEach(val => {
          formData.append(key, String(val));
        });
      } else {
        formData.append(key, String(value));
      }
    }
    const requestUrl = `../rest/ui/exec/${cmdId}`;
    return this.http.post(requestUrl, formData);
  }
}
