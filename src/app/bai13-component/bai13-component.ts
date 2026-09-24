import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product-service/product-service';


@Component({
  selector: 'app-bai13-component',
  imports: [CommonModule],
  templateUrl: './bai13-component.html',
  styleUrl: './bai13-component.css'
})
export class Bai13Component {

  public products: any;

  constructor(
    private pservice: ProductService,
    private router: Router
  ) {
    this.products = this.pservice.getProductsWithImages();
  }

  viewDetail(p: any) {
    this.router.navigate([
      'bai13-component',
      p.ProductId
    ]);
  }
}