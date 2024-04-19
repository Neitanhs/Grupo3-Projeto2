// login.component.ts
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [HttpClient],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  login() {
    //Adiciona a lógica do Login aqui ó
    this.router.navigate(['/viacep']);
  }
}
