import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface MenuItem {
  id: number;
  label: string;
  value: string | number;
}

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Меню</h1>
    <p>Выберите нужные пункты меню:</p>

    <ul>
      <li *ngFor="let item of menuItems">
        <label>
          <input type="checkbox" />
          {{ item.label }} — {{ item.value }}
        </label>
      </li>
    </ul>
  `,
})
export class SecondPageComponent {
  menuItems: MenuItem[] = [
    { id: 1, label: 'Пункт 1', value: 30 },
    { id: 2, label: 'Пункт 2', value: 5 },
    { id: 3, label: 'Пункт 3', value: 10 },
    { id: 4, label: 'Пункт 4', value: 42 },
  ];
}

