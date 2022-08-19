import { Component, OnInit } from '@angular/core';
import { InforpsicoService } from 'src/app/services/api/inforpsico.service';
import { ListService } from 'src/app/services/api/list.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  psychologist!: any;
  idSelection: any = ""
  notFound = false;
  id: any = ""
  dataId: any
  canShowData = false;
  componentStatus = 'Cargando'

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
      this.canShowData = true
      console.log('se debe mostrar la data', this.canShowData)
      this.componentStatus = 'Listo'

    })
  }

}
