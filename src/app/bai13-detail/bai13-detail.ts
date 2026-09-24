import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product-service/product-service';


@Component({
  selector: 'app-bai13-detail',
  imports: [],
  templateUrl: './bai13-detail.html',
  styleUrl: './bai13-detail.css'
})
export class Bai13Detail {

  selectedProduct: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private pservice: ProductService,
    private router: Router
  ) {

    this.activateRoute.paramMap.subscribe(
      (param) => {

        let id = param.get('id');

        if (id != null) {
          this.selectedProduct =
            this.pservice.getProductDetail(id);
        }

      }
    );
  }

  goBack() {
    this.router.navigate(['bai13-component']);
  }
}