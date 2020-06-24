import { Component, Inject, Input, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import {
  NgxFileUploadFactory,
  NgxFileUploadOptions,
  NgxFileUploadRequest,
  NgxFileUploadStorage,
  NgxFileUploadState
} from "@ngx-file-upload/core";
import { Value } from "src/app/models";
@Component({
  selector: "eFaps-file-upload-value",
  templateUrl: "./file-upload-value.component.html",
  styleUrls: ["./file-upload-value.component.scss"]
})
export class FileUploadValueComponent implements OnInit {
  @Input() formGroup: FormGroup;
  _value: Value;
  public uploads: NgxFileUploadRequest[] = [];

  private storage: NgxFileUploadStorage;
  private uploadOptions: NgxFileUploadOptions;

  constructor(
    @Inject(NgxFileUploadFactory) private uploadFactory: NgxFileUploadFactory
  ) {
    this.storage = new NgxFileUploadStorage({
      concurrentUploads: 2,
      autoStart: true
    });

    this.uploadOptions = {
      url: "../rest/ui/upload",
      headers: { "ngsw-bypass": "true" }
    };
  }

  ngOnInit() {
    this.storage.change().subscribe(uploads => {
      this.uploads = uploads;
      console.log(uploads);
      var keys = [];
      uploads.forEach(req => {
        if (req.data.state == NgxFileUploadState.COMPLETED) {
          keys.push(req.data.response.body.key);
        }
      });
      this.formGroup.controls[this.value.name].patchValue(keys);
    });
  }

  @Input()
  set value(value: Value) {
    this._value = value;
    this.formGroup.addControl(value.name, new FormControl());
  }

  get value() {
    return this._value;
  }

  public onSelect(event) {
    const addedFiles: File[] = event.addedFiles;

    if (addedFiles.length) {
      const uploads = this.uploadFactory.createUploadRequest(
        addedFiles,
        this.uploadOptions
      );
      this.storage.add(uploads);
    }
  }

  public onRemove(upload: NgxFileUploadRequest) {
    this.storage.remove(upload);
  }
}
