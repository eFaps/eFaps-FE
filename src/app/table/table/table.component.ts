import { Component, OnInit } from "@angular/core";
import { Column } from "src/app/models";
import { TableService } from "src/app/services";
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: "eFaps-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {
  columns: Column[] = [
    {
      header: "Name",
      field: "name"
    },
    {
      header: "Last Name",
      field: "lastname"
    },
    {
      header: "First Name",
      field: "firstname"
    }
  ];
  values = [];
  id: string
  constructor(private tableService: TableService, private route: ActivatedRoute, private router: Router, private location:Location) {
  }

  ngOnInit(): void {
    this.id = (<any>this.location.getState()).id

    this.tableService.getTable(this.id).subscribe({
      next: table => {
        console.log(table)
      }
    })
  }
}
