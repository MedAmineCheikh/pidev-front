import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CertificatService} from "../../services/certificat.service";
import {Certificat} from "../../Model/certificat";

@Component({
  selector: 'app-update-certificats',
  templateUrl: './update-certificats.component.html',
  styleUrls: ['./update-certificats.component.css']
})
export class UpdateCertificatsComponent implements OnInit {
  id!:number;
  certificat:Certificat=new Certificat();
  constructor(private certiService:CertificatService,private router: Router,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id =this.activatedroute.snapshot.params['id'];
    this.certiService.getcertiById(this.id).subscribe(value => {this.certificat=value},
      error =>
        console.log(error));
  }


  OnupdateCertificat() {
    this.certiService.updateCertificat(this.certificat).subscribe(value => {
      this.GotoCerti();
    },error =>console.log(error));
  }

  private GotoCerti() {
    this.router.navigateByUrl("/all-cetificats");
  }
}
