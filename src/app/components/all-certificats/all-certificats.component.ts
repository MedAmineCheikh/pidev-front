import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CertificatService} from "../../services/certificat.service";
import {Certificat} from "../../Model/certificat";

@Component({
  selector: 'app-all-certificats',
  templateUrl: './all-certificats.component.html',
  styleUrls: ['./all-certificats.component.css']
})
export class AllCertificatsComponent implements OnInit {
certificat!:Certificat[];
  constructor(private router:Router,private certiService:CertificatService) { }

  ngOnInit(): void {
this.certiService.allCertificat().subscribe(value => {this.certificat=value})
  }

  GoUpdate(id:number) {
    this.router.navigate(["update-cetificat",id]);
    return  console.log(id)

  }

  Ondelete(idCerteficat: number) {
  this.certiService.delete(idCerteficat).subscribe(value => {
    this.GotoCerti();
  },error =>console.log(error));
  }

  private GotoCerti() {
    this.router.navigateByUrl("/all-cetificats").then(() => {
      window.location.reload();
    });

  }
}
