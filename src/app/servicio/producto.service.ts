import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  obtenerProductos() {
    return this.http.get('http://44.196.119.20:3000/api/productos')
  }

  obtenerProductoPorId(id: number) {
    return this.http.get('http://44.196.119.20:3000/api/productos/'+id.toString())
  }
  

}
