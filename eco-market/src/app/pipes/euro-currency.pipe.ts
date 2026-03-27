import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euroCurrency',
  standalone: false
})
export class EuroCurrencyPipe implements PipeTransform {
  // transforma un número a un string
  transform(value: number | string): string {
    // Nos aseguramos de que sea un número
    const amount = typeof value === 'string' ? parseFloat(value) : value;
    // si no es valido el número devuelve -
    if (isNaN(amount)) return '-';
    // devuelve el numero con el formato: coma para decimales, dos decimales y el simbolo €
    return amount.toLocaleString('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2
    });
  }

}
