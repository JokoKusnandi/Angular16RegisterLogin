---------------------------------------------------------
open terminal and create project script below in terminal 
ng new Angular12JwtAuth
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? CSS
--------------------------------------------------------
Components and Services:
--------------------------------------------------------
ng g s _services/auth
ng g s _services/token-storage
ng g s _services/user

ng g c login
ng g c register
ng g c home
ng g c profile
ng g c board-admin
ng g c board-moderator
ng g c board-user
--------------------------------------------------------


# AngularJwtAuth

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
