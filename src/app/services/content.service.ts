import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Content } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {


  constructor(private http: HttpClient) { }

  getContent(id: any): Observable<Content> {
    const requestUrl = `../rest/ui/content/${id}`;
    return this.http.get<Content>(requestUrl);
  }
}
