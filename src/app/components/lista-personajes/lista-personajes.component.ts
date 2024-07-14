import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/personajes.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { PageEvent } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.scss'],
  providers: [RickAndMortyService]
})

export class ListaPersonajesComponent implements OnInit {
  personajes: any[] = [];
  personajesPaginados: any[] = [];
  totalPersonajes: number = 0;
  paginaActual: number = 0;
  pageSize: number = 10;
  info: any = {};

  constructor(private personajesService: RickAndMortyService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.obtenerPersonajes();
  }

  obtenerPersonajes(): void {
    this.personajesService.obtenerPersonajes(this.paginaActual + 1).subscribe(data => {
      this.personajes = data.results;
      this.totalPersonajes = data.info.count;
      this.info = data.info;
      this.paginarPersonajes();
    });
  }

  paginarPersonajes(): void {
    const startIndex = this.paginaActual * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.personajesPaginados = this.personajes.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.paginaActual = event.pageIndex;
    this.obtenerPersonajes();
  }

  openDialog(personajeId: number): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { id: personajeId }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
