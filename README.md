# Angular first app 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

## Installation and use 
+ To install Angular globally ```npm install -g @angular/cli```
+ to start project from the template ```ng new <app name>```

### To run
+ ```ng serve``` OR ```ng serve --port <PORT>```


### Useful comands for development
+ To generate a component ```ng generate component <componentName>``` OR ```ng g c <componentName>```
+ to generate other elements `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help
### Important concepts: 
+ Property binding - variables 
+ Event binding
+ Two way binding - variable and event manipulation combined 
+ Directives - intructions for the DOM. E.g. For example it allow creation of new elements in DOM depending on the trigger. components are also directives
    + *ngIf - structural directive, they add and remove elements
    + Attribute directives don't add or remove elements, they only change the element they are placed on, such as: 
        + [ngStyle]="{ method or css expression}" 

[Angular CLI Overview and Command Reference](https://angular.io/cli) page.








