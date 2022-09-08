import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Certificat} from "../Model/certificat";
import {Observable} from "rxjs";
import {Training} from "../Model/training";

@Injectable({
  providedIn: 'root'
})
export class CertificatService {
  baseUrl = 'http://localhost:8089/SpringMVC';

  constructor(private http: HttpClient) {
  }

  public GenerateQr(code: String, width: number, height: number) {
    return this.http.get(this.baseUrl + "/QR/genrateAndDownloadQRCode/" + code + "/" + width + "/" + height);

  }

  public addCertificat(c: Certificat): Observable<object> {
    return this.http.post(this.baseUrl + "/add-certificat", c);
  }

  public allCertificat(): Observable<Certificat[]> {
    return this.http.get<Certificat[]>(this.baseUrl + "/retrieve-all-certificats");
  }

  public updateCertificat(t: Certificat): Observable<Certificat> {
    return this.http.put<Certificat>(this.baseUrl+"/modify-certificat",t);
  }
  public getcertiById(id:number):Observable<any>{
    return this.http.get<any>(this.baseUrl+"/retrieve-certificat/"+id);}
  public delete(id:number){
    return this.http.delete(this.baseUrl+"/remove-certificat/"+id);
  }
}
