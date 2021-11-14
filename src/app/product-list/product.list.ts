import { Component} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.list.html',
  styleUrls: ['./product.list.scss']
})
export class ProductComponent {
  //title = 'my-app';

  prodacts: any = [1,2,3,4]

}