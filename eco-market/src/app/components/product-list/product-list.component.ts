import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  titulo: string = "Nuestros Productos Ecológicos";
  productos: any[] = [];

  textoBusqueda: string = '';

  detalleDialog: boolean = false;
  productoSeleccionado: any = null;

  

  // Referencia al titulo del html por id
  @ViewChild(`miTitulo`) tituloElement!: ElementRef;

  // Creamos una instancia de renderer en el constructor de la clase
  constructor(
    private renderer: Renderer2,
    private productService : ProductService
  )
  {}

  ngOnInit(): void {
    // Nos suscribimos a los datos de Firebase
    this.productService.getProducts().subscribe(data => {
      this.productos = data;
      console.log('Productos recibidos de Firebase:', data);
    });
  }

  // Método para cambiar el color de un elemento (titulo)
  cambiarColor(){
    this.renderer.setStyle(this.tituloElement.nativeElement, 'color', 'orange');
  }

  // Método para usar el filtrado (búsqueda) usando un getter
  // Devuelve los nombres del array de productos en minúscula
  get productosFiltrados(){

    // Si no hay búsqueda, devolvemos todo el array
    if (!this.textoBusqueda) {
      return this.productos;
    }
    // Si hay búsqueda, filtramos
    return this.productos.filter(p => 
      p.name.toLowerCase().includes(this.textoBusqueda.toLowerCase())
    );
  }

  // Método para abrir el detalle
  verDetalle(producto: any) {
    this.productoSeleccionado = producto;
    this.detalleDialog = true;
    console.log('Abriendo:', this.productoSeleccionado.name);
  }
}
