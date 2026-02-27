import { Injectable, computed, signal } from '@angular/core';

export interface MenuItem {
  id: number;
  label: string;
  value: string | number;
}

@Injectable({ providedIn: 'root' })
export class MenuStateService {
  private selectedItems = signal<MenuItem[]>([]);

  count = computed(() => this.selectedItems().length);

  total = computed(() =>
    this.selectedItems()
      .map(i => typeof i.value === 'number' ? i.value : 0)
      .reduce((a, b) => a + b, 0)
  );

  items = this.selectedItems.asReadonly();

  toggle(item: MenuItem, checked: boolean) {
    if (checked) {
      this.selectedItems.update(list => [...list, item]);
    } else {
      this.selectedItems.update(list => list.filter(i => i.id !== item.id));
    }
  }
}