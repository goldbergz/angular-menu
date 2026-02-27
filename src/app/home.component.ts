import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Добро пожаловать!</h1>
    <p>Это первая страница мини-приложения.</p>
    <a [routerLink]="['/second']">Перейти на вторую страницу</a>
  `,
})
export class HomeComponent {}

