import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuStateService } from './menu-state.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header style="border-bottom:1px solid #ccc; margin-bottom:16px;">
      <div>Выбрано: {{ state.count() }}</div>
      <div>Сумма: {{ state.total() }}</div>

      <div *ngIf="state.items().length">
        <b>Пункты:</b>
        <span *ngFor="let item of state.items(); let last = last">
          {{ item.label }}<span *ngIf="!last">, </span>
        </span>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  constructor(public state: MenuStateService) {}
}