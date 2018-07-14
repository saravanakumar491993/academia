webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/MyOwnCustomMaterialModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOwnCustomMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MyOwnCustomMaterialModule = /** @class */ (function () {
    function MyOwnCustomMaterialModule() {
    }
    MyOwnCustomMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["l" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["m" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["e" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["n" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["g" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_material__["k" /* MatNativeDateModule */]
            ],
        })
    ], MyOwnCustomMaterialModule);
    return MyOwnCustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  \r\n  body, html{\r\n    margin: 0px;\r\n    padding: 0px;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h3>Basic Buttons</h3>\n<div class=\"button-row\">\n  <button mat-button>Basic</button>\n  <button mat-button color=\"primary\">Primary</button>\n  <button mat-button color=\"accent\">Accent</button>\n  <button mat-button color=\"warn\">Warn</button>\n  <button mat-button disabled>Disabled</button>\n  <a mat-button routerLink=\".\">Link</a>\n</div>\n<br>\n\n\n<button mat-icon-button color=\"primary\">\n  <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n</button>\n\n\n<mat-spinner></mat-spinner>\n\n<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{ option }}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Favorite food\">\n      <mat-option *ngFor=\"let food of options\" [value]=\"food\">\n        {{ food }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n \n</form>\n\n\n<ol>\n  <li>\n    <mat-form-field>\n      <input matInput [(ngModel)]=\"name\" placeholder=\"What's your name?\">\n    </mat-form-field>\n  </li>\n  <li>\n    <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  <li *ngIf=\"animal\">\n    You chose: <i>{{animal}}</i>\n  </li>\n</ol>\n\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"  (dateChange)=\"dateChoosen('change', $event)\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n\n\n<div>\n  <button mat-fab style=\"background-color: blue;color:white\" (click)=\"setTheme('blue')\">blue</button>\n  <button mat-fab style=\"background-color: green;color:white\" (click)=\"setTheme('green')\">green</button>\n  <button mat-fab style=\"background-color: indigo;color:white\" (click)=\"setTheme('indigo')\">indigo</button>\n  <button mat-fab style=\"background-color: pink;color:black\" (click)=\"setTheme('pink')\">pink</button>\n  <button mat-fab style=\"background-color: red;color:white\" (click)=\"setTheme('red')\">red</button>\n  <button mat-fab style=\"background-color: yellow;color:black\" (click)=\"setTheme('yellow')\">yellow</button>\n</div> -->\n\n<app-student-form></app-student-form>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__example_dialog_example_dialog_component__ = __webpack_require__("./src/app/example-dialog/example-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(dialog) {
        var _this = this;
        this.dialog = dialog;
        this.currentTheme = "indigo";
        this.title = 'app';
        this.myControl = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */]();
        this.options = [
            "saran",
            "lara",
            "sachin"
        ];
        document.body.classList.add(this.currentTheme + "-theme");
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filter(val); }));
    }
    AppComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__example_dialog_example_dialog_component__["a" /* ExampleDialogComponent */], {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    AppComponent.prototype.filter = function (val) {
        return this.options.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    AppComponent.prototype.setTheme = function (color) {
        document.body.classList.remove(this.currentTheme + "-theme");
        this.currentTheme = color;
        document.body.classList.add(this.currentTheme + "-theme");
    };
    AppComponent.prototype.dateChoosen = function (type, event) {
        alert(event.value.getTimezoneOffset());
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDialog */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MyOwnCustomMaterialModule__ = __webpack_require__("./src/app/MyOwnCustomMaterialModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__example_dialog_example_dialog_component__ = __webpack_require__("./src/app/example-dialog/example-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__form_test_form_test_component__ = __webpack_require__("./src/app/form-test/form-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__form_test_forbidden_name_directive__ = __webpack_require__("./src/app/form-test/forbidden-name.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layout_test_layout_test_component__ = __webpack_require__("./src/app/layout-test/layout-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__student_form_student_form_component__ = __webpack_require__("./src/app/student-form/student-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__person_service__ = __webpack_require__("./src/app/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__example_dialog_example_dialog_component__["a" /* ExampleDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_7__form_test_form_test_component__["a" /* FormTestComponent */],
                __WEBPACK_IMPORTED_MODULE_8__form_test_forbidden_name_directive__["a" /* ForbiddenValidatorDirective */],
                __WEBPACK_IMPORTED_MODULE_9__layout_test_layout_test_component__["a" /* LayoutTestComponent */],
                __WEBPACK_IMPORTED_MODULE_10__student_form_student_form_component__["a" /* StudentFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__MyOwnCustomMaterialModule__["a" /* MyOwnCustomMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__form_test_forbidden_name_directive__["a" /* ForbiddenValidatorDirective */], __WEBPACK_IMPORTED_MODULE_11__person_service__["a" /* PersonService */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__example_dialog_example_dialog_component__["a" /* ExampleDialogComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/example-dialog/example-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Hi {{data.name}}</h1>\n<div mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"data.animal\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n</div>\n"

/***/ }),

/***/ "./src/app/example-dialog/example-dialog.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/example-dialog/example-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ExampleDialogComponent = /** @class */ (function () {
    function ExampleDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ExampleDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ExampleDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-example-dialog',
            template: __webpack_require__("./src/app/example-dialog/example-dialog.component.html"),
            styles: [__webpack_require__("./src/app/example-dialog/example-dialog.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], Object])
    ], ExampleDialogComponent);
    return ExampleDialogComponent;
}());



/***/ }),

/***/ "./src/app/form-test/forbidden-name.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = forbiddenNameValidator;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForbiddenValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function forbiddenNameValidator(nameRe) {
    return function (control) {
        var forbidden = nameRe.test(control.value);
        return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
}
var ForbiddenValidatorDirective = /** @class */ (function () {
    function ForbiddenValidatorDirective() {
    }
    ForbiddenValidatorDirective_1 = ForbiddenValidatorDirective;
    ForbiddenValidatorDirective.prototype.validate = function (control) {
        return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
            : null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Input */])('appForbiddenName'),
        __metadata("design:type", String)
    ], ForbiddenValidatorDirective.prototype, "forbiddenName", void 0);
    ForbiddenValidatorDirective = ForbiddenValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* Directive */])({
            selector: '[appForbiddenName]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* NG_VALIDATORS */], useExisting: ForbiddenValidatorDirective_1, multi: true }]
        })
    ], ForbiddenValidatorDirective);
    return ForbiddenValidatorDirective;
    var ForbiddenValidatorDirective_1;
}());



/***/ }),

/***/ "./src/app/form-test/form-test.component.html":
/***/ (function(module, exports) {

module.exports = "<form #testForm=\"ngForm\">\n  <mat-form-field>\n    <input [formControl]=\"email\" matInput placeholder=\"Input\">\n    <mat-error *ngIf=\"email.invalid\">Error</mat-error> \n  </mat-form-field>\n\n  <mat-form-field>\n    <input [(ngModel)]=\"student\" #student_name=\"ngModel\" name=\"student_name\"  matInput placeholder=\"Input\" required minlength=\"3\"  appForbiddenName=\"bob1\">\n    <mat-error *ngIf=\"student_name.invalid\">Error</mat-error> \n  </mat-form-field>\n\n  <div *ngIf=\"testForm.valid\">\n    Valid form\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/form-test/form-test.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form-test/form-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forbidden_name_directive__ = __webpack_require__("./src/app/form-test/forbidden-name.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormTestComponent = /** @class */ (function () {
    function FormTestComponent() {
        this.email = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["j" /* Validators */].required, Object(__WEBPACK_IMPORTED_MODULE_2__forbidden_name_directive__["b" /* forbiddenNameValidator */])(/bob/i)]);
    }
    FormTestComponent.prototype.ngOnInit = function () {
    };
    FormTestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-form-test',
            template: __webpack_require__("./src/app/form-test/form-test.component.html"),
            styles: [__webpack_require__("./src/app/form-test/form-test.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FormTestComponent);
    return FormTestComponent;
}());



/***/ }),

/***/ "./src/app/layout-test/layout-test.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"child\" style=\"flex:50%\">1</div>\n  <div class=\"child\" style=\"flex:50%\">2</div>\n  <div class=\"child\"  style=\"flex:35%\">3</div>\n  <div class=\"child\" style=\"flex:35%\">4</div>\n  <div class=\"child\"  style=\"flex:30%\">5</div>\n</div>"

/***/ }),

/***/ "./src/app/layout-test/layout-test.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  background-color: red;\n  height: 500px;\n  padding: 10px; }\n\n.child {\n  -ms-flex-preferred-size: 35%;\n      flex-basis: 35%;\n  background-color: yellow; }\n"

/***/ }),

/***/ "./src/app/layout-test/layout-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_student__ = __webpack_require__("./src/app/model/student.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutTestComponent = /** @class */ (function () {
    function LayoutTestComponent() {
        this.student = new __WEBPACK_IMPORTED_MODULE_1__model_student__["a" /* Person */]();
    }
    LayoutTestComponent.prototype.ngOnInit = function () {
        this.today = new Date().toISOString().split('T')[0];
    };
    LayoutTestComponent.prototype.showStudent = function () {
    };
    LayoutTestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-layout-test',
            template: __webpack_require__("./src/app/layout-test/layout-test.component.html"),
            styles: [__webpack_require__("./src/app/layout-test/layout-test.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutTestComponent);
    return LayoutTestComponent;
}());



/***/ }),

/***/ "./src/app/model/student.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Person; });
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());



/***/ }),

/***/ "./src/app/person.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonService; });
/* unused harmony export PersonBObj */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonService = /** @class */ (function () {
    function PersonService(http) {
        this.http = http;
    }
    PersonService.prototype.addStudent = function (student) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
        };
        return this.http.post("/api/people/", student, httpOptions);
    };
    PersonService.prototype.getStudents = function () {
        return this.http.get("/api/people");
    };
    PersonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PersonService);
    return PersonService;
}());

var PersonBObj = /** @class */ (function () {
    function PersonBObj() {
    }
    return PersonBObj;
}());



/***/ }),

/***/ "./src/app/student-form/student-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"container\">\n\n  <div id=\"header\">\n    <div class=\"img\"></div>\n    <div>\n      <mat-form-field class=\"name-extn\"  >\n        <mat-select #prefix placeholder=\"Prefix\" [(ngModel)]=\"student.Prefix\" name=\"Prefix\" (change)=\"student.Prefix=prefix.value\">\n          <mat-option value=\"0\">Mr</mat-option>\n          <mat-option value=\"1\">Mrs</mat-option>\n        </mat-select>\n      </mat-form-field>\n      \n      <mat-form-field class=\"name-extn\" >\n        <mat-select #suffix placeholder=\"Suffix\" [(ngModel)]=\"student.Suffix\" name=\"Suffix\" (change)=\"student.Suffix=suffix.value\">\n          <mat-option value=\"0\">Junior</mat-option>\n          <mat-option value=\"1\">Senior</mat-option>\n        </mat-select>\n      </mat-form-field>\n    \n      <mat-form-field>\n        <input matInput placeholder=\"Initial\" [(ngModel)]=\"student.Initial\" name=\"Initial\">\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"First Name\" [(ngModel)]=\"student.FirstName\" name=\"FirstName\">\n      </mat-form-field>\n    \n      <mat-form-field>\n        <input matInput placeholder=\"Middle Name\" [(ngModel)]=\"student.MiddleName\" name=\"MiddleName\">\n      </mat-form-field>\n \n      <mat-form-field>\n        <input matInput placeholder=\"Last Name\" [(ngModel)]=\"student.LastName\" name=\"LastName\">\n      </mat-form-field>\n      \n      <mat-form-field>\n        <input matInput placeholder=\"Nick Name\" [(ngModel)]=\"student.NickName\" name=\"NickName\">\n      </mat-form-field>\n    </div>\n  </div>\n\n\n  <mat-form-field class=\"child\">\n    <mat-select #gender placeholder=\"Gender\" [(ngModel)]=\"student.Gender\" name=\"Gender\" (change)=\"student.Gender=gender.value\">\n      <mat-option value=\"0\">M</mat-option>\n      <mat-option value=\"1\">F</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"child\">\n    <input matInput placeholder=\"DOB\" type=\"date\">\n  </mat-form-field>\n\n\n  <mat-form-field class=\"child\">\n    <mat-select #bloodGroup placeholder=\"Blood group\" [(ngModel)]=\"student.BloodType\" name=\"BloodGroup\" (change)=\"student.BloodType=bloodGroup.value\">\n      <mat-option value=\"0\">O+ve</mat-option>\n      <mat-option value=\"1\">A+ve</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"child\">\n    <mat-select #nationality placeholder=\"Nationality\" [(ngModel)]=\"student.Nationality\" name=\"Nationality\" (change)=\"student.Nationality=nationality.value\">\n      <mat-option value=\"0\">IND</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"child\">\n    <mat-select #maritalStatus placeholder=\"Marital Status\" [(ngModel)]=\"student.MaritalStatus\" name=\"MaritalStatus\" (change)=\"student.MaritalStatus=maritalStatus.value\">\n      <mat-option value=\"0\">Married</mat-option>\n      <mat-option value=\"1\">Single</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <button mat-raised-button style=\"margin-top: 100px\" (click)=\"addPerson()\">Add Person</button>\n</form> "

/***/ }),

/***/ "./src/app/student-form/student-form.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 100px; }\n\n#header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  /*right side grid*/ }\n\n#header div:nth-child(2) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-line-pack: center;\n        align-content: center; }\n\n#header div:nth-child(2) mat-form-field {\n      margin-left: 15px; }\n\n#header div:nth-child(2) mat-form-field:nth-child(1), #header div:nth-child(2) mat-form-field:nth-child(2) {\n      width: 100px; }\n\n#header div:nth-child(2) mat-form-field:nth-child(3) {\n      width: 50px; }\n\n#header div:nth-child(2) mat-form-field:nth-child(4) {\n      -webkit-box-flex: calc(100% - 350px);\n          -ms-flex: calc(100% - 350px);\n              flex: calc(100% - 350px); }\n\n#header div:nth-child(2) mat-form-field:nth-child(5), #header div:nth-child(2) mat-form-field:nth-child(6), #header div:nth-child(2) mat-form-field:nth-child(7) {\n      -webkit-box-flex: 30%;\n          -ms-flex: 30%;\n              flex: 30%; }\n\n.img {\n  width: 150px;\n  height: 150px;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  border: 1px solid lightgray;\n  border-radius: 75px;\n  margin: 0px 10px 0px 0px; }\n\n.child {\n  margin: 0px 10px;\n  -webkit-box-flex: 30%;\n      -ms-flex: 30%;\n          flex: 30%; }\n\nbutton {\n  -webkit-box-flex: 100%;\n      -ms-flex: 100%;\n          flex: 100%; }\n\n@media only screen and (max-width: 600px) {\n  .child {\n    -ms-flex-preferred-size: 100%;\n        flex-basis: 100%;\n    padding: 0px 10px; } }\n"

/***/ }),

/***/ "./src/app/student-form/student-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_student__ = __webpack_require__("./src/app/model/student.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_service__ = __webpack_require__("./src/app/person.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentFormComponent = /** @class */ (function () {
    function StudentFormComponent(personService) {
        this.personService = personService;
        this.student = new __WEBPACK_IMPORTED_MODULE_1__model_student__["a" /* Person */]();
    }
    StudentFormComponent.prototype.ngOnInit = function () {
    };
    StudentFormComponent.prototype.addPerson = function () {
        alert(JSON.stringify(this.student));
        this.personService.addStudent(this.student).subscribe(function (t) { return alert(t); });
        ;
        this.personService.getStudents().subscribe(function (t) {
            alert(t);
        });
    };
    StudentFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-student-form',
            template: __webpack_require__("./src/app/student-form/student-form.component.html"),
            styles: [__webpack_require__("./src/app/student-form/student-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__person_service__["a" /* PersonService */]])
    ], StudentFormComponent);
    return StudentFormComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map