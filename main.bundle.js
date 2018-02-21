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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-clockcalendar></app-clockcalendar>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clockcalendar_clockcalendar_component__ = __webpack_require__("./src/app/clockcalendar/clockcalendar.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__clockcalendar_clockcalendar_component__["a" /* ClockcalendarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clockcalendar/clockcalendar.component.css":
/***/ (function(module, exports) {

module.exports = "div {\r\n  margin: 0 auto;\r\n  width: 350px;\r\n  height: 100px;\r\n  border: 5px dotted #7103BB;\r\n  color: #fff;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  font-size: 4em;\r\n  text-shadow: 0 0 0.5em #8E00FF, 0 0 0.5em #8E00FF, 0 0 0.5em #8E00FF;\r\n  font-family: Arial;\r\n}\r\n\r\ndiv:hover {\r\n  -webkit-animation-name: changeColor, changeText;\r\n          animation-name: changeColor, changeText;\r\n  -webkit-animation-duration: 3s;\r\n          animation-duration: 3s;\r\n  -webkit-animation-timing-function:  ease-in-out;\r\n          animation-timing-function:  ease-in-out;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\r\n}\r\n\r\n@-webkit-keyframes changeColor {\r\n  0% {\r\n    border-color: #7103BB;\r\n  }\r\n  15% {\r\n    border-color: #FF00AE;\r\n  }\r\n  57% {\r\n    border-color: #FF0037;\r\n  }\r\n  79% {\r\n    border-color: #FF00AE;\r\n  }\r\n  100%{\r\n    border-color: #7103BB;\r\n  }\r\n}\r\n\r\n@keyframes changeColor {\r\n  0% {\r\n    border-color: #7103BB;\r\n  }\r\n  15% {\r\n    border-color: #FF00AE;\r\n  }\r\n  57% {\r\n    border-color: #FF0037;\r\n  }\r\n  79% {\r\n    border-color: #FF00AE;\r\n  }\r\n  100%{\r\n    border-color: #7103BB;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes changeText {\r\n  0% {\r\n    text-shadow: 0 0 0.5em #7103BB,0 0 0.5em #7103BB,0 0 0.5em #7103BB;\r\n  }\r\n  15% {\r\n    text-shadow: 0 0 0.5em #FF00AE,0 0 0.5em #FF00AE,0 0 0.5em #FF00AE;\r\n  }\r\n\r\n  57% {\r\n    text-shadow: 0 0 0.5em #FF0037,0 0 0.5em #FF0037,0 0 0.5em #FF0037;\r\n  }\r\n  79% {\r\n    text-shadow: 0 0 0.5em #FF00AE,0 0 0.5em #FF00AE,0 0 0.5em #FF00AE;\r\n  }\r\n  100%{\r\n    text-shadow: 0 0 0.5em #7103BB,0 0 0.5em #7103BB,0 0 0.5em #7103BB;\r\n  }\r\n}\r\n\r\n@keyframes changeText {\r\n  0% {\r\n    text-shadow: 0 0 0.5em #7103BB,0 0 0.5em #7103BB,0 0 0.5em #7103BB;\r\n  }\r\n  15% {\r\n    text-shadow: 0 0 0.5em #FF00AE,0 0 0.5em #FF00AE,0 0 0.5em #FF00AE;\r\n  }\r\n\r\n  57% {\r\n    text-shadow: 0 0 0.5em #FF0037,0 0 0.5em #FF0037,0 0 0.5em #FF0037;\r\n  }\r\n  79% {\r\n    text-shadow: 0 0 0.5em #FF00AE,0 0 0.5em #FF00AE,0 0 0.5em #FF00AE;\r\n  }\r\n  100%{\r\n    text-shadow: 0 0 0.5em #7103BB,0 0 0.5em #7103BB,0 0 0.5em #7103BB;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/clockcalendar/clockcalendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"changeClock()\" (contextmenu)=\"changeClockDate($event)\">\n  <p *ngIf=\"checkClockDate\">\n    {{ nowDate | date: clockFormat }}\n  </p>\n  <p *ngIf=\"!checkClockDate\">\n    {{ nowDate | date: dateFormat }}\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/clockcalendar/clockcalendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClockcalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClockcalendarComponent = /** @class */ (function () {
    function ClockcalendarComponent() {
        this.checkClockFormat = true;
        this.checkDateFormat = true;
        this.checkClockDate = true;
        this.clockFormat = 'HH:mm:ss';
        this.dateFormat = 'dd.MM.yyy';
    }
    ClockcalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.nowDate = Date.now();
        }, 1000);
    };
    ClockcalendarComponent.prototype.changeClock = function () {
        if (this.checkClockFormat) {
            this.clockFormat = 'HH:mm';
            this.checkClockFormat = false;
        }
        else {
            this.clockFormat = 'HH:mm:ss';
            this.checkClockFormat = true;
        }
        if (this.checkDateFormat) {
            this.dateFormat = 'MM/dd/yy';
            this.checkDateFormat = false;
        }
        else {
            this.dateFormat = 'dd.MM.yyy';
            this.checkDateFormat = true;
        }
    };
    ClockcalendarComponent.prototype.changeClockDate = function (event) {
        event.preventDefault(false);
        this.checkClockDate = !this.checkClockDate;
    };
    ClockcalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-clockcalendar',
            template: __webpack_require__("./src/app/clockcalendar/clockcalendar.component.html"),
            styles: [__webpack_require__("./src/app/clockcalendar/clockcalendar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClockcalendarComponent);
    return ClockcalendarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
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