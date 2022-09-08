import { Component, OnInit } from '@angular/core';
import {Files, Pageable, Training} from "../../Model/training";
import {FileUploadService} from "../../services/file-upload.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-all-trainings',
  templateUrl: './all-trainings.component.html',
  styleUrls: ['./all-trainings.component.css']
})
export class AllTrainingsComponent implements OnInit {
training!:Training[];
  pageNumber:number=0;
pageSize:number=3;
  trainings:Training=new Training();
  files!:Files[];
  constructor(private uploadeService:FileUploadService,private router:Router) { }

  ngOnInit(): void {
  this.uploadeService.getFiles().subscribe(value => {this.files=value,console.log(this.files);
  })
      console.log(this.files);
  this.uploadeService.getAlltrainings()
    .subscribe(value => {this.training =value,console.log(this.training);
  } )

  }
onGettrainingbyId(id:String){
  this.router.navigate(["detail-training",id]);
   return  console.log(id)
}
onGetupdatebyId(id:String){
  this.router.navigate(["update-training",id]);
   return  console.log(id)
}
  }
