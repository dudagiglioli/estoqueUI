import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/core/model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {


produtos: Produtos[] = [
  { idproduto: 1, nomeproduto: 'Batom'},
  { idproduto: 1, nomeproduto: 'Perfume'},
  { idproduto: 1, nomeproduto: 'Creme antirugas'},
  { idproduto: 2, nomeproduto: 'Conjunto de utensílios de cozinha'},
  { idproduto: 2, nomeproduto: 'Jogo de cama'},
  { idproduto: 2, nomeproduto: 'Sofá e poltronas'},
  { idproduto: 3, nomeproduto: 'Pizza'},
  { idproduto: 3, nomeproduto: 'Bolos e Tortas'},
  { idproduto: 3, nomeproduto: 'Refrigerantes e Bebidas alcóolicas'},
  { idproduto: 4, nomeproduto: 'Bola de Futebol'},
  { idproduto: 4, nomeproduto: 'Raquete'},
  { idproduto: 4, nomeproduto: 'KIT de roupas e acessórios'},
  { idproduto: 5, nomeproduto: 'Notebook'},
  { idproduto: 5, nomeproduto: 'Teclado'},
  { idproduto: 5, nomeproduto: 'Mouse'},
  { idproduto: 6, nomeproduto: 'KIT brinquedos'},
  { idproduto: 6, nomeproduto: 'Casinha'},
  { idproduto: 6, nomeproduto: 'Roupas'}
];

displayedColumns = ['idproduto', 'nomeproduto'];

  constructor() { }

  ngOnInit(): void {
  }

}
