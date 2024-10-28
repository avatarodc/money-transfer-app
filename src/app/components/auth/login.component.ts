import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  // styleUrls: ['./login.component.css']
})
export class LoginComponent {
  phone: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(event: Event) {
    event.preventDefault();
    const credentials = {
      phone: this.phone,
      password: this.password
    };
    this.authService.login(credentials).subscribe({
      next: (response) => {
        console.log('Connexion réussie', response);
        // Sauvegarder le token avant la redirection
        if (response.data?.token) {
          localStorage.setItem('token', response.data.token);
          // Redirection après la sauvegarde du token
          this.router.navigate(['/dashboard']);
        } else {
          console.error('Token non reçu dans la réponse');
        }
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 0) {
          console.error('Erreur de connexion au serveur. Vérifiez que le serveur est en cours d\'exécution.');
        } else {
          console.error(`Erreur ${error.status}: ${error.error}`);
        }
        // Gérer l'erreur (afficher un message à l'utilisateur, etc.)
      }
    });
  }

  onRegister() {
    this.router.navigate(['/register']);
  }
}
