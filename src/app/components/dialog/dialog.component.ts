import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RickAndMortyService } from '../../services/personajes.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent implements OnInit {
  personaje: any;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private personajesService: RickAndMortyService 
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.personajesService.obtenerPersonajesPorId(this.data.id).subscribe({
      next: (respuesta: any) => {
        this.personaje = respuesta;
      },
      error: (error: any) => {
        console.error('Error al obtener el personaje:', error);
      }
    });
  }
}

