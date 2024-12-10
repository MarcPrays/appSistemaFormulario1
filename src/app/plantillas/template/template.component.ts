import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  standalone: false,
  
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent implements OnInit {

  paises: any[] = []

  constructor(private paisService : PaisService){}

  ngOnInit(): void {
    this.paisService.getPaises()
    .subscribe(paisesServicio => {
      this.paises = paisesServicio
    });
  }
}
