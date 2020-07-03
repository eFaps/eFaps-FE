import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Action, NavItem, Section } from "src/app/models";
import { ContentService } from "src/app/services";
import { ExecService } from "src/app/services/exec.service";

@Component({
  selector: "eFaps-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit {
  formGroup: FormGroup;
  navItem: NavItem;
  oid: string = null;
  sections: Section[] = [];
  action: Action;
  header: string;

  constructor(
    formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ModalComponent>,
    private contentService: ContentService,
    private execService: ExecService
  ) {
    this.navItem = data.navItem;
    this.oid = data.oid;
    this.formGroup = formBuilder.group([]);
  }

  ngOnInit(): void {
    this.contentService.getOutline(this.oid, this.navItem.id).subscribe({
      next: outline => {
        console.log(outline);
        this.sections = outline.sections;
        this.action = outline.action;
        this.header = outline.header;
      }
    });
  }

  exec() {
    const value =
      this.oid == null
        ? this.formGroup.value
        : { ...this.formGroup.value, eFapsOID: this.oid };
    this.execService.execute(this.navItem.id, value).subscribe({
      next: () => {
        this.dialogRef.close({ reload: true });
      }
    });
  }
}
