import { Injectable } from '@angular/core';
import { Table } from '../models';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  public getTable(id: string): Observable<Table[]> {
    const requestUrl = `../rest/ui/table/${id}`;
    return this.http.get<Table[]>(requestUrl);
  }
}
