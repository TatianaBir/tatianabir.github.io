(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Tatiana/Desktop/projects/ne-numero/src/main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function HomeComponent_span_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.matrixString);
} }
class HomeComponent {
    constructor() {
        this.character = 0;
        this.energy = 0;
        this.interest = 0;
        this.health = 0;
        this.logic = 0;
        this.work = 0;
        this.luck = 0;
        this.dolg = 0;
        this.memory = 0;
        this.temp = 0;
        this.goal = 0;
        this.byt = 0;
        this.fam = 0;
        this.habits = 0;
        this.destinyNumb = 0;
    }
    get matrixString() {
        return `${this.returnString(this.character, '1') || '-'}/${this.returnString(this.health, '4') || '-'}/${this.returnString(this.luck, '7') || '-'}/${this.returnString(this.energy, '2') || '-'}/${this.returnString(this.logic, '5') || '-'}/${this.returnString(this.dolg, '8') || '-'}/${this.returnString(this.interest, '3') || '-'}/${this.returnString(this.work, '6') || '-'}/${this.returnString(this.memory, '9') || '-'}/ЧС${this.destinyNumb}`;
    }
    getDate(datef) {
        const date = `${new Date(datef).getDate() > 10 ? new Date(datef).getDate() : '0' + new Date(datef).getDate()}${new Date(datef).getMonth() + 1}${new Date(datef).getFullYear()}`;
        let additionNumber1 = 0;
        let additionNumber2 = 0;
        let additionNumber3 = 0;
        let additionNumber4 = 0;
        for (let i = 0; i < date.length; i++)
            additionNumber1 += +date[i];
        for (let i = 0; i < String(additionNumber1).length; i++)
            additionNumber2 += +String(additionNumber1)[i];
        additionNumber3 = additionNumber1 - (2 * (date[0] == '0' ? +date[1] : +date[0]));
        for (let i = 0; i < String(additionNumber3).length; i++)
            additionNumber4 += +String(additionNumber3)[i];
        const line = String(date) + additionNumber1 + additionNumber2 + additionNumber3 + additionNumber4;
        this.calculateMatrix(line);
        if (additionNumber2 > 9 && additionNumber2 !== 11) {
            for (let i = 0; i < String(additionNumber2).length; i++)
                this.destinyNumb += +String(additionNumber2)[i];
        }
        else
            this.destinyNumb = additionNumber2;
    }
    calculateMatrix(line) {
        if (!line)
            return;
        this.resetForms();
        for (let j = 0; j < line.length; j++) {
            switch (line[j]) {
                case '1':
                    this.character += 1;
                    break;
                case '2':
                    this.energy += 1;
                    break;
                case '3':
                    this.interest += 1;
                    break;
                case '4':
                    this.health += 1;
                    break;
                case '5':
                    this.logic += 1;
                    break;
                case '6':
                    this.work += 1;
                    break;
                case '7':
                    this.luck += 1;
                    break;
                case '8':
                    this.dolg += 1;
                    break;
                case '9':
                    this.memory += 1;
                    break;
            }
        }
        this.temp = this.interest + this.logic + this.luck;
        this.goal = this.character + this.health + this.luck;
        this.byt = this.health + this.logic + this.work;
        this.fam = this.energy + this.logic + this.dolg;
        this.habits = this.interest + this.work + this.memory;
    }
    returnString(val, text) {
        let str = '';
        for (let i = 0; i < val; i++)
            str += text;
        return str;
    }
    onWindowScroll(e) {
        if (window.pageYOffset > 10) {
            let element = document.getElementById('navbar');
            element.classList.add('sticky');
        }
        else {
            let element = document.getElementById('navbar');
            element.classList.remove('sticky');
        }
    }
    resetForms() {
        this.character = this.energy = this.interest = this.health = this.logic = this.work = this.luck = this.dolg = this.memory = this.temp = this.goal = this.byt = this.fam = this.habits = this.destinyNumb = 0;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 136, vars: 18, consts: [["id", "navbar"], [1, "header-content", "container"], ["href", "#about"], ["href", "#calculator"], ["href", "#certificate"], ["routerLink", "/services", 1, "btn", "red-btn"], [1, "hero"], [1, "line1"], [1, "line2"], ["src", "assets/hero.jpg"], [1, "container"], [1, "hero-content"], [1, "about"], ["id", "about", 1, "anchor"], [1, "calculator"], ["id", "calculator", 1, "anchor"], [1, "matrix-calculator-wrapper"], [1, "calculator-form"], [1, "date-wrapper"], ["placeholder", "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443", "disabled", "", 3, "matDatepicker", "dateInput"], ["matSuffix", "", 3, "for"], ["disabled", "false"], ["picker", ""], ["id", "matrix"], ["class", "matrix-string", 4, "ngIf"], [1, "matrix-table"], [1, "destiny-number"], [1, "bl", "bb"], [1, "title"], [1, "br", "bb", "bc"], [1, "bb", "bc"], [1, "bl"], [1, "bc"], [1, "last-cell", "br", "bl"], [1, "certificate"], ["id", "certificate", 1, "anchor"], ["src", "/assets/certificate.jpg", "alt", "certificate", 1, "certificate-img"], [1, "matrix-string"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041E \u043C\u0435\u0442\u043E\u0434\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u043C\u0430\u0442\u0440\u0438\u0446\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0423\u0441\u043B\u0443\u0433\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E \u0412\u0430\u0441!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 \u0422\u0430\u0442\u044C\u044F\u043D\u0430, \u044F \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442 \u043F\u043E \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443 \u043F\u0441\u0438\u0445\u043E\u0430\u043D\u0430\u043B\u0438\u0437\u0443 \u0448\u043A\u043E\u043B\u044B \u043D\u0435\u043D\u0443\u043C\u0435\u0440\u043E\u043B\u043E\u0433\u0438\u0438 \u041E. \u041F\u0435\u0440\u0446\u0435\u0432\u043E\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u041E \u043C\u0435\u0442\u043E\u0434\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0441\u0438\u0445\u043E\u0430\u043D\u0430\u043B\u0438\u0437 - \u044D\u0442\u043E \u043D\u0430\u0443\u0447\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 \u0432 \u043D\u0443\u043C\u0435\u0440\u043E\u043B\u043E\u0433\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043F\u043E \u0434\u0430\u0442\u0435 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0439 \"\u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439\" \u043F\u043E\u0440\u0442\u0440\u0435\u0442 \u043B\u044E\u0431\u043E\u0433\u043E \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u041C\u0435\u0442\u043E\u0434 \u0441\u043E\u0437\u0434\u0430\u043D \u043C\u043E\u0438\u043C \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u041E\u043B\u044C\u0433\u043E\u0439 \u041F\u0435\u0440\u0446\u0435\u0432\u043E\u0439, \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u043F\u0438\u0444\u0430\u0433\u043E\u0440\u0435\u0439\u0441\u043A\u043E\u0439 \u043C\u0430\u0442\u0440\u0438\u0446\u044B, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0448\u043A\u043E\u043B\u044B. \u041E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u044D\u0442\u043E\u0433\u043E \u043C\u0435\u0442\u043E\u0434\u0430 \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u041E\u043B\u044C\u0433\u0430 \u0431\u0443\u0434\u0443\u0447\u0438 \u0434\u0438\u043F\u043B\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u043A\u043B\u0438\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043F\u0441\u0438\u0445\u043E\u0442\u0435\u0440\u0430\u043F\u0435\u0432\u0442\u043E\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u0430 \u043C\u0430\u0442\u0440\u0438\u0446\u0443, \u043A\u0430\u043A \u043E\u0441\u043D\u043E\u0432\u0443 \u0434\u043B\u044F \u0441\u0432\u043E\u0435\u0439 \u043D\u0430\u0443\u0447\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438. \u0412 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 15 \u043B\u0435\u0442 \u0438 \u043F\u043E \u0441\u0435\u0439 \u0434\u0435\u043D\u044C \u043F\u0440\u043E\u0432\u043E\u0434\u044F\u0442\u0441\u044F \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F, \u0441\u0431\u043E\u0440 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u043C\u0430\u0442\u0440\u0438\u0446 \u0441\u0440\u0435\u0434\u043D\u0435\u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043B\u044E\u0434\u0435\u0439, \u043D\u043E \u0438 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0430 \u0440\u0430\u0431\u043E\u0442\u0430 \u043F\u043E \u0430\u043D\u0430\u043B\u0438\u0437\u0443 \u043F\u0430\u0446\u0438\u0435\u043D\u0442\u043E\u0432 \u043F\u0441\u0438\u0445\u0438\u0430\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043A\u043B\u0438\u043D\u0438\u043A, \u043F\u0441\u0438\u0445\u043E\u043D\u0435\u0432\u0440\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0434\u0438\u0441\u043F\u0430\u043D\u0441\u0435\u0440\u043E\u0432. \u0422\u043E \u0435\u0441\u0442\u044C \u0437\u0430 \u044D\u0442\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439 \u0441\u0442\u043E\u0438\u0442 \u043C\u043D\u043E\u0433\u043E\u043B\u0435\u0442\u043D\u0438\u0439 \u043D\u0430\u0443\u0447\u043D\u044B\u0439 \u043F\u0441\u0438\u0445\u043E\u0442\u0435\u0440\u0430\u043F\u0435\u0432\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0442\u0440\u0443\u0434.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0412\u044B \u0443\u0437\u043D\u0430\u0435\u0442\u0435 \u043E \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u0435 \u0441\u0432\u043E\u0435\u0439 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438, \u043E \u0441\u0438\u043B\u044C\u043D\u044B\u0445 \u0438 \u0441\u043B\u0430\u0431\u044B\u0445 \u0441\u0442\u043E\u0440\u043E\u043D\u0430\u0445, \u044F \u0431\u0443\u0434\u0443 \u043E\u0441\u0432\u0435\u0449\u0430\u0442\u044C \u0434\u043B\u044F \u0412\u0430\u0441 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u0412\u0430\u0448\u0435\u0433\u043E \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u044F \u0438 \u043F\u0440\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0438, \u043D\u0430 \u043F\u0443\u0442\u0438 \u043A \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0439 \u0438 \u0433\u0430\u0440\u043C\u043E\u043D\u0438\u0447\u043D\u043E\u0439 \u0436\u0438\u0437\u043D\u0438. \u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0438 \u043F\u0440\u043E\u0441\u0442\u044B\u0435 \u0442\u0435\u0445\u043D\u0438\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E \u0434\u043B\u044F \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0435\u0439 \u0438 \u043D\u0435\u0439\u0442\u0440\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043D\u0435\u0433\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u043F\u0440\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u0439.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u042D\u0442\u043E, \u0441\u0432\u043E\u0435\u0433\u043E \u0440\u043E\u0434\u0430, \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044F\u0445 \u0438 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u0435 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438, \u0434\u0430\u043D\u043D\u044B\u0445 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0443 \u043E\u0442 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F. \u042F \u043F\u043E\u043C\u043E\u0433\u0443 \u0412\u0430\u043C \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u0439\u0442\u0438 \u043E\u0442\u0432\u0435\u0442 \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441 \"\u041F\u043E\u0447\u0435\u043C\u0443?\", \u043D\u043E \u0438 \"\u0427\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C?\".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " \u0420\u0430\u0441\u0447\u0451\u0442 \u043C\u0430\u0442\u0440\u0438\u0446\u044B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateInput", function HomeComponent_Template_input_dateInput_45_listener($event) { return ctx.getDate($event == null ? null : $event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "mat-datepicker-toggle", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "mat-datepicker", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u0414\u043B\u044F \u0440\u0430\u0441\u0447\u0451\u0442\u0430 \u043C\u0430\u0442\u0440\u0438\u0446\u044B \u0432\u044B\u0431\u0435\u0440\u0438 \u0412\u0430\u0448\u0443 \u0434\u0430\u0442\u0443 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F (\u043D\u0435 \u0434\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0432 \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0435 \u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438, \u0430 \u0438\u043C\u0435\u043D\u043D\u043E \u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0434\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, HomeComponent_span_52_Template, 2, 1, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u0427\u0438\u0441\u043B\u043E \u0441\u0443\u0434\u044C\u0431\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u043C\u0435\u043D\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\u0423\u0434\u0430\u0447\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u0426\u0435\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\u042D\u043D\u0435\u0440\u0433\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\u041B\u043E\u0433\u0438\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\u0414\u043E\u043B\u0433");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\u0421\u0435\u043C\u044C\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\u0418\u043D\u0442\u0435\u0440\u0435\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\u0422\u0440\u0443\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\u041F\u0430\u043C\u044F\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\u041F\u0440\u0438\u0432\u044B\u0447\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\u0411\u044B\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "section", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.matrixString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.destinyNumb || "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.temp || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.returnString(ctx.character, "1") || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.returnString(ctx.health, "4") || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.returnString(ctx.luck, "7") || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.goal || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.returnString(ctx.energy, "2") || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.returnString(ctx.logic, "5") || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.returnString(ctx.dolg, "8") || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fam || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.returnString(ctx.interest, "3") || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.returnString(ctx.work, "6") || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.returnString(ctx.memory, "9") || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.habits || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.byt || "-");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["section.about[_ngcontent-%COMP%] {\n  color: #F8F4EE;\n}\nsection.calculator[_ngcontent-%COMP%], section.certificate[_ngcontent-%COMP%] {\n  background-color: #CBC0B7;\n}\nsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 26px;\n  font-size: 24px;\n  position: relative;\n}\nsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-top: 60px;\n}\nsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .anchor[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -70px;\n}\n@media only screen and (max-width: 767px) {\n  section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .anchor[_ngcontent-%COMP%] {\n    top: -250px;\n  }\n}\nsection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-align: justify;\n}\n.date-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 12px;\n  border: 1px solid #2E2A29;\n  border-radius: 2px;\n}\n.date-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: calc(100% - 48px);\n  border: none;\n  outline: none;\n  color: #2E2A29;\n}\n.date-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  background-color: transparent;\n}\n.date-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #2E2A29;\n}\n.matrix-calculator-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.matrix-calculator-wrapper[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: calc(50% - 30px);\n}\n#matrix[_ngcontent-%COMP%]   .matrix-string[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 16px;\n  font-weight: bold;\n  font-size: 16px;\n}\n#matrix[_ngcontent-%COMP%]   .matrix-table[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n#matrix[_ngcontent-%COMP%]   .matrix-table[_ngcontent-%COMP%]   .destiny-number[_ngcontent-%COMP%] {\n  padding-left: 0;\n  flex-direction: row;\n  justify-content: flex-start;\n  grid-column: 1/4;\n  align-items: flex-start;\n}\n#matrix[_ngcontent-%COMP%]   .matrix-table[_ngcontent-%COMP%]   .destiny-number[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n#matrix[_ngcontent-%COMP%]   .matrix-table[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 70px;\n  padding: 12px 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n#matrix[_ngcontent-%COMP%]   .matrix-table[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n#matrix[_ngcontent-%COMP%]   .matrix-table[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.title) {\n  font-size: 16px;\n}\n#matrix[_ngcontent-%COMP%]   .matrix-table[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border: none;\n  border-color: #2E2A29;\n}\n#matrix[_ngcontent-%COMP%]   .matrix-table[_ngcontent-%COMP%]   .br[_ngcontent-%COMP%] {\n  border-right: 2px solid #2E2A29;\n}\n#matrix[_ngcontent-%COMP%]   .matrix-table[_ngcontent-%COMP%]   .bl[_ngcontent-%COMP%] {\n  border-left: 2px solid #2E2A29;\n}\n#matrix[_ngcontent-%COMP%]   .matrix-table[_ngcontent-%COMP%]   .bb[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #2E2A29;\n}\n#matrix[_ngcontent-%COMP%]   .matrix-table[_ngcontent-%COMP%]   .last-cell[_ngcontent-%COMP%] {\n  margin-left: -2px;\n  grid-column: 2;\n}\n.certificate-img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFFRSxjQ0xLO0FEQ1Q7QUFNRTtFQUVFLHlCQ1JLO0FER1Q7QUFRRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTko7QUFPSTtFQUNFLGdCQUFBO0FBTE47QUFPSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUxOO0FFaEJFO0VGbUJFO0lBSUksV0FBQTtFQUhOO0FBQ0Y7QUFPRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUxKO0FBU0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBTkY7QUFPRTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQ3pDSTtBRG9DUjtBQU1JO0VBQ0UsNkJBQUE7QUFKTjtBQU1JO0VBQ0UsY0M5Q0U7QUQwQ1I7QUFTQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQU5GO0FBT0U7RUFDRSx1QkFBQTtBQUxKO0FBVUU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFQSjtBQVNFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxnREFBQTtBQVBKO0FBUUk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFOTjtBQU9NO0VBQ0UsaUJBQUE7QUFMUjtBQVFJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQU5OO0FBT007RUFDRSxlQUFBO0FBTFI7QUFPTTtFQUNFLGVBQUE7QUFMUjtBQVFJO0VBQ0UsWUFBQTtFQUNBLHFCQ2hHRTtBRDBGUjtBQVFJO0VBQ0UsK0JBQUE7QUFOTjtBQVFJO0VBQ0UsOEJBQUE7QUFOTjtBQVFJO0VBQ0UsZ0NBQUE7QUFOTjtBQVFJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBTk47QUFXQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQVJGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vc3R5bGVzL21peGlucy5zY3NzJztcblxuc2VjdGlvbiB7XG4gICYuYWJvdXQge1xuICAgIC8vIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2JhY2sucG5nKSBuby1yZXBlYXQ7XG4gICAgY29sb3I6ICRncmV5LTE7XG4gIH1cbiAgJi5jYWxjdWxhdG9yLFxuICAmLmNlcnRpZmljYXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleS0yO1xuICB9XG5cbiAgaDMge1xuICAgIG1hcmdpbi1ib3R0b206IDI2cHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xuICAgICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICB9XG4gICAgLmFuY2hvciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC03MHB4O1xuICAgICAgQGluY2x1ZGUgcC1zY3JlZW4ge1xuICAgICAgICB0b3A6IC0yNTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxufVxuXG4uZGF0ZS13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgJGJyb3duO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGlucHV0IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDhweCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6ICRicm93bjtcbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogJGJyb3duO1xuICAgIH1cbiAgfVxufVxuXG4ubWF0cml4LWNhbGN1bGF0b3Itd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgPiBkaXYge1xuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDMwcHgpO1xuICB9XG59XG5cbiNtYXRyaXgge1xuICAubWF0cml4LXN0cmluZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLm1hdHJpeC10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMCwgMWZyKSk7XG4gICAgLmRlc3RpbnktbnVtYmVyIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBncmlkLWNvbHVtbjogMSAvIDQ7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgID4gc3BhbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgfVxuICAgIH1cbiAgICA+IGRpdiB7XG4gICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICBwYWRkaW5nOiAxMnB4IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICB9XG4gICAgICBzcGFuOm5vdCgudGl0bGUpIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgIH1cbiAgICBkaXYge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLWNvbG9yOiAkYnJvd247XG4gICAgfVxuICAgIC5iciB7XG4gICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAkYnJvd247XG4gICAgfVxuICAgIC5ibCB7XG4gICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRicm93bjtcbiAgICB9XG4gICAgLmJiIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkYnJvd247XG4gICAgfVxuICAgIC5sYXN0LWNlbGwge1xuICAgICAgbWFyZ2luLWxlZnQ6IC0ycHg7XG4gICAgICBncmlkLWNvbHVtbjogMjtcbiAgICB9XG4gIH1cbn1cblxuLmNlcnRpZmljYXRlLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuIiwiJHJlZDogI2M0NGMyODtcbiRncmV5LTE6ICNGOEY0RUU7XG4kZ3JleS0yOiAjQ0JDMEI3O1xuJGJyb3duOiAjMkUyQTI5O1xuXG4kT3BlblNhbnM6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuJE1vbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiIsIkBtaXhpbiBwLXNjcmVlbiB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdC1zY3JlZW4ge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNjhweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"], useValue: 'ru' }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'services', loadChildren: () => __webpack_require__.e(/*! import() | services-services-module */ "services-services-module").then(__webpack_require__.bind(null, /*! ./services/services.module */ "334H")).then(m => m.ServicesModule) },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { initialNavigation: 'enabled', relativeLinkResolution: 'legacy' })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map