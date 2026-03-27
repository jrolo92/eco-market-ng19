import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore : Firestore) { }

  // Agregar un nuevo elemento a la colección 'products'
  addProduct(product: any) {
    const productsCollection = collection(this.firestore, 'products');
    return addDoc(productsCollection, product);
  }

  // Método para obtener los productos en tiempo real de la colección 'products'
  getProducts(): Observable <any[]> {
    const productsCollection = collection(this.firestore, 'products');
    return collectionData(productsCollection, { idField: 'id' }) as Observable<any[]>;
  }
}
