import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Training} from "../../Model/training";
import {FileUploadService} from "../../services/file-upload.service";

@Component({
  selector: 'app-update-training',
  templateUrl: './update-training.component.html',
  styleUrls: ['./update-training.component.css']
})
export class UpdateTrainingComponent implements OnInit {

  training:Training=new Training();
  id!:String;
  constructor( private uploadeService:FileUploadService,private router: Router,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id =this.activatedroute.snapshot.params['id'];
    this.uploadeService.gettrainingbyId(this.id).subscribe(value => {this.training=value;},error =>
      console.log(error));
  }

  OnUpdate() {
    this.uploadeService.updateTraining(this.training).subscribe(value => {
      this.GotoTraining();
    },error =>console.log(error))
  }
  GotoTraining(){
    this.router.navigateByUrl("/all-trainings");
  }

}
