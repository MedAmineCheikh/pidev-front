import { Component, OnInit } from '@angular/core';
import {Training} from "../../Model/training";
import {Observable} from "rxjs";
import {FileUploadService} from "../../services/file-upload.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
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

}
