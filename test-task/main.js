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

  /***/ "./src/app/app.component.html":
  /*!************************************!*\
    !*** ./src/app/app.component.html ***!
    \************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "<app-main></app-main>\n"

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
    /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
    /* harmony import */ var _components_main_content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/content/content.component */ "./src/app/components/main/content/content.component.ts");
    /* harmony import */ var _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/autofocus.directive */ "./src/app/directives/autofocus.directive.ts");
    /* harmony import */ var _components_main_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main/header/header.component */ "./src/app/components/main/header/header.component.ts");
    /* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
          declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            _components_main_content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"],
            _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_4__["AutofocusDirective"],
            _components_main_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]
          ],
          imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
          ],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
      ], AppModule);
      return AppModule;
    }());



    /***/ }),

  /***/ "./src/app/components/main/content/content.component.html":
  /*!****************************************************************!*\
    !*** ./src/app/components/main/content/content.component.html ***!
    \****************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "<main class=\"col-sm-12 col-md-5 offset-md-7\">\n\n  <div class=\"search\">\n\n    <i class=\"fa fa-search\"></i>\n    <input type=\"text\" appAutofocus (input)=\"watchInput($event)\">\n    <span class=\"col-sm-7\"></span>\n\n  </div>\n\n  <div class=\"picture col-sm-12\">\n\n    <div [ngClass]=\"{'active-left' : addClass, 'left' : !addClass}\">\n      <img src=\"assets/bubble.jpg\" alt=\"bubble\">\n    </div>\n\n    <div [ngClass]=\"{'active-center' : addClass, 'center' : !addClass}\">\n\n      <img src=\"assets/pyramid.jpg\" alt=\"pyramid\" *ngIf=\"stateStatus;else other\">\n      <img src=\"assets/pineapple.jpg\" alt=\"pineapple\" *ngIf=\"stateStatus\">\n\n      <ng-template #other>\n        <img src=\"assets/nails.jpg\" alt=\"nails\">\n        <img src=\"assets/dog.jpg\" alt=\"dog\">\n      </ng-template>\n\n    </div>\n\n    <div [ngClass]=\"{'active-right' : addClass, 'right' : !addClass}\">\n      <ng-template #happy>\n        <img src=\"assets/happy_guy.jpg\" alt=\"happy guy\">\n      </ng-template>\n      <img src=\"assets/abstraction.jpg\" alt=\"abstraction\" *ngIf=\"stateStatus;else happy\">\n    </div>\n\n  </div>\n\n</main>\n"

    /***/ }),

  /***/ "./src/app/components/main/content/content.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/components/main/content/content.component.scss ***!
    \****************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "div {\n  margin: 0;\n  padding: 0; }\n\nmain {\n  padding: 0;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 5%;\n  overflow: hidden;\n  background: url('oval.png') right center no-repeat;\n  background-size: contain; }\n\nmain .search {\n    max-width: 60%;\n    margin-bottom: 10%;\n    margin-left: 15%; }\n\nmain .search i {\n      color: #525252;\n      margin-right: 20px;\n      font-size: 1.5em; }\n\nmain .search input {\n      min-height: 20px;\n      background-color: inherit;\n      border: none;\n      outline: none;\n      box-shadow: none;\n      caret-color: #818181;\n      -webkit-text-fill-color: #818181;\n      font-size: 1.5em; }\n\nmain .search span {\n      display: block;\n      margin-top: 10px;\n      border-bottom: 1px solid #525252; }\n\nmain .picture {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end; }\n\nmain .picture .left,\n    main .picture .center,\n    main .picture .right {\n      opacity: 0;\n      -webkit-transform: translateY(100px);\n              transform: translateY(100px);\n      transition: all 500ms; }\n\nmain .picture .center,\n    main .picture .active-center {\n      display: flex;\n      flex-direction: column;\n      margin: 0 15px; }\n\nmain .picture .center img:first-of-type,\n      main .picture .active-center img:first-of-type {\n        margin-bottom: 15px; }\n\nmain .active-left,\n  main .active-center,\n  main .active-right {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    transition: all 500ms; }\n\nmain .active-left {\n    transition: all 2s; }\n\nmain .active-right {\n    transition: all 1s; }\n"

    /***/ }),

  /***/ "./src/app/components/main/content/content.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/main/content/content.component.ts ***!
    \**************************************************************/
  /*! exports provided: ContentComponent */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
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

    var ContentComponent = /** @class */ (function () {
      function ContentComponent() {
      }
      ContentComponent.prototype.ngOnInit = function () {
        this.stateStatus = true;
        this.addClass = false;
      };
      ContentComponent.prototype.watchInput = function (event) {
        if (event.target.value.length > 9 && !this.addClass) {
          this.addClass = true;
          this.stateStatus = !this.stateStatus;
        }
        if (event.target.value.length < 6) {
          this.addClass = false;
        }
      };
      ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-content',
          template: __webpack_require__(/*! ./content.component.html */ "./src/app/components/main/content/content.component.html"),
          styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/components/main/content/content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
      ], ContentComponent);
      return ContentComponent;
    }());



    /***/ }),

  /***/ "./src/app/components/main/header/header.component.html":
  /*!**************************************************************!*\
    !*** ./src/app/components/main/header/header.component.html ***!
    \**************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "<header></header>\n"

    /***/ }),

  /***/ "./src/app/components/main/header/header.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/components/main/header/header.component.scss ***!
    \**************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "header {\n  border-bottom: 1px solid #525252;\n  min-height: 100px; }\n"

    /***/ }),

  /***/ "./src/app/components/main/header/header.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/main/header/header.component.ts ***!
    \************************************************************/
  /*! exports provided: HeaderComponent */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

    var HeaderComponent = /** @class */ (function () {
      function HeaderComponent() {
      }
      HeaderComponent.prototype.ngOnInit = function () {
      };
      HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-header',
          template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/main/header/header.component.html"),
          styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/main/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
      ], HeaderComponent);
      return HeaderComponent;
    }());



    /***/ }),

  /***/ "./src/app/components/main/main.component.html":
  /*!*****************************************************!*\
    !*** ./src/app/components/main/main.component.html ***!
    \*****************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "<div class=\"container\">\n\n  <app-header></app-header>\n  <app-content></app-content>\n\n</div>\n"

    /***/ }),

  /***/ "./src/app/components/main/main.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/main/main.component.scss ***!
    \*****************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "div {\n  background-color: #1d1d1d;\n  margin-top: 5%;\n  padding: 0;\n  padding-bottom: 3%; }\n"

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
      function MainComponent() {
      }
      MainComponent.prototype.ngOnInit = function () {
      };
      MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-main',
          template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
          styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/components/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
      ], MainComponent);
      return MainComponent;
    }());



    /***/ }),

  /***/ "./src/app/directives/autofocus.directive.ts":
  /*!***************************************************!*\
    !*** ./src/app/directives/autofocus.directive.ts ***!
    \***************************************************/
  /*! exports provided: AutofocusDirective */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function() { return AutofocusDirective; });
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

    var AutofocusDirective = /** @class */ (function () {
      function AutofocusDirective(el) {
        this.el = el;
      }
      AutofocusDirective.prototype.ngAfterViewInit = function () {
        this.el.nativeElement.focus();
      };
      AutofocusDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
          selector: '[appAutofocus]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
      ], AutofocusDirective);
      return AutofocusDirective;
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

    module.exports = __webpack_require__(/*! /Users/Tatiana/Desktop/projects/test-fe-project/src/main.ts */"./src/main.ts");


    /***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
