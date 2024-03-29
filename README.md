# E-learning web resources management and administration system

Allows for uploading and managing e-learning resources. The project was built using MEAN-stack.

## Getting started

In order to run the project locally you can either download a copy to your local machine or clone the project repo. Afterwards you have to install the project dependencies with :

```
npm install
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. This is used primarily for testing the front-end behavior and in order to test the entire application you can use 'npm start'. This command will execute 'ng build' and node bin/www which will build the client application and run the express web server. Navigate to `http://localhost:3000/`. There's a test acount which can be used to log in the system. Keep in mind that account used to access the database has read only permissions, so you won't have permissions to do certain things in the system. That's for security reasons.

* test@abv.bg - Username
* test - Password

### Code scaffolding

Thanks to Angular-CLI you can quickly add aditional components by running `ng generate component component-name`. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Unit tests have not been created yet but they can be ran with `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

End-to-end tests have not been created yet but they can be ran with  `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Built With

These are the four main components of the project the rest can be found in the [package.json](package.json)

* [Angular](https://angular.io) - JavaScript front-end framework 
* [Express](https://expressjs.com) - Node.js web application framework
* [MongoDB](https://www.mongodb.com) - Document based NoSQL database
* [Node.js](https://nodejs.org/en/) - JavaScript runtime

## To-do:

* Implement tests using Karma and Protractor frameworks ( both e2e (end to end) and unit tests )
* Implement API authentication protection
* Implement additional error handling and error logging
* Implement user component ( CRUD and management functionality )
* Fix database connection settings ( Currently there are multiple connections and that's not optimal )
* ~~Implement data tables ( server-side filtering, sorting and pagination )~~
* Implement a scheduling functionality ( weekly schedule and course schedule )

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
