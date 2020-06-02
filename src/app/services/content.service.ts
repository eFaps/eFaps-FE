import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Content, Outline } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {


  constructor(private http: HttpClient) { }

  getContent(id: string): Observable<Content> {
    const requestUrl = `../rest/ui/content/${id}`;
    return this.http.get<Content>(requestUrl);
  }

  getOutline(id: string, cmdId: string): Observable<Outline> {
    const requestUrl = `../rest/ui/content/${id}/${cmdId}`;
    return this.http.get<Outline>(requestUrl);
  }
}
