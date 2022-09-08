import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import {HttpClientModule} from "@angular/common/http";
import { AllTrainingsComponent } from './components/all-trainings/all-trainings.component';
import { UpdateTrainingComponent } from './components/update-training/update-training.component';
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule} from "@angular/forms";
import { DetailTrainingComponent } from './components/detail-training/detail-training.component';
import { AddCertificatComponent } from './components/add-certificat/add-certificat.component';
import { AllCertificatsComponent } from './components/all-certificats/all-certificats.component';
import { UpdateCertificatsComponent } from './components/update-certificats/update-certificats.component';
import { FormationComponent } from './components/formation/formation.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadFilesComponent,
    AllTrainingsComponent,
    UpdateTrainingComponent,
    DetailTrainingComponent,
    AddCertificatComponent,
    AllCertificatsComponent,
    UpdateCertificatsComponent,
    FormationComponent,
    UserComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxPaginationModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
