import { Component, OnInit } from '@angular/core';
import {FileUploadService} from "../../services/file-upload.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Files, Training} from "../../Model/training";
import {Observable} from "rxjs";

@Component({
  selector: 'app-detail-training',
  templateUrl: './detail-training.component.html',
  styleUrls: ['./detail-training.component.css']
})
export class DetailTrainingComponent implements OnInit {
id!:String;
training:Training=new Training()
  fileInfos?: Observable<any>;
  constructor(private uploadService: FileUploadService,private router:Router,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.activatedroute.snapshot.params['id'];
    this.uploadService.gettrainingbyId(this.id).subscribe(value => {this.training=value;},error =>
      console.log(error));
  this.fileInfos = this.uploadService.getTrainingFiles(this.id);
  }

  Ondelete() {
    this.uploadService.delete(this.id).subscribe(value => {
      this.GotoTraining();
    },error =>console.log(error))
  }
  GotoTraining(){
    this.router.navigateByUrl("/all-trainings");
  }

}
