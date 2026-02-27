import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuStateService, MenuItem } from './menu-state.service';

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
        <input
          #cb
          type="checkbox"
          (change)="onToggle(item, cb.checked)"
        />
        <span class="label-text">{{ item.label }}</span>
      <span class="label-value">Значение: {{ item.value }}</span>
      </label>
    </li>
  </ul>
  `,
  styles: [`
    li {
      padding: 12px 14px;
      border-radius: 10px;
      transition: background 0.2s ease;
    }

    li:hover {
      background: #f1f5f9;
    }

    label {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      cursor: pointer;
      gap: 4px;
      position: relative;
    }
      .label-text {
      font-size: 15px;
      font-weight: 500;
      margin-left: 28px;
      line-height: 18px;
    }

    .label-value {
      font-size: 13px;
      color: #2563eb;
      margin-left: 28px;
      margin-top: 2px;
    }

    input[type="checkbox"] {
      width: 18px;
      height: 18px;
      cursor: pointer;
      accent-color: #2563eb;
      position: absolute;
      top: 0;
      left: 0;
    }
  `]
})
export class SecondPageComponent {
  constructor(private menuState: MenuStateService) {}

  menuItems: MenuItem[] = [
    { id: 1, label: 'Пункт 1', value: 30 },
    { id: 2, label: 'Пункт 2', value: 5 },
    { id: 3, label: 'Пункт 3', value: 10 },
    { id: 4, label: 'Пункт 4', value: 42 },
  ];

  onToggle(item: MenuItem, checked: boolean) {
    this.menuState.toggle(item, checked);
  }
}

