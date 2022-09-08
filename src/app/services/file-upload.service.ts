import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Training} from "../Model/training";
import {parseStatementForUmdModule} from "@angular/compiler-cli/ngcc/src/host/umd_host";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
 baseUrl = 'http://localhost:8089/SpringMVC';
  constructor(private http: HttpClient) { }

  upload(file: File,idf:String): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/upload/`+idf, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req) ;
  }
  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
public addtraining(t:Training):Observable<object>{
    return this.http.post(this.baseUrl+"/add-training",t);
}
public gettrainingbyId(IdTrainning:String):Observable<any>{
    return this.http.get<any>(this.baseUrl+"/retrieve-training/"+IdTrainning);
}
public  getAlltrainings():Observable<Training[]>{
    return this.http.get<Training[]>(this.baseUrl+"/retrieve-all-trainings");
}
public updateTraining(t:Training):Observable<Training>{
    return this.http.put<Training>(this.baseUrl+"/modify-training",t);
}
public pagetrainings(page:number,size:number):Observable<Training>{
    return this.http.get<Training>(this.baseUrl+"/retrieve-training/pageable?page="+page+"&size="+size)
}
  public AddfilesToTrainings(id:String,idt:String,t:Training){
    return this.http.put(this.baseUrl+"/addfiletotraining/"+id+"/"+idt,t);
  }
  public  getTrainingFiles(idt:String):Observable<any>{
    return this.http.get(this.baseUrl+"/myfiles/"+idt);
  }
public delete(id:String){
    return this.http.delete(this.baseUrl+"/remove-training/"+id);
}
}
