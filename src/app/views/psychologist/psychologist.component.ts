import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/api/list.service';
import { InforpsicoService } from '../../services/api/inforpsico.service'


@Component({
  selector: 'app-psychologist',
  templateUrl: './psychologist.component.html',
  styleUrls: ['./psychologist.component.css']
})
export class PsychologistComponent implements OnInit {
  psychologist!: any;
  idSelection: any = ""
  notFound = false;
  id: any = ""
  dataId: any
  //canShowData = false;
  //componentStatus = 'Cargando'

  constructor(public apiList: ListService,
    private inforPsicoService: InforpsicoService) {

  }

  ngOnInit(): void {

    console.log('aca es el paso previo a disparar el evento')
    this.inforPsicoService.disparadorInforpsico.subscribe((id) => {
      console.log('pasando por aca', id)
      this.getIdApi(id.data);
    })
  }


  getIdApi(id: any) {
    this.apiList.getIdpsichologist(id).subscribe((data) => {
      this.psychologist = data
      console.log(this.psychologist)
     // this.canShowData = true
     // console.log('se debe mostrar la data', this.canShowData)
     // this.componentStatus = 'Listo'

    })
  }

}

/* this.apiList.getIdpsichologist(this.id).subscribe((data) => {
    this.psychologist = data;
   }, (err: any) => {
    console.log(err);
    this.notFound = true;
   } )*/ 