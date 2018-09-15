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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(ngZone) {
        this.ngZone = ngZone;
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
            Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["akitaDevtools"])(ngZone);
        }
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/nav-bar/nav-bar.component */ "./src/app/dashboard/nav-bar/nav-bar.component.ts");
/* harmony import */ var _dashboard_chart_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/chart/chart.component */ "./src/app/dashboard/chart/chart.component.ts");
/* harmony import */ var _dashboard_grid_grid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/grid/grid.component */ "./src/app/dashboard/grid/grid.component.ts");
/* harmony import */ var _dashboard_form_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/form/form.component */ "./src/app/dashboard/form/form.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _dashboard_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
                _dashboard_chart_chart_component__WEBPACK_IMPORTED_MODULE_11__["ChartComponent"],
                _dashboard_grid_grid_component__WEBPACK_IMPORTED_MODULE_12__["GridComponent"],
                _dashboard_form_form_component__WEBPACK_IMPORTED_MODULE_13__["FormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                primeng_chart__WEBPACK_IMPORTED_MODULE_3__["ChartModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_state_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/state/index */ "./src/app/login/state/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, sessionQuery) {
        this.router = router;
        this.sessionQuery = sessionQuery;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.sessionQuery.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _login_state_index__WEBPACK_IMPORTED_MODULE_2__["SessionQuery"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/dashboard/chart/chart.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/chart/chart.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/chart/chart.component.html":
/*!******************************************************!*\
  !*** ./src/app/dashboard/chart/chart.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm\">\n  <div class=\"card rounded-0\" style=\"width:82.45rem;\">\n    <div class=\"card-header\">\n      Chart\n    </div>\n    <div class=\"card-body\">\n      <div class=\"chart-container\" width=\"\">\n        <p-chart type=\"bar\" [data]=\"data\" width=\"90vw\" height=\"40vh\"></p-chart>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/chart/chart.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/chart/chart.component.ts ***!
  \****************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
    }
    ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentsGraphData$.subscribe(function (_a) {
            var names = _a.names, quarterly = _a.quarterly, halfyearly = _a.halfyearly, annual = _a.annual;
            _this.data = {
                labels: names,
                datasets: [
                    {
                        label: 'Quarterly',
                        backgroundColor: '#42A5F5',
                        borderColor: '#1E88E5',
                        data: quarterly
                    },
                    {
                        label: 'Halfyearly',
                        backgroundColor: '#9CCC65',
                        borderColor: '#7CB342',
                        data: halfyearly
                    },
                    {
                        label: 'Annual',
                        backgroundColor: 'red',
                        borderColor: 'red',
                        data: annual
                    }
                ]
            };
            console.log(_this.data);
            _this.uiChart.refresh();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(primeng_chart__WEBPACK_IMPORTED_MODULE_2__["UIChart"]),
        __metadata("design:type", primeng_chart__WEBPACK_IMPORTED_MODULE_2__["UIChart"])
    ], ChartComponent.prototype, "uiChart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], ChartComponent.prototype, "studentsGraphData$", void 0);
    ChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/dashboard/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.css */ "./src/app/dashboard/chart/chart.component.css")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
        }),
        __metadata("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\r\n    padding-bottom: 6px;\r\n}\r\n\r\n.chart-container {\r\n    display: flex;\r\n    width: 100%;\r\n    height: 300px;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm\">\r\n            <app-nav-bar></app-nav-bar>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <app-chart [studentsGraphData$]=\"studentQuery.studentsGraphData$\"></app-chart>\r\n    </div>\r\n    <div class=\"row\">\r\n        <app-grid [students$]=\"studentQuery.students$\" (add)=\"onAdd()\" (edit)=\"onEdit($event)\" (delete)=\"onDelete($event)\"></app-grid>\r\n    </div>\r\n    <div class=\"row\">\r\n        <app-form *ngIf=\"formData\" [formData]=\"formData\" (updateformData)=\"updateformData($event)\"></app-form>\r\n    </div>\r\n</div>\r\n<!-- <p-chart type=\"bar\" [data]=\"data\"></p-chart> -->"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/index */ "./src/app/dashboard/state/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(studentService, studentQuery) {
        this.studentService = studentService;
        this.studentQuery = studentQuery;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.studentService.getStudents().subscribe();
    };
    DashboardComponent.prototype.onAdd = function () {
        var _this = this;
        this.nullifyFormData();
        setTimeout(function () { return _this.formData = Object(_state_index__WEBPACK_IMPORTED_MODULE_1__["createStudent"])({}); });
    };
    DashboardComponent.prototype.onEdit = function (id) {
        var _this = this;
        this.nullifyFormData();
        setTimeout(function () { return _this.formData = _this.studentQuery.getStudent(id); });
    };
    DashboardComponent.prototype.onDelete = function (id) {
        this.nullifyFormData();
        if (confirm('Are you sure to delete?')) {
            this.studentService.deleteStudent(id);
        }
    };
    DashboardComponent.prototype.updateformData = function (student) {
        this.studentService.updateStudent(student);
        this.nullifyFormData();
    };
    DashboardComponent.prototype.nullifyFormData = function () {
        this.formData = null;
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_state_index__WEBPACK_IMPORTED_MODULE_1__["StudentService"],
            _state_index__WEBPACK_IMPORTED_MODULE_1__["StudentQuery"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/form/form.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/form/form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.mandatory {\r\n    color: red;\r\n    padding-left: 2px;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/form/form.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/form/form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm\">\n  <div class=\"card rounded-0\" style=\"width:82.45rem;\">\n    <div class=\"card-header\">\n      {{studentName ? 'Student -' + studentName : 'Form'}}\n    </div>\n    <div class=\"card-body\">\n      <div>\n        <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label><span class=\"mandatory\">*</span>\n            <input type=\"text\" class=\"form-control rounded-0\" id=\"name\" placeholder=\"Name\" formControlName=\"name\">\n          </div>\n          <fieldset class=\"form-group\">\n            <div class=\"row\">\n              <legend class=\"col-form-label col-sm-2 pt-0\">Sex<span class=\"mandatory\">*</span></legend>\n              <div class=\"col-sm-10\">\n                <div class=\"form-check form-check-inline\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"sex\" id=\"inlineRadio1\" value=\"Male\" formControlName=\"sex\">\n                  <label class=\"form-check-label\" for=\"inlineRadio1\">Male</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"sex\" id=\"inlineRadio2\" value=\"Female\" formControlName=\"sex\">\n                  <label class=\"form-check-label\" for=\"inlineRadio2\">Female</label>\n                </div>\n              </div>\n            </div>\n          </fieldset>\n          <div class=\"form-group\">\n            <label for=\"standard\">Standard</label><span class=\"mandatory\">*</span>\n            <select id=\"standard\" class=\"form-control\" formControlName=\"standard\">\n              <option selected>Choose...</option>\n              <option *ngFor=\"let std of [1,2,3,4,5,6,7,8,9,10,11,12]\" [value]=\"std\">{{std}}</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"quarterly\">Quarterly %</label>\n            <input type=\"number\" class=\"form-control rounded-0\" id=\"quarterly\" placeholder=\"Quarterly\" formControlName=\"quarterlyScore\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"halfyearly\">Halfyearly %</label>\n            <input type=\"number\" class=\"form-control rounded-0\" id=\"halfyearly\" placeholder=\"Halfyearly\" formControlName=\"halfyearlyScore\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"annual\">Annual %</label>\n            <input type=\"number\" class=\"form-control rounded-0\" id=\"annual\" placeholder=\"Annual\" formControlName=\"annualScore\">\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"col-sm-10\">\n              <button type=\"submit\" class=\"btn btn-link\" [disabled]=\"formGroup.invalid\">Save</button>\n              &nbsp;|&nbsp;\n              <button type=\"button\" class=\"btn btn-link\" (click)=\"resetForm()\" [disabled]=\"!formGroup.dirty\">Reset</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/form/form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/form/form.component.ts ***!
  \**************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = /** @class */ (function () {
    function FormComponent(fb) {
        this.fb = fb;
        this.updateformData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FormComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    FormComponent.prototype.createForm = function () {
        this.formGroup = this.fb.group({
            id: [this.formData.id, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: [this.formData.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sex: [this.formData.sex, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            standard: [this.formData.standard, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            quarterlyScore: [this.formData.quarterlyScore],
            halfyearlyScore: [this.formData.halfyearlyScore],
            annualScore: [this.formData.annualScore],
        });
    };
    Object.defineProperty(FormComponent.prototype, "studentName", {
        get: function () {
            return this.formGroup.get('name').value;
        },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.resetForm = function () {
        this.formGroup.reset(__assign({}, this.formData));
    };
    FormComponent.prototype.onSubmit = function () {
        console.log(this.formGroup.value);
        this.updateformData.emit(this.formGroup.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "formData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FormComponent.prototype, "updateformData", void 0);
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/dashboard/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/dashboard/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/grid/grid.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/grid/grid.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/grid/grid.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/grid/grid.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm\">\n  <div class=\"card rounded-0\">\n    <div class=\"card-header\">\n      Grid<button class=\"btn btn-sm btn-primary pull-right\" (click)=\"add.emit()\">Add</button>\n    </div>\n    <div class=\"card-body\">\n      <p-table [value]=\"students$ | async\">\n        <ng-template pTemplate=\"header\">\n          <tr>\n            <th>Name</th>\n            <th>Sex</th>\n            <th>Standard</th>\n            <th>Quaterly %</th>\n            <th>Halfyearly %</th>\n            <th>Annual %</th>\n            <th>Action</th>\n          </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-student>\n          <tr>\n            <td>{{student.name}}</td>\n            <td>{{student.sex}}</td>\n            <td>{{student.standard}}</td>\n            <td>{{student.quarterlyScore}}/100</td>\n            <td>{{student.halfyearlyScore}}/100</td>\n            <td>{{student.annualScore}}/100</td>\n            <td>\n              <button class=\"btn btn-sm btn-link\" (click)=\"edit.emit(student.id)\">Edit</button>\n              &nbsp;|&nbsp;\n              <button class=\"btn btn-sm btn-link\" (click)=\"delete.emit(student.id)\">Delete</button>\n            </td>\n          </tr>\n        </ng-template>\n        <ng-template pTemplate=\"emptymessage\" let-columns>\n          <tr>\n            <td [attr.colspan]=\"7\">\n              No records found\n            </td>\n          </tr>\n        </ng-template>\n      </p-table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/grid/grid.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/grid/grid.component.ts ***!
  \**************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridComponent = /** @class */ (function () {
    function GridComponent() {
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    GridComponent.prototype.ngOnInit = function () {
        this.students$.subscribe(function (d) { return console.log(d); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], GridComponent.prototype, "students$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GridComponent.prototype, "add", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GridComponent.prototype, "edit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GridComponent.prototype, "delete", void 0);
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/dashboard/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.css */ "./src/app/dashboard/grid/grid.component.css")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/nav-bar/nav-bar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/nav-bar/nav-bar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".username {\r\n    color: azure;\r\n    font-weight: bold;\r\n    padding-right: 12px;\r\n}\r\n\r\n.nav-username {\r\n    line-height: 28.2px;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/nav-bar/nav-bar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/nav-bar/nav-bar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n  <div class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Dashboard</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item nav-username\">\n        <span class=\"username\">{{sessionQuery.loggedInUser$ | async}}</span>\n      </li>\n      <li class=\"nav-item\">\n        <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"logout()\">Log out</button>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/dashboard/nav-bar/nav-bar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/nav-bar/nav-bar.component.ts ***!
  \********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _login_state_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../login/state/index */ "./src/app/login/state/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(loginService, sessionQuery) {
        this.loginService = loginService;
        this.sessionQuery = sessionQuery;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.logout = function () {
        if (confirm('Are you sure to log out?')) {
            this.loginService.logout();
        }
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/dashboard/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/dashboard/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
            _login_state_index__WEBPACK_IMPORTED_MODULE_2__["SessionQuery"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/state/index.ts":
/*!******************************************!*\
  !*** ./src/app/dashboard/state/index.ts ***!
  \******************************************/
/*! exports provided: createStudent, StudentStore, StudentQuery, StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _student_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student.model */ "./src/app/dashboard/state/student.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStudent", function() { return _student_model__WEBPACK_IMPORTED_MODULE_0__["createStudent"]; });

/* harmony import */ var _student_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student.store */ "./src/app/dashboard/state/student.store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StudentStore", function() { return _student_store__WEBPACK_IMPORTED_MODULE_1__["StudentStore"]; });

/* harmony import */ var _student_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student.query */ "./src/app/dashboard/state/student.query.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StudentQuery", function() { return _student_query__WEBPACK_IMPORTED_MODULE_2__["StudentQuery"]; });

/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student.service */ "./src/app/dashboard/state/student.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return _student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"]; });







/***/ }),

/***/ "./src/app/dashboard/state/student-data.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/state/student-data.service.ts ***!
  \*********************************************************/
/*! exports provided: StudentDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDataService", function() { return StudentDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var students = [
    {
        id: Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_3__["guid"])(),
        name: 'Mohan Ram',
        sex: 'Male',
        standard: 12,
        quarterlyScore: 80,
        halfyearlyScore: 76,
        annualScore: 89
    },
    {
        id: Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_3__["guid"])(),
        name: 'Sowmiya',
        sex: 'Female',
        standard: 11,
        quarterlyScore: 90,
        halfyearlyScore: 94,
        annualScore: 97
    },
    {
        id: Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_3__["guid"])(),
        name: 'Suresh',
        sex: 'Male',
        standard: 8,
        quarterlyScore: 56,
        halfyearlyScore: 54,
        annualScore: 58
    },
    {
        id: Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_3__["guid"])(),
        name: 'Rithika',
        sex: 'Female',
        standard: 4,
        quarterlyScore: 87,
        halfyearlyScore: 67,
        annualScore: 78
    }
];
var StudentDataService = /** @class */ (function () {
    function StudentDataService() {
    }
    StudentDataService.prototype.getStudents = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(200).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(students));
    };
    StudentDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StudentDataService);
    return StudentDataService;
}());



/***/ }),

/***/ "./src/app/dashboard/state/student.model.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/state/student.model.ts ***!
  \**************************************************/
/*! exports provided: createStudent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStudent", function() { return createStudent; });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");

function createStudent(_a) {
    var _b = _a.name, name = _b === void 0 ? '' : _b, _c = _a.standard, standard = _c === void 0 ? null : _c, _d = _a.sex, sex = _d === void 0 ? null : _d, _e = _a.quarterlyScore, quarterlyScore = _e === void 0 ? 0 : _e, _f = _a.halfyearlyScore, halfyearlyScore = _f === void 0 ? 0 : _f, _g = _a.annualScore, annualScore = _g === void 0 ? 0 : _g;
    return {
        id: Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_0__["guid"])(),
        name: name,
        sex: sex,
        standard: standard,
        quarterlyScore: quarterlyScore,
        halfyearlyScore: halfyearlyScore,
        annualScore: annualScore
    };
}


/***/ }),

/***/ "./src/app/dashboard/state/student.query.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/state/student.query.ts ***!
  \**************************************************/
/*! exports provided: StudentQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentQuery", function() { return StudentQuery; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _student_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student.store */ "./src/app/dashboard/state/student.store.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentQuery = /** @class */ (function (_super) {
    __extends(StudentQuery, _super);
    function StudentQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        _this.students$ = _this.selectAll();
        _this.studentsGraphData$ = _this.selectAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_this.getStudentGraphData.bind(_this)));
        return _this;
    }
    StudentQuery.prototype.getStudent = function (id) {
        return this.getEntity(id);
    };
    StudentQuery.prototype.getStudentGraphData = function (students) {
        var names = [];
        var quarterly = [];
        var halfyearly = [];
        var annual = [];
        students.forEach(function (s) {
            names = names.concat([s.name]);
            quarterly = quarterly.concat([s.quarterlyScore]);
            halfyearly = halfyearly.concat([s.halfyearlyScore]);
            annual = annual.concat([s.annualScore]);
        });
        return {
            names: names,
            quarterly: quarterly,
            halfyearly: halfyearly,
            annual: annual
        };
    };
    StudentQuery = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_student_store__WEBPACK_IMPORTED_MODULE_2__["StudentStore"]])
    ], StudentQuery);
    return StudentQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["QueryEntity"]));



/***/ }),

/***/ "./src/app/dashboard/state/student.service.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/state/student.service.ts ***!
  \****************************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _student_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student.store */ "./src/app/dashboard/state/student.store.ts");
/* harmony import */ var _student_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student.query */ "./src/app/dashboard/state/student.query.ts");
/* harmony import */ var _student_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student-data.service */ "./src/app/dashboard/state/student-data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StudentService = /** @class */ (function () {
    function StudentService(studentDataService, studentStore, studentQuery) {
        this.studentDataService = studentDataService;
        this.studentStore = studentStore;
        this.studentQuery = studentQuery;
    }
    StudentService.prototype.getStudents = function () {
        var _this = this;
        var request = this.studentDataService.getStudents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (s) { return _this.studentStore.set(s); }));
        return this.studentQuery.isPristine ? request : Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["noop"])(); // request
    };
    StudentService.prototype.deleteStudent = function (id) {
        this.studentStore.remove(id);
    };
    StudentService.prototype.updateStudent = function (student) {
        this.studentStore.createOrReplace(student.id, __assign({}, student));
    };
    StudentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_student_data_service__WEBPACK_IMPORTED_MODULE_4__["StudentDataService"],
            _student_store__WEBPACK_IMPORTED_MODULE_2__["StudentStore"],
            _student_query__WEBPACK_IMPORTED_MODULE_3__["StudentQuery"]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "./src/app/dashboard/state/student.store.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/state/student.store.ts ***!
  \**************************************************/
/*! exports provided: StudentStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentStore", function() { return StudentStore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentStore = /** @class */ (function (_super) {
    __extends(StudentStore, _super);
    function StudentStore() {
        return _super.call(this) || this;
    }
    StudentStore = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["StoreConfig"])({
            name: 'students'
        }),
        __metadata("design:paramtypes", [])
    ], StudentStore);
    return StudentStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["EntityStore"]));



/***/ }),

/***/ "./src/app/login/login-data.service.ts":
/*!*********************************************!*\
  !*** ./src/app/login/login-data.service.ts ***!
  \*********************************************/
/*! exports provided: LoginDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDataService", function() { return LoginDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var user = {
    firstName: 'Mohan Ram',
    lastName: 'Ratnakumar',
    token: 'ab123abde'
};
var LoginDataService = /** @class */ (function () {
    function LoginDataService() {
    }
    LoginDataService.prototype.getUser = function (cred) {
        return (cred.username === 'admin' && cred.password === 'admin')
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(300).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(user)) :
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Invalid username or password');
    };
    LoginDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LoginDataService);
    return LoginDataService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\r\n    padding-top: 10%;\r\n}\r\n\r\n.btn:disabled {\r\n    cursor: not-allowed;\r\n}\r\n\r\ninput.ng-invalid.ng-dirty {\r\n    border: 1px solid red;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row login\">\n    <div class=\"col-md-6 mx-auto\">\n      <!-- form card login -->\n      <div class=\"card rounded-0\">\n        <div class=\"card-header\">\n          <h5 class=\"mb-0\">Login</h5>\n        </div>\n        <div class=\"card-body\">\n          <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\">\n              <label for=\"username\">Username</label>\n              <input type=\"text\" class=\"form-control form-control-sm rounded-0\" name=\"username\" formControlName=\"username\" placeholder=\"admin\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input type=\"password\" class=\"form-control form-control-sm rounded-0\" name=\"password\" formControlName=\"password\" placeholder=\"admin\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary btn-sm float-right\" id=\"btnLogin\" [disabled]=\"formGroup.invalid\">Login</button>\n          </form>\n        </div>\n        <!--/card-block-->\n      </div>\n      <!-- /form card login -->\n    </div>\n  </div>\n  <!--/row-->\n</div>\n<!--/container-->"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, loginService) {
        this.fb = fb;
        this.loginService = loginService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    LoginComponent.prototype.createForm = function () {
        this.formGroup = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    LoginComponent.prototype.resetForm = function () {
        this.formGroup.reset();
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginService.login(this.formGroup.value).subscribe({
            error: function (e) {
                alert(e);
                _this.resetForm();
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _login_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-data.service */ "./src/app/login/login-data.service.ts");
/* harmony import */ var _state_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/index */ "./src/app/login/state/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = /** @class */ (function () {
    function LoginService(loginDataService, sessionStore, router) {
        this.loginDataService = loginDataService;
        this.sessionStore = sessionStore;
        this.router = router;
    }
    LoginService.prototype.login = function (cred) {
        var _this = this;
        return this.loginDataService.getUser(cred).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (d) { return console.log(d); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (d) { return _this.sessionStore.login(d); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (d) { return _this.router.navigate(['/']); }));
    };
    LoginService.prototype.logout = function () {
        this.sessionStore.logout();
        this.router.navigate(['/login']);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_login_data_service__WEBPACK_IMPORTED_MODULE_3__["LoginDataService"],
            _state_index__WEBPACK_IMPORTED_MODULE_4__["SessionStore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/state/index.ts":
/*!**************************************!*\
  !*** ./src/app/login/state/index.ts ***!
  \**************************************/
/*! exports provided: initialSessionState, SessionStore, SessionQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _session_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session.model */ "./src/app/login/state/session.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialSessionState", function() { return _session_model__WEBPACK_IMPORTED_MODULE_0__["initialSessionState"]; });

/* harmony import */ var _session_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session.store */ "./src/app/login/state/session.store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionStore", function() { return _session_store__WEBPACK_IMPORTED_MODULE_1__["SessionStore"]; });

/* harmony import */ var _session_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session.query */ "./src/app/login/state/session.query.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionQuery", function() { return _session_query__WEBPACK_IMPORTED_MODULE_2__["SessionQuery"]; });






/***/ }),

/***/ "./src/app/login/state/session.model.ts":
/*!**********************************************!*\
  !*** ./src/app/login/state/session.model.ts ***!
  \**********************************************/
/*! exports provided: initialSessionState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialSessionState", function() { return initialSessionState; });
/* {
    firstName: 'Mohan Ram',
    lastName: 'Ratnakumar',
    token: 'ab123abde'
} */
var initialSessionState = {
    user: null
};


/***/ }),

/***/ "./src/app/login/state/session.query.ts":
/*!**********************************************!*\
  !*** ./src/app/login/state/session.query.ts ***!
  \**********************************************/
/*! exports provided: SessionQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionQuery", function() { return SessionQuery; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _session_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session.store */ "./src/app/login/state/session.store.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SessionQuery = /** @class */ (function (_super) {
    __extends(SessionQuery, _super);
    function SessionQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        _this.isLoggedIn$ = _this.select(function (_a) {
            var user = _a.user;
            return Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(user);
        });
        _this.loggedInUser$ = _this.select().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (_a) {
            var user = _a.user;
            return Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var _b = _a.user, f = _b.firstName, l = _b.lastName;
            return f + " " + l;
        }));
        return _this;
    }
    SessionQuery.prototype.isLoggedIn = function () {
        return Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(this.getSnapshot().user);
    };
    SessionQuery = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_session_store__WEBPACK_IMPORTED_MODULE_3__["SessionStore"]])
    ], SessionQuery);
    return SessionQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["Query"]));



/***/ }),

/***/ "./src/app/login/state/session.store.ts":
/*!**********************************************!*\
  !*** ./src/app/login/state/session.store.ts ***!
  \**********************************************/
/*! exports provided: SessionStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStore", function() { return SessionStore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _session_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session.model */ "./src/app/login/state/session.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionStore = /** @class */ (function (_super) {
    __extends(SessionStore, _super);
    function SessionStore() {
        return _super.call(this, _session_model__WEBPACK_IMPORTED_MODULE_2__["initialSessionState"]) || this;
    }
    SessionStore.prototype.login = function (user) {
        this.update({ user: user });
    };
    SessionStore.prototype.logout = function () {
        this.update(_session_model__WEBPACK_IMPORTED_MODULE_2__["initialSessionState"]);
    };
    SessionStore = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["StoreConfig"])({ name: 'session' }),
        __metadata("design:paramtypes", [])
    ], SessionStore);
    return SessionStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["Store"]));



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["enableAkitaProdMode"])(); // In dev mode, Akita will deep freeze the store's value to avoid store mutations.
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\workspace\git\akita-student-dashboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map