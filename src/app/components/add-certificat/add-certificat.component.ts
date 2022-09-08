import { Component, OnInit } from '@angular/core';
import {Certificat} from "../../Model/certificat";
import {Router} from "@angular/router";
import {CertificatService} from "../../services/certificat.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-add-certificat',
  templateUrl: './add-certificat.component.html',
  styleUrls: ['./add-certificat.component.css']
})
export class AddCertificatComponent implements OnInit {
  width=500;
  height=500;
  generated=false;
  certificat:Certificat=new Certificat()
  constructor(private router:Router,private certificatService:CertificatService) { }

  ngOnInit(): void {
  }
  OnGenerate(){
    this.certificatService.GenerateQr(this.certificat.nomCerteficate+"certified by : "
      +this.certificat.trainername
      +"  to:"+this.certificat.username
      ,this.width,this.height).subscribe();
    console.log(this.certificat)
    this.generated=true;
  }
  OnaddCertificat(){
    this.certificatService.addCertificat(this.certificat).subscribe(()=>this.router.navigateByUrl("/all-cetificats")
    );

  }

}
