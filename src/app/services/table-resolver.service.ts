import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";

import { Table } from "../models";
import { TableService } from "./table.service";

@Injectable({
  providedIn: "root",
})
export class TableResolverService implements Resolve<Table> {
  constructor(private tableService: TableService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<Table> {
    return this.tableService.getTable(route.queryParams.id);
  }
}
