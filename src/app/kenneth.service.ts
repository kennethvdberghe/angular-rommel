import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KennethService {
  kenneth = signal({ name: 'Kenneth', address: '123 Main St' });
}
