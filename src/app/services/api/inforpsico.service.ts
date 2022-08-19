import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InforpsicoService {

  constructor() { }

  @Output() disparadorInforpsico: EventEmitter<any> = new EventEmitter() 
}
