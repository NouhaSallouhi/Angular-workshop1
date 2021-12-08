import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[];
  constructor() { }

  ngOnInit(): void {
    this.listProducts =  [
      {id: 1, title: 't-shirt 1', price: 20, quantity: 0, like: 0},
      {id: 2, title: 't-shirt 2', price: 15, quantity: 22, like: 0},
      {id: 3, title: 't-shirt 3', price: 10, quantity: 5, like: 0}
    ];
  }

  incrementLike(p: Product){
    let i = this.listProducts.indexOf(p);
    this.listProducts[i].like++;
  }



}
