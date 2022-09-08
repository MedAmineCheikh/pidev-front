import { Component, OnInit } from '@angular/core';
import {Training} from "../../Model/training";
import {FileUploadService} from "../../services/file-upload.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  training!:Training[];
  constructor(private uploadeService:FileUploadService,private router:Router) { }

  ngOnInit(): void {
    this.uploadeService.getAlltrainings()
      .subscribe(value => {this.training =value,console.log(this.training);
      } )
  }
  onGettrainingbyId(id:String){
    this.router.navigate(["user",id]);
    return  console.log(id)
  }
}
