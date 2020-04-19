function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'issueTracker';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: provideConfig, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "provideConfig", function () {
      return provideConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_user_user_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../app/user/user.module */
    "./src/app/user/user.module.ts");
    /* harmony import */


    var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _app_issue_issue_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../app/issue/issue.module */
    "./src/app/issue/issue.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _user_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./user/login/login.component */
    "./src/app/user/login/login.component.ts");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/__ivy_ngcc__/angularx-social-login.js");
    /* harmony import */


    var _app_upload_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./../app/upload.service */
    "./src/app/upload.service.ts");

    var googleId = "609736432263-enliitqgg4nci79k91fhtl426d8uab6m.apps.googleusercontent.com";
    var facebookId = "916720005348270";
    var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_12__["AuthServiceConfig"]([{
      id: angularx_social_login__WEBPACK_IMPORTED_MODULE_12__["GoogleLoginProvider"].PROVIDER_ID,
      provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_12__["GoogleLoginProvider"](googleId)
    }, {
      id: angularx_social_login__WEBPACK_IMPORTED_MODULE_12__["FacebookLoginProvider"].PROVIDER_ID,
      provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_12__["FacebookLoginProvider"](facebookId)
    }]);

    function provideConfig() {
      return config;
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_12__["AuthServiceConfig"],
        useFactory: provideConfig
      }, _app_upload_service__WEBPACK_IMPORTED_MODULE_13__["UploadService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_12__["SocialLoginModule"].initialize(config), _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _app_user_user_module__WEBPACK_IMPORTED_MODULE_7__["UserModule"], _app_issue_issue_module__WEBPACK_IMPORTED_MODULE_9__["IssueModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot([{
        path: 'login',
        component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        pathMatch: 'full'
      }, {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: '*',
        component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
      }, {
        path: '**',
        component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_12__["SocialLoginModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _app_user_user_module__WEBPACK_IMPORTED_MODULE_7__["UserModule"], _app_issue_issue_module__WEBPACK_IMPORTED_MODULE_9__["IssueModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_12__["SocialLoginModule"].initialize(config), _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _app_user_user_module__WEBPACK_IMPORTED_MODULE_7__["UserModule"], _app_issue_issue_module__WEBPACK_IMPORTED_MODULE_9__["IssueModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot([{
            path: 'login',
            component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            pathMatch: 'full'
          }, {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
          }, {
            path: '*',
            component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
          }, {
            path: '**',
            component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
          }])],
          providers: [{
            provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_12__["AuthServiceConfig"],
            useFactory: provideConfig
          }, _app_upload_service__WEBPACK_IMPORTED_MODULE_13__["UploadService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.service.ts":
  /*!********************************!*\
    !*** ./src/app/app.service.ts ***!
    \********************************/

  /*! exports provided: AppService */

  /***/
  function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);

    var AppService = /*#__PURE__*/function () {
      // private url = 'http://localhost:3000';
      function AppService(http) {
        var _this = this;

        _classCallCheck(this, AppService);

        this.http = http;
        this.url = 'http://api.techway.xyz';

        this.getUserInfoFromLocalstorage = function () {
          return JSON.parse(localStorage.getItem('userInfo'));
        }; // end getUserInfoFromLocalstorage


        this.setUserInfoInLocalStorage = function (data) {
          localStorage.setItem('userInfo', JSON.stringify(data));
        };

        this.deleteUserInfoInLocalStorage = function () {
          localStorage.removeItem('userInfo');
        };

        this.getMyIssues = function (data) {
          return _this.http.get("".concat(_this.url, "/api/v1/issues/my/").concat(data.userId, "?skip=").concat(data.skip, "&authToken=").concat(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken')));
        };
      }

      _createClass(AppService, [{
        key: "signupFunction",
        value: function signupFunction(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('firstName', data.firstName).set('lastName', data.lastName).set('mobileNumber', data.mobileNumber).set('email', data.email).set('password', data.password).set('countryCode', data.countryCode);
          return this.http.post("".concat(this.url, "/api/v1/users/signup"), params);
        } // end of signupFunction function.

      }, {
        key: "signinFunction",
        value: function signinFunction(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('email', data.email).set('password', data.password);
          return this.http.post(this.url + '/api/v1/users/login', params);
        } // end of signinFunction function.

      }, {
        key: "logout",
        value: function logout() {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
          console.log(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
          return this.http.post("".concat(this.url, "/api/v1/users/logout"), params);
        } // end logout fun

      }, {
        key: "socialLogin",
        value: function socialLogin(email) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('email', email);
          return this.http.post(this.url + '/api/v1/users/social/login', params);
        }
      }, {
        key: "getAllIssues",
        value: function getAllIssues(data) {
          return this.http.get("".concat(this.url, "/api/v1/issues/all/").concat(data.userId, "?authToken=").concat(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'), "&skip=").concat(data.skip));
        }
      }, {
        key: "createIssue",
        value: function createIssue(createObject) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('title', createObject.title).set('description', createObject.description).set('assignId', createObject.assigneeId).set('reporterName', createObject.reporterName).set('attachments', createObject.attachments).set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
          return this.http.post("".concat(this.url, "/api/v1/issues/create/").concat(createObject.userId), params);
        }
      }, {
        key: "allUsers",
        value: function allUsers(data) {
          return this.http.get("".concat(this.url, "/api/v1/users/all/users?authToken=").concat(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'), "&skip=").concat(data.skip));
        }
      }, {
        key: "editIssue",
        value: function editIssue(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('title', data.title).set('description', data.description).set('assigneeId', data.assigneeId).set('attachments', data.attachments).set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
          return this.http.post("".concat(this.url, "/api/v1/issues/edit/").concat(data.issueId), params);
        }
      }, {
        key: "getComments",
        value: function getComments(commentObject) {
          return this.http.get("".concat(this.url, "/api/v1/comments/all/").concat(commentObject.issueId, "?skip=").concat(commentObject.skip, "&authToken=").concat(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken')));
        }
      }, {
        key: "addComments",
        value: function addComments(commentObject) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('comment', commentObject.comment).set('name', commentObject.name).set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
          return this.http.post("".concat(this.url, "/api/v1/comments/add/").concat(commentObject.issueId), params);
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers(data) {
          return this.http.get("".concat(this.url, "/api/v1/users/all/users?skip=").concat(data.skip, "&authToken=").concat(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken')));
        }
      }, {
        key: "addWatchers",
        value: function addWatchers(watcherObject) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('userId', watcherObject.userId).set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
          return this.http.post("".concat(this.url, "/api/v1/issues/addwatchers/").concat(watcherObject.issueId), params);
        }
      }, {
        key: "getWatchers",
        value: function getWatchers(watcherObject) {
          return this.http.get("".concat(this.url, "/api/v1/issues/allwatchers/").concat(watcherObject.issueId, "?skip=").concat(watcherObject.skip, "&authToken=").concat(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken')));
        }
      }, {
        key: "getSingleIssue",
        value: function getSingleIssue(issueId) {
          return this.http.get("".concat(this.url, "/api/v1/issues/single/").concat(issueId, "?&authToken=").concat(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken')));
        }
      }, {
        key: "getSerachResults",
        value: function getSerachResults(data) {
          return this.http.get("".concat(this.url, "/api/v1/issues/searched?searchString=").concat(data.searchString, "?skip=").concat(data.skip, "&authToken=").concat(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken')));
        }
      }, {
        key: "markCompleted",
        value: function markCompleted(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
          return this.http.post("".concat(this.url, "/api/v1/issues/complete/").concat(data.issueId), params);
        }
      }, {
        key: "recoverPass",
        value: function recoverPass(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('email', data.email);
          return this.http.post(this.url + '/api/v1/users/recover/password', params);
        }
      }, {
        key: "changePass",
        value: function changePass(data) {
          var authtok = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken');
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('currPassword', data.oldPass).set('newPassword', data.newPass);
          return this.http.post(this.url + "/api/v1/users/change/password/".concat(data.userId, "?authToken=").concat(authtok), params);
        }
      }]);

      return AppService;
    }();

    AppService.ɵfac = function AppService_Factory(t) {
      return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppService,
      factory: AppService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/issue-socket.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/issue-socket.service.ts ***!
    \*****************************************/

  /*! exports provided: IssueSocketService */

  /***/
  function srcAppIssueSocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IssueSocketService", function () {
      return IssueSocketService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var IssueSocketService = /*#__PURE__*/function () {
      function IssueSocketService(http) {
        var _this2 = this;

        _classCallCheck(this, IssueSocketService);

        this.http = http;
        this.url = 'http://api.techway.xyz';

        this.registerUser = function (data) {
          console.log("Registering user");

          _this2.socket.emit('register', data);
        };

        this.issueAlert = function (data) {
          _this2.socket.emit('assignee-alert', data); // end Observable

        };

        this.directAlert = function () {
          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this2.socket.on(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('receiverId'), function (data) {
              observer.next(data);
            }); // end Socket

          }); // 
        };

        this.editAlert = function (data) {
          _this2.socket.emit('edit-alert', data);
        };

        this.commentAlert = function (data) {
          _this2.socket.emit('comment-alert', data);
        };

        this.disconnect = function (data) {
          _this2.socket.emit('disconnect', data);
        }; // connection is being created.
        // that handshake


        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.url);
      } //error handler


      _createClass(IssueSocketService, [{
        key: "handleError",
        value: function handleError(err) {
          var errorMessage = '';

          if (err.error instanceof Error) {
            errorMessage = "An error occurred: ".concat(err.error.message);
          } else {
            errorMessage = "Server returned code: ".concat(err.status, ", error message is: ").concat(err.message);
          } // end condition *if


          console.error(errorMessage);
          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]["throw"](errorMessage);
        } // END handleError

      }]);

      return IssueSocketService;
    }();

    IssueSocketService.ɵfac = function IssueSocketService_Factory(t) {
      return new (t || IssueSocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    IssueSocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: IssueSocketService,
      factory: IssueSocketService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IssueSocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/issue/create/create.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/issue/create/create.component.ts ***!
    \**************************************************/

  /*! exports provided: CreateComponent */

  /***/
  function srcAppIssueCreateCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateComponent", function () {
      return CreateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-build-classic */
    "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _issue_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../issue-socket.service */
    "./src/app/issue-socket.service.ts");
    /* harmony import */


    var src_app_upload_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/upload.service */
    "./src/app/upload.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["id"];

    function CreateComponent_div_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var file_r66 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r66.name);
      }
    }

    function CreateComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Uploading your files");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateComponent_option_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r67 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", user_r67.firstName, " ", user_r67.lastName, ",", user_r67.userId, " ");
      }
    }

    function CreateComponent_button_43_Template(rf, ctx) {
      if (rf & 1) {
        var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_button_43_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r68.loadMoreUsers();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Load More Users");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateComponent_button_44_Template(rf, ctx) {
      if (rf & 1) {
        var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_button_44_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r70.loadPreviousUsers();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Load Previous Users");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CreateComponent = /*#__PURE__*/function () {
      function CreateComponent(http, appService, _route, toastr, router, socketService, uploadService) {
        var _this3 = this;

        _classCallCheck(this, CreateComponent);

        this.http = http;
        this.appService = appService;
        this._route = _route;
        this.toastr = toastr;
        this.router = router;
        this.socketService = socketService;
        this.uploadService = uploadService;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__;
        this.description = "Type your description here";
        this.userId = this._route.snapshot.params.userId;
        this.attachment = '';
        this.Folder = 'attachments/';
        this.Bucket = 'attachments-issue';
        this.skip = 0;
        this.allUsers = [];

        this.upload = function () {
          _this3.loaded = false;

          for (var i = 0; i < _this3.selectedFiles.length; i++) {
            var file = _this3.selectedFiles.item(i);

            _this3.toastr.success(i + 1 + " Files uploaded successfully");
          }
        };

        this.selectFile = function (event) {
          _this3.selectedFiles = event.target.files;
        };

        this.postIssueFunction = function () {
          if (!_this3.user) {
            _this3.toastr.show("Please assign the issue to someone.");
          }

          if (_this3.selectedFiles) {
            for (var i = 0; i < _this3.selectedFiles.length; i++) {
              _this3.attachment = _this3.attachment + ",".concat(_this3.Folder).concat(_this3.selectedFiles[i].name);
            }
          }

          console.log(_this3.attachment);
          console.log("attachment is " + _this3.attachment);
          console.log(_this3.user);

          var arr = _this3.user.split(',');

          console.log(arr);
          console.log("user" + arr[1]);
          var postIssueObject = {
            title: _this3.title,
            description: _this3.description,
            attachments: _this3.attachment,
            reporterName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('receiverName'),
            reporterId: _this3.userId,
            assigneeId: arr[1],
            userId: _this3.userId
          };

          _this3.appService.createIssue(postIssueObject).subscribe(function (apiResponse) {
            console.log(apiResponse);

            _this3.toastr.success("Issue Created Successfully...");

            var data = {
              title: apiResponse.data.title,
              reporterName: apiResponse.data.reporterName,
              assigneeId: arr[1],
              issueId: apiResponse.data.issueId
            };

            _this3.socketService.issueAlert(data);

            setTimeout(function () {
              _this3.router.navigate(["dashboard/".concat(_this3.userId)]);
            }, 2000);
          }, function (err) {
            if (err.status === 404) {
              _this3.toastr.warning("Issue Creation Failed.");
            }
          });
        };

        this.goBack = function () {
          _this3.router.navigate(["/dashboard/".concat(_this3.userId)]);
        };

        this.getAllUsers = function () {
          var data = {
            skip: 0
          };

          _this3.appService.allUsers(data).subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
              if (apiResponse.data.length < 10) {
                _this3.loadMoreUsersButton = false;
              } else {
                _this3.loadMoreUsersButton = true;
              }

              _this3.allUsers = apiResponse.data;
              console.log(_this3.allUsers);
            }
          });
        };

        this.submit = function () {
          console.log(_this3.description);
        };

        this.loadMoreUsers = function () {
          _this3.skip++;
          var data = {
            skip: 10 * _this3.skip
          };

          _this3.appService.allUsers(data).subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
              if (apiResponse.data.length < 10) {
                _this3.loadMoreUsersButton = false;
              }

              _this3.loadPreviousUsersButton = true;
              _this3.allUsers = apiResponse.data;
              console.log(_this3.allUsers);
            } else {
              _this3.skip--;
            }
          });
        };

        this.loadPreviousUsers = function () {
          var data = {
            skip: 10 * (_this3.skip - 1)
          };

          _this3.appService.allUsers(data).subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
              if (_this3.skip == 0) {
                _this3.loadMoreUsersButton = true;
                _this3.loadPreviousUsersButton = false;
              }

              _this3.skip--;
              console.log("skip is" + _this3.skip);
              _this3.allUsers = apiResponse.data;
              console.log(_this3.allUsers);
            }
          });
        };
      }

      _createClass(CreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllUsers();
        }
      }]);

      return CreateComponent;
    }();

    CreateComponent.ɵfac = function CreateComponent_Factory(t) {
      return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_issue_socket_service__WEBPACK_IMPORTED_MODULE_7__["IssueSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_upload_service__WEBPACK_IMPORTED_MODULE_8__["UploadService"]));
    };

    CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateComponent,
      selectors: [["app-create"]],
      viewQuery: function CreateComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.id = _t.first);
        }
      },
      decls: 50,
      vars: 12,
      consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], ["href", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "container"], [1, "row", 2, "text-align", "left"], [1, "col-md-12"], ["enctype", "multipart/form-data"], ["createIssueForm", "ngForm"], [1, "form-group"], [1, "heading"], [1, "heading1"], ["type", "text", "name", "issueTitle", "placeholder", "Enter issue title", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["titlee", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["name", "desc", "placeholder", "Type your description here...", 3, "ngModel", "editor", "ngModelChange"], ["type", "file", "name", "file", "multiple", "", 1, "form-control", 3, "change"], [1, "btn", "btn-success", 3, "disabled", "click"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["name", "seluser", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", ""], ["type", "button", "class", "btn btn-dark btn-sm", 3, "click", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "disabled", "click"], ["postbutton", ""], ["type", "button", 1, "btn", "btn-dark", "btn-sm", 3, "click"]],
      template: function CreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Issue Tracker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_Template_a_click_8_listener() {
            return ctx.goBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Go back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Issue Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Issue Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Issue title is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Issue Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ckeditor", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_ckeditor_ngModelChange_28_listener($event) {
            return ctx.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Issue Attachments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateComponent_Template_input_change_32_listener($event) {
            return ctx.selectFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_33_listener() {
            return ctx.upload();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CreateComponent_div_35_Template, 3, 1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CreateComponent_div_36_Template, 3, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Assign To");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "select", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_select_ngModelChange_40_listener($event) {
            return ctx.user = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CreateComponent_option_42_Template, 2, 3, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, CreateComponent_button_43_Template, 2, 0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, CreateComponent_button_44_Template, 2, 0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 27, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

            var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);

            ctx.postIssueFunction();
            return _r65.disabled = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Post Issue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r58.valid || _r58.pristine);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.description)("editor", ctx.Editor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.selectedFiles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedFiles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allUsers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadMoreUsersButton == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadPreviousUsersButton == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r57.form.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__["CKEditorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"]],
      styles: [".issueview[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n    border-color:black;\r\n    border-style:solid;\r\n}\r\n.commentsview[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n    border-color:black;\r\n    border-style:solid;}\r\n.watchersview[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n    border-color:black;\r\n    border-style:solid;\r\n}\r\n.comment[_ngcontent-%COMP%]{\r\n    font-size: x-small;\r\n    border-color: olivedrab;\r\n    border-radius: 0ch;\r\n    padding:2px;\r\n}\r\n.comment1[_ngcontent-%COMP%]{\r\n    font-size:medium;\r\n    color: black;\r\n    border-color:green ;\r\n    padding:1px;\r\n    border-style: initial;\r\n\r\n}\r\n.back[_ngcontent-%COMP%]{\r\n    background-color: burlywood;\r\n}\r\n.heading[_ngcontent-%COMP%]{\r\n    color:orangered;\r\n    font-weight:bold;\r\n    font-family:'Times New Roman', Times, serif;\r\n    font-size:x-large;\r\n    text-align: center;\r\n    background-color: black;\r\n    padding:5px;\r\n}\r\n.commentbutton[_ngcontent-%COMP%]{\r\n    float: center;\r\n}\r\n.heading1[_ngcontent-%COMP%]{\r\n    color:orangered;\r\n    font-weight:bold;\r\n    font-family:'Times New Roman', Times, serif;\r\n    font-size:large;\r\n    text-align: center;\r\n    padding:5px;\r\n}\r\n.p1[_ngcontent-%COMP%]{\r\n    color:black;\r\n    font-weight:bold;\r\n    font-family:'Times New Roman', Times, serif;\r\n    font-size:medium;\r\n    padding:5px;\r\n}\r\n.p2[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWUvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCLENBQUM7QUFDdkI7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gscUJBQXFCOztBQUV6QjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDJDQUEyQztJQUMzQyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsMkNBQTJDO0lBQzNDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLDJDQUEyQztJQUMzQyxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9pc3N1ZS9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXNzdWV2aWV3e1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICBib3JkZXItY29sb3I6YmxhY2s7XHJcbiAgICBib3JkZXItc3R5bGU6c29saWQ7XHJcbn1cclxuLmNvbW1lbnRzdmlld3tcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOmJsYWNrO1xyXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkO31cclxuLndhdGNoZXJzdmlld3tcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOmJsYWNrO1xyXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG59XHJcbi5jb21tZW50e1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBvbGl2ZWRyYWI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwY2g7XHJcbiAgICBwYWRkaW5nOjJweDtcclxufVxyXG4uY29tbWVudDF7XHJcbiAgICBmb250LXNpemU6bWVkaXVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLWNvbG9yOmdyZWVuIDtcclxuICAgIHBhZGRpbmc6MXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBpbml0aWFsO1xyXG5cclxufVxyXG4uYmFja3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcclxufVxyXG4uaGVhZGluZ3tcclxuICAgIGNvbG9yOm9yYW5nZXJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOngtbGFyZ2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6NXB4O1xyXG59XHJcbi5jb21tZW50YnV0dG9ue1xyXG4gICAgZmxvYXQ6IGNlbnRlcjtcclxufVxyXG4uaGVhZGluZzF7XHJcbiAgICBjb2xvcjpvcmFuZ2VyZWQ7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6J1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTpsYXJnZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG59XHJcblxyXG4ucDF7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOm1lZGl1bTtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG59XHJcbi5wMntcclxuICAgIHBhZGRpbmc6NXB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create',
          templateUrl: './create.component.html',
          styleUrls: ['./create.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _issue_socket_service__WEBPACK_IMPORTED_MODULE_7__["IssueSocketService"]
        }, {
          type: src_app_upload_service__WEBPACK_IMPORTED_MODULE_8__["UploadService"]
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['id', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/issue/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/issue/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppIssueDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_issue_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/issue-socket.service */
    "./src/app/issue-socket.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function DashboardComponent_form_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_form_21_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.sortByDate();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SortDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_form_21_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.sortByTitle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SortTitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_form_21_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.sortByReporterName();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "SortReporter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_form_21_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.sortByStatus();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "SortStatus");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_form_21_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.searchString = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_form_21_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.searchIssue();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Search");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchString);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/issueview", a1];
    };

    function DashboardComponent_tbody_35_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "open");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var issue_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](issue_r12.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](issue_r12.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, issue_r12.createdOn));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](issue_r12.reporterName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, issue_r12.issueId));
      }
    }

    function DashboardComponent_tbody_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_tbody_35_tr_1_Template, 13, 9, "tr", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var issue_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", issue_r12 !== null);
      }
    }

    function DashboardComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_li_43_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_li_43_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.getPreviousIssues();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_li_44_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_li_44_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.getMoreIssues();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_li_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_li_44_a_1_Template, 2, 0, "a", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.issuesLoading == false);
      }
    }

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(router, _route, appService, toastr, socketService) {
        var _this4 = this;

        _classCallCheck(this, DashboardComponent);

        this.router = router;
        this._route = _route;
        this.appService = appService;
        this.toastr = toastr;
        this.socketService = socketService;
        this.userId = this._route.snapshot.params.userId;
        this.skipCount = 0;
        this.nextButton = true;
        this.previousButton = false;
        this.issuesLoading = true;
        this.clientName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('receiverName');

        this.getAllIssue = function () {
          _this4.issuesLoading = true;
          var data = {
            userId: _this4.userId,
            skip: 0
          };

          _this4.appService.getAllIssues(data).subscribe(function (apiResponse) {
            _this4.issuesLoading = false;

            if (apiResponse.data.length === 0) {
              _this4.nextButton = false;

              _this4.toastr.show("No issues found");
            }

            if (apiResponse.data.length < 10) {
              _this4.nextButton = false;
            }

            _this4.allIssues = apiResponse.data;
          }, function (err) {
            _this4.toastr.error("No issues Found");

            _this4.issuesLoading = false;
          });
        };

        this.getMoreIssues = function () {
          _this4.skipCount++;
          _this4.issuesLoading = true;
          var data = {
            userId: _this4.userId,
            skip: 10 * _this4.skipCount
          };
          console.log("skip is" + data.skip);

          _this4.appService.getAllIssues(data).subscribe(function (apiResponse) {
            _this4.issuesLoading = false;

            if (apiResponse.data.length < 10) {
              _this4.nextButton = false;
              _this4.previousButton = true;
            }

            if (apiResponse.data.length === 0) {
              _this4.nextButton = false;

              _this4.toastr.show("No issues found");

              _this4.previousButton = true;
            }

            _this4.previousButton = true;
            console.log(apiResponse);
            _this4.allIssues = apiResponse.data;
            console.log(_this4.allIssues);
          }, function (err) {
            _this4.toastr.error("No issues found");

            _this4.skipCount--;
            _this4.issuesLoading = false;
          });
        };

        this.goToCreateissue = function () {
          _this4.router.navigate(["/create/".concat(_this4.userId)]);
        };

        this.goToIssueview = function () {
          _this4.router.navigate(["/create/".concat(_this4.issueId)]);
        };

        this.goToLogout = function () {
          var data = {
            userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('receiverId'),
            name: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('receiverName')
          };

          _this4.appService.logout().subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              _this4.toastr.success("Logged out successfully...");

              _this4.socketService.disconnect(data);

              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].deleteAll();
              setTimeout(function () {
                _this4.router.navigate(['/login']);
              }, 2000);
            } else {
              _this4.toastr.warning("Logout failed.");
            }
          });
        };

        this.sortByDate = function () {
          _this4.allIssues.sort(function (a, b) {
            if (a !== null && b !== null) {
              var dateA = a.createdOn,
                  dateB = b.createdOn;

              if (dateA < dateB) {
                return -1;
              }

              if (dateA > dateB) {
                return 1;
              }

              return 0;
            }
          });
        };

        this.sortByTitle = function () {
          _this4.allIssues.sort(function (a, b) {
            if (a !== null && b !== null) {
              var titleA = a.title.toLowerCase(),
                  titleB = b.title.toLowerCase();

              if (titleA < titleB) {
                return -1;
              }

              if (titleA > titleB) {
                return 1;
              }

              return 0;
            }
          });
        };

        this.sortByReporterName = function () {
          _this4.allIssues.sort(function (a, b) {
            if (a !== null && b !== null) {
              var nameA = a.reporterName,
                  nameB = b.reporterName;

              if (nameA < nameB) {
                return -1;
              }

              if (nameA > nameB) {
                return 1;
              }

              return 0;
            }
          });
        };

        this.sortByStatus = function () {
          _this4.allIssues.sort(function (a, b) {
            if (a !== null && b !== null) {
              var statusA = a.status,
                  statusB = b.status;

              if (statusA < statusB) {
                return -1;
              }

              if (statusA > statusB) {
                return 1;
              }

              return 0;
            }
          });
        };

        this.searchIssue = function () {
          console.log(_this4.searchString);

          _this4.router.navigate(['/search'], {
            queryParams: {
              string: _this4.searchString
            }
          });
        };

        this.goToMyissues = function () {
          _this4.router.navigate(["/myissues/".concat(_this4.userId)]);
        };

        this.getPreviousIssues = function () {
          var data = {
            skip: 10 * (_this4.skipCount - 1),
            userId: _this4.userId
          };

          _this4.appService.getAllIssues(data).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              _this4.skipCount--;

              if (_this4.skipCount == 0) {
                _this4.previousButton = false;
                _this4.nextButton = true;
              }

              console.log(apiResponse);
              _this4.allIssues = apiResponse.data;
              console.log(_this4.allIssues);
            } else {
              _this4.toastr.show("No issues found");

              _this4.nextButton = false;
            }
          });
        };

        this.onClickToastr = function (data) {
          console.log("toastr clicked" + data.msg);

          _this4.router.navigate(["/issueview/".concat(data.issueId)], {
            queryParams: {
              Notification: true
            }
          });
        };

        this.goToChangePassword = function () {
          _this4.router.navigate(["/change/password/".concat(_this4.userId)]);
        };
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.getAllIssue();
          this.socketService.directAlert().subscribe(function (data) {
            _this5.toastr.show(data.msg, 'Notification', {
              tapToDismiss: true,
              disableTimeOut: true,
              closeButton: true
            }).onTap.pipe().subscribe(function () {
              return _this5.onClickToastr(data);
            }); //


            _this5.getAllIssue();

            console.log(data);
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_issue_socket_service__WEBPACK_IMPORTED_MODULE_5__["IssueSocketService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 45,
      vars: 6,
      consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], ["href", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "container"], [1, "heading"], [1, "navbar", "navbar-light", "bg-light"], ["class", "form-inline", 4, "ngIf"], [1, "table", "table-borderless", "table-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["style", "text-align: center;", 4, "ngIf"], [1, "btn", "btn-dark", 2, "float", "right", 3, "click"], ["aria-label", "Page navigation example"], [1, "pagination", "justify-content-center"], ["class", "page-item ", 4, "ngIf"], ["class", "page-item", 4, "ngIf"], [1, "form-inline"], [1, "btn", "btn-outline-success", 3, "click"], ["type", "search", "name", "search", "placeholder", "Search for an issue", "aria-label", "search", 1, "form-control", "mr-sm-2", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-outline-success", "my-2", "my-sm-0", 3, "click"], [4, "ngIf"], [1, "nav-link", 3, "routerLink"], [2, "text-align", "center"], ["role", "status", 1, "spinner-grow", "text-primary"], [1, "sr-only"], ["role", "status", 1, "spinner-grow", "text-secondary"], ["role", "status", 1, "spinner-grow", "text-success"], ["role", "status", 1, "spinner-grow", "text-danger"], ["role", "status", 1, "spinner-grow", "text-warning"], ["role", "status", 1, "spinner-grow", "text-info"], ["role", "status", 1, "spinner-grow", "text-light"], ["role", "status", 1, "spinner-grow", "text-dark"], [1, "page-item"], ["type", "button", 1, "page-link", 3, "click"], ["type", "button", "class", "page-link", 3, "click", 4, "ngIf"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_8_listener() {
            return ctx.goToMyissues();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "My Issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_11_listener() {
            return ctx.goToLogout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_14_listener() {
            return ctx.goToChangePassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nav", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DashboardComponent_form_21_Template, 15, 1, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Reporter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "View");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, DashboardComponent_tbody_35_Template, 2, 1, "tbody", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, DashboardComponent_div_36_Template, 25, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_38_listener() {
            return ctx.goToCreateissue();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Create+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nav", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, DashboardComponent_li_43_Template, 3, 0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, DashboardComponent_li_44_Template, 2, 1, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.clientName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.issuesLoading == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allIssues);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.issuesLoading == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previousButton === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nextButton === true);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
      styles: [".pagination.fixed[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 0;\r\n    right: 0;\r\n    width: 300px;\r\n    border: 3px solid #73AD21;\r\n  }\r\n  .heading[_ngcontent-%COMP%]{\r\n    color:orangered;\r\n    font-weight:bold;\r\n    font-family:'Times New Roman', Times, serif;\r\n    font-size:x-large;\r\n    text-align: center;\r\n    background-color: black;\r\n    padding:5px;\r\n}\r\n  .issueview[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n    border-color:black;\r\n    border-style:solid;\r\n}\r\n  .commentsview[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n    border-color:black;\r\n    border-style:solid;}\r\n  .watchersview[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n    border-color:black;\r\n    border-style:solid;\r\n}\r\n  .comment[_ngcontent-%COMP%]{\r\n    font-size: x-small;\r\n    border-color: olivedrab;\r\n    border-radius: 0ch;\r\n    padding:2px;\r\n}\r\n  .comment1[_ngcontent-%COMP%]{\r\n    font-size:medium;\r\n    color: black;\r\n    border-color:green ;\r\n    padding:1px;\r\n    border-style: initial;\r\n\r\n}\r\n  .back[_ngcontent-%COMP%]{\r\n    background-color: burlywood;\r\n}\r\n  .commentbutton[_ngcontent-%COMP%]{\r\n    float: center;\r\n}\r\n  .heading1[_ngcontent-%COMP%]{\r\n    color:orangered;\r\n    font-weight:bold;\r\n    font-family:'Times New Roman', Times, serif;\r\n    font-size:large;\r\n    text-align: center;\r\n    padding:5px;\r\n}\r\n  .p1[_ngcontent-%COMP%]{\r\n    color:black;\r\n    font-weight:bold;\r\n    font-family:'Times New Roman', Times, serif;\r\n    font-size:medium;\r\n    padding:5px;\r\n}\r\n  .p2[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxRQUFRO0lBQ1IsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiwyQ0FBMkM7SUFDM0MsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsV0FBVztBQUNmO0VBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtFQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0IsQ0FBQztFQUN2QjtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0VBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7RUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxxQkFBcUI7O0FBRXpCO0VBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7RUFFQTtJQUNJLGFBQWE7QUFDakI7RUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsMkNBQTJDO0lBQzNDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0VBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLDJDQUEyQztJQUMzQyxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0VBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9pc3N1ZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnaW5hdGlvbi5maXhlZCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM3M0FEMjE7XHJcbiAgfVxyXG4gIC5oZWFkaW5ne1xyXG4gICAgY29sb3I6b3JhbmdlcmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGZvbnQtZmFtaWx5OidUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6eC1sYXJnZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbn1cclxuLmlzc3Vldmlld3tcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOmJsYWNrO1xyXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG59XHJcbi5jb21tZW50c3ZpZXd7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGJvcmRlci1jb2xvcjpibGFjaztcclxuICAgIGJvcmRlci1zdHlsZTpzb2xpZDt9XHJcbi53YXRjaGVyc3ZpZXd7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGJvcmRlci1jb2xvcjpibGFjaztcclxuICAgIGJvcmRlci1zdHlsZTpzb2xpZDtcclxufVxyXG4uY29tbWVudHtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgIGJvcmRlci1jb2xvcjogb2xpdmVkcmFiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMGNoO1xyXG4gICAgcGFkZGluZzoycHg7XHJcbn1cclxuLmNvbW1lbnQxe1xyXG4gICAgZm9udC1zaXplOm1lZGl1bTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1jb2xvcjpncmVlbiA7XHJcbiAgICBwYWRkaW5nOjFweDtcclxuICAgIGJvcmRlci1zdHlsZTogaW5pdGlhbDtcclxuXHJcbn1cclxuLmJhY2t7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XHJcbn1cclxuXHJcbi5jb21tZW50YnV0dG9ue1xyXG4gICAgZmxvYXQ6IGNlbnRlcjtcclxufVxyXG4uaGVhZGluZzF7XHJcbiAgICBjb2xvcjpvcmFuZ2VyZWQ7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6J1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTpsYXJnZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG59XHJcblxyXG4ucDF7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOm1lZGl1bTtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG59XHJcbi5wMntcclxuICAgIHBhZGRpbmc6NXB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: src_app_issue_socket_service__WEBPACK_IMPORTED_MODULE_5__["IssueSocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/issue/edit/edit.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/issue/edit/edit.component.ts ***!
    \**********************************************/

  /*! exports provided: EditComponent */

  /***/
  function srcAppIssueEditEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditComponent", function () {
      return EditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-build-classic */
    "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../upload.service */
    "./src/app/upload.service.ts");
    /* harmony import */


    var src_app_issue_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/issue-socket.service */
    "./src/app/issue-socket.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EditComponent_div_31_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponent_div_31_div_1_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85);

          var url_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r83.deleteFile(url_r81);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u2613");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var url_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](url_r81);
      }
    }

    function EditComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditComponent_div_31_div_1_Template, 4, 1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var url_r81 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", url_r81 !== "");
      }
    }

    function EditComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var file_r87 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r87.name);
      }
    }

    function EditComponent_option_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r88 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", user_r88.firstName, " ", user_r88.lastName, ",", user_r88.userId, " ");
      }
    }

    function EditComponent_button_43_Template(rf, ctx) {
      if (rf & 1) {
        var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponent_button_43_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r89.loadMoreUsers();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "LoadMore");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditComponent_button_44_Template(rf, ctx) {
      if (rf & 1) {
        var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponent_button_44_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r91.loadPreviousUsers();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Load Previous Users");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var EditComponent = /*#__PURE__*/function () {
      function EditComponent(router, _route, appService, toastr, upload, socket) {
        var _this6 = this;

        _classCallCheck(this, EditComponent);

        this.router = router;
        this._route = _route;
        this.appService = appService;
        this.toastr = toastr;
        this.upload = upload;
        this.socket = socket;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
        this.issueId = this._route.snapshot.params.issueId;
        this.skip = 0;
        this.Folder = 'attachments/';
        this.Bucket = 'attachments-issue';

        this.getIssue = function () {
          _this6.appService.getSingleIssue(_this6.issueId).subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status === 200) {
              _this6.title = apiResponse.data[0].title;
              _this6.description = apiResponse.data[0].description;
              _this6.reporterName = apiResponse.data[0].reporterName;
              _this6.date = apiResponse.data[0].createdOn;
              _this6.attachments = apiResponse.data[0].attachments;
              _this6.assigneeArray = apiResponse.data[0].assigneeId;
              _this6.watchers = apiResponse.data[0].watchers;
              _this6.reporterId = apiResponse.data[0].reporterId;
            } else {
              _this6.toastr.show("Failed to fetch issue details");
            }
          });
        };

        this.editIssue = function () {
          if (_this6.user) {
            var arr = _this6.user.split(',');

            _this6.assigneeArray.push(arr[1]);
          }

          var data = {
            title: _this6.title,
            description: _this6.description,
            attachments: _this6.attachments,
            assigneeId: _this6.assigneeArray,
            issueId: _this6.issueId,
            editorName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('receiverName'),
            watchers: _this6.watchers,
            reporterId: _this6.reporterId,
            editorId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('receiverId'),
            receiverId: _this6.user
          };
          console.log(data);

          _this6.appService.editIssue(data).subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
              _this6.toastr.success("Issue edited successfully...");

              _this6.socket.editAlert(data);

              _this6.router.navigate(["/issueview/".concat(_this6.issueId)]);
            } else {
              _this6.toastr.warning("Failed to edit issue.");
            }
          });
        };

        this.selectFile = function (event) {
          _this6.selectedFiles = event.target.files;
        };

        this.goBack = function () {
          _this6.router.navigate(["/issueview/".concat(_this6.issueId)]);
        };

        this.getAllUsers = function () {
          var data = {
            skip: 0
          };

          _this6.appService.allUsers(data).subscribe(function (apiResponse) {
            if (apiResponse.data.length < 10) {
              _this6.userButton = false;
            } else {
              _this6.userButton = true;
            }

            _this6.allUsers = apiResponse.data;
            console.log(_this6.allUsers);
          });
        };

        this.loadMoreUsers = function () {
          _this6.skip++;
          var data = {
            skip: 10 * _this6.skip
          };

          _this6.appService.allUsers(data).subscribe(function (apiResponse) {
            if (apiResponse.status = 200) {
              if (apiResponse.data.length < 10) {
                _this6.userButton = false;
                _this6.previousButton = true;
              } else {
                _this6.userButton = true;
                _this6.previousButton = true;
              }

              _this6.allUsers = apiResponse.data;
              console.log(_this6.allUsers);
            } else {
              _this6.skip--;
            }
          });
        };

        this.deleteFile = function (url) {
          console.log("attachments" + _this6.attachments);

          var index = _this6.attachments.indexOf(url);

          if (index > -1) {
            _this6.attachments.splice(index, 1);
          }

          console.log("After attchment" + _this6.attachments);

          _this6.upload.deleteFile(url);
        };

        this.uploadFile = function () {
          for (var i = 0; i < _this6.selectedFiles.length; i++) {
            var file = _this6.selectedFiles.item(i);

            console.log(file);

            var bool = _this6.upload.uploadfile(file);

            var fn = _this6.Folder + file.name;

            _this6.attachments.push(fn);

            console.log(bool);
          }

          console.log("After upload" + _this6.attachments);
        };

        this.loadPreviousUsers = function () {
          var data = {
            skip: 10 * (_this6.skip - 1)
          };

          _this6.appService.allUsers(data).subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
              if (_this6.skip == 0) {
                _this6.userButton = true;
                _this6.previousButton = false;
              }

              _this6.skip--;
              console.log("skip is" + _this6.skip);
              _this6.allUsers = apiResponse.data;
              console.log(_this6.allUsers);
            }
          });
        };
      }

      _createClass(EditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getIssue();
          this.getAllUsers();
        }
      }]);

      return EditComponent;
    }();

    EditComponent.ɵfac = function EditComponent_Factory(t) {
      return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_upload_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_issue_socket_service__WEBPACK_IMPORTED_MODULE_7__["IssueSocketService"]));
    };

    EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditComponent,
      selectors: [["app-edit"]],
      decls: 49,
      vars: 11,
      consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], ["href", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "container"], [1, "row", 2, "text-align", "left"], [1, "col-md-12"], ["createIssueForm", "ngForm"], [1, "form-group"], [1, "heading"], [1, "heading1"], ["type", "text", "name", "issueTitle", "placeholder", "Enter issue title", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["titlee", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["name", "desc", "placeholder", "Type your description here...", 3, "ngModel", "editor", "ngModelChange"], [4, "ngFor", "ngForOf"], ["type", "file", "name", "file", "multiple", "", 1, "form-control", 3, "change"], [1, "btn", "btn-success", 3, "disabled", "click"], ["name", "seluser", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", ""], ["type", "button", "class", "btn btn-dark btn-sm", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "click"], ["class", "p1", 4, "ngIf"], [1, "p1"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-dark", "btn-sm", 3, "click"]],
      template: function EditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Issue Tracker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponent_Template_a_click_8_listener() {
            return ctx.goBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Go back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", null, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Issue Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Issue Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Issue title is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Issue Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ckeditor", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_ckeditor_ngModelChange_27_listener($event) {
            return ctx.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Issue Attachments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, EditComponent_div_31_Template, 2, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditComponent_Template_input_change_33_listener($event) {
            return ctx.selectFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponent_Template_button_click_34_listener() {
            return ctx.uploadFile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, EditComponent_div_36_Template, 3, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Assign To");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "select", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_select_ngModelChange_40_listener($event) {
            return ctx.user = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, EditComponent_option_42_Template, 2, 3, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, EditComponent_button_43_Template, 2, 0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, EditComponent_button_44_Template, 2, 0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponent_Template_button_click_47_listener() {
            return ctx.editIssue();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Edit Issue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r74.valid || _r74.pristine);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.description)("editor", ctx.Editor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attachments);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.selectedFiles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedFiles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allUsers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userButton == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previousButton == true);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__["CKEditorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"]],
      styles: [".heading[_ngcontent-%COMP%]{\r\n    color:orangered;\r\n    font-weight:bold;\r\n    font-family:'Times New Roman', Times, serif;\r\n    font-size:x-large;\r\n    text-align: center;\r\n    background-color: black;\r\n    padding:5px;\r\n}\r\n.issueview[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n    border-color:black;\r\n    border-style:solid;\r\n}\r\n.commentsview[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n    border-color:black;\r\n    border-style:solid;}\r\n.watchersview[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n    border-color:black;\r\n    border-style:solid;\r\n}\r\n.comment[_ngcontent-%COMP%]{\r\n    font-size: x-small;\r\n    border-color: olivedrab;\r\n    border-radius: 0ch;\r\n    padding:2px;\r\n}\r\n.comment1[_ngcontent-%COMP%]{\r\n    font-size:medium;\r\n    color: black;\r\n    border-color:green ;\r\n    padding:1px;\r\n    border-style: initial;\r\n\r\n}\r\n.back[_ngcontent-%COMP%]{\r\n    background-color: burlywood;\r\n}\r\n.commentbutton[_ngcontent-%COMP%]{\r\n    float: center;\r\n}\r\n.heading1[_ngcontent-%COMP%]{\r\n    color:orangered;\r\n    font-weight:bold;\r\n    font-family:'Times New Roman', Times, serif;\r\n    font-size:large;\r\n    text-align: center;\r\n    padding:5px;\r\n}\r\n.p1[_ngcontent-%COMP%]{\r\n    color:black;\r\n    font-weight:bold;\r\n    font-family:'Times New Roman', Times, serif;\r\n    font-size:medium;\r\n    padding:5px;\r\n}\r\n.p2[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWUvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDJDQUEyQztJQUMzQyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQixDQUFDO0FBQ3ZCO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHFCQUFxQjs7QUFFekI7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiwyQ0FBMkM7SUFDM0MsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsMkNBQTJDO0lBQzNDLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2lzc3VlL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmd7XHJcbiAgICBjb2xvcjpvcmFuZ2VyZWQ7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6J1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTp4LWxhcmdlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOjVweDtcclxufVxyXG4uaXNzdWV2aWV3e1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICBib3JkZXItY29sb3I6YmxhY2s7XHJcbiAgICBib3JkZXItc3R5bGU6c29saWQ7XHJcbn1cclxuLmNvbW1lbnRzdmlld3tcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOmJsYWNrO1xyXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkO31cclxuLndhdGNoZXJzdmlld3tcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOmJsYWNrO1xyXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG59XHJcbi5jb21tZW50e1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBvbGl2ZWRyYWI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwY2g7XHJcbiAgICBwYWRkaW5nOjJweDtcclxufVxyXG4uY29tbWVudDF7XHJcbiAgICBmb250LXNpemU6bWVkaXVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLWNvbG9yOmdyZWVuIDtcclxuICAgIHBhZGRpbmc6MXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBpbml0aWFsO1xyXG5cclxufVxyXG4uYmFja3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcclxufVxyXG5cclxuLmNvbW1lbnRidXR0b257XHJcbiAgICBmbG9hdDogY2VudGVyO1xyXG59XHJcbi5oZWFkaW5nMXtcclxuICAgIGNvbG9yOm9yYW5nZXJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOmxhcmdlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbn1cclxuXHJcbi5wMXtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGZvbnQtZmFtaWx5OidUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6bWVkaXVtO1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbn1cclxuLnAye1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit',
          templateUrl: './edit.component.html',
          styleUrls: ['./edit.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }, {
          type: _upload_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"]
        }, {
          type: src_app_issue_socket_service__WEBPACK_IMPORTED_MODULE_7__["IssueSocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/issue/issue.module.ts":
  /*!***************************************!*\
    !*** ./src/app/issue/issue.module.ts ***!
    \***************************************/

  /*! exports provided: IssueModule */

  /***/
  function srcAppIssueIssueModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IssueModule", function () {
      return IssueModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/issue/dashboard/dashboard.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/issue/search/search.component.ts");
    /* harmony import */


    var _issue_issue_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./issue/issue.component */
    "./src/app/issue/issue/issue.component.ts");
    /* harmony import */


    var _create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./create/create.component */
    "./src/app/issue/create/create.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./edit/edit.component */
    "./src/app/issue/edit/edit.component.ts");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
    /* harmony import */


    var _myissue_myissue_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./myissue/myissue.component */
    "./src/app/issue/myissue/myissue.component.ts");

    var IssueModule = function IssueModule() {
      _classCallCheck(this, IssueModule);
    };

    IssueModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IssueModule
    });
    IssueModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IssueModule_Factory(t) {
        return new (t || IssueModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([{
        path: 'create/:userId',
        component: _create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"]
      }, {
        path: 'dashboard/:userId',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
      }, {
        path: 'issueview/:issueId',
        component: _issue_issue_component__WEBPACK_IMPORTED_MODULE_4__["IssueComponent"]
      }, {
        path: 'search',
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]
      }, {
        path: 'edit/:issueId',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"]
      }, {
        path: 'myissues/:userId',
        component: _myissue_myissue_component__WEBPACK_IMPORTED_MODULE_10__["MyissueComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IssueModule, {
        declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], _issue_issue_component__WEBPACK_IMPORTED_MODULE_4__["IssueComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"], _myissue_myissue_component__WEBPACK_IMPORTED_MODULE_10__["MyissueComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IssueModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], _issue_issue_component__WEBPACK_IMPORTED_MODULE_4__["IssueComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"], _myissue_myissue_component__WEBPACK_IMPORTED_MODULE_10__["MyissueComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([{
            path: 'create/:userId',
            component: _create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"]
          }, {
            path: 'dashboard/:userId',
            component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
          }, {
            path: 'issueview/:issueId',
            component: _issue_issue_component__WEBPACK_IMPORTED_MODULE_4__["IssueComponent"]
          }, {
            path: 'search',
            component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]
          }, {
            path: 'edit/:issueId',
            component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"]
          }, {
            path: 'myissues/:userId',
            component: _myissue_myissue_component__WEBPACK_IMPORTED_MODULE_10__["MyissueComponent"]
          }])]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/issue/issue/issue.component.ts":
  /*!************************************************!*\
    !*** ./src/app/issue/issue/issue.component.ts ***!
    \************************************************/

  /*! exports provided: IssueComponent */

  /***/
  function srcAppIssueIssueIssueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IssueComponent", function () {
      return IssueComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_issue_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/issue-socket.service */
    "./src/app/issue-socket.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["scrollMe"];

    function IssueComponent_div_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var url_r37 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://attachments-issue.s3.ap-south-1.amazonaws.com/", url_r37, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](url_r37);
      }
    }

    function IssueComponent_button_45_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28, 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssueComponent_button_45_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r39.editIssue();
          return _r38.disabled = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Issue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IssueComponent_button_46_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssueComponent_button_46_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r41.markCompleted();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close Issue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IssueComponent_button_47_Template(rf, ctx) {
      if (rf & 1) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssueComponent_button_47_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r43.addWatcher();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Watch Issue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IssueComponent_div_51_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var watcher_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", watcher_r45.firstName, " ", watcher_r45.lastName, "");
      }
    }

    function IssueComponent_div_51_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var watcher_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", watcher_r45.firstName, " ", watcher_r45.lastName, "");
      }
    }

    function IssueComponent_div_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IssueComponent_div_51_p_1_Template, 2, 2, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IssueComponent_div_51_p_2_Template, 2, 2, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var watcher_r45 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", watcher_r45 !== null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", watcher_r45 !== null);
      }
    }

    function IssueComponent_p_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No one is watching this issue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IssueComponent_button_53_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssueComponent_button_53_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r50.loadMoreWatchers();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "More Watchers");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IssueComponent_button_60_Template(rf, ctx) {
      if (rf & 1) {
        var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssueComponent_button_60_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r52.loadMoreComments();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Load Previous Comments");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IssueComponent_div_63_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", comment_r54.name, ", ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, comment_r54.createdOn), "");
      }
    }

    function IssueComponent_div_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IssueComponent_div_63_div_1_Template, 3, 4, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r54 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r54 !== null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r54.comment);
      }
    }

    var IssueComponent = /*#__PURE__*/function () {
      function IssueComponent(router, _route, appService, toastr, socket) {
        var _this7 = this;

        _classCallCheck(this, IssueComponent);

        this.router = router;
        this._route = _route;
        this.appService = appService;
        this.toastr = toastr;
        this.socket = socket;
        this.attachments = [];
        this.allWatchers = [];
        this.allComments = [];
        this.issueId = this._route.snapshot.params.issueId;
        this.searchClient = this._route.snapshot.queryParams.searchclient;
        this.notifClient = this._route.snapshot.queryParams.Notification;
        this.commentSkip = 1;
        this.watcherSkip = 1;
        this.loadCommentsButton = true;
        this.loadWatchersButton = true;

        this.goBack = function () {
          _this7.router.navigate(["/dashboard/".concat(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('receiverId'))]);
        };

        this.addWatcher = function () {
          var watcherObject = {
            userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('receiverId'),
            issueId: _this7.issueId
          };
          console.log(watcherObject);

          _this7.appService.addWatchers(watcherObject).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              _this7.getWatchers();

              _this7.toastr.success("Added as watcher for this issue...");

              _this7.searchClient = "false";
            } else {
              _this7.toastr.warning("Failed to watch issue.");
            }
          });
        };

        this.getWatchers = function () {
          var watcherObject = {
            issueId: _this7.issueId,
            skip: 0 * _this7.watcherSkip
          };
          _this7.appService.getWatchers(watcherObject).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              if (apiResponse.data.length < 10) {
                _this7.loadWatchersButton = false;
              }

              _this7.allWatchers = apiResponse.data;
              console.log(_this7.allWatchers);
              _this7.watcherSkip++;
            }
          }), function (err) {
            _this7.loadWatchersButton = false;
          };
        };

        this.editIssue = function () {
          _this7.router.navigate(["/edit/".concat(_this7.issueId)]);
        };

        this.addComment = function () {
          var commentObject = {
            issueId: _this7.issueId,
            name: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('receiverName'),
            comment: _this7.comment
          };
          var data = {
            commentorName: commentObject.name,
            commentorId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('receiverId'),
            title: _this7.title,
            issueId: _this7.issueId,
            assigneeArray: _this7.assigneeArray,
            watchers: _this7.watchers,
            reporterId: _this7.reporterId
          };

          _this7.appService.addComments(commentObject).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              _this7.toastr.success("Commented Successfully...");

              _this7.getComment();

              _this7.comment = '';

              _this7.socket.commentAlert(data);
            } else {
              _this7.toastr.warning("Failed to comment for this issue...");
            }
          });
        };

        this.getComment = function () {
          var commentData = {
            issueId: _this7.issueId,
            skip: 0
          };

          _this7.appService.getComments(commentData).subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status == 200) {
              console.log("api response" + apiResponse);
              console.log("comments" + apiResponse.data[0]);

              if (apiResponse.data.length < 10 || apiResponse.data.length == 0) {
                _this7.loadCommentsButton = false;
              }

              _this7.allComments = apiResponse.data;

              _this7.allComments.sort(function (a, b) {
                var dateA = a.createdOn,
                    dateB = b.createdOn;

                if (dateA < dateB) {
                  return -1;
                }

                if (dateA > dateB) {
                  return 1;
                }

                return 0;
              });
            } else {
              _this7.loadCommentsButton = false;
            }
          });
        };

        this.getIssue = function () {
          _this7.appService.getSingleIssue(_this7.issueId).subscribe(function (apiResponse) {
            console.log(apiResponse);

            if (apiResponse.status === 200) {
              _this7.title = apiResponse.data[0].title;
              _this7.description = apiResponse.data[0].description;
              _this7.reporterName = apiResponse.data[0].reporterName;
              _this7.date = apiResponse.data[0].createdOn;
              _this7.attachments = apiResponse.data[0].attachments;
              _this7.assigneeArray = apiResponse.data[0].assigneeId;
              _this7.watchers = apiResponse.data[0].watchers;
              _this7.reporterId = apiResponse.data[0].reporterId;
              _this7.status = apiResponse.data[0].status;

              if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('receiverId') == _this7.reporterId) {
                _this7.isOwner = true;
              }
            } else {
              _this7.toastr.show("Failed to fetch issue details");
            }
          });
        };

        this.openLink = function (url) {
          var link = "https://attachments-issue.s3.ap-south-1.amazonaws.com/".concat(url);
        };

        this.loadMoreComments = function () {
          var commentData = {
            issueId: _this7.issueId,
            skip: 10 * _this7.commentSkip
          };

          _this7.appService.getComments(commentData).subscribe(function (apiResponse) {
            console.log("skip is" + commentData.skip);

            if (apiResponse.status == 200) {
              console.log(apiResponse.data.length);

              if (apiResponse.data.length < 10 || apiResponse.data.length == 0) {
                _this7.loadCommentsButton = false;
              }

              _this7.commentSkip++;
              _this7.allComments = apiResponse.data;

              _this7.allComments.sort(function (a, b) {
                var dateA = a.createdOn,
                    dateB = b.createdOn;

                if (dateA < dateB) {
                  return -1;
                }

                if (dateA > dateB) {
                  return 1;
                }

                return 0;
              });
            } else {
              _this7.loadCommentsButton = false;
            }
          });
        };

        this.loadMoreWatchers = function () {
          var watcherData = {
            issueId: _this7.issueId,
            skip: 10 * _this7.watcherSkip
          };

          _this7.appService.getWatchers(watcherData).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              _this7.watcherSkip++;

              if (apiResponse.data.length < 10) {
                _this7.loadWatchersButton = false;
              }

              _this7.allWatchers = apiResponse.data;
            } else {
              _this7.loadWatchersButton = false;
            }
          });
        };

        this.markCompleted = function () {
          var data = {
            issueId: _this7.issueId
          };

          _this7.appService.markCompleted(data).subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
              _this7.toastr.success("Issued marked as completed.");

              _this7.status = "done";
            } else {
              _this7.toastr.error("Something went wrong");
            }
          });
        };

        this.sendMessageUsingKeypress = function (event) {
          if (event.keyCode === 13 && _this7.comment != '') {
            // 13 is keycode of enter.
            _this7.addComment();

            _this7.comment = '';
          }
        };
      }

      _createClass(IssueComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          console.log(this.searchClient);
          this.getIssue();
          this.getWatchers();
          this.getComment();
          setTimeout(function () {
            console.log(_this8.attachments);
          }, 2000);
        }
      }]);

      return IssueComponent;
    }();

    IssueComponent.ɵfac = function IssueComponent_Factory(t) {
      return new (t || IssueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_issue_socket_service__WEBPACK_IMPORTED_MODULE_5__["IssueSocketService"]));
    };

    IssueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IssueComponent,
      selectors: [["app-issue"]],
      viewQuery: function IssueComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollMe = _t.first);
        }
      },
      decls: 70,
      vars: 17,
      consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], ["href", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "container"], [1, "row"], [1, "col-md-8", "issueview"], [1, "heading"], [1, "heading1"], [1, "p1"], [1, "p2", 3, "innerHTML"], [4, "ngFor", "ngForOf"], ["class", "btn btn-lg btn-primary btn-block", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-lg btn-primary btn-block", 3, "click", 4, "ngIf"], [1, "col-md-4", "watchersview"], ["class", "p1", 4, "ngIf"], ["type", "button", "class", "btn btn-dark", 3, "click", 4, "ngIf"], [1, "col-md-12", "commentsview"], [1, "form-group"], ["class", "comment", 4, "ngFor", "ngForOf"], ["type", "text", "name", "comment", "placeholder", "Comment something about issue", "required", "", 1, "form-control", 3, "ngModel", "keydown", "ngModelChange"], ["comments", "ngModel"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], ["type", "url", 3, "href"], [1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "click"], ["edit", ""], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "click"], [1, "comment"], ["class", "comment", 4, "ngIf"], [1, "comment1"]],
      template: function IssueComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Issue Tracker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssueComponent_Template_a_click_8_listener() {
            return ctx.goBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Go back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Issue Details:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Issue Title:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Issue Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Reporter Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Created on:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Issue Attachments:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, IssueComponent_div_42_Template, 4, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, IssueComponent_button_45_Template, 3, 0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, IssueComponent_button_46_Template, 2, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, IssueComponent_button_47_Template, 2, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Watchers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, IssueComponent_div_51_Template, 3, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, IssueComponent_p_52_Template, 2, 0, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, IssueComponent_button_53_Template, 2, 0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Comments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, IssueComponent_button_60_Template, 2, 0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, IssueComponent_div_63_Template, 4, 2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "textarea", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function IssueComponent_Template_textarea_keydown_65_listener($event) {
            return ctx.sendMessageUsingKeypress($event);
          })("ngModelChange", function IssueComponent_Template_textarea_ngModelChange_65_listener($event) {
            return ctx.comment = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssueComponent_Template_button_click_67_listener() {
            return ctx.addComment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reporterName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 15, ctx.date));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attachments);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.searchClient && !ctx.notifClient);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status == "progress" && ctx.isOwner == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchClient && ctx.searchClient !== "false");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allWatchers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allWatchers.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadWatchersButton == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadCommentsButton == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allComments);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comment);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
      styles: [".issueview[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n    border-color:black;\r\n    border-style:solid;\r\n}\r\n.commentsview[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n    border-color:black;\r\n    border-style:solid;}\r\n.watchersview[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n    border-color:black;\r\n    border-style:solid;\r\n}\r\n.comment[_ngcontent-%COMP%]{\r\n    font-size: x-small;\r\n    border-color: olivedrab;\r\n    border-radius: 0ch;\r\n    padding:2px;\r\n}\r\n.comment1[_ngcontent-%COMP%]{\r\n    font-size:medium;\r\n    color: black;\r\n    border-color:green ;\r\n    padding:1px;\r\n    border-style: initial;\r\n\r\n}\r\n.back[_ngcontent-%COMP%]{\r\n    background-color: burlywood;\r\n}\r\n.heading[_ngcontent-%COMP%]{\r\n    color:orangered;\r\n    font-weight:bold;\r\n    font-family:'Times New Roman', Times, serif;\r\n    font-size:x-large;\r\n    text-align: center;\r\n    background-color: black;\r\n    padding:5px;\r\n}\r\n.commentbutton[_ngcontent-%COMP%]{\r\n    float: center;\r\n}\r\n.heading1[_ngcontent-%COMP%]{\r\n    color:orangered;\r\n    font-weight:bold;\r\n    font-family:'Times New Roman', Times, serif;\r\n    font-size:large;\r\n    text-align: center;\r\n    padding:5px;\r\n}\r\n.p1[_ngcontent-%COMP%]{\r\n    color:black;\r\n    font-weight:bold;\r\n    font-family:'Times New Roman', Times, serif;\r\n    font-size:medium;\r\n    padding:5px;\r\n}\r\n.p2[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWUvaXNzdWUvaXNzdWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQixDQUFDO0FBQ3ZCO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHFCQUFxQjs7QUFFekI7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiwyQ0FBMkM7SUFDM0MsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDJDQUEyQztJQUMzQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQiwyQ0FBMkM7SUFDM0MsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvaXNzdWUvaXNzdWUvaXNzdWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pc3N1ZXZpZXd7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGJvcmRlci1jb2xvcjpibGFjaztcclxuICAgIGJvcmRlci1zdHlsZTpzb2xpZDtcclxufVxyXG4uY29tbWVudHN2aWV3e1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICBib3JkZXItY29sb3I6YmxhY2s7XHJcbiAgICBib3JkZXItc3R5bGU6c29saWQ7fVxyXG4ud2F0Y2hlcnN2aWV3e1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICBib3JkZXItY29sb3I6YmxhY2s7XHJcbiAgICBib3JkZXItc3R5bGU6c29saWQ7XHJcbn1cclxuLmNvbW1lbnR7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICBib3JkZXItY29sb3I6IG9saXZlZHJhYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBjaDtcclxuICAgIHBhZGRpbmc6MnB4O1xyXG59XHJcbi5jb21tZW50MXtcclxuICAgIGZvbnQtc2l6ZTptZWRpdW07XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItY29sb3I6Z3JlZW4gO1xyXG4gICAgcGFkZGluZzoxcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IGluaXRpYWw7XHJcblxyXG59XHJcbi5iYWNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xyXG59XHJcbi5oZWFkaW5ne1xyXG4gICAgY29sb3I6b3JhbmdlcmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGZvbnQtZmFtaWx5OidUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6eC1sYXJnZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbn1cclxuLmNvbW1lbnRidXR0b257XHJcbiAgICBmbG9hdDogY2VudGVyO1xyXG59XHJcbi5oZWFkaW5nMXtcclxuICAgIGNvbG9yOm9yYW5nZXJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOmxhcmdlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbn1cclxuXHJcbi5wMXtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGZvbnQtZmFtaWx5OidUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6bWVkaXVtO1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbn1cclxuLnAye1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IssueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-issue',
          templateUrl: './issue.component.html',
          styleUrls: ['./issue.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: src_app_issue_socket_service__WEBPACK_IMPORTED_MODULE_5__["IssueSocketService"]
        }];
      }, {
        scrollMe: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['scrollMe', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/issue/myissue/myissue.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/issue/myissue/myissue.component.ts ***!
    \****************************************************/

  /*! exports provided: MyissueComponent */

  /***/
  function srcAppIssueMyissueMyissueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyissueComponent", function () {
      return MyissueComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_issue_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/issue-socket.service */
    "./src/app/issue-socket.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a1) {
      return ["/issueview", a1];
    };

    function MyissueComponent_tbody_37_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "open");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var issue_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](issue_r96.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](issue_r96.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, issue_r96.createdOn));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](issue_r96.reporterName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, issue_r96.issueId));
      }
    }

    function MyissueComponent_tbody_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyissueComponent_tbody_37_tr_1_Template, 13, 9, "tr", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var issue_r96 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", issue_r96 !== null);
      }
    }

    function MyissueComponent_li_41_Template(rf, ctx) {
      if (rf & 1) {
        var _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyissueComponent_li_41_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100);

          var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r99.getPreviousIssues();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyissueComponent_li_42_Template(rf, ctx) {
      if (rf & 1) {
        var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyissueComponent_li_42_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102);

          var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r101.getMoreIssues();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var MyissueComponent = /*#__PURE__*/function () {
      function MyissueComponent(router, _route, appService, toastr, socketService) {
        var _this9 = this;

        _classCallCheck(this, MyissueComponent);

        this.router = router;
        this._route = _route;
        this.appService = appService;
        this.toastr = toastr;
        this.socketService = socketService;
        this.userId = this._route.snapshot.params.userId;
        this.skipCount = 0;
        this.previousCount = this.skipCount - 1;
        this.nextButton = true;
        this.previousButton = false;

        this.getAllIssue = function () {
          var data = {
            userId: _this9.userId,
            skip: 0
          };

          _this9.appService.getMyIssues(data).subscribe(function (apiResponse) {
            if (apiResponse) {
              if (apiResponse.data.length === 0) {
                _this9.nextButton = false;

                _this9.toastr.show("No issues found");
              }

              if (apiResponse.data.length < 10) {
                _this9.nextButton = false;
              }

              _this9.allIssues = apiResponse.data;
            } else {
              _this9.toastr.show("No issues reported by you.");
            }
          });
        };

        this.getMoreIssues = function () {
          _this9.skipCount++;
          var data = {
            userId: _this9.userId,
            skip: 10 * _this9.skipCount
          };
          console.log("skip is" + data.skip);

          _this9.appService.getMyIssues(data).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              if (apiResponse.data.length < 10) {
                _this9.nextButton = false;
              }

              if (apiResponse.data.length === 0) {
                _this9.nextButton = false;

                _this9.toastr.show("No issues found");

                _this9.previousButton = true;
              }

              _this9.previousButton = true;
              console.log(apiResponse);
              _this9.allIssues = apiResponse.data;
              console.log(_this9.allIssues);
            } else {
              _this9.toastr.show("No issues found");

              _this9.nextButton = false;
            }
          });
        };

        this.goBack = function () {
          _this9.router.navigate(["/dashboard/".concat(_this9.userId)]);
        };

        this.sortByDate = function () {
          _this9.allIssues.sort(function (a, b) {
            var dateA = a.createdOn,
                dateB = b.createdOn;

            if (dateA < dateB) {
              return -1;
            }

            if (dateA > dateB) {
              return 1;
            }

            return 0;
          });
        };

        this.sortByTitle = function () {
          _this9.allIssues.sort(function (a, b) {
            var titleA = a.title.toLowerCase(),
                titleB = b.title.toLowerCase();

            if (titleA < titleB) {
              return -1;
            }

            if (titleA > titleB) {
              return 1;
            }

            return 0;
          });
        };

        this.sortByReporterName = function () {
          _this9.allIssues.sort(function (a, b) {
            var nameA = a.reporterName,
                nameB = b.reporterName;

            if (nameA < nameB) {
              return -1;
            }

            if (nameA > nameB) {
              return 1;
            }

            return 0;
          });
        };

        this.sortByStatus = function () {
          _this9.allIssues.sort(function (a, b) {
            var statusA = a.status,
                statusB = b.status;

            if (statusA < statusB) {
              return -1;
            }

            if (statusA > statusB) {
              return 1;
            }

            return 0;
          });
        };

        this.getPreviousIssues = function () {
          var data = {
            skip: 10 * (_this9.skipCount - 1),
            userId: _this9.userId
          };

          _this9.appService.getMyIssues(data).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              _this9.skipCount--;

              if (_this9.skipCount == 0) {
                _this9.previousButton = false;
                _this9.nextButton = true;
              }

              console.log(apiResponse);
              _this9.allIssues = apiResponse.data;
              console.log(_this9.allIssues);
            } else {
              _this9.toastr.show("No issues found");

              _this9.nextButton = false;
            }
          });
        };
      }

      _createClass(MyissueComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllIssue();
        }
      }]);

      return MyissueComponent;
    }();

    MyissueComponent.ɵfac = function MyissueComponent_Factory(t) {
      return new (t || MyissueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_issue_socket_service__WEBPACK_IMPORTED_MODULE_4__["IssueSocketService"]));
    };

    MyissueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyissueComponent,
      selectors: [["app-myissue"]],
      decls: 43,
      vars: 3,
      consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], ["href", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "container"], [1, "heading"], [1, "navbar", "navbar-light", "bg-light"], [1, "form-inline"], [1, "btn", "btn-outline-success", 3, "click"], [1, "table", "table-borderless", "table-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["aria-label", "Page navigation example"], [1, "pagination", "justify-content-center"], ["class", "page-item", 4, "ngIf"], [4, "ngIf"], [1, "nav-link", 3, "routerLink"], [1, "page-item"], ["type", "button", 1, "page-link", 3, "click"]],
      template: function MyissueComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Issue Tracker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyissueComponent_Template_a_click_8_listener() {
            return ctx.goBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Go Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Personal Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nav", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyissueComponent_Template_button_click_16_listener() {
            return ctx.sortByDate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "SortDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyissueComponent_Template_button_click_18_listener() {
            return ctx.sortByTitle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "SortTitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyissueComponent_Template_button_click_20_listener() {
            return ctx.sortByReporterName();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "SortReporter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyissueComponent_Template_button_click_22_listener() {
            return ctx.sortByStatus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "SortStatus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "table", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Reporter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "View");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, MyissueComponent_tbody_37_Template, 2, 1, "tbody", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "nav", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, MyissueComponent_li_41_Template, 3, 0, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, MyissueComponent_li_42_Template, 3, 0, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allIssues);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previousButton === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nextButton === true);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
      styles: [".pagination.fixed[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 0;\r\n    right: 0;\r\n    width: 300px;\r\n    border: 3px solid #73AD21;\r\n  }\r\n  .heading[_ngcontent-%COMP%]{\r\n    color:orangered;\r\n    font-weight:bold;\r\n    font-family:'Times New Roman', Times, serif;\r\n    font-size:x-large;\r\n    text-align: center;\r\n    background-color: black;\r\n    padding:5px;\r\n}\r\n  .issueview[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n    border-color:black;\r\n    border-style:solid;\r\n}\r\n  .commentsview[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n    border-color:black;\r\n    border-style:solid;}\r\n  .watchersview[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n    border-color:black;\r\n    border-style:solid;\r\n}\r\n  .comment[_ngcontent-%COMP%]{\r\n    font-size: x-small;\r\n    border-color: olivedrab;\r\n    border-radius: 0ch;\r\n    padding:2px;\r\n}\r\n  .comment1[_ngcontent-%COMP%]{\r\n    font-size:medium;\r\n    color: black;\r\n    border-color:green ;\r\n    padding:1px;\r\n    border-style: initial;\r\n\r\n}\r\n  .back[_ngcontent-%COMP%]{\r\n    background-color: burlywood;\r\n}\r\n  .commentbutton[_ngcontent-%COMP%]{\r\n    float: center;\r\n}\r\n  .heading1[_ngcontent-%COMP%]{\r\n    color:orangered;\r\n    font-weight:bold;\r\n    font-family:'Times New Roman', Times, serif;\r\n    font-size:large;\r\n    text-align: center;\r\n    padding:5px;\r\n}\r\n  .p1[_ngcontent-%COMP%]{\r\n    color:black;\r\n    font-weight:bold;\r\n    font-family:'Times New Roman', Times, serif;\r\n    font-size:medium;\r\n    padding:5px;\r\n}\r\n  .p2[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWUvbXlpc3N1ZS9teWlzc3VlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFFBQVE7SUFDUixZQUFZO0lBQ1oseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDJDQUEyQztJQUMzQyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7RUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0VBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQixDQUFDO0VBQ3ZCO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7RUFDQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtFQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHFCQUFxQjs7QUFFekI7RUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtFQUVBO0lBQ0ksYUFBYTtBQUNqQjtFQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiwyQ0FBMkM7SUFDM0MsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7RUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsMkNBQTJDO0lBQzNDLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7RUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2lzc3VlL215aXNzdWUvbXlpc3N1ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2luYXRpb24uZml4ZWQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjNzNBRDIxO1xyXG4gIH1cclxuICAuaGVhZGluZ3tcclxuICAgIGNvbG9yOm9yYW5nZXJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOngtbGFyZ2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6NXB4O1xyXG59XHJcbi5pc3N1ZXZpZXd7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGJvcmRlci1jb2xvcjpibGFjaztcclxuICAgIGJvcmRlci1zdHlsZTpzb2xpZDtcclxufVxyXG4uY29tbWVudHN2aWV3e1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICBib3JkZXItY29sb3I6YmxhY2s7XHJcbiAgICBib3JkZXItc3R5bGU6c29saWQ7fVxyXG4ud2F0Y2hlcnN2aWV3e1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICBib3JkZXItY29sb3I6YmxhY2s7XHJcbiAgICBib3JkZXItc3R5bGU6c29saWQ7XHJcbn1cclxuLmNvbW1lbnR7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICBib3JkZXItY29sb3I6IG9saXZlZHJhYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBjaDtcclxuICAgIHBhZGRpbmc6MnB4O1xyXG59XHJcbi5jb21tZW50MXtcclxuICAgIGZvbnQtc2l6ZTptZWRpdW07XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItY29sb3I6Z3JlZW4gO1xyXG4gICAgcGFkZGluZzoxcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IGluaXRpYWw7XHJcblxyXG59XHJcbi5iYWNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xyXG59XHJcblxyXG4uY29tbWVudGJ1dHRvbntcclxuICAgIGZsb2F0OiBjZW50ZXI7XHJcbn1cclxuLmhlYWRpbmcxe1xyXG4gICAgY29sb3I6b3JhbmdlcmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGZvbnQtZmFtaWx5OidUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6bGFyZ2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOjVweDtcclxufVxyXG5cclxuLnAxe1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6J1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTptZWRpdW07XHJcbiAgICBwYWRkaW5nOjVweDtcclxufVxyXG4ucDJ7XHJcbiAgICBwYWRkaW5nOjVweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyissueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-myissue',
          templateUrl: './myissue.component.html',
          styleUrls: ['./myissue.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: src_app_issue_socket_service__WEBPACK_IMPORTED_MODULE_4__["IssueSocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/issue/search/search.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/issue/search/search.component.ts ***!
    \**************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppIssueSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function SearchComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No such issues exist...please try searching for something else ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["/issueview", a1];
    };

    var _c1 = function _c1() {
      return {
        searchclient: "true"
      };
    };

    function SearchComponent_tbody_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "open");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var issue_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](issue_r24.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](issue_r24.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, issue_r24.createdOn));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](issue_r24.reporterName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, issue_r24.issueId))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
      }
    }

    function SearchComponent_li_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SearchComponent_li_41_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_li_41_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.getMoreIssues();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent(router, _route, appService, toastr) {
        var _this10 = this;

        _classCallCheck(this, SearchComponent);

        this.router = router;
        this._route = _route;
        this.appService = appService;
        this.toastr = toastr;
        this.skipCount = 0;
        this.nextButton = true;
        this.previousButton = false;

        this.goSomewhere = function () {
          _this10.router.navigate(['/create/bfbh']);
        };

        this.goBack = function () {
          _this10.router.navigate(["/dashboard/".concat(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('receiverId'))]);
        };

        this.getSearchedIssue = function () {
          var data = {
            skip: 10 * _this10.skipCount,
            searchString: _this10._route.snapshot.queryParams.string
          };

          _this10.appService.getSerachResults(data).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              if (apiResponse.data.length === 0) {
                _this10.nextButton = false;

                _this10.toastr.show("No issues found");
              }

              if (apiResponse.data.length < 10) {
                _this10.nextButton = false;
              }

              _this10.allIssues = apiResponse.data;
              _this10.skipCount++;
            } else if (apiResponse.status === 404) {
              _this10.toastr.show("No issues Found...");
            } else {
              _this10.toastr.error("Database error.");
            }
          });
        };

        this.getMoreIssues = function () {
          var data = {
            skip: 10 * _this10.skipCount
          };
          console.log("skip is" + data.skip);

          _this10.appService.getAllIssues(data).subscribe(function (apiResponse) {
            if (apiResponse.status) {
              if (apiResponse.data.length < 2) {
                _this10.nextButton = false;
                _this10.previousButton = true;
              }

              if (apiResponse.data.length === 0) {
                _this10.nextButton = false;

                _this10.toastr.show("No issues found");

                _this10.previousButton = true;
              }

              _this10.previousButton = true;
              console.log(apiResponse);
              _this10.allIssues = apiResponse.data;
              console.log(_this10.allIssues);
              _this10.skipCount++;
            }
          }, function (err) {
            _this10.toastr.error("No issues found");
          });
        };

        this.sortByDate = function () {
          _this10.allIssues.sort(function (a, b) {
            if (a !== null && b !== null) {
              var dateA = a.createdOn,
                  dateB = b.createdOn;

              if (dateA < dateB) {
                return -1;
              }

              if (dateA > dateB) {
                return 1;
              }

              return 0;
            }
          });
        };

        this.sortByTitle = function () {
          _this10.allIssues.sort(function (a, b) {
            if (a !== null && b !== null) {
              var titleA = a.title.toLowerCase(),
                  titleB = b.title.toLowerCase();

              if (titleA < titleB) {
                return -1;
              }

              if (titleA > titleB) {
                return 1;
              }

              return 0;
            }
          });
        };

        this.sortByReporterName = function () {
          _this10.allIssues.sort(function (a, b) {
            if (a !== null && b !== null) {
              var nameA = a.reporterName,
                  nameB = b.reporterName;

              if (nameA < nameB) {
                return -1;
              }

              if (nameA > nameB) {
                return 1;
              }

              return 0;
            }
          });
        };

        this.sortByStatus = function () {
          _this10.allIssues.sort(function (a, b) {
            if (a !== null && b !== null) {
              var statusA = a.status,
                  statusB = b.status;

              if (statusA < statusB) {
                return -1;
              }

              if (statusA > statusB) {
                return 1;
              }

              return 0;
            }
          });
        };
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSearchedIssue();
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      decls: 45,
      vars: 4,
      consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], ["href", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "container"], ["class", "p1", 4, "ngIf"], [1, "navbar", "navbar-light", "bg-light"], [1, "form-inline"], [1, "btn", "btn-outline-success", 3, "click"], [1, "table", "table-borderless", "table-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["aria-label", "Page navigation example"], [1, "pagination", "justify-content-center"], ["class", "page-item disabled", 4, "ngIf"], ["class", "page-item", 4, "ngIf"], [1, "btn-primary", 2, "text-align", "center", 3, "click"], [1, "p1"], ["scope", "row"], [1, "nav-link", 3, "routerLink", "queryParams"], [1, "page-item", "disabled"], ["href", "#", "tabindex", "-1", "aria-disabled", "true", 1, "page-link"], [1, "page-item"], [1, "page-link", 3, "click"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Issue Tracker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_a_click_8_listener() {
            return ctx.goBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Go back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SearchComponent_div_12_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nav", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_15_listener() {
            return ctx.sortByDate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "SortDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_17_listener() {
            return ctx.sortByTitle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "SortTitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_19_listener() {
            return ctx.sortByReporterName();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "SortReporter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_21_listener() {
            return ctx.sortByStatus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "SortStatus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Reporter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "View");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, SearchComponent_tbody_36_Template, 14, 11, "tbody", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nav", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SearchComponent_li_40_Template, 3, 0, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, SearchComponent_li_41_Template, 3, 0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_43_listener() {
            return ctx.goSomewhere();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.allIssues);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allIssues);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previousButton === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nextButton === true);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: [".issueview[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n    border-color:black;\r\n    border-style:solid;\r\n}\r\n.commentsview[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n    border-color:black;\r\n    border-style:solid;}\r\n.watchersview[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n    border-color:black;\r\n    border-style:solid;\r\n}\r\n.comment[_ngcontent-%COMP%]{\r\n    font-size: x-small;\r\n    border-color: olivedrab;\r\n    border-radius: 0ch;\r\n    padding:2px;\r\n}\r\n.comment1[_ngcontent-%COMP%]{\r\n    font-size:medium;\r\n    color: black;\r\n    border-color:green ;\r\n    padding:1px;\r\n    border-style: initial;\r\n\r\n}\r\n.back[_ngcontent-%COMP%]{\r\n    background-color: burlywood;\r\n}\r\n.heading[_ngcontent-%COMP%]{\r\n    color:orangered;\r\n    font-weight:bold;\r\n    font-family:'Times New Roman', Times, serif;\r\n    font-size:x-large;\r\n    text-align: center;\r\n    background-color: black;\r\n    padding:5px;\r\n}\r\n.commentbutton[_ngcontent-%COMP%]{\r\n    float: center;\r\n}\r\n.heading1[_ngcontent-%COMP%]{\r\n    color:orangered;\r\n    font-weight:bold;\r\n    font-family:'Times New Roman', Times, serif;\r\n    font-size:large;\r\n    text-align: center;\r\n    padding:5px;\r\n}\r\n.p1[_ngcontent-%COMP%]{\r\n    color:black;\r\n    font-weight:bold;\r\n    font-family:'Times New Roman', Times, serif;\r\n    font-size:medium;\r\n    padding:5px;\r\n}\r\n.p2[_ngcontent-%COMP%]{\r\n    padding:5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWUvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCLENBQUM7QUFDdkI7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gscUJBQXFCOztBQUV6QjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDJDQUEyQztJQUMzQyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsMkNBQTJDO0lBQzNDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLDJDQUEyQztJQUMzQyxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9pc3N1ZS9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXNzdWV2aWV3e1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICBib3JkZXItY29sb3I6YmxhY2s7XHJcbiAgICBib3JkZXItc3R5bGU6c29saWQ7XHJcbn1cclxuLmNvbW1lbnRzdmlld3tcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOmJsYWNrO1xyXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkO31cclxuLndhdGNoZXJzdmlld3tcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOmJsYWNrO1xyXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG59XHJcbi5jb21tZW50e1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBvbGl2ZWRyYWI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwY2g7XHJcbiAgICBwYWRkaW5nOjJweDtcclxufVxyXG4uY29tbWVudDF7XHJcbiAgICBmb250LXNpemU6bWVkaXVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLWNvbG9yOmdyZWVuIDtcclxuICAgIHBhZGRpbmc6MXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBpbml0aWFsO1xyXG5cclxufVxyXG4uYmFja3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcclxufVxyXG4uaGVhZGluZ3tcclxuICAgIGNvbG9yOm9yYW5nZXJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOngtbGFyZ2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6NXB4O1xyXG59XHJcbi5jb21tZW50YnV0dG9ue1xyXG4gICAgZmxvYXQ6IGNlbnRlcjtcclxufVxyXG4uaGVhZGluZzF7XHJcbiAgICBjb2xvcjpvcmFuZ2VyZWQ7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6J1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTpsYXJnZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG59XHJcblxyXG4ucDF7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOm1lZGl1bTtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG59XHJcbi5wMntcclxuICAgIHBhZGRpbmc6NXB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/allusers/allusers.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/allusers/allusers.component.ts ***!
    \*******************************************************/

  /*! exports provided: AllusersComponent */

  /***/
  function srcAppSharedAllusersAllusersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllusersComponent", function () {
      return AllusersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var AllusersComponent = /*#__PURE__*/function () {
      function AllusersComponent(appService, toastr) {
        _classCallCheck(this, AllusersComponent);

        this.appService = appService;
        this.toastr = toastr;
      }

      _createClass(AllusersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AllusersComponent;
    }();

    AllusersComponent.ɵfac = function AllusersComponent_Factory(t) {
      return new (t || AllusersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]));
    };

    AllusersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AllusersComponent,
      selectors: [["app-allusers"]],
      decls: 2,
      vars: 0,
      template: function AllusersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "allusers works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hbGx1c2Vycy9hbGx1c2Vycy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllusersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-allusers',
          templateUrl: './allusers.component.html',
          styleUrls: ['./allusers.component.css']
        }]
      }], function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/firstchar/firstchar.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/firstchar/firstchar.component.ts ***!
    \*********************************************************/

  /*! exports provided: FirstcharComponent */

  /***/
  function srcAppSharedFirstcharFirstcharComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstcharComponent", function () {
      return FirstcharComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FirstcharComponent = /*#__PURE__*/function () {
      function FirstcharComponent() {
        _classCallCheck(this, FirstcharComponent);

        this._name = '';
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FirstcharComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._name = this.name;
          this.firstChar = this._name[0];
        } // end ngOnInit

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var name = changes.name;
          this._name = name.currentValue;
          this.firstChar = this._name[0];
        }
      }, {
        key: "nameClicked",
        value: function nameClicked() {
          this.notify.emit(this._name);
        }
      }]);

      return FirstcharComponent;
    }();

    FirstcharComponent.ɵfac = function FirstcharComponent_Factory(t) {
      return new (t || FirstcharComponent)();
    };

    FirstcharComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FirstcharComponent,
      selectors: [["app-firstchar"]],
      inputs: {
        name: "name",
        userBg: "userBg",
        userColor: "userColor"
      },
      outputs: {
        notify: "notify"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 5,
      consts: [[1, "crop", 3, "click"]],
      template: function FirstcharComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirstcharComponent_Template_div_click_0_listener() {
            return ctx.nameClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.userColor ? ctx.userColor : "white")("background", ctx.userBg ? ctx.userBg : "blue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.firstChar, " ");
        }
      },
      styles: [".crop[_ngcontent-%COMP%] {\r\n    border-radius: 100%;\r\n    line-height: 1em;\r\n    padding: 1em;\r\n    text-align: center;\r\n    margin: 0em;\r\n    width: 3em;\r\n    height: 3em;\r\n    float: left;\r\n    text-transform: uppercase;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZpcnN0Y2hhci9maXJzdGNoYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2ZpcnN0Y2hhci9maXJzdGNoYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcm9wIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwZW07XHJcbiAgICB3aWR0aDogM2VtO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirstcharComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-firstchar',
          templateUrl: './firstchar.component.html',
          styleUrls: ['./firstchar.component.css']
        }]
      }], null, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        userBg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        userColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        notify: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _allusers_allusers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./allusers/allusers.component */
    "./src/app/shared/allusers/allusers.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _firstchar_firstchar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./firstchar/firstchar.component */
    "./src/app/shared/firstchar/firstchar.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_allusers_allusers_component__WEBPACK_IMPORTED_MODULE_2__["AllusersComponent"], _firstchar_firstchar_component__WEBPACK_IMPORTED_MODULE_4__["FirstcharComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_allusers_allusers_component__WEBPACK_IMPORTED_MODULE_2__["AllusersComponent"], _firstchar_firstchar_component__WEBPACK_IMPORTED_MODULE_4__["FirstcharComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([])]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/upload.service.ts":
  /*!***********************************!*\
    !*** ./src/app/upload.service.ts ***!
    \***********************************/

  /*! exports provided: UploadService */

  /***/
  function srcAppUploadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadService", function () {
      return UploadService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! aws-sdk/clients/s3 */
    "./node_modules/aws-sdk/clients/s3.js");
    /* harmony import */


    var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__);

    var UploadService = /*#__PURE__*/function () {
      function UploadService() {
        _classCallCheck(this, UploadService);

        this.Folder = 'attachments/';
        this.Bucket = 'attachments-issue';
      }

      _createClass(UploadService, [{
        key: "getS3Bucket",
        value: function getS3Bucket() {
          var bucket = new aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__({
            accessKeyId: "AKIA3OKLVKRSP6NMHS4V",
            secretAccessKey: "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",
            region: "ap-soth-1"
          });
          return bucket;
        }
      }, {
        key: "uploadfile",
        value: function uploadfile(file) {
          var params = {
            Bucket: 'attachments-issue',
            Key: this.Folder + file.name,
            Body: file,
            ACL: 'public-read'
          };
          this.getS3Bucket().upload(params, function (err, data) {
            if (err) {
              console.log("There was an error while uploading your file", err);
              return false;
            } else {
              console.log("Successfully uploaded file" + data.key);
              return true;
            }
          });
        }
      }, {
        key: "getFiles",
        value: function getFiles() {
          var fileUploads = new Array();
          var params = {
            Bucket: this.Bucket,
            Prefix: this.Folder
          };
          return this.getS3Bucket().listObjects(params, function (err, data) {
            if (err) {
              console.log("There was an error while getting your file", err);
              return;
            } else {
              console.log("Successfully get files", data);
            }
          });
        }
      }, {
        key: "deleteFile",
        value: function deleteFile(file) {
          var params = {
            Bucket: this.Bucket,
            Key: file
          };
          this.getS3Bucket().deleteObject(params, function (err, data) {
            if (err) {
              console.log("Failed to delete file" + err);
            } else {
              console.log("File deleted successfully");
            }
          });
        }
      }]);

      return UploadService;
    }();

    UploadService.ɵfac = function UploadService_Factory(t) {
      return new (t || UploadService)();
    };

    UploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UploadService,
      factory: UploadService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/change-pass/change-pass.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/user/change-pass/change-pass.component.ts ***!
    \***********************************************************/

  /*! exports provided: ChangePassComponent */

  /***/
  function srcAppUserChangePassChangePassComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePassComponent", function () {
      return ChangePassComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ChangePassComponent = /*#__PURE__*/function () {
      function ChangePassComponent(toastr, router, _route, appService) {
        var _this11 = this;

        _classCallCheck(this, ChangePassComponent);

        this.toastr = toastr;
        this.router = router;
        this._route = _route;
        this.appService = appService;
        this.userId = this._route.snapshot.params.userId;

        this.changePassword = function () {
          if (!_this11.oldPass) {
            _this11.toastr.warning("Enter Your Current Password");
          } else if (!_this11.newPass) {
            _this11.toastr.warning("Enter Your New Password");
          } else if (!_this11.confPass) {
            _this11.toastr.warning("Confirm your New Password");
          } else if (_this11.newPass !== _this11.confPass) {
            _this11.toastr.warning("Password Does Not Match");
          } else {
            var data = {
              oldPass: _this11.oldPass,
              newPass: _this11.newPass,
              userId: _this11.userId
            };

            _this11.appService.changePass(data).subscribe(function (apiResponse) {
              if (apiResponse) {
                _this11.toastr.success("Password Changed Successfully...");

                setTimeout(function () {
                  _this11.router.navigate(['/login']);
                }, 2000);
              }
            }, function (err) {
              _this11.toastr.warning("You Entered Wrong Password");
            });
          }
        };

        this.goBack = function () {
          _this11.router.navigate(['/login']);
        };
      }

      _createClass(ChangePassComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChangePassComponent;
    }();

    ChangePassComponent.ɵfac = function ChangePassComponent_Factory(t) {
      return new (t || ChangePassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]));
    };

    ChangePassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChangePassComponent,
      selectors: [["app-change-pass"]],
      decls: 31,
      vars: 3,
      consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], ["href", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "row", "p-0", "m-0"], [1, "col-sm"], [1, "col-sm", "p-5"], [1, "form-signin-heading"], ["for", "inputEmail", 1, "sr-only"], ["type", "password", "id", "inputPass", "placeholder", "Enter Current Password", "required", "", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "id", "inputPass", "placeholder", "Your New Password", "required", "", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "id", "inputPass", "placeholder", "Confirm Your New Password", "required", "", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "click"]],
      template: function ChangePassComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Issue Tracker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePassComponent_Template_a_click_8_listener() {
            return ctx.goBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Current Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePassComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.oldPass = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePassComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.newPass = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Confirm New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePassComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.confPass = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePassComponent_Template_button_click_28_listener() {
            return ctx.changePassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.oldPass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newPass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confPass);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY2hhbmdlLXBhc3MvY2hhbmdlLXBhc3MuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-change-pass',
          templateUrl: './change-pass.component.html',
          styleUrls: ['./change-pass.component.css']
        }]
      }], function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/user/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppUserLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/__ivy_ngcc__/angularx-social-login.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _issue_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../issue-socket.service */
    "./src/app/issue-socket.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(appService, router, toastr, authService, socketService) {
        var _this12 = this;

        _classCallCheck(this, LoginComponent);

        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.authService = authService;
        this.socketService = socketService;

        this.goToSignup = function () {
          _this12.router.navigate(['/signup']);
        };

        this.goToRecoverPassword = function () {
          _this12.router.navigate(['/recover/password']);
        }; //sign in function start


        this.signinFunction = function () {
          if (!_this12.email) {
            _this12.toastr.warning("Enter Your Mail Id");
          } else if (!_this12.password) {
            _this12.toastr.warning("Enter Your Password");
          } else {
            var data = {
              email: _this12.email,
              password: _this12.password
            };

            _this12.appService.signinFunction(data).subscribe(function (apiResponse) {
              console.log(apiResponse);
              var data = {
                userId: apiResponse.data.userDetails.userId
              };

              _this12.socketService.registerUser(data);

              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('authtoken', apiResponse.data.authToken);
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('receiverId', apiResponse.data.userDetails.userId);
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('receiverName', apiResponse.data.userDetails.firstName + " " + apiResponse.data.userDetails.lastName);
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('receiverNo', apiResponse.data.userDetails.mobileNumber);
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('receiverEmail', apiResponse.data.userDetails.email);

              _this12.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);

              _this12.toastr.success("Login Successfull...");

              var userId = apiResponse.data.userDetails.userId; // this.socket.verifyUser();
              //  this.socket.registerUser(userId);

              setTimeout(function () {
                _this12.router.navigate(["/dashboard/".concat(userId)]);
              }, 2000);
            }, function (err) {
              _this12.toastr.warning("You Entered Wrong Password");

              console.log(err);
              console.log(err.status);
            });
          }
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.authService.authState.subscribe(function (user) {
            _this13.user = user;
            _this13.loggedIn = user != null;
          });
        }
      }, {
        key: "signInWithGoogle",
        value: function signInWithGoogle() {
          var _this14 = this;

          console.log("Sign in With Google");
          this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["GoogleLoginProvider"].PROVIDER_ID).then(function (response) {
            console.log(response.email);

            _this14.appService.socialLogin(response.email).subscribe(function (apiResponse) {
              console.log(apiResponse);
              var data = {
                userId: apiResponse.data.userDetails.userId
              };

              _this14.socketService.registerUser(data);

              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('authtoken', apiResponse.data.authToken);
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('receiverId', apiResponse.data.userDetails.userId);
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('receiverName', apiResponse.data.userDetails.firstName + " " + apiResponse.data.userDetails.lastName);
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('receiverNo', apiResponse.data.userDetails.mobileNumber);
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('receiverEmail', apiResponse.data.userDetails.email);

              _this14.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);

              _this14.toastr.success("Login Successfull...");

              var userId = apiResponse.data.userDetails.userId; // this.socket.verifyUser();
              //  this.socket.registerUser(userId);

              setTimeout(function () {
                _this14.router.navigate(["/dashboard/".concat(userId)]);
              }, 2000);
            }, function (err) {
              _this14.toastr.warning("This email doesnt exist...please register");

              console.log(err);
              console.log(err.status);
            });
          });
        }
      }, {
        key: "signOut",
        value: function signOut() {
          this.authService.signOut().then(function (response) {
            console.log(response);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_issue_socket_service__WEBPACK_IMPORTED_MODULE_6__["IssueSocketService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 35,
      vars: 2,
      consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], ["href", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "row", "p-0", "m-0"], [1, "col-sm"], [1, "col-sm", "p-5"], [1, "form-signin-heading"], ["for", "inputEmail", 1, "sr-only"], ["type", "email", "id", "inputEmail", "placeholder", "Email address", "required", "", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputPassword", 1, "sr-only"], ["type", "password", "id", "inputPassword", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-dark", "btn-block", 3, "click"], [1, "google", "btn", 3, "click"], [1, "fa", "fa-google", "fa-fw"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Issue Tracker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_8_listener() {
            return ctx.goToSignup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sign-Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_11_listener() {
            return ctx.goToRecoverPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Forgot Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Please Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_24_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_26_listener() {
            return ctx.signinFunction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_31_listener() {
            return ctx.signInWithGoogle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Login with Google ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]],
      styles: [".google[_ngcontent-%COMP%] {\r\n    background-color: #dd4b39;\r\n    color: white;\r\n  }\r\n  .btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 12px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    margin: 5px 0;\r\n    opacity: 0.85;\r\n    display: inline-block;\r\n    font-size: 17px;\r\n    line-height: 20px;\r\n    text-decoration: none; \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCLEVBQUUsa0NBQWtDO0VBQzNEIiwiZmlsZSI6InNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdvb2dsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBvcGFjaXR5OiAwLjg1O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IC8qIHJlbW92ZSB1bmRlcmxpbmUgZnJvbSBhbmNob3JzICovXHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }, {
          type: angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _issue_socket_service__WEBPACK_IMPORTED_MODULE_6__["IssueSocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/recover/recover.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/user/recover/recover.component.ts ***!
    \***************************************************/

  /*! exports provided: RecoverComponent */

  /***/
  function srcAppUserRecoverRecoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecoverComponent", function () {
      return RecoverComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var RecoverComponent = /*#__PURE__*/function () {
      function RecoverComponent(router, toastr, appService) {
        var _this15 = this;

        _classCallCheck(this, RecoverComponent);

        this.router = router;
        this.toastr = toastr;
        this.appService = appService;

        this.goToLogin = function () {
          _this15.router.navigate(['/login']);
        };

        this.recoverPassFunction = function () {
          if (!_this15.email) {
            _this15.toastr.warning("Enter Your Mail Id");
          } else if (!_this15.confirmEmail) {
            _this15.toastr.warning('Please Confirm Your Email');
          } else if (_this15.email !== _this15.confirmEmail) {
            _this15.toastr.warning('Email Id Doesnt Match');
          } else {
            var data = {
              email: _this15.email
            };

            _this15.appService.recoverPass(data).subscribe(function (apiResponse) {
              if (apiResponse.status === 200) {
                console.log(apiResponse);

                _this15.toastr.success("Password Sent To Your Mail successfully...");

                setTimeout(function () {
                  _this15.router.navigate(['/login']);
                }, 2000);
              } else {
                _this15.toastr.error("hi  apiResponse.message");
              }

              (function (err) {
                _this15.toastr.warning("some Error Occured while signin");

                _this15.goToLogin();
              });
            });
          }
        };
      }

      _createClass(RecoverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RecoverComponent;
    }();

    RecoverComponent.ɵfac = function RecoverComponent_Factory(t) {
      return new (t || RecoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]));
    };

    RecoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecoverComponent,
      selectors: [["app-recover"]],
      decls: 30,
      vars: 2,
      consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], ["href", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "row", "p-0", "m-0"], [1, "col-sm"], [1, "col-sm", "p-5"], [1, "form-signin-heading"], [1, "form-signin-heading", 2, "color", "red"], ["for", "inputEmail", 1, "sr-only"], ["type", "email", "id", "inputEmail", "placeholder", "Email address", "required", "", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "id", "inputEmail", "placeholder", "Confirm Email address", "required", "", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "click"]],
      template: function RecoverComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Meeting Scheduler");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecoverComponent_Template_a_click_8_listener() {
            return ctx.goToLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Log-In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Please Enter Your Registered Email Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "(Password Will be Sent To This Email)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RecoverComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Confirm Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RecoverComponent_Template_input_ngModelChange_25_listener($event) {
            return ctx.confirmEmail = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecoverComponent_Template_button_click_27_listener() {
            return ctx.recoverPassFunction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Recover Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmEmail);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVjb3Zlci9yZWNvdmVyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecoverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recover',
          templateUrl: './recover.component.html',
          styleUrls: ['./recover.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }, {
          type: src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/signin/signin.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/user/signin/signin.component.ts ***!
    \*************************************************/

  /*! exports provided: SigninComponent */

  /***/
  function srcAppUserSigninSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
      return SigninComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/__ivy_ngcc__/angularx-social-login.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SigninComponent = /*#__PURE__*/function () {
      function SigninComponent(router, appService, toastr, authService) {
        var _this16 = this;

        _classCallCheck(this, SigninComponent);

        this.router = router;
        this.appService = appService;
        this.toastr = toastr;
        this.authService = authService;

        this.goToLogin = function () {
          _this16.router.navigate(['/login']);
        };

        this.signupFunction = function () {
          if (!_this16.firstName) {
            _this16.toastr.warning('Enter Your First Name');
          } else if (!_this16.lastName) {
            _this16.toastr.warning('Enter Your Last Name');
          } else if (!_this16.mobile) {
            _this16.toastr.warning('Enter Your Mobile No. ');
          } else if (!_this16.email) {
            _this16.toastr.warning('Enter Your Mail id ');
          } else if (!_this16.password) {
            _this16.toastr.warning('Enter Your Password');
          } else if (_this16.password !== _this16.confPassword) {
            _this16.toastr.warning("Passwords Doesnt Match");
          } else {
            var data = {
              firstName: _this16.firstName,
              lastName: _this16.lastName,
              mobileNumber: _this16.mobile,
              email: _this16.email,
              password: _this16.password,
              countryCode: _this16.countryCode
            };
            console.log(data);

            _this16.appService.signupFunction(data).subscribe(function (apiResponse) {
              console.log(apiResponse);

              if (apiResponse.status === 200) {
                _this16.toastr.success("Signup Successfull...");

                setTimeout(function () {
                  _this16.goToLogin();
                }, 2000);
              } else {
                _this16.toastr.error(apiResponse.message);
              }
            }, function (err) {
              _this16.toastr.warning("Some Error Occured while signup");
            });
          }
        }; //end of sign up function

      }

      _createClass(SigninComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signInWithGoogle",
        value: function signInWithGoogle() {
          this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["GoogleLoginProvider"].PROVIDER_ID);
        }
      }, {
        key: "signInWithFB",
        value: function signInWithFB() {
          this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["FacebookLoginProvider"].PROVIDER_ID);
        }
      }, {
        key: "signOut",
        value: function signOut() {
          this.authService.signOut();
        }
      }]);

      return SigninComponent;
    }();

    SigninComponent.ɵfac = function SigninComponent_Factory(t) {
      return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SigninComponent,
      selectors: [["app-signin"]],
      decls: 62,
      vars: 7,
      consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], ["href", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "exp"], [1, "row", "p-0", "m-0"], [1, "col-sm"], [1, "col-sm", "p-5"], [1, "form-signin-heading"], ["for", "inputFirstName", 1, "sr-only"], ["type", "text", "id", "inputFirstName", "placeholder", "FirstName", "required", "", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputLastName", 1, "sr-only"], ["type", "text", "id", "inputLastName", "placeholder", "LastName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputCountryCode", 1, "sr-only"], ["type", "number", "id", "inputMobile", "placeholder", "Country Code", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputMobile", 1, "sr-only"], ["type", "number", "id", "inputMobile", "placeholder", "Mobile", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputEmail", 1, "sr-only"], ["type", "email", "id", "inputEmail", "placeholder", "Email address", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputPassword", 1, "sr-only"], ["type", "password", "id", "inputPassword", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "id", "confirmPassword", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-dark", "btn-block", 3, "click"]],
      template: function SigninComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Issue Tracker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_Template_a_click_8_listener() {
            return ctx.goToLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Log-In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sign Up Here...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "First Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Last Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_27_listener($event) {
            return ctx.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Country Code: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Country Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_33_listener($event) {
            return ctx.countryCode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Mobile: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_39_listener($event) {
            return ctx.mobile = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Email: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_45_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Password: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_51_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Confirm Password: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_57_listener($event) {
            return ctx.confPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_Template_button_click_59_listener() {
            return ctx.signupFunction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.countryCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confPassword);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"]],
      styles: [".exp[_ngcontent-%COMP%]{\r\n    background-color: powderblue;\r\n}\r\n\r\n  \r\n  .fontexp[_ngcontent-%COMP%]{\r\n    transform: rotateZ(90deg);  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7QUFDaEM7OztFQUdFO0lBQ0UseUJBQXlCLEdBQUciLCJmaWxlIjoic3JjL2FwcC91c2VyL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwb3dkZXJibHVlO1xyXG59XHJcblxyXG4gIFxyXG4gIC5mb250ZXhwe1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDkwZGVnKTsgIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signin',
          templateUrl: './signin.component.html',
          styleUrls: ['./signin.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/user/login/login.component.ts");
    /* harmony import */


    var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signin/signin.component */
    "./src/app/user/signin/signin.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _recover_recover_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./recover/recover.component */
    "./src/app/user/recover/recover.component.ts");
    /* harmony import */


    var _change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./change-pass/change-pass.component */
    "./src/app/user/change-pass/change-pass.component.ts");

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserModule
    });
    UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserModule_Factory(t) {
        return new (t || UserModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: 'signup',
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"]
      }, {
        path: 'recover/password',
        component: _recover_recover_component__WEBPACK_IMPORTED_MODULE_6__["RecoverComponent"]
      }, {
        path: 'change/password/:userId',
        component: _change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_7__["ChangePassComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserModule, {
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"], _recover_recover_component__WEBPACK_IMPORTED_MODULE_6__["RecoverComponent"], _change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_7__["ChangePassComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"], _recover_recover_component__WEBPACK_IMPORTED_MODULE_6__["RecoverComponent"], _change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_7__["ChangePassComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
            path: 'signup',
            component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"]
          }, {
            path: 'recover/password',
            component: _recover_recover_component__WEBPACK_IMPORTED_MODULE_6__["RecoverComponent"]
          }, {
            path: 'change/password/:userId',
            component: _change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_7__["ChangePassComponent"]
          }])]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\issueTrackerFront\issueTracker\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!********************!*\
    !*** fs (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map