import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  private selectedText = new BehaviorSubject<string>('');
  currentSelectedText = this.selectedText.asObservable();

  constructor() { }

  updateSelectedText(value: string) {
    this.selectedText.next(value);
  }
}
