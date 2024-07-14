import { Routes } from '@angular/router';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { DialogComponent } from './components/dialog/dialog.component';

export const routes: Routes = [
    {
        path: '',
        component: ListaPersonajesComponent
    },
    {
        path: 'dialog',
        component: DialogComponent
    }
];
