import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/core/model';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})

export class CategoriaComponent implements OnInit {

  categorias: Categorias[] = [
  {id: 1, nomecategoria: 'Beleza e Saúde'},
  {id: 2, nomecategoria: 'Casa, Móveis e Decoração'},
  {id: 3, nomecategoria: 'Alimentos e Bebidas'},
  {id: 4, nomecategoria: 'Esporte e Lazer'},
  {id: 5, nomecategoria: 'Eletrônicos'},
  {id: 6, nomecategoria: 'Pet'}
  ];
displayedColumns = ['id', 'nomecategoria'];

  constructor() { }

  ngOnInit(): void {
  }


}
