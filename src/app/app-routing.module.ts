import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UploadFilesComponent} from "./components/upload-files/upload-files.component";
import {AllTrainingsComponent} from "./components/all-trainings/all-trainings.component";
import {DetailTrainingComponent} from "./components/detail-training/detail-training.component";
import {UpdateCertificatsComponent} from "./components/update-certificats/update-certificats.component";
import {UpdateTrainingComponent} from "./components/update-training/update-training.component";
import {AllCertificatsComponent} from "./components/all-certificats/all-certificats.component";
import {AddCertificatComponent} from "./components/add-certificat/add-certificat.component";
import {FormationComponent} from "./components/formation/formation.component";
import {UserComponent} from "./components/user/user.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all-trainings',
    pathMatch: 'full',
  },
  {
    path:"upload",
    component:UploadFilesComponent
  },{
    path:"add-certificat",
    component:AddCertificatComponent
  },
  {
    path:"all-trainings",
    component:AllTrainingsComponent
  },{
    path:"formation",
    component:FormationComponent
  },
  {
    path:"all-cetificats",
    component:AllCertificatsComponent
  },
  {
    path:"detail-training/:id",
    component:DetailTrainingComponent
  },{
    path:"update-cetificat/:id",
    component:UpdateCertificatsComponent
  },
  {
    path:"update-training/:id",
    component:UpdateTrainingComponent
  } ,
  {
    path:"user/:id",
    component:UserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
