import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { DirectorComponent } from './director/director.component';
import { WizardStore } from './wizard.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [DetailsComponent, DirectorComponent, JsonPipe],
})
export class AppComponent {
  readonly store = inject(WizardStore);
  readonly activePage = this.store.activePage;
}
