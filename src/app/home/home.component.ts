import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ed-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cursos:any[] = [
    {
      titulo: 'Angular Desde Cero',
      descripcion: 'Herramientas, Componentes y mucho codigo paso a paso'
    },
    {
      titulo: 'Python desde Cero',
      descripcion: 'Python'
    },
    {
      titulo: 'Drupal desde Cero',
      descripcion: 'PHP rules.'
    }
  ];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.cursos = [
        {
          titulo: 'AngularJS',
          descripcion: 'AngularJS contraataca ;-)'
        }
      ]
    }, 3000);

  }

}
