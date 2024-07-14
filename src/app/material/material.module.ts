import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { DialogComponent } from '../components/dialog/dialog.component';
import { ListaPersonajesComponent } from '../components/lista-personajes/lista-personajes.component';

@NgModule({
  declarations: [
    ListaPersonajesComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatPaginatorModule 
  ],
  exports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }


