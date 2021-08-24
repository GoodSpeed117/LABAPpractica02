import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService } from './clientes.service';
import { FormsModule } from '@angular/forms';
import { AltaClientesComponent } from './alta-clientes/alta-clientes.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';


@NgModule({
  declarations: [AltaClientesComponent, ListadoClientesComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ClientesService],
  exports:[AltaClientesComponent, ListadoClientesComponent]
})
export class ClientesModule { }
