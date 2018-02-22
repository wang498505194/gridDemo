import { Component } from '@angular/core';
import { Product } from '../../model';
import { sampleProducts } from '../../../assets/productsClass';

@Component({
  selector: 'app-built-in-edit',
  templateUrl: './built-in-edit.component.html',
  styleUrls: ['./built-in-edit.component.scss']
})
export class BuiltInEditComponent {
    public products: any[] = sampleProducts;

    createNewProduct(): Product {
        return new Product();
    }
}
