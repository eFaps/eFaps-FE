import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { NavItem, Section } from "src/app/models";
import { ContentService } from "src/app/services";

@Component({
  selector: "eFaps-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit {
  navItem: NavItem;
  id: string = null;
  sections: Section[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ModalComponent>,
    private contentService: ContentService
  ) {
    this.navItem = data.navItem;
  }

  ngOnInit(): void {
    this.contentService.getOutline(this.id, this.navItem.id).subscribe({
      next: outline => {
        console.log(outline);
        this.sections = outline.sections
      }
    });
  }
}
