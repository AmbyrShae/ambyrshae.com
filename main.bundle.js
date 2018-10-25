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

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home-view></app-home-view>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

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
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_animated_name_animated_name_component__ = __webpack_require__("./src/components/animated-name/animated-name.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_links_links_component__ = __webpack_require__("./src/components/links/links.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_home_home_page_view__ = __webpack_require__("./src/views/home/home-page.view.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_phims_phims_section_view__ = __webpack_require__("./src/views/phims/phims-section.view.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_bio_bio_section_view__ = __webpack_require__("./src/views/bio/bio-section.view.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_calwest_calwest_section_view__ = __webpack_require__("./src/views/calwest/calwest-section.view.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_bragging_rights_bragging_rights_section_view__ = __webpack_require__("./src/views/bragging-rights/bragging-rights-section.view.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_my_site_my_site_section_view__ = __webpack_require__("./src/views/my-site/my-site-section.view.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components



// Views






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__views_home_home_page_view__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_3__components_animated_name_animated_name_component__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_4__components_links_links_component__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_6__views_phims_phims_section_view__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_7__views_bio_bio_section_view__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_8__views_calwest_calwest_section_view__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_9__views_bragging_rights_bragging_rights_section_view__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_10__views_my_site_my_site_section_view__["a" /* default */]
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

/***/ "./src/components/animated-name/animated-name.component.html":
/***/ (function(module, exports) {

module.exports = "<svg width=\"100%\" viewBox=\"0 0 500 500\" preserveAspectRatio=\"none\">\n    <g transform=\"scale(0.65)\" stroke=\"#32322C\" stroke-width=\"3\" class=\"lines\" fill=\"none\">\n        <path id=\"a1\" d=\"m 64.803623,111.81046 q -5.360145,0 -9.995948,-1.73843 -4.635798,-1.73842 -7.967782,-5.07041 -3.331976,-3.33198 -5.360145,-7.388304 -2.028161,-4.056324 -2.028161,-9.416468 0,-5.215278 2.317902,-9.41647 2.317902,-4.201197 6.519093,-7.388307 4.201197,-3.187116 10.140815,-4.780671 5.93962,-1.593555 12.893319,-1.738421 5.505012,0 11.154898,1.014081 5.64988,1.014081 9.995944,2.752502 l 0,-6.084485 q 0,-9.271602 -5.21528,-14.486875 -5.215272,-5.215278 -14.776614,-5.360145 -11.44463,0 -24.048209,8.836996 l -4.201197,-8.257521 q 14.631747,-9.851076 29.408361,-9.851076 14.921482,0 23.179003,7.967781 8.257518,7.96778 8.402388,22.45466 l 0,30.857043 q 0,4.49093 4.05632,4.6358 l 0,11.01003 q -2.02816,0.28974 -3.33198,0.4346 -1.30381,0.14487 -2.7525,0.14487 -3.76659,0 -5.939621,-2.17303 -2.173035,-2.17303 -2.752509,-5.50501 l -0.28974,-5.360144 q -5.070405,6.808834 -12.748448,10.285684 -7.678046,3.47685 -16.659909,3.62172 z m 3.331977,-9.56134 q 6.808834,0 12.603585,-2.46277 5.794753,-2.462768 8.981864,-6.808832 2.752509,-2.752509 2.752509,-5.649885 l 0,-11.154891 q -9.271604,-3.621723 -19.267547,-3.621723 -9.561342,0 -15.50096,4.05633 -5.939619,4.056325 -6.084486,10.575418 0,3.187109 1.158948,5.939618 1.158953,2.752509 3.476849,4.780671 2.317902,2.028164 5.360145,3.187114 3.042243,1.15895 6.519093,1.15895 z\"/>\n        <path id=\"m\" d=\"m 227.77241,110.39774 -12.68788,0 0,-42.100696 q 0,-11.82279 -3.7487,-17.44583 -3.74869,-5.62304 -11.39025,-5.62304 -7.78575,0 -13.84132,5.47886 -6.05558,5.47885 -8.79501,14.41804 l 0,45.272666 -12.68789,0 0,-42.100696 q 0,-12.11116 -3.74869,-17.59001 -3.74869,-5.47886 -11.24607,-5.47886 -7.64157,0 -13.84133,5.33467 -6.19975,5.33468 -8.79501,14.41805 l 0,45.416846 -12.68788,0 0,-75.262196 11.53444,0 0,16.1482 q 4.61377,-8.36246 11.96698,-12.83205 7.3532,-4.46959 16.58075,-4.61378 9.51591,0 14.99477,5.04632 5.47886,5.04631 6.92067,13.2646 10.09262,-18.31092 28.6919,-18.31092 6.48812,0 10.81354,2.30689 4.32541,2.30689 7.06485,6.6323 2.73942,4.32542 3.74868,10.09263 1.00927,5.76722 1.15345,12.54371 l 0,44.984296 z\"/>\n        <path id=\"b\" d=\"m 270.25157,111.27523 q -8.6519,0 -15.74363,-4.25504 -7.09172,-4.25504 -11.20494,-11.063105 l 0,13.899805 -11.0631,0 0,-103.5392913 12.48144,0 0,44.2524073 q 4.68056,-7.233564 11.48861,-11.630444 6.80805,-4.396866 15.88547,-4.396866 7.65908,0 13.75796,3.262192 6.09889,3.262194 10.35395,8.510083 4.25504,5.247879 6.66623,12.339609 2.41118,7.091732 2.41118,14.467127 0,7.800902 -2.69485,14.750804 -2.69485,6.9499 -7.37542,12.055951 -4.68053,5.106048 -11.0631,8.226408 -6.38256,3.12036 -13.8998,3.12036 z m -3.12034,-10.77943 q 5.53155,0 10.21209,-2.269354 4.68054,-2.269361 8.08458,-6.098901 3.40401,-3.829529 5.24787,-8.651911 1.84384,-4.822373 1.84384,-10.353927 0,-5.389709 -1.702,-10.353922 -1.70201,-4.964216 -4.96423,-8.935588 -3.26219,-3.971373 -7.65906,-6.09889 -4.39688,-2.127517 -9.92844,-2.41119 -3.97135,0 -7.51722,1.41836 -3.54587,1.418337 -6.52439,3.687696 -2.97853,2.269349 -5.38972,5.531541 -2.41118,3.262204 -4.11321,6.66624 l 0,21.417027 q 0.70918,3.545866 2.97854,6.524383 2.26935,2.97853 5.53155,5.106047 3.2622,2.12753 6.80805,3.545867 3.54589,1.418342 7.09175,1.276522 z\"/>\n        <path id=\"y\" d=\"m 309.24283,129.06695 q 1.86006,0.28617 3.72013,0.42925 1.86007,0.14308 2.86165,0.14308 1.71698,0 3.00471,-0.7154 1.28773,-0.71541 2.71856,-3.14781 1.43082,-2.43239 3.1478,-6.2956 1.71698,-3.8632 4.29246,-10.73114 l -31.6211,-74.688737 13.02045,0 25.46858,63.385263 23.17926,-63.385263 12.01888,0 -36.3428,94.290957 q -2.00314,5.00787 -6.58177,8.72799 -4.57862,3.72014 -12.87737,3.86322 -1.28773,0 -2.57547,-0.14308 -1.28774,-0.14309 -3.43397,-0.57233 l 0,-11.1604 z\"/>\n        <path id=\"r\" d=\"m 416.81979,44.992248 q -9.81457,0.297411 -17.24983,5.055992 -7.43528,4.758571 -10.7068,13.234791 l 0,47.883159 -13.08608,0 0,-77.624259 12.19385,0 0,17.993362 q 4.01504,-8.030098 10.55808,-12.93738 6.54304,-4.907281 13.97832,-5.650804 1.48705,0 2.52799,0 1.04094,0 1.78447,0.148701 l 0,11.896438 z\"/>\n        <path id=\"s\" d=\"m 448.29192,111.83851 q -9.27297,0 -18.25154,-2.79661 -8.97858,-2.79661 -15.45493,-8.38982 l 5.59321,-8.684199 q 6.77073,5.151643 13.54146,7.653875 6.77073,2.502224 14.27742,2.649414 8.38981,0 13.24708,-3.238171 4.85727,-3.238182 5.00445,-9.420159 0,-2.796606 -1.3247,-4.710072 -1.32471,-1.913466 -3.97413,-3.532557 -2.64941,-1.619091 -6.77073,-2.649415 -4.12131,-1.030333 -9.56734,-2.502232 -6.91792,-1.766274 -11.92237,-3.385365 -5.00446,-1.619082 -8.24264,-3.826931 -3.23817,-2.207849 -4.71007,-5.298839 -1.4719,-3.090982 -1.4719,-7.653871 0,-5.740397 2.20785,-10.156095 2.20785,-4.415698 6.32916,-7.506679 4.12132,-3.09099 9.27297,-4.56289 5.15163,-1.471899 11.62799,-1.619082 8.68419,0 16.19088,2.796607 7.50668,2.796607 12.65832,7.359488 l -5.88759,7.801062 q -4.85726,-4.268506 -10.89204,-6.329163 -6.03479,-2.060657 -12.36395,-2.207849 -7.06511,0 -11.92238,2.943799 -4.85727,2.943798 -5.00445,9.714528 0,2.649415 0.88313,4.415698 0.88315,1.766274 3.23819,3.090981 2.35503,1.324708 5.59321,2.355041 3.23817,1.030324 8.38982,2.207849 7.65387,1.766274 13.24709,3.532556 5.59321,1.766274 9.42014,4.415689 3.82694,2.649416 5.59321,5.887598 1.76629,3.238173 1.91347,8.242628 0,10.744857 -8.24263,17.074016 -8.24263,6.32917 -22.22566,6.32917 z\"/>\n        <path id=\"h\" d=\"m 550.06278,111.79242 -12.77707,0 0,-42.396613 q 0,-11.760695 -4.06542,-17.42326 -4.06543,-5.662564 -11.9059,-5.807749 -3.77504,0 -7.55009,1.451937 -3.77503,1.451937 -6.9693,4.210617 -3.19427,2.758681 -5.80775,6.243335 -2.61349,3.484653 -3.92024,7.98566 l 0,45.736073 -12.77706,0 0,-105.9915207 12.77706,0 0,46.4620367 q 4.50102,-8.276049 12.19628,-12.922251 7.69527,-4.646212 16.8425,-4.646212 6.67891,0 11.32511,2.468301 4.64622,2.468291 7.4049,6.678917 2.75868,4.210618 3.92024,10.018378 1.16154,5.807749 1.30674,12.631872 l 0,45.300479 z\"/>\n        <path id=\"a2\" d=\"m 579.94075,111.96096 q -5.29576,0 -9.87588,-1.71755 -4.58012,-1.71754 -7.87208,-5.0095 -3.29196,-3.29196 -5.29577,-7.299558 -2.00379,-4.007603 -2.00379,-9.303373 0,-5.15263 2.29005,-9.303364 2.29007,-4.150734 6.4408,-7.299562 4.15073,-3.148838 10.01901,-4.723257 5.86828,-1.574409 12.73845,-1.71754 5.43889,0 11.02092,1.001906 5.58202,1.001896 9.87588,2.719436 l 0,-6.011395 q 0,-9.160243 -5.15264,-14.312873 -5.15263,-5.152639 -14.59912,-5.29577 -11.30718,0 -23.75937,8.73086 l -4.15073,-8.158337 q 14.456,-9.732756 29.05512,-9.732756 14.74227,0 22.90061,7.872076 8.15832,7.872075 8.30146,22.184957 l 0,30.486415 q 0,4.436985 4.00761,4.580115 l 0,10.87778 q -2.0038,0.28627 -3.29197,0.4294 -1.28815,0.14312 -2.71944,0.14312 -3.72135,0 -5.86828,-2.14692 -2.14693,-2.14695 -2.71945,-5.4389 l -0.28626,-5.29577 q -5.0095,6.72706 -12.59532,10.16215 -7.58582,3.43508 -16.45981,3.57821 z m 3.29196,-9.44649 q 6.72705,0 12.4522,-2.43319 5.72516,-2.43319 8.87399,-6.727045 2.71944,-2.719455 2.71944,-5.582031 l 0,-11.020904 q -9.16024,-3.57822 -19.03612,-3.57822 -9.4465,0 -15.31478,4.007603 -5.86827,4.007603 -6.0114,10.4484 0,3.148828 1.14503,5.868274 1.14503,2.719445 3.43509,4.723243 2.29006,2.00381 5.29576,3.14883 3.0057,1.14504 6.44079,1.14504 z\"/>\n        <path id=\"e\" d=\"m 663.16537,113.16097 q -8.67292,0 -15.87586,-3.08697 -7.20294,-3.08697 -12.3479,-8.67293 -5.14495,-5.585947 -7.93793,-12.641884 -2.79298,-7.055946 -2.93997,-15.434873 0,-8.08493 2.79297,-15.287861 2.79298,-7.20294 8.08493,-12.641891 5.29196,-5.438951 12.49489,-8.525928 7.20294,-3.08697 15.87586,-3.233972 8.67293,0 15.72886,3.233972 7.05594,3.233971 12.2009,8.525928 5.14495,5.291957 7.64393,12.494888 2.49898,7.20294 2.79298,14.846871 0,1.616986 0,2.939975 0,1.322989 -0.294,2.057985 l -63.65045,0 q 0.441,5.732948 2.64598,10.436903 2.20498,4.703964 5.73295,8.08493 3.52798,3.380975 7.93794,5.291957 4.40996,1.91099 9.55491,1.91099 3.52797,0 6.90894,-0.88199 3.38097,-0.88199 6.32094,-2.645985 2.93998,-1.763989 5.14496,-3.968968 2.20498,-2.20498 3.52797,-5.291949 l 11.1719,3.086969 q -1.91099,4.262965 -5.14496,7.790933 -3.23397,3.52797 -7.64393,6.02695 -4.40996,2.49898 -9.70191,4.11597 -5.29195,1.61699 -11.0249,1.46998 z m 26.31277,-44.981612 q -0.441,-5.438951 -2.64598,-9.995912 -2.20498,-4.556961 -5.73295,-7.937927 -3.52797,-3.380975 -8.08493,-4.997961 -4.55696,-1.616986 -9.70192,-1.910982 -5.14495,0 -9.70191,1.763988 -4.55696,1.76398 -7.93793,5.144955 -3.38097,3.380966 -5.58595,7.937927 -2.20498,4.556961 -2.64598,9.995912 l 52.03755,0 z\"/>\n    </g>\n</svg>"

/***/ }),

/***/ "./src/components/animated-name/animated-name.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/components/animated-name/animated-name.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AnimatedNameComponent = /** @class */ (function () {
    function AnimatedNameComponent() {
    }
    AnimatedNameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-animated-name',
            template: __webpack_require__("./src/components/animated-name/animated-name.component.html"),
            styles: [__webpack_require__("./src/components/animated-name/animated-name.component.scss")]
        })
    ], AnimatedNameComponent);
    return AnimatedNameComponent;
}());
/* harmony default export */ __webpack_exports__["a"] = (AnimatedNameComponent);


/***/ }),

/***/ "./src/components/links/links.component.html":
/***/ (function(module, exports) {

module.exports = "<div uk-scrollspy=\"target: > button; cls:uk-animation-fade; delay: 500;\">\n    <button class=\"links-btn\"\n            (click)=\"openURL('mailto:ambyrshae.jarrell@gmail.com')\" \n            style=\"background-image: url('../../assets/img/gmail.png');\">\n    </button>\n    <button class=\"links-btn\"\n            (click)=\"openURL('https://www.linkedin.com/in/ambyrshae/')\" \n            style=\"background-image: url('../../assets/img/linkedin.png');\">\n    </button>\n    <button class=\"links-btn\"\n            (click)=\"openURL('https://github.com/ambyrshae')\" \n            style=\"background-image: url('../../assets/img/GitHub.png'); \">\n    </button>\n</div>"

/***/ }),

/***/ "./src/components/links/links.component.scss":
/***/ (function(module, exports) {

module.exports = "div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  width: 300px; }\n\n.links-btn {\n  background-color: var(--white);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  width: 56px;\n  height: 56px;\n  border-radius: 28px;\n  border: none;\n  -webkit-box-shadow: 1px 1px 2px 0px rgba(145, 146, 146, 0.7);\n          box-shadow: 1px 1px 2px 0px rgba(145, 146, 146, 0.7);\n  -webkit-transition: .5s;\n  transition: .5s; }\n\n.links-btn:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2); }\n\n.links-btn:focus {\n  outline: none; }\n"

/***/ }),

/***/ "./src/components/links/links.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LinksComponent = /** @class */ (function () {
    function LinksComponent() {
    }
    LinksComponent.prototype.openURL = function (url) {
        window.open(url, '_blank');
    };
    LinksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-links',
            template: __webpack_require__("./src/components/links/links.component.html"),
            styles: [__webpack_require__("./src/components/links/links.component.scss")]
        })
    ], LinksComponent);
    return LinksComponent;
}());
/* harmony default export */ __webpack_exports__["a"] = (LinksComponent);


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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/views/bio/bio-section.view.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"bio\" \n     class=\"uk-cover-container\"\n     uk-scrollspy=\"cls:uk-animation-fade; delay: 1900;\">\n\n    <div class=\"uk-grid-collapse\" uk-grid uk-height-viewport>\n\n        <div class=\"uk-width-2-3@s\">\n\n            <div class=\"uk-section\">\n\n                <div class=\"uk-container\">\n\n                    <h3>A little about me</h3>\n\n                    <p>Let's start with my name since I am often asked about its origin.</p>\n                    <p>\n                        My dad came up with it. Simple as that!\n                        He switched the \"e\" and \"y\" around because he wanted\n                        to make sure that my name was unique. Well, it worked.\n                        Google \"AmbyrShae\" and I'm at the top of the search.\n                    </p>\n                    <h4>Moving on,</h4>\n                    <p>\n                        I graduated from the University of New Orleans with a B.S. in\n                        Biology (2009) and Computer Science, Cum Laude (2016).\n                    </p>\n                    <p>\n                        I have worked at GE Digital. I currently work at EWorldES and do \n                        freelancing as well.\n                    </p>\n                    <p>\n                        I participate in STEM outreach programs and have mentored over 20\n                        people throughout my college and professional careers.\n                    </p>\n                    <p> \n                        I'm a proud Latina New Orleanian who currently resides in Hawaii.\n                        On my off-time, I enjoy cooking and hanging out with my 15 year old\n                        mutt, Kilo.\n                    </p>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class=\"uk-width-1-3@s\">\n\n           <div id=\"center-div\">\n\n                <div id=\"bio-img\"></div>\n\n                <div id=\"h5-div\">\n                    <h5>Software developer</h5>\n                    <h5>Dog mom</h5>\n                    <h5>Cooking enthusiast</h5>\n                </div>\n\n           </div>\n            \n        </div> \n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/views/bio/bio-section.view.scss":
/***/ (function(module, exports) {

module.exports = ".uk-grid {\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap; }\n  .uk-grid .uk-section {\n    padding: 40px 0; }\n  .uk-grid .uk-section p {\n      font-family: \"Montserrat\", sans-serif; }\n  h3, h4, h5 {\n  font-family: \"Playfair Display\", serif;\n  margin-top: 0; }\n  #bio-img {\n  background-image: url('Ki.414cf9947b01a48313a4.png');\n  background-size: cover;\n  background-position-x: -8.6vw;\n  background-repeat: no-repeat;\n  border-radius: 15vw;\n  -webkit-box-shadow: 2px 2px 4px rgba(105, 103, 103, 0.7);\n          box-shadow: 2px 2px 4px rgba(105, 103, 103, 0.7);\n  opacity: 0.9;\n  height: 24vw;\n  width: 24vw;\n  margin: 40px auto 24px; }\n  #h5-div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  #h5-div h5 {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    margin: auto;\n    margin-top: 6px; }\n  @media only screen and (min-width: 320px) and (max-width: 620px) {\n  .uk-grid-collapse {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse; }\n  .uk-section {\n    padding: 0; }\n    .uk-section h3 {\n      font-size: 1.4rem; }\n  .uk-container {\n    margin-bottom: 40px; }\n  #center-div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    margin: 24px 12px 0; }\n    #center-div #bio-img {\n      background-position-x: -12.6vw;\n      border-radius: 20vw;\n      height: 40vw;\n      width: 40vw;\n      margin: 32px auto; }\n    #center-div #h5-div {\n      height: -webkit-fit-content;\n      height: -moz-fit-content;\n      height: fit-content;\n      margin: auto; }\n      #center-div #h5-div h5 {\n        font-family: \"Playfair Display\", serif;\n        margin: 0 0 12px 0;\n        font-size: 4vw; } }\n  @media only screen and (min-width: 621px) {\n  #h5-div h5 {\n    font-size: 18px; } }\n"

/***/ }),

/***/ "./src/views/bio/bio-section.view.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BioSectionComponent = /** @class */ (function () {
    function BioSectionComponent() {
    }
    BioSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-bio-section',
            template: __webpack_require__("./src/views/bio/bio-section.view.html"),
            styles: [__webpack_require__("./src/views/bio/bio-section.view.scss")]
        })
    ], BioSectionComponent);
    return BioSectionComponent;
}());
/* harmony default export */ __webpack_exports__["a"] = (BioSectionComponent);


/***/ }),

/***/ "./src/views/bragging-rights/bragging-rights-section.view.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"bragging-rights\" class=\"uk-cover-container uk-light\">  \n    <div class=\"uk-grid-collapse\" uk-grid uk-height-viewport>\n        <div class=\"uk-width-1-3@s uk-background-cover\"></div>\n        <div class=\"uk-width-2-3@s\">\n            <div class=\"uk-section\">\n                <div class=\"uk-container\">\n                    <h3>Bragging Rights Web App</h3>\n                    <div class=\"uk-grid-match\">\n                            <p> \n                                Bragging Rights was conceptualized by three women who \n                                wanted to empower other women to speak up about their \n                                achievements and the obstacles they faced in pursuit of their goals. \n                                Bragging sessions are a safe place for women to share their \n                                history represented by Agile timelines. This application\n                                is re-used by each Bragger.\n                            </p>\n                    </div>\n                    <h3>Technologies</h3>\n                    <div class=\"uk-grid-match uk-child-width-1-3@s technologies-div\" uk-grid>\n                        <div class=\"img-div\">\n                            <div class=\"br-img\">\n                                <img src=\"../../assets/img/angular.png\">\n                            </div>\n                            <h5>Angular</h5>\n                        </div>\n                        <div class=\"img-div\">\n                            <div class=\"br-img\">\n                                <img src=\"../../assets/img/ts.png\">\n                            </div>\n                            <h5>Typescript</h5>\n                        </div>\n                        <div class=\"img-div\">\n                            <div class=\"br-img\">\n                                <img src=\"../../assets/img/md.png\">\n                            </div>\n                            <h5>Material Design</h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>  "

/***/ }),

/***/ "./src/views/bragging-rights/bragging-rights-section.view.scss":
/***/ (function(module, exports) {

module.exports = "#bragging-rights {\n  background-color: #1e90ff; }\n\n.technologies-div {\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.img-div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-left: 0;\n  width: 194px; }\n\n.img-div .br-img {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n\n.img-div .br-img img {\n      height: 100px; }\n\n.img-div h5 {\n    text-align: center;\n    margin-top: 12px; }\n\n.uk-background-cover {\n  background-image: url('br.5657ab7a2184f80a93d2.png');\n  background-position: top; }\n\n@media only screen and (min-width: 320px) and (max-width: 640px) {\n  .uk-background-cover {\n    height: 24vw; } }\n"

/***/ }),

/***/ "./src/views/bragging-rights/bragging-rights-section.view.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BraggingRightsSectionComponent = /** @class */ (function () {
    function BraggingRightsSectionComponent() {
    }
    BraggingRightsSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-bragging-rights-section',
            template: __webpack_require__("./src/views/bragging-rights/bragging-rights-section.view.html"),
            styles: [__webpack_require__("./src/views/bragging-rights/bragging-rights-section.view.scss")]
        })
    ], BraggingRightsSectionComponent);
    return BraggingRightsSectionComponent;
}());
/* harmony default export */ __webpack_exports__["a"] = (BraggingRightsSectionComponent);


/***/ }),

/***/ "./src/views/calwest/calwest-section.view.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"calwest\" class=\"uk-cover-container uk-light\">  \n    <div class=\"uk-grid-collapse\" uk-grid uk-height-viewport>\n        <div class=\"uk-width-2-3@s\">\n            <div class=\"uk-section\">\n                <div class=\"uk-container\">\n                    <h3>Calwest Recycling Application Design</h3>\n                    <div class=\"uk-grid-match\">\n                        <p>\n                            Calwest Recycling is a company located in California\n                            that takes pride in recycling various types of metals.\n                            I am currently working with the company to create an \n                            application to promote efficiency in daily operations \n                            and usability for employees. We are currently in the \n                            design phase.\n                        </p>\n                    </div>\n                    <h3>Technologies</h3>\n                    <div class=\"technologies-div uk-child-width-1-2@s\" uk-grid>\n                        <div class=\"img-div\">\n                            <div class=\"calwest-img\">\n                                <img src=\"../../assets/img/adobe.png\">\n                            </div>\n                            <h5>Adobe Xd</h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"uk-width-1-3@s uk-background-cover\"></div>\n    </div>\n</div>  "

/***/ }),

/***/ "./src/views/calwest/calwest-section.view.scss":
/***/ (function(module, exports) {

module.exports = "#calwest {\n  background-color: #00B707; }\n\n.img-div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-left: 0;\n  width: 194px; }\n\n.img-div .calwest-img {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n\n.img-div .calwest-img img {\n      height: 100px; }\n\n.img-div h5 {\n    text-align: center;\n    margin-top: 12px; }\n\n.uk-background-cover {\n  background-image: url('calwest.76b8170ecdc54c808970.png');\n  background-position: left; }\n\n@media only screen and (min-width: 320px) and (max-width: 640px) {\n  .uk-grid-collapse {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse; }\n  .uk-background-cover {\n    height: 24vw;\n    background-position: top;\n    position: absolute;\n    top: 0; }\n  .img-div {\n    width: 100%; } }\n"

/***/ }),

/***/ "./src/views/calwest/calwest-section.view.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CalwestSectionComponent = /** @class */ (function () {
    function CalwestSectionComponent() {
    }
    CalwestSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-calwest-section',
            template: __webpack_require__("./src/views/calwest/calwest-section.view.html"),
            styles: [__webpack_require__("./src/views/calwest/calwest-section.view.scss")]
        })
    ], CalwestSectionComponent);
    return CalwestSectionComponent;
}());
/* harmony default export */ __webpack_exports__["a"] = (CalwestSectionComponent);


/***/ }),

/***/ "./src/views/home/home-page.view.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-page\">\n    <div uk-sticky>\n        <nav class=\"uk-navbar-container\" \n             uk-navbar>\n             <div class=\"uk-navbar-left\">\n                <ul class=\"uk-navbar-nav\">\n                    <div id=\"links\">\n                        <app-links></app-links>\n                    </div>\n                </ul>\n            </div>\n            <div class=\"uk-navbar-right\">\n                <ul class=\"uk-navbar-nav\">\n                    <div id=\"name\" \n                         uk-scrollspy=\"cls:uk-animation-slide-left-medium uk-animation-fade; delay: 1900\">\n                        <app-animated-name></app-animated-name>\n                    </div>\n                </ul>\n            </div>\n        </nav>\n    </div>\n    <app-bio-section></app-bio-section>\n    <h1 class=\"uk-heading-line uk-text-center\"><span>Current Projects</span></h1>\n    <app-phims-section></app-phims-section>\n    <app-calwest-section></app-calwest-section>\n    <h1 class=\"uk-heading-line uk-text-center\"><span>Side Projects</span></h1>\n    <app-bragging-rights-section></app-bragging-rights-section>\n    <app-my-site-section></app-my-site-section>\n</div>\n"

/***/ }),

/***/ "./src/views/home/home-page.view.scss":
/***/ (function(module, exports) {

module.exports = ".home-page {\n  height: 100%;\n  overflow: auto; }\n\n.uk-navbar-container {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content; }\n\n#name {\n  height: 64px;\n  width: 300px;\n  margin-top: 12px;\n  margin-right: 6px; }\n\n.uk-heading-line {\n  background-color: #f8f8f8;\n  padding: 40px 0 20px 0;\n  margin: 0; }\n\n@media only screen and (min-width: 320px) and (max-width: 620px) {\n  .uk-navbar-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .uk-navbar-container .uk-navbar-left {\n      margin: auto;\n      margin-bottom: 14px; }\n    .uk-navbar-container .uk-navbar-right {\n      margin: auto; }\n      .uk-navbar-container .uk-navbar-right #name {\n        height: 58px;\n        width: 248px;\n        margin-left: 12px;\n        margin-right: 0; } }\n"

/***/ }),

/***/ "./src/views/home/home-page.view.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngAfterContentInit = function () {
        //   anime({
        //     targets: '.links-btn',
        //     translateX: [
        //       { value: -70, duration: 1200 },
        //       { value: 0, duration: 800 }
        //     ],
        //     rotate: '2turn',
        //     duration: 2000,
        //     delay: 500,
        //     loop: false
        //   });
        // anime({
        //   targets: '#name .lines path',
        //   strokeDashoffset: [anime.setDashoffset, 0],
        //   easing: 'linear',
        //   duration: 1500,
        //   backgroundColor: '#000',
        //   delay: 1500
        // });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-home-view',
            template: __webpack_require__("./src/views/home/home-page.view.html"),
            styles: [__webpack_require__("./src/views/home/home-page.view.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());
/* harmony default export */ __webpack_exports__["a"] = (HomeComponent);


/***/ }),

/***/ "./src/views/my-site/my-site-section.view.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"my-site\" class=\"uk-cover-container uk-light uk-grid-collapse uk-child-width-1-2@s\" uk-grid>\n    <div class=\"uk-section\">\n        <div class=\"uk-container\">\n            <h3>ambyrshae.com</h3>\n            <div class=\"uk-grid-match\">\n                    <p> \n                        Please feel free to contact me via the links within \n                        the site banner.\n                    </p>\n            </div>\n        </div>\n    </div>\n    <div class=\"uk-section tech-section\">\n        <div class=\"uk-container\">\n            <h3>Technologies</h3>\n            <div class=\"uk-grid-match uk-child-width-1-3@s technologies-div\" uk-grid>\n                <div class=\"img-div\">\n                    <div class=\"ms-img\">\n                        <img src=\"../../assets/img/angular.png\">\n                    </div>\n                    <h5>Angular</h5>\n                </div>\n                <div class=\"img-div\">\n                    <div class=\"ms-img\">\n                        <img src=\"../../assets/img/ts.png\">\n                    </div>\n                    <h5>Typescript</h5>\n                </div>\n                <div class=\"img-div\">\n                    <div class=\"ms-img\">\n                        <img src=\"../../assets/img/uikit.png\">\n                    </div>\n                    <h5>UIKit</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n</div> "

/***/ }),

/***/ "./src/views/my-site/my-site-section.view.scss":
/***/ (function(module, exports) {

module.exports = "#my-site {\n  background-color: #32322C; }\n  #my-site p {\n    margin-bottom: 0; }\n  #my-site .technologies-div {\n    margin: 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  #my-site .img-div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    padding-left: 0;\n    width: 194px; }\n  #my-site .img-div .ms-img {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n  #my-site .img-div .ms-img img {\n        height: 100px; }\n  #my-site .img-div h5 {\n      text-align: center;\n      margin-top: 12px; }\n  @media only screen and (min-width: 320px) and (max-width: 639px) {\n  .tech-section {\n    padding-top: 0; } }\n"

/***/ }),

/***/ "./src/views/my-site/my-site-section.view.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MySiteSectionComponent = /** @class */ (function () {
    function MySiteSectionComponent() {
    }
    MySiteSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-my-site-section',
            template: __webpack_require__("./src/views/my-site/my-site-section.view.html"),
            styles: [__webpack_require__("./src/views/my-site/my-site-section.view.scss")]
        })
    ], MySiteSectionComponent);
    return MySiteSectionComponent;
}());
/* harmony default export */ __webpack_exports__["a"] = (MySiteSectionComponent);


/***/ }),

/***/ "./src/views/phims/phims-section.view.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"phims\" class=\"uk-cover-container uk-light\">  \n    <div class=\"uk-grid-collapse\" uk-grid uk-height-viewport>\n        <div class=\"uk-width-1-3@s uk-background-cover\"></div>\n        <div class=\"uk-width-2-3@s\">\n            <div class=\"uk-section\">\n                <div class=\"uk-container\">\n                    <h3>Phims Web App</h3>\n                    <div class=\"uk-grid-match\">\n                        <p>\n                            Phims is a web-app that is used by the Hawaii Department\n                            of Transportation -- Harbors Division. Phims helps its users\n                            keep track of all vessels that come and go from Hawaiian\n                            Harbors. The data stored in Phims can be viewed, edited and \n                            exported.\n                        </p>\n                    </div>\n                    <h3>Technologies</h3>\n                    <div class=\"uk-grid-match uk-child-width-1-2@s technologies-div\" uk-grid>\n                        <div class=\"img-div\">\n                            <div class=\"phims-img\">\n                                <img src=\"../../assets/img/vuejs.png\">\n                            </div>\n                            <h5>Vue.js</h5>\n                        </div>\n                        <div class=\"img-div\">\n                            <div class=\"phims-img\">\n                                <img src=\"../../assets/img/iview.png\">\n                            </div>\n                            <h5>iView</h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>  "

/***/ }),

/***/ "./src/views/phims/phims-section.view.scss":
/***/ (function(module, exports) {

module.exports = "#phims {\n  background-color: #8a2be2; }\n\n.technologies-div {\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.img-div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-left: 0;\n  width: 194px; }\n\n.img-div .phims-img {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n\n.img-div .phims-img img {\n      height: 100px; }\n\n.img-div h5 {\n    text-align: center;\n    margin-top: 12px; }\n\n.uk-background-cover {\n  background-image: url('phims.f05ce78122b8a0aff425.png');\n  background-position: right; }\n\n@media only screen and (min-width: 320px) and (max-width: 640px) {\n  .uk-background-cover {\n    height: 24vw;\n    background-position: top; } }\n"

/***/ }),

/***/ "./src/views/phims/phims-section.view.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PhimsSectionComponent = /** @class */ (function () {
    function PhimsSectionComponent() {
    }
    PhimsSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-phims-section',
            template: __webpack_require__("./src/views/phims/phims-section.view.html"),
            styles: [__webpack_require__("./src/views/phims/phims-section.view.scss")]
        })
    ], PhimsSectionComponent);
    return PhimsSectionComponent;
}());
/* harmony default export */ __webpack_exports__["a"] = (PhimsSectionComponent);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map