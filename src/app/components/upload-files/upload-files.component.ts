import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploadService } from 'src/app/services/file-upload.service';
import {Training} from "../../Model/training";
import { v4 as uuidv4 } from 'uuid';
import {Router} from "@angular/router";
@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  training:Training=new Training();
  idf!:String;
  idtraining!:String;

  constructor(private uploadService: FileUploadService,private router:Router) { }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.idf=  uuidv4();
    this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.uploadService.upload(this.currentFile,this.idf).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.uploadService.getFiles();
              console.log(this.currentFile);
            }
          },
          (err: any) => {
            console.log(err);
            this.progress = 0;
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
            this.currentFile = undefined;
          });
      }
      this.selectedFiles = undefined;
    }
  }

  onAddtraining(){
    this.idtraining= this.training.idTrainning=uuidv4();
  this.uploadService.addtraining(this.training).subscribe();
  console.log(this.idf);
  console.log(this.training);
    this.uploadService.AddfilesToTrainings(this.idf,this.training.idTrainning,this.training).subscribe(
      ()=>this.router.navigateByUrl("/all-trainings")
    );
  }

}
