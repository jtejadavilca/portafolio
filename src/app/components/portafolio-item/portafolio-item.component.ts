import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html'
})
export class PortafolioItemComponent {

  item:any = undefined;

  constructor(private route: ActivatedRoute,
    private _productosService:ProductosService){

    route.params.subscribe(parametros => {
      console.log(parametros.id);
      _productosService.cargarItem(parametros['id']).subscribe(res => {
          this.item = res.json();
          this.item['cod'] = parametros['id'];
          console.log(this.item);
        });
    });

  }
}
