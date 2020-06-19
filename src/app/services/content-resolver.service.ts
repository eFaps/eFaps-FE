import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";

import { Content } from "../models";
import { ContentService } from "./content.service";

@Injectable({
  providedIn: "root",
})
export class ContentResolverService implements Resolve<Content> {
  constructor(private contentService: ContentService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<Content> {
    return this.contentService.getContent(route.queryParams.id);
  }
}
