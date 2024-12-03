//store for the wizard

import {
  getState,
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';

type ActivePage = 'company-details' | 'company-director';
type WizardState = {
  activePage: ActivePage;
  companyDetails: {
    isValid: boolean;
    values: { name: string; address: string };
  };
  companyDirector: {
    isValid: boolean;
    values: { firstName: string; lastName: string };
  };
};

const initialState: WizardState = {
  activePage: 'company-details',
  companyDetails: {
    isValid: false,
    values: { name: '', address: '' },
  },
  companyDirector: {
    isValid: false,
    values: { firstName: '', lastName: '' },
  },
};

export const WizardStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withDevtools('Wizard Store'),
  withComputed((store) => ({})),
  withMethods((store) => ({
    // saveCompanyDetails(companyDetails: { name: string; address: string }) {
    //   patchState(store, (state) => ({ ...state, companyDetails }));
    // },
    setActivePage(activePage: ActivePage) {
      patchState(store, (state) => ({ ...state, activePage }));
    },
  }))
);
