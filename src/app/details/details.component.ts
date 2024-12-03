import { Component, inject, signal, ViewChild } from '@angular/core';
import { WizardStore } from '../wizard.store';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [FormsModule, JsonPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  readonly store = inject(WizardStore);

  @ViewChild('helloForm') helloForm!: NgForm;
  companyDetails = { ...this.store.companyDetails() };

  ngAfterViewInit() {
    //set helloform submitted to true
    this.helloForm.form.markAllAsTouched();
  }

  saveAndContinue() {
    //save to ngrx signalstore
    console.log('helloForm new values', this.helloForm.value);
    console.log('helloForm valid', this.helloForm.valid);
    // this.store.saveCompanyDetails(this.companyDetails.values);
    // this.store.setActivePage('company-director');
  }

  ngOnDestroy() {
    console.log('DetailsComponent destroyed');
  }
}
