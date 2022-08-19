import { Component, Input, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/api/list.service';
import { Router } from '@angular/router';
import { listI } from '../../modelos/list.interface';
import { InforpsicoService } from '../../services/api/inforpsico.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( public apiList:ListService, public router:Router, private inforPsicoService:InforpsicoService) { 
  }
 
  @Input() psychologistId = ""
  psychologists!: listI[];
  notFound = false;

  ngOnInit(): void {
    this.apiList.getListPsichologist().subscribe(data => {
      this.psychologists = data
    }, (err: any) => {
        console.log(err)
        this.notFound = true
    } )
  }

  mostrar(id:any){
    this.apiList.getIdpsichologist(id).subscribe((data) => {
      //console.log(data)
      //return this.psychologists = data
    },
    
  );
    
  }

  linkDescription(id:any) {
    this.router.navigate(['psychologist'])
    this.inforPsicoService.disparadorInforpsico.emit({ 
      data: id
    })

    
    
  }

  

}
