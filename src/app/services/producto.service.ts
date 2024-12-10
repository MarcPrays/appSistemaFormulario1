import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.models';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  private productos : Producto[]=[
    {nombre:"Audifonos",img:"assets/img/img1.jpeg",precio:100},
    {nombre:"Tenis",img:"assets/img/img2.jpg",precio:400},
    {nombre:"Reloj",img:"assets/img/img3.jpg",precio:200},
    {nombre:"Celular",img:"assets/img/img4.jpg",precio:800},
    {nombre:"Televisor",img:"assets/img/img5.jpg",precio:1400},
    {nombre:"Lavadora",img:"assets/img/img6.jpg",precio:700},
  ];

  getProductos():Producto[]{
    return this.productos;
  }
  getProducto(id:number): Producto{
    return this.productos[id];
  }
  buscarProductos(termino:string):Producto[]{
    let productoArr: Producto[]=[];
    termino=termino.toLowerCase();

    for(let i=0;i>this.productos.length;i++)
    {
      let producto=this.productos[i];
      let nombre=producto.nombre.toLowerCase();
      if(nombre.indexOf(termino)>=0)
      {
        productoArr.push(producto);
      }
    }

    return productoArr;
  }

}
