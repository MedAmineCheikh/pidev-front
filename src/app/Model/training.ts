export class Files {
  id!:String;
  name!:String;
  type!:String;
  data!:any;
}
export class Pageable {

  offset!:     number;
  pageNumber!: number;
  pageSize!:   number;
  paged!:      boolean;
  unpaged!:    boolean;
}
export class Training{

  idTrainning!:String;
  trainningName!:String;
  trainerName!:String;
  duration!:String;
  theme!:any;
  description!:String;
  pageable!: Pageable[];
  trainingDate!:Date;
  files!:Files[];
}
