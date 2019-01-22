
# ShippingLabelMarker

[![Greenkeeper badge](https://badges.greenkeeper.io/byNikx/shipping-label-marker.svg)](https://greenkeeper.io/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Application Description

Please not the following points while evaluating the application:

- Angular Material version 7.1.1 has been used for the UI components.
- `AppComponent` is acting as the root component here, which houses the `WizardComponent` and configures the steps using `WizardStepComponent` on which WizardComponent loops through and prepares the `shippingInfo` Object. 
- Application is not leveraging the `RouterModule` capabilities for state management, although application is managing the local UI state.
- `APP_INITIALIZER` has been used to prefetch the list of states which is used to populate the state dropdown later on. 
  City and zipcode lists can also be prefetched using the same approach but i have hard-coded them for now with 2 values for each dropdown.
- `shippingCost` property has been added to `shippingInfo` object so that it can be printed on the `ShippingLabelComponent` 
- For `WizardAction` i've used declarative approach (encouraged by angular framework) by creating `WizardNextStepDirective`, `WizardPrevStepDirective` and `WizardEndDirective` instead of passing the actions into the `wizardContext`
- Basic form validations are implemented using `ReactiveFormsModule`.
- Login and authentication can be implemented using angular `RouterModule` and angular guards, but i decided to skip that.
 

Note: There could be some hard-coded stuff in the application, i've used the simplest way to implement the solution for now, although we can optimize it by loading the components dynamically using `ComponentFactoryResolver
`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


