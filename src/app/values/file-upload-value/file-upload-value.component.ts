import { Component, OnInit, Inject } from "@angular/core";
import {
  NgxFileUploadStorage,
  NgxFileUploadFactory,
  NgxFileUploadOptions,
  NgxFileUploadRequest
} from "@ngx-file-upload/core";
@Component({
  selector: "eFaps-file-upload-value",
  templateUrl: "./file-upload-value.component.html",
  styleUrls: ["./file-upload-value.component.scss"]
})
export class FileUploadValueComponent implements OnInit {
  public uploads: NgxFileUploadRequest[] = [];

  private storage: NgxFileUploadStorage;

  private uploadOptions: NgxFileUploadOptions;

  constructor(
    @Inject(NgxFileUploadFactory) private uploadFactory: NgxFileUploadFactory
  ) {
    this.storage = new NgxFileUploadStorage({
      concurrentUploads: 2,
      autoStart: true,
      removeCompleted: 5000 // remove completed after 5 seconds
    });

    this.uploadOptions = { url: "http://localhost:3000/gallery/add" };
  }

  ngOnInit() {
    this.storage.change().subscribe(uploads => (this.uploads = uploads));
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
