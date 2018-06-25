(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animation.ts":
/*!******************************!*\
  !*** ./src/app/animation.ts ***!
  \******************************/
/*! exports provided: slideInDownAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInDownAnimation", function() { return slideInDownAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

// Component transition animations
var slideInDownAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'translateX(-100%)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-in')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'translateY(100%)'
        }))
    ])
]);


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header-page></header-page>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router/app-routing/app-routing.module */ "./src/app/router/app-routing/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _components_header_page_header_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/header-page/header-page.component */ "./src/app/components/header-page/header-page.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_employees_employees_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/employees/employees.component */ "./src/app/components/employees/employees.component.ts");
/* harmony import */ var _components_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/start-page/start-page.component */ "./src/app/components/start-page/start-page.component.ts");
/* harmony import */ var _services_employee_service_employee_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/employee-service/employee.service */ "./src/app/services/employee-service/employee.service.ts");
/* harmony import */ var _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/clients/clients.component */ "./src/app/components/clients/clients.component.ts");
/* harmony import */ var _services_client_service_client_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/client-service/client.service */ "./src/app/services/client-service/client.service.ts");
/* harmony import */ var _components_clients_client_add_form_client_add_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/clients/client-add-form/client-add-form.component */ "./src/app/components/clients/client-add-form/client-add-form.component.ts");
/* harmony import */ var _components_clients_client_edit_form_client_edit_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/clients/client-edit-form/client-edit-form.component */ "./src/app/components/clients/client-edit-form/client-edit-form.component.ts");
/* harmony import */ var _components_employees_employee_add_form_employee_add_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/employees/employee-add-form/employee-add-form.component */ "./src/app/components/employees/employee-add-form/employee-add-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                _components_error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"],
                _components_header_page_header_page_component__WEBPACK_IMPORTED_MODULE_12__["HeaderPageComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _components_employees_employees_component__WEBPACK_IMPORTED_MODULE_14__["EmployeesComponent"],
                _components_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_15__["StartPageComponent"],
                _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_17__["ClientsComponent"],
                _components_clients_client_add_form_client_add_form_component__WEBPACK_IMPORTED_MODULE_19__["ClientAddFormComponent"],
                _components_clients_client_edit_form_client_edit_form_component__WEBPACK_IMPORTED_MODULE_20__["ClientEditFormComponent"],
                _components_employees_employee_add_form_employee_add_form_component__WEBPACK_IMPORTED_MODULE_21__["EmployeeAddFormComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _router_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_5__["NgxMaskModule"].forRoot()
            ],
            providers: [
                _services_employee_service_employee_service__WEBPACK_IMPORTED_MODULE_16__["EmployeeService"],
                _services_client_service_client_service__WEBPACK_IMPORTED_MODULE_18__["ClientService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/clients/client-add-form/client-add-form.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/clients/client-add-form/client-add-form.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12 col-md-6 col-lg-6 form-area\">\n  <form #clientForm=\"ngForm\" (ngSubmit)=\"addClient(clientForm)\">\n    <div class=\"form-group\">\n      <label class=\"col-4\" for=\"lastname\">Фамилия:</label>\n      <input type=\"text\" class=\"form-control col-7\" id=\"lastname\"\n             required\n             [(ngModel)]=\"client.lastname\" name=\"lastname\" #lastname=\"ngModel\">\n\n      <div *ngIf=\"lastname.invalid && (lastname.dirty || lastname.touched)\" class=\"error-message\">\n        <div *ngIf=\"lastname.errors.required\">Заполните это поле</div>\n      </div>\n      <div class=\"hidden\" [class.error-message]=\"errorMessage\" *ngIf=\"!lastname.dirty\">\n        <div>Заполните это поле</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"col-4\" for=\"name\">Имя:</label>\n      <input type=\"text\" class=\"form-control col-7\" id=\"name\"\n             required\n             [(ngModel)]=\"client.name\" name=\"name\" #name=\"ngModel\">\n      <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"error-message\">\n      <div *ngIf=\"name.errors.required\">Заполните это поле</div>\n    </div>\n      <div class=\"hidden\" [class.error-message]=\"errorMessage\" *ngIf=\"!name.dirty\">\n        <div>Заполните это поле</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"col-4\" for=\"patronymic\">Отчество:</label>\n      <input type=\"text\" class=\"form-control col-7\" id=\"patronymic\"\n             required\n             [(ngModel)]=\"client.patronymic\" name=\"patronymic\" #patronymic=\"ngModel\">\n      <div *ngIf=\"patronymic.invalid && (patronymic.dirty || patronymic.touched)\" class=\"error-message\">\n        <div *ngIf=\"patronymic.errors.required\">Заполните это поле</div>\n      </div>\n      <div class=\"hidden\" [class.error-message]=\"errorMessage\" *ngIf=\"!patronymic.dirty\">\n        <div>Заполните это поле</div>\n      </div>\n    </div>\n\n    <div class=\"form-group phone\">\n      <label class=\"col-4\" for=\"phone\">Телефон:</label>\n      <input type=\"text\" class=\"form-control col-7\" id=\"phone\"\n             required minlength=\"9\" maxlength=\"9\"\n             [(ngModel)]=\"client.phone\" name=\"phone\" #phone=\"ngModel\">\n      <div *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\" class=\"error-message\">\n        <div *ngIf=\"phone.errors.required\">Заполните это поле</div>\n\n        <div *ngIf=\"phone.errors.minlength\">Телефон должен состоять из 9 знаков</div>\n      </div>\n      <div class=\"hidden\" [class.error-message]=\"errorMessage\" *ngIf=\"!phone.dirty\">\n        <div>Заполните это поле</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"col-4\" for=\"doctor\">Лечащий врач:</label>\n      <select class=\"form-control col-7\" id=\"doctor\" [(ngModel)]=\"client.doctor\" name=\"doctor\">\n        <option *ngFor=\"let employee of employees\" [value]=\"employee.lastname\">\n          {{employee.lastname}}\n        </option>\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"col-4\" for=\"discount\">Дисконт:</label>\n      <input type=\"text\" class=\"form-control col-7\" id=\"discount\"\n             [(ngModel)]=\"client.discount\" name=\"discount\">\n    </div>\n\n    <div class=\"form-group textarea\">\n      <label class=\"col-4\" for=\"comment\">Комментарий:</label>\n      <textarea rows=\"6\" type=\"text\" class=\"form-control col-7\" id=\"comment\"\n                [(ngModel)]=\"client.comment\" name=\"comment\"></textarea>\n    </div>\n\n    <div class=\"button-area\">\n      <button type=\"submit\" class=\"btn btn-success green\">Ок</button>\n      <button type=\"button\" class=\"btn btn-primary blue\" (click)=\"changeBoolean(); clientForm.reset();\">Назад</button>\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/clients/client-add-form/client-add-form.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/clients/client-add-form/client-add-form.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-area {\n  margin-top: 20px;\n  margin-right: 10%;\n  display: flex;\n  justify-content: flex-end; }\n  .button-area .green {\n    margin-right: 10px; }\n  .form-area {\n  margin: 30px auto; }\n  .form-area .form-group:not(.textarea) {\n    height: 38px; }\n  .form-area .form-group {\n    display: flex;\n    position: relative; }\n  .form-area .form-group .ng-valid[required], .form-area .form-group .ng-valid.required {\n      border-right: 5px solid #61C180; }\n  .form-area .form-group .ng-invalid:not(form) {\n      border-right: 5px solid cornflowerblue; }\n  .form-area .form-group .hidden {\n      display: none; }\n  .form-area .form-group .error-message {\n      position: absolute;\n      left: 35%;\n      top: 100%;\n      display: block; }\n  .form-area .form-group .error-message div {\n        color: darkred;\n        font-size: 10px; }\n  .form-area .form-group label {\n      margin-top: 10px; }\n  .form-area .form-group input {\n      height: 100%; }\n  .form-area .form-group textarea {\n      font-size: 0.8em;\n      resize: none; }\n  .form-area .form-group input,\n    .form-area .form-group textarea {\n      border-radius: 5px;\n      border: 1px solid #eee;\n      outline: none;\n      box-shadow: none; }\n  .form-area .form-group input::-webkit-input-placeholder,\n      .form-area .form-group textarea::-webkit-input-placeholder {\n        color: #c4d9ff;\n        font-size: 14px;\n        font-style: italic;\n        opacity: 1;\n        transition: opacity 200ms; }\n  .form-area .form-group input:-moz-placeholder,\n      .form-area .form-group textarea:-moz-placeholder {\n        color: #c4d9ff;\n        font-size: 14px;\n        font-style: italic;\n        opacity: 1;\n        transition: opacity 200ms; }\n  .form-area .form-group input::-moz-placeholder,\n      .form-area .form-group textarea::-moz-placeholder {\n        color: #c4d9ff;\n        font-size: 14px;\n        font-style: italic;\n        opacity: 1;\n        transition: opacity 200ms; }\n  .form-area .form-group input:-ms-input-placeholder,\n      .form-area .form-group textarea:-ms-input-placeholder {\n        color: #c4d9ff;\n        font-size: 14px;\n        font-style: italic;\n        opacity: 1;\n        transition: opacity 200ms; }\n  .form-area .form-group input:focus,\n      .form-area .form-group textarea:focus {\n        box-shadow: 0 0 5px cornflowerblue; }\n  .form-area .form-group input:focus::-webkit-input-placeholder,\n        .form-area .form-group textarea:focus::-webkit-input-placeholder {\n          opacity: 0; }\n  .form-area .form-group input:focus:-moz-placeholder,\n        .form-area .form-group textarea:focus:-moz-placeholder {\n          opacity: 0; }\n  .form-area .form-group input:focus::-moz-placeholder,\n        .form-area .form-group textarea:focus::-moz-placeholder {\n          opacity: 0; }\n  .form-area .form-group input:focus:-ms-input-placeholder,\n        .form-area .form-group textarea:focus:-ms-input-placeholder {\n          opacity: 0; }\n  .form-area .form-group select {\n      background-color: white;\n      width: 100%;\n      line-height: 38px;\n      padding: 6px 20px 6px 15px;\n      border: 1px solid #eee; }\n  .form-area .form-group select:focus {\n        outline: none;\n        box-shadow: 0px 0px 5px cornflowerblue; }\n  .form-area .form-group select option {\n        padding-left: 30px; }\n  .form-area div.phone {\n    position: relative; }\n  .form-area div.phone input {\n      padding-left: 52px; }\n  .form-area div.phone::after {\n      content: '+380';\n      color: black;\n      position: absolute;\n      width: 20px;\n      height: 15px;\n      top: 20%;\n      left: 35%; }\n"

/***/ }),

/***/ "./src/app/components/clients/client-add-form/client-add-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/clients/client-add-form/client-add-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ClientAddFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientAddFormComponent", function() { return ClientAddFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/client */ "./src/app/models/client.ts");
/* harmony import */ var _services_client_service_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/client-service/client.service */ "./src/app/services/client-service/client.service.ts");
/* harmony import */ var _services_employee_service_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/employee-service/employee.service */ "./src/app/services/employee-service/employee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientAddFormComponent = /** @class */ (function () {
    function ClientAddFormComponent(router, clientService, employeeService) {
        this.router = router;
        this.clientService = clientService;
        this.employeeService = employeeService;
        this.listState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ClientAddFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.client = new _models_client__WEBPACK_IMPORTED_MODULE_2__["Client"];
        this.employeeService.getEmployees()
            .subscribe(function (res) { return _this.employees = res; }, function (error) { return _this.router.navigate(['/error']); });
    };
    ClientAddFormComponent.prototype.changeBoolean = function () {
        this.listState.emit(true);
    };
    ClientAddFormComponent.prototype.addClient = function (form) {
        var _this = this;
        if (form.invalid) {
            this.errorMessage = true;
            return;
        }
        var value = form.value;
        var newClient = new _models_client__WEBPACK_IMPORTED_MODULE_2__["Client"];
        newClient.lastname = value.lastname;
        newClient.name = value.name;
        newClient.patronymic = value.patronymic;
        newClient.phone = value.phone;
        /* newClient.comment = value.comment;
         newClient.discount = value.discount;
         newClient.doctor = value.doctor;*/
        // this.changeBoolean(); // TODO: remove after DB connecting
        this.clientService.addClient(newClient)
            .subscribe(function (res) {
            _this.changeBoolean();
        }, 
        // (error) => this.router.navigate(['/error'])
        function (error) { return console.log(error); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ClientAddFormComponent.prototype, "listState", void 0);
    ClientAddFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-add-form',
            template: __webpack_require__(/*! ./client-add-form.component.html */ "./src/app/components/clients/client-add-form/client-add-form.component.html"),
            styles: [__webpack_require__(/*! ./client-add-form.component.scss */ "./src/app/components/clients/client-add-form/client-add-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_client_service_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"], _services_employee_service_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]])
    ], ClientAddFormComponent);
    return ClientAddFormComponent;
}());



/***/ }),

/***/ "./src/app/components/clients/client-edit-form/client-edit-form.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/clients/client-edit-form/client-edit-form.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12 col-md-6 col-lg-6 form-area\">\n  <form #clientForm=\"ngForm\" (ngSubmit)=\"editClient(clientForm)\">\n    <div class=\"form-group\">\n      <label class=\"col-4\" for=\"lastname\">Фамилия:</label>\n      <input type=\"text\" class=\"form-control col-7\" id=\"lastname\"\n             required\n             [(ngModel)]=\"client.lastname\" name=\"lastname\" #lastname=\"ngModel\">\n      <div *ngIf=\"lastname.invalid && (lastname.dirty || lastname.touched)\"\n           class=\"error-message\">\n\n        <div *ngIf=\"lastname.errors.required\">\n          Заполните это поле\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"col-4\" for=\"name\">Имя:</label>\n      <input type=\"text\" class=\"form-control col-7\" id=\"name\"\n             required minlength=\"4\"\n             [(ngModel)]=\"client.name\" name=\"name\" #name=\"ngModel\">\n      <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n           class=\"error-message\">\n\n        <div *ngIf=\"name.errors.required\">\n          Заполните это поле\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"col-4\" for=\"patronymic\">Отчество:</label>\n      <input type=\"text\" class=\"form-control col-7\" id=\"patronymic\"\n             required\n             [(ngModel)]=\"client.patronymic\" name=\"patronymic\" #patronymic=\"ngModel\">\n      <div *ngIf=\"patronymic.invalid && (patronymic.dirty || patronymic.touched)\"\n           class=\"error-message\">\n\n        <div *ngIf=\"patronymic.errors.required\">\n          Заполните это поле\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"form-group phone\">\n      <label class=\"col-4\" for=\"phone\">Телефон:</label>\n      <input type=\"text\" class=\"form-control col-7\" id=\"phone\"\n             required minlength=\"9\" maxlength=\"9\"\n             [(ngModel)]=\"client.phone\" name=\"phone\" #phone=\"ngModel\">\n      <div *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\"\n           class=\"error-message\">\n\n        <div *ngIf=\"phone.errors.required\">\n          Заполните это поле\n        </div>\n\n        <div *ngIf=\"phone.errors.minlength\">\n          Телефон должен состоять из 9 знаков\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"col-4\" for=\"doctor\">Лечащий врач:</label>\n      <select class=\"form-control col-7\" id=\"doctor\" [(ngModel)]=\"client.doctor\" name=\"doctor\">\n        <option *ngFor=\"let employee of employees\" [value]=\"employee.lastname\">\n          {{employee.lastname}}\n        </option>\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"col-4\" for=\"discount\">Дисконт:</label>\n      <input type=\"text\" class=\"form-control col-7\" id=\"discount\"\n             [(ngModel)]=\"client.discount\" name=\"discount\">\n    </div>\n\n    <div class=\"form-group textarea\">\n      <label class=\"col-4\" for=\"comment\">Комментарий:</label>\n      <textarea type=\"text\" class=\"form-control col-7\" id=\"comment\"\n                [(ngModel)]=\"client.comment\" name=\"comment\" rows=\"6\"></textarea>\n    </div>\n\n    <div class=\"button-area\">\n      <button type=\"submit\" class=\"btn btn-success green\">Редактировать</button>\n      <button type=\"button\" class=\"btn btn-primary blue\" (click)=\"changeBoolean();\">Назад</button>\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/clients/client-edit-form/client-edit-form.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/clients/client-edit-form/client-edit-form.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-area {\n  margin-top: 20px;\n  margin-right: 10%;\n  display: flex;\n  justify-content: flex-end; }\n  .button-area .green {\n    margin-right: 10px; }\n  .form-area {\n  margin: 30px auto; }\n  .form-area .form-group:not(.textarea) {\n    height: 38px; }\n  .form-area .form-group {\n    display: flex;\n    position: relative; }\n  .form-area .form-group .ng-valid[required], .form-area .form-group .ng-valid.required {\n      border-right: 5px solid #61C180; }\n  .form-area .form-group .ng-invalid:not(form) {\n      border-right: 5px solid cornflowerblue; }\n  .form-area .form-group .hidden {\n      display: none; }\n  .form-area .form-group .error-message {\n      position: absolute;\n      left: 35%;\n      top: 100%;\n      display: block; }\n  .form-area .form-group .error-message div {\n        color: darkred;\n        font-size: 10px; }\n  .form-area .form-group label {\n      margin-top: 10px; }\n  .form-area .form-group input {\n      height: 100%; }\n  .form-area .form-group textarea {\n      font-size: 0.8em;\n      resize: none; }\n  .form-area .form-group input,\n    .form-area .form-group textarea {\n      border-radius: 5px;\n      border: 1px solid #eee;\n      outline: none;\n      box-shadow: none; }\n  .form-area .form-group input::-webkit-input-placeholder,\n      .form-area .form-group textarea::-webkit-input-placeholder {\n        color: #c4d9ff;\n        font-size: 14px;\n        font-style: italic;\n        opacity: 1;\n        transition: opacity 200ms; }\n  .form-area .form-group input:-moz-placeholder,\n      .form-area .form-group textarea:-moz-placeholder {\n        color: #c4d9ff;\n        font-size: 14px;\n        font-style: italic;\n        opacity: 1;\n        transition: opacity 200ms; }\n  .form-area .form-group input::-moz-placeholder,\n      .form-area .form-group textarea::-moz-placeholder {\n        color: #c4d9ff;\n        font-size: 14px;\n        font-style: italic;\n        opacity: 1;\n        transition: opacity 200ms; }\n  .form-area .form-group input:-ms-input-placeholder,\n      .form-area .form-group textarea:-ms-input-placeholder {\n        color: #c4d9ff;\n        font-size: 14px;\n        font-style: italic;\n        opacity: 1;\n        transition: opacity 200ms; }\n  .form-area .form-group input:focus,\n      .form-area .form-group textarea:focus {\n        box-shadow: 0 0 5px cornflowerblue; }\n  .form-area .form-group input:focus::-webkit-input-placeholder,\n        .form-area .form-group textarea:focus::-webkit-input-placeholder {\n          opacity: 0; }\n  .form-area .form-group input:focus:-moz-placeholder,\n        .form-area .form-group textarea:focus:-moz-placeholder {\n          opacity: 0; }\n  .form-area .form-group input:focus::-moz-placeholder,\n        .form-area .form-group textarea:focus::-moz-placeholder {\n          opacity: 0; }\n  .form-area .form-group input:focus:-ms-input-placeholder,\n        .form-area .form-group textarea:focus:-ms-input-placeholder {\n          opacity: 0; }\n  .form-area .form-group select {\n      background-color: white;\n      width: 100%;\n      line-height: 38px;\n      padding: 6px 20px 6px 15px;\n      border: 1px solid #eee; }\n  .form-area .form-group select:focus {\n        outline: none;\n        box-shadow: 0px 0px 5px cornflowerblue; }\n  .form-area .form-group select option {\n        padding-left: 30px; }\n  .form-area div.phone {\n    position: relative; }\n  .form-area div.phone input {\n      padding-left: 52px; }\n  .form-area div.phone::after {\n      content: '+380';\n      color: black;\n      position: absolute;\n      width: 20px;\n      height: 15px;\n      top: 20%;\n      left: 35%; }\n"

/***/ }),

/***/ "./src/app/components/clients/client-edit-form/client-edit-form.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/clients/client-edit-form/client-edit-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ClientEditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientEditFormComponent", function() { return ClientEditFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_employee_service_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/employee-service/employee.service */ "./src/app/services/employee-service/employee.service.ts");
/* harmony import */ var _services_client_service_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/client-service/client.service */ "./src/app/services/client-service/client.service.ts");
/* harmony import */ var _models_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/client */ "./src/app/models/client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientEditFormComponent = /** @class */ (function () {
    function ClientEditFormComponent(router, clientService, employeeService) {
        this.router = router;
        this.clientService = clientService;
        this.employeeService = employeeService;
        this.listState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ClientEditFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.getEmployees()
            .subscribe(function (res) { return _this.employees = res; }, function (error) { return _this.router.navigate(['/error']); });
    };
    ClientEditFormComponent.prototype.changeBoolean = function () {
        this.listState.emit(true);
    };
    ClientEditFormComponent.prototype.editClient = function (form) {
        this.changeBoolean(); // TODO: remove after DB connecting
        var value = form.value;
        /*this.clientService.editClient(this.client)
          .subscribe(
            (res) => this.changeBoolean(),
            (error) => this.router.navigate(['/error'])
          );*/
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_client__WEBPACK_IMPORTED_MODULE_4__["Client"])
    ], ClientEditFormComponent.prototype, "client", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ClientEditFormComponent.prototype, "listState", void 0);
    ClientEditFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-edit-form',
            template: __webpack_require__(/*! ./client-edit-form.component.html */ "./src/app/components/clients/client-edit-form/client-edit-form.component.html"),
            styles: [__webpack_require__(/*! ./client-edit-form.component.scss */ "./src/app/components/clients/client-edit-form/client-edit-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_client_service_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"], _services_employee_service_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]])
    ], ClientEditFormComponent);
    return ClientEditFormComponent;
}());



/***/ }),

/***/ "./src/app/components/clients/clients.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/clients/clients.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content col-12\">\n  <div class=\"employees-list\" *ngIf=\"listState\">\n    <h3 class=\"col-12\">Пациенты TalMedical</h3>\n\n    <div class=\"table col-10\">\n      <div class=\"table-head\">\n        <div class=\"table-cell col-3\"><p>Ф.И.О</p></div>\n        <div class=\"table-cell col-3\"><p>Телефон</p></div>\n        <div class=\"table-cell col-3\"><p>Лечащий врач</p></div>\n        <div class=\"table-cell col-3\"><p>Дисконт</p></div>\n      </div>\n      <div class=\"table-row\" *ngFor=\"let client of clients\">\n        <div class=\"table-cell col-3 include-hover\">\n          <p>{{ client.lastname }} {{ client.name }} {{client.patronymic}}</p>\n          <div class=\"on-hover\">\n            <i class=\"fa fa-user-edit\" (click)=\"select(client); editState=true; listState=false;\"></i>\n            <i class=\"fa fa-trash\"></i>\n          </div>\n        </div>\n        <div class=\"table-cell col-3 phone\" (click)=\"createCommentsArray(client)\">\n          <p>+380 {{ client.phone }}</p>\n          <span *ngIf=\"client.comment\"></span>\n          <p class=\"col-10 show-comment\" *ngIf=\"client.comment && comments.includes(client)\">{{ client.comment }}</p>\n        </div>\n        <div class=\"table-cell col-3\"><p>{{ client.doctor }}</p></div>\n        <div class=\"table-cell col-3\"><p>{{ client.discount }}</p></div>\n      </div>\n    </div>\n    <div class=\"col-sm-4 col-md-3 offset-8 button-area\">\n      <button class=\"btn btn-success green\" (click)=\"listState = false; addState = true;\">Добавить</button>\n      <button class=\"btn btn-primary\" (click)=\"returnToStart()\">Меню</button>\n    </div>\n  </div>\n\n  <app-client-edit-form *ngIf=\"editState\" [client]=\"selectedClient\" (listState)=\"listState = $event; editState = !editState\"></app-client-edit-form>\n  <app-client-add-form *ngIf=\"addState\" (listState)=\"listState = $event; addState = !addState\"></app-client-add-form>\n  <!--<div class=\"add-new col-6\" *ngIf=\"!state\">\n    <form>\n      <label class=\"col-4\" for=\"lastname\">Фамилия:</label>\n      <input class=\"col-7 offset-1\" id=\"lastname\" type=\"text\" placeholder=\"Фамилия\" name=\"lastname\" [(ngModel)]=\"client.lastname\">\n\n      <label class=\"col-4\" for=\"name\">Имя:</label>\n      <input class=\"col-7 offset-1\" id=\"name\" type=\"text\" placeholder=\"Имя\" name=\"name\" [(ngModel)]=\"client.name\">\n\n      <label class=\"col-4\" for=\"patronymic\">Отчество:</label>\n      <input class=\"col-7 offset-1\" id=\"patronymic\" type=\"text\" placeholder=\"Отчество\" name=\"patronymic\" [(ngModel)]=\"client.patronymic\">\n\n      <label class=\"col-4\" for=\"phone\">Телефон:</label>\n      <div class=\"phone col-7 offset-1\">\n        <input class=\"\" id=\"phone\" type=\"text\" name=\"phone\" [(ngModel)]=\"client.phone\" specialCharacters=\"' '\" mask=\"00 000 00 00\">\n        <span></span>\n      </div>\n\n      <label class=\"col-4\" for=\"doctor\">Лечащий врач:</label>\n      <div class=\"select col-7 offset-1\" id=\"doctor\">\n        <select class=\"col-8\" name=\"doctor\" name=\"doctor\" [(ngModel)]=\"client.doctor\">\n          <option *ngFor=\"let employee of employees\" [value]=\"employee.lastname\">{{ employee.lastname }} {{ employee.name }} {{employee.patronymic}}</option>\n        </select>\n      </div>\n\n      <label class=\"col-4\" for=\"discount\">Дисконт:</label>\n      <input class=\"col-7 offset-1\" id=\"discount\" type=\"number\" placeholder=\"Дисконт\" name=\"discount\" [(ngModel)]=\"client.discount\">\n\n      <label class=\"col-4\" for=\"comment\">Комментарий:</label>\n      <textarea class=\"col-7 offset-1\" id=\"comment\" type=\"text\" cols=\"5\" placeholder=\"Комментарий\" name=\"comment\" [(ngModel)]=\"client.comment\"></textarea>\n    </form>\n    <div class=\"button-area-item\">\n      <span class=\"error\" *ngIf=\"error\">{{ message }}</span>\n      <button class=\"btn btn-success add-new-employee\" *ngIf=\"!editState\" (click)=\"addNew()\">Ok</button>\n      <button class=\"btn btn-success add-new-employee\" *ngIf=\"editState\" (click)=\"editClient()\">Редактировать</button>\n      <button class=\"btn btn-primary\" (click)=\"state = true; editState = false;\">Назад</button>\n    </div>\n  </div>-->\n\n<!-- Form for adding -->\n\n  <!--<div class=\"col-sm-12 col-md-6 col-lg-6 add-new\" *ngIf=\"!state\">\n    <form #clientForm=\"ngForm\" (ngSubmit)=\"addNew(clientForm)\">\n      <div class=\"form-group\">\n        <label class=\"col-4\" for=\"lastname\">Фамилия:</label>\n        <input type=\"text\" class=\"form-control col-7\" id=\"lastname\"\n               required [pattern]=\"myPat\"\n               [(ngModel)]=\"client.lastname\" name=\"lastname\" #lastname=\"ngModel\">\n        <div *ngIf=\"lastname.invalid && (lastname.dirty || lastname.touched)\"\n             class=\"error-message\">\n\n          <div *ngIf=\"lastname.errors.required\">\n            Name is required.\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-4\" for=\"name\">Имя:</label>\n        <input type=\"text\" class=\"form-control col-7\" id=\"name\"\n               required minlength=\"4\"\n               [(ngModel)]=\"client.name\" name=\"name\" #name=\"ngModel\">\n        <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n             class=\"error-message\">\n\n          <div *ngIf=\"name.errors.required\">\n            Name is required.\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-4\" for=\"patronymic\">Отчество:</label>\n        <input type=\"text\" class=\"form-control col-7\" id=\"patronymic\"\n               required\n               [(ngModel)]=\"client.patronymic\" name=\"patronymic\" #patronymic=\"ngModel\">\n        <div *ngIf=\"patronymic.invalid && (patronymic.dirty || patronymic.touched)\"\n             class=\"error-message\">\n\n          <div *ngIf=\"patronymic.errors.required\">\n            Name is required.\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group phone\">\n        <label class=\"col-4\" for=\"phone\">Телефон:</label>\n        <input type=\"text\" class=\"form-control col-7\" id=\"phone\"\n               required minlength=\"9\" maxlength=\"9\"\n               [(ngModel)]=\"client.phone\" name=\"phone\" #phone=\"ngModel\">\n        <div *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\"\n             class=\"error-message\">\n\n          <div *ngIf=\"phone.errors.required\">\n            Name is required.\n          </div>\n\n          <div *ngIf=\"phone.errors.minlength\">\n            Name must be at least 9 characters long.\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-4\" for=\"doctor\">Лечащий врач:</label>\n        <select class=\"form-control col-7\" id=\"doctor\" [(ngModel)]=\"client.doctor\" name=\"doctor\">\n          <option *ngFor=\"let employee of employees\" [value]=\"employee.lastname\">\n            {{employee.lastname}}\n          </option>\n        </select>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-4\" for=\"discount\">Дисконт:</label>\n        <input type=\"text\" class=\"form-control col-7\" id=\"discount\"\n               [(ngModel)]=\"client.discount\" name=\"discount\">\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-4\" for=\"comment\">Комментарий:</label>\n        <input type=\"text\" class=\"form-control col-7\" id=\"comment\"\n               [(ngModel)]=\"client.comment\" name=\"comment\">\n      </div>\n\n      <div class=\"button-area\">\n        <button type=\"submit\" class=\"btn btn-success add-new-employee\" [disabled]=\"!clientForm.form.valid\">Submit</button>\n        <button class=\"btn btn-success add-new-employee\" *ngIf=\"editState\" (click)=\"editClient()\">Редактировать</button>\n        <button class=\"btn btn-primary\" (click)=\"state = true; editState = false; clientForm.reset();\">Назад</button>\n      </div>\n\n    </form>\n  </div>-->\n\n  <!-- Form for editing -->\n\n  <!--<div class=\"col-sm-12 col-md-6 col-lg-6 add-new\" *ngIf=\"!state\">\n    <form #clientForm=\"ngForm\" (ngSubmit)=\"addNew(clientForm)\">\n      <div class=\"form-group\">\n        <label class=\"col-4\" for=\"lastname\">Фамилия:</label>\n        <input type=\"text\" class=\"form-control col-7\" id=\"lastname\"\n               required [pattern]=\"myPat\"\n               [(ngModel)]=\"client.lastname\" name=\"lastname\" #lastname=\"ngModel\">\n        <div *ngIf=\"lastname.invalid && (lastname.dirty || lastname.touched)\"\n             class=\"error-message\">\n\n          <div *ngIf=\"lastname.errors.required\">\n            Name is required.\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-4\" for=\"name\">Имя:</label>\n        <input type=\"text\" class=\"form-control col-7\" id=\"name\"\n               required minlength=\"4\"\n               [(ngModel)]=\"client.name\" name=\"name\" #name=\"ngModel\">\n        <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n             class=\"error-message\">\n\n          <div *ngIf=\"name.errors.required\">\n            Name is required.\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-4\" for=\"patronymic\">Отчество:</label>\n        <input type=\"text\" class=\"form-control col-7\" id=\"patronymic\"\n               required\n               [(ngModel)]=\"client.patronymic\" name=\"patronymic\" #patronymic=\"ngModel\">\n        <div *ngIf=\"patronymic.invalid && (patronymic.dirty || patronymic.touched)\"\n             class=\"error-message\">\n\n          <div *ngIf=\"patronymic.errors.required\">\n            Name is required.\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group phone\">\n        <label class=\"col-4\" for=\"phone\">Телефон:</label>\n        <input type=\"text\" class=\"form-control col-7\" id=\"phone\"\n               required minlength=\"9\" maxlength=\"9\"\n               [(ngModel)]=\"client.phone\" name=\"phone\" #phone=\"ngModel\">\n        <div *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\"\n             class=\"error-message\">\n\n          <div *ngIf=\"phone.errors.required\">\n            Name is required.\n          </div>\n\n          <div *ngIf=\"phone.errors.minlength\">\n            Name must be at least 9 characters long.\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-4\" for=\"doctor\">Лечащий врач:</label>\n        <select class=\"form-control col-7\" id=\"doctor\" [(ngModel)]=\"client.doctor\" name=\"doctor\">\n          <option *ngFor=\"let employee of employees\" [value]=\"employee.lastname\">\n            {{employee.lastname}}\n          </option>\n        </select>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-4\" for=\"discount\">Дисконт:</label>\n        <input type=\"text\" class=\"form-control col-7\" id=\"discount\"\n               [(ngModel)]=\"client.discount\" name=\"discount\">\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-4\" for=\"comment\">Комментарий:</label>\n        <input type=\"text\" class=\"form-control col-7\" id=\"comment\"\n               [(ngModel)]=\"client.comment\" name=\"comment\">\n      </div>\n\n      <div class=\"button-area\">\n        <button type=\"submit\" class=\"btn btn-success add-new-employee\" [disabled]=\"!clientForm.form.valid\">Submit</button>\n        <button class=\"btn btn-success add-new-employee\" *ngIf=\"editState\" (click)=\"editClient()\">Редактировать</button>\n        <button class=\"btn btn-primary\" (click)=\"state = true; editState = false; clientForm.reset();\">Назад</button>\n      </div>\n\n    </form>\n  </div>-->\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/clients/clients.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/clients/clients.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-area {\n  margin-top: 20px;\n  margin-right: 10%;\n  display: flex;\n  justify-content: flex-end; }\n  .button-area .green {\n    margin-right: 10px; }\n  .form-area {\n  margin: 30px auto; }\n  .form-area .form-group:not(.textarea) {\n    height: 38px; }\n  .form-area .form-group {\n    display: flex;\n    position: relative; }\n  .form-area .form-group .ng-valid[required], .form-area .form-group .ng-valid.required {\n      border-right: 5px solid #61C180; }\n  .form-area .form-group .ng-invalid:not(form) {\n      border-right: 5px solid cornflowerblue; }\n  .form-area .form-group .hidden {\n      display: none; }\n  .form-area .form-group .error-message {\n      position: absolute;\n      left: 35%;\n      top: 100%;\n      display: block; }\n  .form-area .form-group .error-message div {\n        color: darkred;\n        font-size: 10px; }\n  .form-area .form-group label {\n      margin-top: 10px; }\n  .form-area .form-group input {\n      height: 100%; }\n  .form-area .form-group textarea {\n      font-size: 0.8em;\n      resize: none; }\n  .form-area .form-group input,\n    .form-area .form-group textarea {\n      border-radius: 5px;\n      border: 1px solid #eee;\n      outline: none;\n      box-shadow: none; }\n  .form-area .form-group input::-webkit-input-placeholder,\n      .form-area .form-group textarea::-webkit-input-placeholder {\n        color: #c4d9ff;\n        font-size: 14px;\n        font-style: italic;\n        opacity: 1;\n        transition: opacity 200ms; }\n  .form-area .form-group input:-moz-placeholder,\n      .form-area .form-group textarea:-moz-placeholder {\n        color: #c4d9ff;\n        font-size: 14px;\n        font-style: italic;\n        opacity: 1;\n        transition: opacity 200ms; }\n  .form-area .form-group input::-moz-placeholder,\n      .form-area .form-group textarea::-moz-placeholder {\n        color: #c4d9ff;\n        font-size: 14px;\n        font-style: italic;\n        opacity: 1;\n        transition: opacity 200ms; }\n  .form-area .form-group input:-ms-input-placeholder,\n      .form-area .form-group textarea:-ms-input-placeholder {\n        color: #c4d9ff;\n        font-size: 14px;\n        font-style: italic;\n        opacity: 1;\n        transition: opacity 200ms; }\n  .form-area .form-group input:focus,\n      .form-area .form-group textarea:focus {\n        box-shadow: 0 0 5px cornflowerblue; }\n  .form-area .form-group input:focus::-webkit-input-placeholder,\n        .form-area .form-group textarea:focus::-webkit-input-placeholder {\n          opacity: 0; }\n  .form-area .form-group input:focus:-moz-placeholder,\n        .form-area .form-group textarea:focus:-moz-placeholder {\n          opacity: 0; }\n  .form-area .form-group input:focus::-moz-placeholder,\n        .form-area .form-group textarea:focus::-moz-placeholder {\n          opacity: 0; }\n  .form-area .form-group input:focus:-ms-input-placeholder,\n        .form-area .form-group textarea:focus:-ms-input-placeholder {\n          opacity: 0; }\n  .form-area .form-group select {\n      background-color: white;\n      width: 100%;\n      line-height: 38px;\n      padding: 6px 20px 6px 15px;\n      border: 1px solid #eee; }\n  .form-area .form-group select:focus {\n        outline: none;\n        box-shadow: 0px 0px 5px cornflowerblue; }\n  .form-area .form-group select option {\n        padding-left: 30px; }\n  .form-area div.phone {\n    position: relative; }\n  .form-area div.phone input {\n      padding-left: 52px; }\n  .form-area div.phone::after {\n      content: '+380';\n      color: black;\n      position: absolute;\n      width: 20px;\n      height: 15px;\n      top: 20%;\n      left: 35%; }\n  .content h3 {\n  text-align: center;\n  margin-bottom: 20px; }\n  .content .table {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #eee;\n  border-radius: 5px; }\n  .content .table .table-head {\n    background-color: #e6f2ff;\n    font-weight: bold; }\n  .content .table div {\n    display: flex;\n    justify-content: space-between;\n    max-height: 45px;\n    min-height: 45px; }\n  .content .table div .include-hover {\n      position: relative; }\n  .content .table div .include-hover:hover .on-hover {\n        opacity: 1; }\n  .content .table div .include-hover div.on-hover {\n        position: absolute;\n        justify-content: center !important;\n        align-items: center;\n        opacity: 0;\n        width: 100%;\n        background-color: #e6f2ff;\n        transition: opacity 500ms cubic-bezier(0.25, 0.1, 0.25, 1); }\n  .content .table div .include-hover div.on-hover .fa {\n          padding: 3px;\n          color: cornflowerblue;\n          border: 2px solid cornflowerblue;\n          border-radius: 3px;\n          cursor: pointer; }\n  .content .table div .include-hover div.on-hover .fa:first-of-type {\n            margin-right: 20px; }\n  .content .table div .include-hover div.on-hover .fa:last-of-type {\n            padding: 3px 6px; }\n  .content .table div .table-cell {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin: 0;\n      padding: 10px 10px;\n      border: 1px solid #eee; }\n  .content .table div .table-cell p {\n        margin: 0;\n        font-size: 0.8em; }\n  .content .table div .phone {\n      position: relative; }\n  .content .table div .phone span {\n        position: absolute;\n        width: 5px;\n        height: 100%;\n        top: 0;\n        right: 0;\n        background-color: cornflowerblue; }\n  .content .table div .phone .show-comment {\n        position: absolute;\n        top: 120%;\n        left: 18%;\n        width: 100%;\n        min-height: 30px;\n        color: white;\n        background-color: #77b7fa;\n        font-size: 0.7em;\n        border-radius: 5px;\n        z-index: 10; }\n  .content .table div .phone .show-comment::after {\n          content: ' ';\n          position: absolute;\n          top: -10px;\n          left: 25%;\n          border-bottom: 10px solid #77b7fa;\n          border-right: 10px solid transparent;\n          border-left: 10px solid transparent; }\n"

/***/ }),

/***/ "./src/app/components/clients/clients.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/clients/clients.component.ts ***!
  \*********************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_employee_service_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/employee-service/employee.service */ "./src/app/services/employee-service/employee.service.ts");
/* harmony import */ var _services_client_service_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/client-service/client.service */ "./src/app/services/client-service/client.service.ts");
/* harmony import */ var _models_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/client */ "./src/app/models/client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(router, clientService, employeeService) {
        this.router = router;
        this.clientService = clientService;
        this.employeeService = employeeService;
        this.comments = [];
    }
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.client = new _models_client__WEBPACK_IMPORTED_MODULE_4__["Client"];
        this.listState = true;
        this.editState = false;
        this.addState = false;
        this.employeeService.getEmployees()
            .subscribe(function (res) { return _this.employees = res; }, function (error) { return _this.router.navigate(['/error']); });
        this.clientService.getClients()
            .subscribe(function (res) { return _this.clients = res; }, function (error) {
            console.log(error);
            _this.router.navigate(['/error']);
        });
    };
    ClientsComponent.prototype.returnToStart = function () {
        this.router.navigate(['/main/start']);
    };
    ClientsComponent.prototype.select = function (client) {
        this.selectedClient = client;
    };
    ClientsComponent.prototype.createCommentsArray = function (client) {
        if (this.comments.includes(client)) {
            this.comments = [];
        }
        else {
            this.comments = [];
            this.comments.push(client);
        }
    };
    ClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/components/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.scss */ "./src/app/components/clients/clients.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_client_service_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"], _services_employee_service_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/components/employees/employee-add-form/employee-add-form.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/employees/employee-add-form/employee-add-form.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12 col-md-6 col-lg-6 form-area\">\n  <form #employeeForm=\"ngForm\" (ngSubmit)=\"addEmployee(employeeForm)\">\n    <div class=\"form-group\">\n      <label class=\"col-4\" for=\"lastname\">Фамилия:</label>\n      <input type=\"text\" class=\"form-control col-7\" id=\"lastname\"\n             required\n             [(ngModel)]=\"employee.lastname\" name=\"lastname\" #lastname=\"ngModel\">\n\n      <div *ngIf=\"lastname.invalid && (lastname.dirty || lastname.touched)\" class=\"error-message\">\n        <div *ngIf=\"lastname.errors.required\">Заполните это поле</div>\n      </div>\n      <div class=\"hidden\" [class.error-message]=\"errorMessage\" *ngIf=\"!lastname.dirty\">\n        <div>Заполните это поле</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"col-4\" for=\"name\">Имя:</label>\n      <input type=\"text\" class=\"form-control col-7\" id=\"name\"\n             required\n             [(ngModel)]=\"employee.name\" name=\"name\" #name=\"ngModel\">\n      <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"error-message\">\n        <div *ngIf=\"name.errors.required\">Заполните это поле</div>\n      </div>\n      <div class=\"hidden\" [class.error-message]=\"errorMessage\" *ngIf=\"!name.dirty\">\n        <div>Заполните это поле</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"col-4\" for=\"patronymic\">Отчество:</label>\n      <input type=\"text\" class=\"form-control col-7\" id=\"patronymic\"\n             [(ngModel)]=\"employee.patronymic\" name=\"patronymic\">\n    </div>\n\n    <div class=\"form-group phone\">\n      <label class=\"col-4\" for=\"phone\">Телефон:</label>\n      <input type=\"text\" class=\"form-control col-7\" id=\"phone\"\n             minlength=\"9\" maxlength=\"9\"\n             [(ngModel)]=\"employee.phone\" name=\"phone\" #phone=\"ngModel\">\n      <div *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\" class=\"error-message\">\n        <div *ngIf=\"phone.errors.minlength\">Телефон должен состоять из 9 знаков</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"col-4\" for=\"role\">Должность:</label>\n      <select class=\"form-control col-7\" id=\"role\" [(ngModel)]=\"employee.role\" name=\"role\" #role=\"ngModel\" required>\n        <option value=\"1\">Админ</option>\n        <option value=\"2\">Доктор</option>\n      </select>\n      <div *ngIf=\"role.invalid && (role.dirty || role.touched)\" class=\"error-message\">\n        <div *ngIf=\"login.errors.required\">Заполните это поле</div>\n      </div>\n      <div class=\"hidden\" [class.error-message]=\"errorMessage\" *ngIf=\"!role.dirty\">\n        <div>Заполните это поле</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"col-4\" for=\"login\">Логин:</label>\n      <input type=\"text\" class=\"form-control col-7\" id=\"login\"\n             [(ngModel)]=\"employee.login\" name=\"login\" #login=\"ngModel\" required>\n      <div *ngIf=\"login.invalid && (login.dirty || login.touched)\" class=\"error-message\">\n        <div *ngIf=\"login.errors.required\">Заполните это поле</div>\n      </div>\n      <div class=\"hidden\" [class.error-message]=\"errorMessage\" *ngIf=\"!login.dirty\">\n        <div>Заполните это поле</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"col-4\" for=\"password\">Пароль:</label>\n      <input type=\"text\" class=\"form-control col-7\" id=\"password\"\n                [(ngModel)]=\"employee.password\" name=\"password\" #password=\"ngModel\" required>\n      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"error-message\">\n        <div *ngIf=\"password.errors.required\">Заполните это поле</div>\n      </div>\n      <div class=\"hidden\" [class.error-message]=\"errorMessage\" *ngIf=\"!password.dirty\">\n        <div>Заполните это поле</div>\n      </div>\n    </div>\n\n    <div class=\"button-area\">\n      <button type=\"submit\" class=\"btn btn-success green\">Ок</button>\n      <button type=\"button\" class=\"btn btn-primary blue\" (click)=\"changeBoolean(); employeeForm.reset();\">Назад</button>\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/employees/employee-add-form/employee-add-form.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/employees/employee-add-form/employee-add-form.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-area {\n  margin-top: 20px;\n  margin-right: 10%;\n  display: flex;\n  justify-content: flex-end; }\n  .button-area .green {\n    margin-right: 10px; }\n  .form-area {\n  margin: 30px auto; }\n  .form-area .form-group:not(.textarea) {\n    height: 38px; }\n  .form-area .form-group {\n    display: flex;\n    position: relative; }\n  .form-area .form-group .ng-valid[required], .form-area .form-group .ng-valid.required {\n      border-right: 5px solid #61C180; }\n  .form-area .form-group .ng-invalid:not(form) {\n      border-right: 5px solid cornflowerblue; }\n  .form-area .form-group .hidden {\n      display: none; }\n  .form-area .form-group .error-message {\n      position: absolute;\n      left: 35%;\n      top: 100%;\n      display: block; }\n  .form-area .form-group .error-message div {\n        color: darkred;\n        font-size: 10px; }\n  .form-area .form-group label {\n      margin-top: 10px; }\n  .form-area .form-group input {\n      height: 100%; }\n  .form-area .form-group textarea {\n      font-size: 0.8em;\n      resize: none; }\n  .form-area .form-group input,\n    .form-area .form-group textarea {\n      border-radius: 5px;\n      border: 1px solid #eee;\n      outline: none;\n      box-shadow: none; }\n  .form-area .form-group input::-webkit-input-placeholder,\n      .form-area .form-group textarea::-webkit-input-placeholder {\n        color: #c4d9ff;\n        font-size: 14px;\n        font-style: italic;\n        opacity: 1;\n        transition: opacity 200ms; }\n  .form-area .form-group input:-moz-placeholder,\n      .form-area .form-group textarea:-moz-placeholder {\n        color: #c4d9ff;\n        font-size: 14px;\n        font-style: italic;\n        opacity: 1;\n        transition: opacity 200ms; }\n  .form-area .form-group input::-moz-placeholder,\n      .form-area .form-group textarea::-moz-placeholder {\n        color: #c4d9ff;\n        font-size: 14px;\n        font-style: italic;\n        opacity: 1;\n        transition: opacity 200ms; }\n  .form-area .form-group input:-ms-input-placeholder,\n      .form-area .form-group textarea:-ms-input-placeholder {\n        color: #c4d9ff;\n        font-size: 14px;\n        font-style: italic;\n        opacity: 1;\n        transition: opacity 200ms; }\n  .form-area .form-group input:focus,\n      .form-area .form-group textarea:focus {\n        box-shadow: 0 0 5px cornflowerblue; }\n  .form-area .form-group input:focus::-webkit-input-placeholder,\n        .form-area .form-group textarea:focus::-webkit-input-placeholder {\n          opacity: 0; }\n  .form-area .form-group input:focus:-moz-placeholder,\n        .form-area .form-group textarea:focus:-moz-placeholder {\n          opacity: 0; }\n  .form-area .form-group input:focus::-moz-placeholder,\n        .form-area .form-group textarea:focus::-moz-placeholder {\n          opacity: 0; }\n  .form-area .form-group input:focus:-ms-input-placeholder,\n        .form-area .form-group textarea:focus:-ms-input-placeholder {\n          opacity: 0; }\n  .form-area .form-group select {\n      background-color: white;\n      width: 100%;\n      line-height: 38px;\n      padding: 6px 20px 6px 15px;\n      border: 1px solid #eee; }\n  .form-area .form-group select:focus {\n        outline: none;\n        box-shadow: 0px 0px 5px cornflowerblue; }\n  .form-area .form-group select option {\n        padding-left: 30px; }\n  .form-area div.phone {\n    position: relative; }\n  .form-area div.phone input {\n      padding-left: 52px; }\n  .form-area div.phone::after {\n      content: '+380';\n      color: black;\n      position: absolute;\n      width: 20px;\n      height: 15px;\n      top: 20%;\n      left: 35%; }\n"

/***/ }),

/***/ "./src/app/components/employees/employee-add-form/employee-add-form.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/employees/employee-add-form/employee-add-form.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EmployeeAddFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeAddFormComponent", function() { return EmployeeAddFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_employee_service_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/employee-service/employee.service */ "./src/app/services/employee-service/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_employee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/employee */ "./src/app/models/employee.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeAddFormComponent = /** @class */ (function () {
    function EmployeeAddFormComponent(router, employeeService) {
        this.router = router;
        this.employeeService = employeeService;
        this.listState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EmployeeAddFormComponent.prototype.ngOnInit = function () {
        this.employee = new _models_employee__WEBPACK_IMPORTED_MODULE_3__["Employee"];
    };
    EmployeeAddFormComponent.prototype.changeBoolean = function () {
        this.listState.emit(true);
    };
    EmployeeAddFormComponent.prototype.addEmployee = function (form) {
        if (form.invalid) {
            this.errorMessage = true;
            return;
        }
        var value = form.value;
        var newEmployee = new _models_employee__WEBPACK_IMPORTED_MODULE_3__["Employee"];
        newEmployee.lastname = value.lastname;
        newEmployee.name = value.name;
        newEmployee.patronymic = value.patronymic;
        newEmployee.phone = value.phone;
        newEmployee.login = value.comment;
        newEmployee.password = value.discount;
        newEmployee.role = value.doctor;
        this.changeBoolean(); // TODO: remove after DB connecting
        /*this.employeeService.addEmployee(newEmployee)
          .subscribe(
            (res) => this.changeBoolean(),
            (error) => this.router.navigate(['/error'])
          );*/
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EmployeeAddFormComponent.prototype, "listState", void 0);
    EmployeeAddFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-add-form',
            template: __webpack_require__(/*! ./employee-add-form.component.html */ "./src/app/components/employees/employee-add-form/employee-add-form.component.html"),
            styles: [__webpack_require__(/*! ./employee-add-form.component.scss */ "./src/app/components/employees/employee-add-form/employee-add-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_employee_service_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]])
    ], EmployeeAddFormComponent);
    return EmployeeAddFormComponent;
}());



/***/ }),

/***/ "./src/app/components/employees/employees.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/employees/employees.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content col-12\">\n  <div class=\"employees-list\" *ngIf=\"listState\">\n    <h3 class=\"col-12\">Сотрудники TalMedical</h3>\n    <div class=\"table col-10\">\n      <div class=\"table-head\">\n        <div class=\"table-cell col-3\"><p>Ф.И.О</p></div>\n        <div class=\"table-cell col-2\"><p>Должность</p></div>\n        <div class=\"table-cell col-2\"><p>Логин</p></div>\n        <div class=\"table-cell col-2\"><p>Пароль</p></div>\n        <div class=\"table-cell col-3\"><p>Телефон</p></div>\n      </div>\n      <div class=\"table-row\" *ngFor=\"let employee of employees\">\n        <div class=\"table-cell col-3 include-hover\">\n          <p>{{ employee.lastname }} {{ employee.name }} {{employee.patronymic}}</p>\n          <div class=\"on-hover\">\n            <!--<i class=\"fa fa-user-edit\"></i>-->\n            <i class=\"fa fa-trash\"></i>\n          </div>\n        </div>\n        <div class=\"table-cell col-2\"><p>{{ employee.role }}</p></div>\n        <div class=\"table-cell col-2\"><p>{{ employee.login }}</p></div>\n        <div class=\"table-cell col-2\"><p>{{ employee.password }}</p></div>\n        <div class=\"table-cell col-3\"><p>+380 {{ employee.phone }}</p></div>\n      </div>\n    </div>\n    <div class=\"col-sm-4 col-md-3 offset-8 button-area\">\n      <button class=\"btn btn-success green\" (click)=\"addState = true; listState = false\">Добавить</button>\n      <button class=\"btn btn-primary blue\" (click)=\"returnToStart()\">Меню</button>\n    </div>\n  </div>\n\n  <app-employee-add-form *ngIf=\"addState\" (listState)=\"listState = $event; addState = !addState\"></app-employee-add-form>\n\n\n  <!--<div class=\"form-area col-6\" *ngIf=\"!state\">\n    <form>\n      <label class=\"col-3\" for=\"lastname\">Фамилия:</label>\n      <input class=\"col-7 offset-1\" id=\"lastname\" type=\"text\" placeholder=\"Фамилия\" name=\"lastname\" [(ngModel)]=\"employee.lastname\">\n\n      <label class=\"col-3\" for=\"name\">Имя:</label>\n      <input class=\"col-7 offset-1\" id=\"name\" type=\"text\" placeholder=\"Имя\" name=\"name\" [(ngModel)]=\"employee.name\">\n\n      <label class=\"col-3\" for=\"patronymic\">Отчество:</label>\n      <input class=\"col-7 offset-1\" id=\"patronymic\" type=\"text\" placeholder=\"Отчество\" name=\"patronymic\" [(ngModel)]=\"employee.patronymic\">\n\n      <label class=\"col-3 phone\" for=\"phone\">Телефон:</label>\n      <div class=\"phone col-7 offset-1\">\n        <input class=\"\" id=\"phone\" type=\"text\" name=\"phone\" [(ngModel)]=\"employee.phone\" specialCharacters=\"' '\" mask=\"00 000 00 00\">\n      </div>\n\n      <label class=\"col-3\" for=\"role\">Должность:</label>\n      <div class=\"select col-7 offset-1\" id=\"role\">\n        <select class=\"col-8\" name=\"role\" name=\"role\" [(ngModel)]=\"employee.role\">\n          <option value=\"1\">Админ</option>\n          <option value=\"2\">Доктор</option>\n        </select>\n      </div>\n\n      <label class=\"col-3\" for=\"login\">Логин:</label>\n      <input class=\"col-7 offset-1\" id=\"login\" type=\"text\" placeholder=\"Логин\" name=\"login\" [(ngModel)]=\"employee.login\">\n\n      <label class=\"col-3\" for=\"pass\">Пароль:</label>\n      <input class=\"col-7 offset-1\" id=\"pass\" type=\"password\" placeholder=\"Пароль\" name=\"password\" [(ngModel)]=\"employee.password\">\n    </form>\n    <div class=\"button-area\">\n      <button class=\"btn btn-success green\" (click)=\"addNew()\">Ok</button>\n      <button class=\"btn btn-primary blue\" (click)=\"state = true; error = false\">Назад</button>\n    </div>\n  </div>-->\n</div>\n"

/***/ }),

/***/ "./src/app/components/employees/employees.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/employees/employees.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-area {\n  margin-top: 20px;\n  margin-right: 10%;\n  display: flex;\n  justify-content: flex-end; }\n  .button-area .green {\n    margin-right: 10px; }\n  .form-area {\n  margin: 30px auto; }\n  .form-area .form-group:not(.textarea) {\n    height: 38px; }\n  .form-area .form-group {\n    display: flex;\n    position: relative; }\n  .form-area .form-group .ng-valid[required], .form-area .form-group .ng-valid.required {\n      border-right: 5px solid #61C180; }\n  .form-area .form-group .ng-invalid:not(form) {\n      border-right: 5px solid cornflowerblue; }\n  .form-area .form-group .hidden {\n      display: none; }\n  .form-area .form-group .error-message {\n      position: absolute;\n      left: 35%;\n      top: 100%;\n      display: block; }\n  .form-area .form-group .error-message div {\n        color: darkred;\n        font-size: 10px; }\n  .form-area .form-group label {\n      margin-top: 10px; }\n  .form-area .form-group input {\n      height: 100%; }\n  .form-area .form-group textarea {\n      font-size: 0.8em;\n      resize: none; }\n  .form-area .form-group input,\n    .form-area .form-group textarea {\n      border-radius: 5px;\n      border: 1px solid #eee;\n      outline: none;\n      box-shadow: none; }\n  .form-area .form-group input::-webkit-input-placeholder,\n      .form-area .form-group textarea::-webkit-input-placeholder {\n        color: #c4d9ff;\n        font-size: 14px;\n        font-style: italic;\n        opacity: 1;\n        transition: opacity 200ms; }\n  .form-area .form-group input:-moz-placeholder,\n      .form-area .form-group textarea:-moz-placeholder {\n        color: #c4d9ff;\n        font-size: 14px;\n        font-style: italic;\n        opacity: 1;\n        transition: opacity 200ms; }\n  .form-area .form-group input::-moz-placeholder,\n      .form-area .form-group textarea::-moz-placeholder {\n        color: #c4d9ff;\n        font-size: 14px;\n        font-style: italic;\n        opacity: 1;\n        transition: opacity 200ms; }\n  .form-area .form-group input:-ms-input-placeholder,\n      .form-area .form-group textarea:-ms-input-placeholder {\n        color: #c4d9ff;\n        font-size: 14px;\n        font-style: italic;\n        opacity: 1;\n        transition: opacity 200ms; }\n  .form-area .form-group input:focus,\n      .form-area .form-group textarea:focus {\n        box-shadow: 0 0 5px cornflowerblue; }\n  .form-area .form-group input:focus::-webkit-input-placeholder,\n        .form-area .form-group textarea:focus::-webkit-input-placeholder {\n          opacity: 0; }\n  .form-area .form-group input:focus:-moz-placeholder,\n        .form-area .form-group textarea:focus:-moz-placeholder {\n          opacity: 0; }\n  .form-area .form-group input:focus::-moz-placeholder,\n        .form-area .form-group textarea:focus::-moz-placeholder {\n          opacity: 0; }\n  .form-area .form-group input:focus:-ms-input-placeholder,\n        .form-area .form-group textarea:focus:-ms-input-placeholder {\n          opacity: 0; }\n  .form-area .form-group select {\n      background-color: white;\n      width: 100%;\n      line-height: 38px;\n      padding: 6px 20px 6px 15px;\n      border: 1px solid #eee; }\n  .form-area .form-group select:focus {\n        outline: none;\n        box-shadow: 0px 0px 5px cornflowerblue; }\n  .form-area .form-group select option {\n        padding-left: 30px; }\n  .form-area div.phone {\n    position: relative; }\n  .form-area div.phone input {\n      padding-left: 52px; }\n  .form-area div.phone::after {\n      content: '+380';\n      color: black;\n      position: absolute;\n      width: 20px;\n      height: 15px;\n      top: 20%;\n      left: 35%; }\n  .content h3 {\n  text-align: center;\n  margin-bottom: 20px; }\n  .content .table {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #eee;\n  border-radius: 5px; }\n  .content .table .table-head {\n    background-color: #e6f2ff;\n    font-weight: bold; }\n  .content .table div {\n    display: flex;\n    justify-content: space-between;\n    max-height: 45px;\n    min-height: 45px; }\n  .content .table div .include-hover {\n      position: relative; }\n  .content .table div .include-hover:hover .on-hover {\n        opacity: 1; }\n  .content .table div .include-hover div.on-hover {\n        position: absolute;\n        justify-content: center !important;\n        align-items: center;\n        opacity: 0;\n        width: 100%;\n        background-color: #e6f2ff;\n        transition: opacity 500ms cubic-bezier(0.25, 0.1, 0.25, 1); }\n  .content .table div .include-hover div.on-hover .fa {\n          padding: 3px;\n          color: cornflowerblue;\n          border: 2px solid cornflowerblue;\n          border-radius: 3px;\n          cursor: pointer; }\n  .content .table div .include-hover div.on-hover .fa:first-of-type {\n            margin-right: 20px; }\n  .content .table div .include-hover div.on-hover .fa:last-of-type {\n            padding: 3px 6px; }\n  .content .table div .table-cell {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin: 0;\n      padding: 10px 10px;\n      border: 1px solid #eee; }\n  .content .table div .table-cell p {\n        margin: 0;\n        font-size: 0.8em; }\n  .content .table div .phone {\n      position: relative; }\n  .content .table div .phone span {\n        position: absolute;\n        width: 5px;\n        height: 100%;\n        top: 0;\n        right: 0;\n        background-color: cornflowerblue; }\n  .content .table div .phone .show-comment {\n        position: absolute;\n        top: 120%;\n        left: 18%;\n        width: 100%;\n        min-height: 30px;\n        color: white;\n        background-color: #77b7fa;\n        font-size: 0.7em;\n        border-radius: 5px;\n        z-index: 10; }\n  .content .table div .phone .show-comment::after {\n          content: ' ';\n          position: absolute;\n          top: -10px;\n          left: 25%;\n          border-bottom: 10px solid #77b7fa;\n          border-right: 10px solid transparent;\n          border-left: 10px solid transparent; }\n"

/***/ }),

/***/ "./src/app/components/employees/employees.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/employees/employees.component.ts ***!
  \*************************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_employee_service_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/employee-service/employee.service */ "./src/app/services/employee-service/employee.service.ts");
/* harmony import */ var _models_employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/employee */ "./src/app/models/employee.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(router, employeeService) {
        this.router = router;
        this.employeeService = employeeService;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listState = true;
        this.addState = false;
        this.employee = new _models_employee__WEBPACK_IMPORTED_MODULE_2__["Employee"];
        this.employee.role = 2;
        this.employeeService.getEmployees()
            .subscribe(function (res) { return _this.employees = res; }, function (error) { return _this.router.navigate(['/error']); });
    };
    EmployeesComponent.prototype.returnToStart = function () {
        this.router.navigate(['/main/start']);
    };
    EmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/components/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.scss */ "./src/app/components/employees/employees.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_employee_service_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/components/error/error.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-sm-6\">\n  <div class=\"image col-sm-4\"></div>\n  <h1>Oops! Something went wrong...</h1>\n  <h1>Call your admin!</h1>\n  <br>\n  <button class=\"btn btn-success\" (click)=\"returnToMain()\">Return</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/error/error.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div:first-of-type {\n  margin-top: 3%; }\n\n.image {\n  min-width: 150px;\n  min-height: 150px;\n  background: url('404.gif') no-repeat;\n  background-size: contain; }\n"

/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(router) {
        this.router = router;
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent.prototype.returnToMain = function () {
        this.router.navigate(['/main/start']);
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/components/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.scss */ "./src/app/components/error/error.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/header-page/header-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/header-page/header-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/header-page/header-page.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/header-page/header-page.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/header-page/header-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/header-page/header-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: HeaderPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderPageComponent", function() { return HeaderPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderPageComponent = /** @class */ (function () {
    function HeaderPageComponent() {
    }
    HeaderPageComponent.prototype.ngOnInit = function () {
    };
    HeaderPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-page',
            template: __webpack_require__(/*! ./header-page.component.html */ "./src/app/components/header-page/header-page.component.html"),
            styles: [__webpack_require__(/*! ./header-page.component.scss */ "./src/app/components/header-page/header-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderPageComponent);
    return HeaderPageComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"logo col-9\"><i class=\"fa fa-ambulance\"></i> TalMedical</h1>\n  <button\n    class=\"btn btn-primary col-sm-2 col-md-1 log-out\"\n    (click)=\"returnToLogin()\"\n    *ngIf=\"location.indexOf('main') > -1\">Выйти <i class=\"fa fa-sign-out\"></i></button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 10px;\n  background-color: #e6f2ff;\n  border: 1px solid #eee;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between; }\n  .container h1 i {\n    color: cornflowerblue; }\n  .container button.log-out {\n    height: 80%;\n    -ms-grid-row-align: center;\n        align-self: center;\n    margin-right: 3%; }\n  .container button.log-out .fa {\n      color: white; }\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.location = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (data) {
            _this.location = data.url;
        });
    };
    HeaderComponent.prototype.returnToLogin = function () {
        this.router.navigate(['']);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-sm-9 col-md-4 col-lg-4\">\n  <div class=\"form-horizontal\">\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"login\">Логин:</label>\n      <div class=\"col-sm-10\">\n        <i class=\"fa fa-user\"></i>\n        <input type=\"text\" class=\"form-control\" id=\"login\" placeholder=\"Введите логин\" name=\"login\">\n      </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"pass\">Пароль:</label>\n        <div class=\"col-sm-10\">\n          <i class=\"fa fa-key\"></i>\n          <input type=\"password\" class=\"form-control\" id=\"pass\" placeholder=\"Введите пароль\" name=\"pwd\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n      <div class=\"col-sm-2 offset-sm-9\">\n        <button class=\"btn btn-primary btn-sm\" (click)=\"sub()\">Войти</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.container {\n  margin-top: 15%;\n  padding: 25px 10px 10px;\n  background-color: aliceblue;\n  border: 1px solid #eee;\n  border-radius: 5px; }\n\nlabel + div {\n  display: inline-block; }\n\n.fa {\n  position: absolute;\n  color: cornflowerblue;\n  top: 25%;\n  left: 25px; }\n\ninput {\n  padding-left: 30px;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  outline: none;\n  box-shadow: none; }\n\ninput::-webkit-input-placeholder {\n    color: #c4d9ff;\n    font-size: 14px;\n    font-style: italic;\n    opacity: 1;\n    transition: opacity 200ms; }\n\ninput:-moz-placeholder {\n    color: #c4d9ff;\n    font-size: 14px;\n    font-style: italic;\n    opacity: 1;\n    transition: opacity 200ms; }\n\ninput::-moz-placeholder {\n    color: #c4d9ff;\n    font-size: 14px;\n    font-style: italic;\n    opacity: 1;\n    transition: opacity 200ms; }\n\ninput:-ms-input-placeholder {\n    color: #c4d9ff;\n    font-size: 14px;\n    font-style: italic;\n    opacity: 1;\n    transition: opacity 200ms; }\n\ninput:focus {\n    box-shadow: 0 0 5px cornflowerblue; }\n\ninput:focus::-webkit-input-placeholder {\n      opacity: 0; }\n\ninput:focus:-moz-placeholder {\n      opacity: 0; }\n\ninput:focus::-moz-placeholder {\n      opacity: 0; }\n\ninput:focus:-ms-input-placeholder {\n      opacity: 0; }\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animation */ "./src/app/animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// @HostBinding('@routeAnimation') routeAnimation = true;
// @HostBinding('style.display')   display = 'block';
// @HostBinding('style.position')  position = 'absolute';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.sub = function () {
        this.router.navigate(['/main/start']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n\n\n\n <!-- <div>\n    <input type=\"text\" #name>\n    <input type=\"text\" #age>\n    <input type=\"text\" #phone>\n    <button class=\"btn btn-success\" (click)=\"onSave(name.value, age.value, phone.value)\">Save</button>\n  </div>-->\n\n  <!--<button class=\"btn btn-success\" (click)=\"onGet()\">Get</button>-->\n\n\n  <!--<div *ngIf=\"data2\">User: {{ data2.name }}</div>-->\n</div>\n"

/***/ }),

/***/ "./src/app/components/main/main.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  margin-top: 7%;\n  min-height: 450px;\n  padding: 30px 30px;\n  background-color: #fafcff;\n  border-radius: 5px;\n  border: 1px solid #eee; }\n"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_employee_service_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/employee-service/employee.service */ "./src/app/services/employee-service/employee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = /** @class */ (function () {
    // data: User[];
    // data2: User;
    function MainComponent(router, employeeService) {
        this.router = router;
        this.employeeService = employeeService;
        this.users = [
            {
                name: 'Anton',
                age: 25
            },
            {
                name: 'Max',
                age: 30
            }
        ];
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/components/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_employee_service_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/start-page/start-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/start-page/start-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content col-10 offset-1\">\n  <div class=\"top-content col-12\">\n\n    <div class=\"col-3\" (click)=\"moveToClientsList()\">\n      <div class=\"fa-content\">\n        <i class=\"fa fa-users\"></i>\n      </div>\n      <p>Клиенты</p>\n    </div>\n\n    <div class=\"col-3\" (click)=\"moveToEmployeePage()\">\n      <div class=\"fa-content\">\n        <i class=\"fa fa-user-md\"></i>\n      </div>\n      <p>Сотрудники</p>\n    </div>\n  </div>\n\n  <div class=\"bottom-content col-12\">\n    <div class=\"col-3\">\n      <div class=\"fa-content\">\n        <i class=\"fa fa-clipboard-list\"></i>\n      </div>\n      <p>Таблица посещений</p>\n    </div>\n\n    <!--<div class=\"col-3\">\n      <div class=\"fa-content\">\n        <i class=\"fa fa-cogs\"></i>\n      </div>\n      <p>Настройки</p>\n    </div>-->\n\n    <div class=\"col-3\">\n      <div class=\"fa-content\">\n        <i class=\"fa fa-hospital-alt\"></i>\n      </div>\n      <p>Кабинеты</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/start-page/start-page.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/start-page/start-page.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content .top-content,\n.content .bottom-content {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  padding: 10px; }\n  .content .top-content > div,\n  .content .bottom-content > div {\n    padding: 10px;\n    background-color: aliceblue;\n    border: 1px solid #eee;\n    border-radius: 5px; }\n  .content .top-content > div div,\n    .content .bottom-content > div div {\n      padding: 10px 25px;\n      background-color: #dbedff;\n      text-align: center; }\n  .content .top-content > div div i,\n      .content .bottom-content > div div i {\n        margin-top: 2%; }\n  .content .top-content > div div i::before,\n        .content .bottom-content > div div i::before {\n          color: white;\n          font-size: 5em; }\n  .content .top-content > div p,\n    .content .bottom-content > div p {\n      margin: 5px auto 0;\n      text-align: center; }\n  .content .top-content > div:hover,\n  .content .bottom-content > div:hover {\n    box-shadow: 0px 0px 5px cornflowerblue; }\n  .content .bottom-content {\n  margin-top: 30px; }\n"

/***/ }),

/***/ "./src/app/components/start-page/start-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/start-page/start-page.component.ts ***!
  \***************************************************************/
/*! exports provided: StartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageComponent", function() { return StartPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StartPageComponent = /** @class */ (function () {
    function StartPageComponent(router) {
        this.router = router;
    }
    StartPageComponent.prototype.ngOnInit = function () {
    };
    StartPageComponent.prototype.moveToEmployeePage = function () {
        this.router.navigate(['main/employees']);
    };
    StartPageComponent.prototype.moveToClientsList = function () {
        this.router.navigate(['main/clients']);
    };
    StartPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-start-page',
            template: __webpack_require__(/*! ./start-page.component.html */ "./src/app/components/start-page/start-page.component.html"),
            styles: [__webpack_require__(/*! ./start-page.component.scss */ "./src/app/components/start-page/start-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], StartPageComponent);
    return StartPageComponent;
}());



/***/ }),

/***/ "./src/app/models/client.ts":
/*!**********************************!*\
  !*** ./src/app/models/client.ts ***!
  \**********************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
var Client = /** @class */ (function () {
    function Client(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    return Client;
}());



/***/ }),

/***/ "./src/app/models/employee.ts":
/*!************************************!*\
  !*** ./src/app/models/employee.ts ***!
  \************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());



/***/ }),

/***/ "./src/app/router/app-routing/app-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/router/app-routing/app-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _components_employees_employees_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/employees/employees.component */ "./src/app/components/employees/employees.component.ts");
/* harmony import */ var _components_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/start-page/start-page.component */ "./src/app/components/start-page/start-page.component.ts");
/* harmony import */ var _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/clients/clients.component */ "./src/app/components/clients/clients.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var contentRoutes = [
    { path: 'start', component: _components_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_7__["StartPageComponent"] },
    { path: 'employees', component: _components_employees_employees_component__WEBPACK_IMPORTED_MODULE_6__["EmployeesComponent"] },
    { path: 'clients', component: _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__["ClientsComponent"] }
];
var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'main', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], children: contentRoutes },
    { path: 'error', component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"] },
    { path: '**', component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/services/client-service/client.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/client-service/client.service.ts ***!
  \***********************************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
    }
    ClientService.prototype.getClients = function () {
        // return this.http.get<Client[]>('https://test-c9485.firebaseio.com/clients.json')
        return this.http.get('./assets/db/clients.json')
            .catch(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw('It\'s an error here. Call your admin');
        });
    };
    ClientService.prototype.addClient = function (client) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        // return this.http.post('https://test-c9485.firebaseio.com/clients.json', client);
        return this.http.post('assets/db/clients.json', client, httpOptions); // TODO: doesn't work, can't find path
    };
    ClientService.prototype.editClient = function (client) {
        return this.http.put('https://test-c9485.firebaseio.com/clients.json', client);
    };
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/services/employee-service/employee.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/employee-service/employee.service.ts ***!
  \***************************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get('https://test-c9485.firebaseio.com/employees.json')
            .map(function (res) {
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var employee = res_1[_i];
                switch (employee.role) {
                    case 1:
                        employee.role = 'Админ';
                        break;
                    case 2:
                        employee.role = 'Доктор';
                        break;
                    default:
                        employee.role = 'Определите роль';
                }
                employee.phone = employee.phone.toString().split('');
                employee.phone.splice(2, 0, ' ');
                employee.phone.splice(6, 0, ' ');
                employee.phone.splice(9, 0, ' ');
                employee.phone = employee.phone.join('');
            }
            return res;
        })
            .catch(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw('It\'s an error here. Call your admin');
        });
    };
    EmployeeService.prototype.addEmployee = function (employee) {
        return this.http.post('https://test-c9485.firebaseio.com/employees.json', employee);
    };
    EmployeeService.prototype.getUsers = function () {
        return this.http.get('http://localhost:8080/user');
    };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Tatiana/Desktop/projects/angular-clinic/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map