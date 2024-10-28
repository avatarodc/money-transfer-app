import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; // Importez les routes
import { FormsModule } from '@angular/forms'; // Importez FormsModule

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule // Ajoutez FormsModule ici
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
