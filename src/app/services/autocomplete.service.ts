import { Injectable } from '@angular/core';
import { AutocompleteResponse } from '../models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {
  constructor(private http: HttpClient) { }

  search(fieldId: string, term: string, values: any): Observable<AutocompleteResponse> {
    const formData = new FormData();
    formData.append("eFapsAutocomplete", term)
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
    const requestUrl = `../rest/ui/autocomplete/${fieldId}`;
    return this.http.post<AutocompleteResponse>(requestUrl, formData);
  }
}
