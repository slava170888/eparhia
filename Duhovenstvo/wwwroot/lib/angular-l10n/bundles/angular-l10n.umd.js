(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/Subject'), require('rxjs/Observable'), require('rxjs/add/operator/toPromise'), require('rxjs/add/observable/merge'), require('@angular/http'), require('rxjs/add/operator/map'), require('@angular/common'), require('@angular/forms')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/Subject', 'rxjs/Observable', 'rxjs/add/operator/toPromise', 'rxjs/add/observable/merge', '@angular/http', 'rxjs/add/operator/map', '@angular/common', '@angular/forms'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.l10n = global.ng.l10n || {}),global.ng.core,global.Rx,global.Rx,global.Rx,global.Rx,global.ng.http,global.Rx,global.ng.common,global.ng.forms));
}(this, (function (exports,_angular_core,rxjs_Subject,rxjs_Observable,rxjs_add_operator_toPromise,rxjs_add_observable_merge,_angular_http,rxjs_add_operator_map,_angular_common,_angular_forms) { 'use strict';

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
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * Allows to get the dependencies at the module level or component.
 */
var InjectorRef = (function () {
    /**
     * @param {?} injector
     */
    function InjectorRef(injector) {
        this.injector = injector;
        InjectorRef.injector = this.injector;
    }
    /**
     * @template T
     * @param {?} token
     * @return {?}
     */
    InjectorRef.get = function (token) {
        return this.injector.get(token);
    };
    return InjectorRef;
}());
InjectorRef.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
InjectorRef.ctorParameters = function () { return [
    { type: _angular_core.Injector, },
]; };
var LocaleConfig = (function () {
    function LocaleConfig() {
        this.languageCodes = [];
        this.storageIsDisabled = false;
        this.localStorage = false;
        this.sessionStorage = false;
    }
    return LocaleConfig;
}());
LocaleConfig.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
LocaleConfig.ctorParameters = function () { return []; };
var LocaleConfigAPI = (function () {
    /**
     * @param {?} configuration
     */
    function LocaleConfigAPI(configuration) {
        this.configuration = configuration;
    }
    /**
     * @param {?} languageCode
     * @param {?=} textDirection
     * @return {?}
     */
    LocaleConfigAPI.prototype.addLanguage = function (languageCode, textDirection) {
        if (textDirection === void 0) { textDirection = "LTR"; }
        this.configuration.languageCodes.push({ code: languageCode, direction: textDirection });
        return this;
    };
    /**
     * @param {?} languageCodes
     * @return {?}
     */
    LocaleConfigAPI.prototype.addLanguages = function (languageCodes) {
        for (var _i = 0, languageCodes_1 = languageCodes; _i < languageCodes_1.length; _i++) {
            var languageCode = languageCodes_1[_i];
            this.configuration.languageCodes.push({ code: languageCode, direction: "ltr" });
        }
        return this;
    };
    /**
     * @return {?}
     */
    LocaleConfigAPI.prototype.disableStorage = function () {
        this.configuration.storageIsDisabled = true;
        return this;
    };
    /**
     * @param {?=} days
     * @return {?}
     */
    LocaleConfigAPI.prototype.setCookieExpiration = function (days) {
        this.configuration.cookiesExpirationDays = days;
        return this;
    };
    /**
     * @return {?}
     */
    LocaleConfigAPI.prototype.useLocalStorage = function () {
        this.configuration.localStorage = true;
        return this;
    };
    /**
     * @return {?}
     */
    LocaleConfigAPI.prototype.useSessionStorage = function () {
        this.configuration.sessionStorage = true;
        return this;
    };
    /**
     * @param {?} languageCode
     * @return {?}
     */
    LocaleConfigAPI.prototype.defineLanguage = function (languageCode) {
        this.configuration.languageCode = languageCode;
        return this;
    };
    /**
     * @param {?} languageCode
     * @param {?} countryCode
     * @param {?=} scriptCode
     * @param {?=} numberingSystem
     * @param {?=} calendar
     * @return {?}
     */
    LocaleConfigAPI.prototype.defineDefaultLocale = function (languageCode, countryCode, scriptCode, numberingSystem, calendar) {
        this.configuration.languageCode = languageCode;
        this.configuration.countryCode = countryCode;
        this.configuration.scriptCode = scriptCode;
        this.configuration.numberingSystem = numberingSystem;
        this.configuration.calendar = calendar;
        return this;
    };
    /**
     * @param {?} currencyCode
     * @return {?}
     */
    LocaleConfigAPI.prototype.defineCurrency = function (currencyCode) {
        this.configuration.currencyCode = currencyCode;
        return this;
    };
    return LocaleConfigAPI;
}());
var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Implement this class-interface to create a custom storage for default locale & currency.
 * @abstract
 */
var LocaleStorage = (function () {
    function LocaleStorage() {
    }
    /**
     * This method must contain the logic to read the storage.
    \@param name 'defaultLocale' or 'currency'
    \@return A promise with the value of the given name
     * @abstract
     * @param {?} name
     * @return {?}
     */
    LocaleStorage.prototype.read = function (name) { };
    /**
     * This method must contain the logic to write the storage.
    \@param name 'defaultLocale' or 'currency'
    \@param value The value for the given name
     * @abstract
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    LocaleStorage.prototype.write = function (name, value) { };
    return LocaleStorage;
}());
LocaleStorage.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
LocaleStorage.ctorParameters = function () { return []; };
var BrowserStorage = (function () {
    /**
     * @param {?} configuration
     */
    function BrowserStorage(configuration) {
        this.configuration = configuration;
        this.hasCookie = typeof navigator !== "undefined" && navigator.cookieEnabled;
        this.hasStorage = typeof Storage !== "undefined";
    }
    /**
     * @param {?} name
     * @return {?}
     */
    BrowserStorage.prototype.read = function (name) {
        return __awaiter$1(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                value = null;
                if (!this.configuration.storageIsDisabled) {
                    if (this.configuration.localStorage && this.hasStorage) {
                        value = this.getLocalStorage(name);
                    }
                    else if (this.configuration.sessionStorage && this.hasStorage) {
                        value = this.getSessionStorage(name);
                    }
                    else if (this.hasCookie) {
                        value = this.getCookie(name);
                    }
                }
                return [2 /*return*/, value];
            });
        });
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    BrowserStorage.prototype.write = function (name, value) {
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.configuration.storageIsDisabled) {
                    if (this.configuration.localStorage && this.hasStorage) {
                        this.setLocalStorage(name, value);
                    }
                    else if (this.configuration.sessionStorage && this.hasStorage) {
                        this.setSessionStorage(name, value);
                    }
                    else if (this.hasCookie) {
                        this.setCookie(name, value);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * @param {?} name
     * @return {?}
     */
    BrowserStorage.prototype.getLocalStorage = function (name) {
        return localStorage.getItem(name);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    BrowserStorage.prototype.getSessionStorage = function (name) {
        return sessionStorage.getItem(name);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    BrowserStorage.prototype.getCookie = function (name) {
        var /** @type {?} */ result = null;
        if (typeof document !== "undefined") {
            result = new RegExp("(?:^|; )" + encodeURIComponent(name) + "=([^;]*)").exec(document.cookie);
        }
        return result ? result[1] : null;
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    BrowserStorage.prototype.setLocalStorage = function (name, value) {
        localStorage.setItem(name, value);
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    BrowserStorage.prototype.setSessionStorage = function (name, value) {
        sessionStorage.setItem(name, value);
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    BrowserStorage.prototype.setCookie = function (name, value) {
        var /** @type {?} */ expires = "";
        if (this.configuration.cookiesExpirationDays != null) {
            var /** @type {?} */ expirationDate = new Date();
            expirationDate.setTime(expirationDate.getTime() +
                (this.configuration.cookiesExpirationDays * 24 * 60 * 60 * 1000));
            expires = "; expires=" + expirationDate.toUTCString();
        }
        if (typeof document !== "undefined") {
            document.cookie = name + "=" + value + expires + "; path=/";
        }
    };
    return BrowserStorage;
}());
BrowserStorage.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
BrowserStorage.ctorParameters = function () { return [
    { type: LocaleConfig, },
]; };
var DefaultLocale = (function () {
    function DefaultLocale() {
    }
    Object.defineProperty(DefaultLocale.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this._value;
        },
        /**
         * @param {?} defaultLocale
         * @return {?}
         */
        set: function (defaultLocale) {
            this._value = defaultLocale;
            this.parseValue();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} languageCode
     * @param {?=} countryCode
     * @param {?=} scriptCode
     * @param {?=} numberingSystem
     * @param {?=} calendar
     * @return {?}
     */
    DefaultLocale.prototype.build = function (languageCode, countryCode, scriptCode, numberingSystem, calendar) {
        this.languageCode = languageCode;
        this.scriptCode = scriptCode;
        this.countryCode = countryCode;
        this.numberingSystem = numberingSystem;
        this.calendar = calendar;
        var /** @type {?} */ value = [];
        value.push(languageCode);
        value.push(!!scriptCode ? "-" + scriptCode : "");
        value.push(!!countryCode ? "-" + countryCode : "");
        // Adds the 'u' (Unicode) extension.
        value.push((!!numberingSystem || !!calendar) ? "-u" : "");
        value.push(!!numberingSystem ? "-nu-" + numberingSystem : "");
        value.push(!!calendar ? "-ca-" + calendar : "");
        this._value = value.join("");
    };
    /**
     * @return {?}
     */
    DefaultLocale.prototype.parseValue = function () {
        if (!!this.value) {
            var /** @type {?} */ value = this.value;
            // Looks for the 'u' (Unicode) extension.
            var /** @type {?} */ index = value.search("-u");
            if (index != -1) {
                var /** @type {?} */ extensions = value.substring(index + 1).split("-");
                switch (extensions.length) {
                    case 3:
                        if (extensions[1] == "nu") {
                            this.numberingSystem = extensions[2];
                        }
                        else if (extensions[1] == "ca") {
                            this.calendar = extensions[2];
                        }
                        break;
                    default:
                        this.numberingSystem = extensions[2];
                        this.calendar = extensions[4];
                        break;
                }
                // Extracts the codes.
                value = value.substring(0, index);
            }
            var /** @type {?} */ codes = value.split("-");
            switch (codes.length) {
                case 1:
                    this.languageCode = codes[0];
                    break;
                case 2:
                    this.languageCode = codes[0];
                    this.countryCode = codes[1];
                    break;
                default:
                    this.languageCode = codes[0];
                    this.scriptCode = codes[1];
                    this.countryCode = codes[2];
                    break;
            }
        }
    };
    return DefaultLocale;
}());
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var LocaleService = (function () {
    /**
     * @param {?} configuration
     * @param {?} storage
     */
    function LocaleService(configuration, storage) {
        this.configuration = configuration;
        this.storage = storage;
        this.languageCodeChanged = new _angular_core.EventEmitter(true);
        this.defaultLocaleChanged = new _angular_core.EventEmitter(true);
        this.currencyCodeChanged = new _angular_core.EventEmitter(true);
        this.loadTranslation = new rxjs_Subject.Subject();
        this.defaultLocale = new DefaultLocale();
    }
    /**
     * @return {?}
     */
    LocaleService.prototype.addConfiguration = function () {
        return new LocaleConfigAPI(this.configuration);
    };
    /**
     * @return {?}
     */
    LocaleService.prototype.getConfiguration = function () {
        return this.configuration;
    };
    /**
     * @return {?}
     */
    LocaleService.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initStorage()];
                    case 1:
                        _a.sent();
                        if (!!this.configuration.languageCode && !!this.configuration.countryCode) {
                            this.initDefaultLocale();
                        }
                        else if (!!this.configuration.languageCode) {
                            this.initLanguage();
                        }
                        if (!!this.configuration.currencyCode) {
                            this.initCurrency();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    LocaleService.prototype.getAvailableLanguages = function () {
        return this.configuration.languageCodes.map(function (language) { return language.code; });
    };
    /**
     * @param {?=} languageCode
     * @return {?}
     */
    LocaleService.prototype.getLanguageDirection = function (languageCode) {
        if (languageCode === void 0) { languageCode = this.defaultLocale.languageCode; }
        var /** @type {?} */ matchedLanguages = this.matchLanguage(languageCode);
        return matchedLanguages[0].direction;
    };
    /**
     * @return {?}
     */
    LocaleService.prototype.getCurrentLanguage = function () {
        return this.defaultLocale.languageCode;
    };
    /**
     * @return {?}
     */
    LocaleService.prototype.getCurrentCountry = function () {
        if (!!this.defaultLocale.countryCode) {
            return this.defaultLocale.countryCode;
        }
        return "";
    };
    /**
     * @return {?}
     */
    LocaleService.prototype.getCurrentScript = function () {
        if (!!this.defaultLocale.scriptCode) {
            return this.defaultLocale.scriptCode;
        }
        return "";
    };
    /**
     * @return {?}
     */
    LocaleService.prototype.getCurrentLocale = function () {
        var /** @type {?} */ locale = !!this.defaultLocale.countryCode
            ? this.defaultLocale.languageCode + "-" + this.defaultLocale.countryCode
            : this.defaultLocale.languageCode;
        return locale;
    };
    /**
     * @return {?}
     */
    LocaleService.prototype.getCurrentNumberingSystem = function () {
        if (!!this.defaultLocale.numberingSystem) {
            return this.defaultLocale.numberingSystem;
        }
        return "";
    };
    /**
     * @return {?}
     */
    LocaleService.prototype.getCurrentCalendar = function () {
        if (!!this.defaultLocale.calendar) {
            return this.defaultLocale.calendar;
        }
        return "";
    };
    /**
     * @return {?}
     */
    LocaleService.prototype.getDefaultLocale = function () {
        return this.defaultLocale.value;
    };
    /**
     * @return {?}
     */
    LocaleService.prototype.getCurrentCurrency = function () {
        return this.currencyCode;
    };
    /**
     * @param {?} languageCode
     * @return {?}
     */
    LocaleService.prototype.setCurrentLanguage = function (languageCode) {
        if (this.defaultLocale.languageCode != languageCode) {
            this.defaultLocale.build(languageCode);
            this.storage.write("defaultLocale", this.defaultLocale.value);
            this.sendLanguageEvents();
            this.sendTranslationEvents();
        }
    };
    /**
     * @param {?} languageCode
     * @param {?} countryCode
     * @param {?=} scriptCode
     * @param {?=} numberingSystem
     * @param {?=} calendar
     * @return {?}
     */
    LocaleService.prototype.setDefaultLocale = function (languageCode, countryCode, scriptCode, numberingSystem, calendar) {
        if (this.defaultLocale.languageCode != languageCode ||
            this.defaultLocale.countryCode != countryCode ||
            this.defaultLocale.scriptCode != scriptCode ||
            this.defaultLocale.numberingSystem != numberingSystem ||
            this.defaultLocale.calendar != calendar) {
            this.defaultLocale.build(languageCode, countryCode, scriptCode, numberingSystem, calendar);
            this.storage.write("defaultLocale", this.defaultLocale.value);
            this.sendDefaultLocaleEvents();
            this.sendTranslationEvents();
        }
    };
    /**
     * @param {?} currencyCode
     * @return {?}
     */
    LocaleService.prototype.setCurrentCurrency = function (currencyCode) {
        if (this.currencyCode != currencyCode) {
            this.currencyCode = currencyCode;
            this.storage.write("currency", this.currencyCode);
            this.sendCurrencyEvents();
        }
    };
    /**
     * @return {?}
     */
    LocaleService.prototype.initStorage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var defaultLocale, currencyCode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.defaultLocale.value) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.storage.read("defaultLocale")];
                    case 1:
                        defaultLocale = _a.sent();
                        if (!!defaultLocale) {
                            this.defaultLocale.value = defaultLocale;
                        }
                        _a.label = 2;
                    case 2:
                        if (!(this.currencyCode == null)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.storage.read("currency")];
                    case 3:
                        currencyCode = _a.sent();
                        if (!!currencyCode) {
                            this.currencyCode = currencyCode;
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    LocaleService.prototype.initLanguage = function () {
        if (!this.defaultLocale.languageCode) {
            var /** @type {?} */ browserLanguage = this.getBrowserLanguage();
            var /** @type {?} */ matchedLanguages = [];
            if (!!browserLanguage) {
                matchedLanguages = this.matchLanguage(browserLanguage);
            }
            if (!!browserLanguage && matchedLanguages.length > 0) {
                this.defaultLocale.build(browserLanguage);
            }
            else {
                this.defaultLocale.build(this.configuration.languageCode);
            }
            this.storage.write("defaultLocale", this.defaultLocale.value);
        }
        this.sendLanguageEvents();
    };
    /**
     * @return {?}
     */
    LocaleService.prototype.initDefaultLocale = function () {
        if (!this.defaultLocale.value) {
            this.defaultLocale.build(this.configuration.languageCode, this.configuration.countryCode, this.configuration.scriptCode, this.configuration.numberingSystem, this.configuration.calendar);
            this.storage.write("defaultLocale", this.defaultLocale.value);
        }
        this.sendDefaultLocaleEvents();
    };
    /**
     * @return {?}
     */
    LocaleService.prototype.initCurrency = function () {
        if (this.currencyCode == null) {
            this.currencyCode = this.configuration.currencyCode;
            this.storage.write("currency", this.currencyCode);
        }
        this.sendCurrencyEvents();
    };
    /**
     * @return {?}
     */
    LocaleService.prototype.getBrowserLanguage = function () {
        var /** @type {?} */ browserLanguage = null;
        if (typeof navigator !== "undefined" && navigator.language) {
            browserLanguage = navigator.language;
        }
        if (browserLanguage != null) {
            var /** @type {?} */ index = browserLanguage.indexOf("-");
            if (index != -1) {
                browserLanguage = browserLanguage.substring(0, index);
            }
        }
        return browserLanguage;
    };
    /**
     * @param {?} languageCode
     * @return {?}
     */
    LocaleService.prototype.matchLanguage = function (languageCode) {
        var /** @type {?} */ matchedLanguages = this.configuration.languageCodes.filter(function (language) {
            return language.code == languageCode;
        });
        return matchedLanguages;
    };
    /**
     * @return {?}
     */
    LocaleService.prototype.sendLanguageEvents = function () {
        this.languageCodeChanged.emit(this.defaultLocale.languageCode);
    };
    /**
     * @return {?}
     */
    LocaleService.prototype.sendDefaultLocaleEvents = function () {
        this.defaultLocaleChanged.emit(this.defaultLocale.value);
    };
    /**
     * @return {?}
     */
    LocaleService.prototype.sendCurrencyEvents = function () {
        this.currencyCodeChanged.emit(this.currencyCode);
    };
    /**
     * @return {?}
     */
    LocaleService.prototype.sendTranslationEvents = function () {
        // This event is subscribed by TranslationService to load the translation data.
        this.loadTranslation.next();
    };
    return LocaleService;
}());
LocaleService.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
LocaleService.ctorParameters = function () { return [
    { type: LocaleConfig, },
    { type: LocaleStorage, },
]; };
LocaleService.propDecorators = {
    'languageCodeChanged': [{ type: _angular_core.Output },],
    'defaultLocaleChanged': [{ type: _angular_core.Output },],
    'currencyCodeChanged': [{ type: _angular_core.Output },],
};
var TranslationConfig = (function () {
    function TranslationConfig() {
        this.translationData = {};
        this.providers = [];
        this.localeAsLanguage = false;
        this.keySeparator = ".";
        this.i18nPlural = true;
    }
    return TranslationConfig;
}());
TranslationConfig.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
TranslationConfig.ctorParameters = function () { return []; };
/**
 * Provides the methods to check if Intl APIs are supported.
 */
var IntlAPI = (function () {
    function IntlAPI() {
    }
    /**
     * @return {?}
     */
    IntlAPI.hasDateTimeFormat = function () {
        return this.hasIntl && Intl.hasOwnProperty("DateTimeFormat");
    };
    /**
     * @return {?}
     */
    IntlAPI.hasNumberFormat = function () {
        return this.hasIntl && Intl.hasOwnProperty("NumberFormat");
    };
    /**
     * @return {?}
     */
    IntlAPI.hasCollator = function () {
        return this.hasIntl && Intl.hasOwnProperty("Collator");
    };
    return IntlAPI;
}());
IntlAPI.hasIntl = Intl && typeof Intl === "object";
var TranslationConfigAPI = (function () {
    /**
     * @param {?} configuration
     */
    function TranslationConfigAPI(configuration) {
        this.configuration = configuration;
    }
    /**
     * @param {?} languageCode
     * @param {?} translation
     * @return {?}
     */
    TranslationConfigAPI.prototype.addTranslation = function (languageCode, translation) {
        this.configuration.translationData[languageCode] =
            typeof this.configuration.translationData[languageCode] !== "undefined"
                ? Object.assign({}, this.configuration.translationData[languageCode], translation) : translation;
        return this;
    };
    /**
     * @param {?} prefix
     * @param {?=} dataFormat
     * @return {?}
     */
    TranslationConfigAPI.prototype.addProvider = function (prefix, dataFormat) {
        if (dataFormat === void 0) { dataFormat = "json"; }
        this.configuration.providers.push({ args: { type: "Static", prefix: prefix, dataFormat: dataFormat } });
        return this;
    };
    /**
     * @param {?} path
     * @param {?=} dataFormat
     * @return {?}
     */
    TranslationConfigAPI.prototype.addWebAPIProvider = function (path, dataFormat) {
        if (dataFormat === void 0) { dataFormat = "json"; }
        this.configuration.providers.push({ args: { type: "WebAPI", path: path, dataFormat: dataFormat } });
        return this;
    };
    /**
     * @param {?=} args
     * @return {?}
     */
    TranslationConfigAPI.prototype.addCustomProvider = function (args) {
        this.configuration.providers.push({ args: args });
        return this;
    };
    /**
     * @return {?}
     */
    TranslationConfigAPI.prototype.useLocaleAsLanguage = function () {
        this.configuration.localeAsLanguage = true;
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TranslationConfigAPI.prototype.setMissingValue = function (value) {
        this.configuration.missingValue = value;
        return this;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    TranslationConfigAPI.prototype.setMissingKey = function (key) {
        this.configuration.missingKey = key;
        return this;
    };
    /**
     * @param {?} keySeparator
     * @return {?}
     */
    TranslationConfigAPI.prototype.setComposedKeySeparator = function (keySeparator) {
        this.configuration.keySeparator = keySeparator;
        return this;
    };
    /**
     * @return {?}
     */
    TranslationConfigAPI.prototype.disableI18nPlural = function () {
        this.configuration.i18nPlural = false;
        return this;
    };
    return TranslationConfigAPI;
}());
/**
 * Implement this class-interface to create a custom provider for translation data.
 * @abstract
 */
var TranslationProvider = (function () {
    function TranslationProvider() {
    }
    /**
     * This method must contain the logic of data access.
     * @abstract
     * @param {?} language The current language
     * @param {?} args The parameter of addCustomProvider method
     * @return {?} An observable of an object of translation data: {key: value}
     */
    TranslationProvider.prototype.getTranslation = function (language, args) { };
    return TranslationProvider;
}());
TranslationProvider.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
TranslationProvider.ctorParameters = function () { return []; };
var HttpTranslationProvider = (function () {
    /**
     * @param {?} http
     */
    function HttpTranslationProvider(http) {
        this.http = http;
    }
    /**
     * @param {?} language
     * @param {?} args
     * @return {?}
     */
    HttpTranslationProvider.prototype.getTranslation = function (language, args) {
        var /** @type {?} */ url = "";
        switch (args.type) {
            case "WebAPI":
                url += args.path + language;
                break;
            default:
                url += args.prefix + language + "." + args.dataFormat;
        }
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    return HttpTranslationProvider;
}());
HttpTranslationProvider.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
HttpTranslationProvider.ctorParameters = function () { return [
    { type: _angular_http.Http, },
]; };
/**
 * Implement this class-interface to create a custom handler for translated values.
 * @abstract
 */
var TranslationHandler = (function () {
    function TranslationHandler() {
    }
    /**
     * This method must contain the logic to parse the translated value.
     * @abstract
     * @param {?} path The path of the key
     * @param {?} key The key that has been requested
     * @param {?} value The translated value
     * @param {?} args The parameters passed along with the key
     * @param {?} lang The current language
     * @return {?} The parsed value
     */
    TranslationHandler.prototype.parseValue = function (path, key, value, args, lang) { };
    return TranslationHandler;
}());
TranslationHandler.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
TranslationHandler.ctorParameters = function () { return []; };
var DefaultTranslationHandler = (function () {
    /**
     * @param {?} configuration
     */
    function DefaultTranslationHandler(configuration) {
        this.configuration = configuration;
    }
    /**
     * @param {?} path
     * @param {?} key
     * @param {?} value
     * @param {?} args
     * @param {?} lang
     * @return {?}
     */
    DefaultTranslationHandler.prototype.parseValue = function (path, key, value, args, lang) {
        if (value == null) {
            return this.handleMissingValue(path);
        }
        else if (args) {
            return this.handleArgs(value, args);
        }
        return value;
    };
    /**
     * @param {?} path
     * @return {?}
     */
    DefaultTranslationHandler.prototype.handleMissingValue = function (path) {
        if (this.configuration.missingValue != null) {
            return this.configuration.missingValue;
        }
        // The same path is returned.
        return path;
    };
    /**
     * @param {?} value
     * @param {?} args
     * @return {?}
     */
    DefaultTranslationHandler.prototype.handleArgs = function (value, args) {
        var /** @type {?} */ TEMPLATE_REGEXP = /{{\s?([^{}\s]*)\s?}}/g;
        return value.replace(TEMPLATE_REGEXP, function (substring, parsedKey) {
            var /** @type {?} */ replacer = (args[parsedKey]);
            return typeof replacer !== "undefined" ? replacer : substring;
        });
    };
    return DefaultTranslationHandler;
}());
DefaultTranslationHandler.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
DefaultTranslationHandler.ctorParameters = function () { return [
    { type: TranslationConfig, },
]; };
var LoadingMode = {};
LoadingMode.Direct = 0;
LoadingMode.Async = 1;
LoadingMode[LoadingMode.Direct] = "Direct";
LoadingMode[LoadingMode.Async] = "Async";
var ServiceState = {};
ServiceState.isReady = 0;
ServiceState.isLoading = 1;
ServiceState.isWaiting = 2;
ServiceState[ServiceState.isReady] = "isReady";
ServiceState[ServiceState.isLoading] = "isLoading";
ServiceState[ServiceState.isWaiting] = "isWaiting";
var __awaiter$2 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var TranslationService = (function () {
    /**
     * @param {?} locale
     * @param {?} configuration
     * @param {?} translationProvider
     * @param {?} translationHandler
     */
    function TranslationService(locale, configuration, translationProvider, translationHandler) {
        this.locale = locale;
        this.configuration = configuration;
        this.translationProvider = translationProvider;
        this.translationHandler = translationHandler;
        this.translationChanged = new _angular_core.EventEmitter(true);
        this.translationError = new _angular_core.EventEmitter(true);
        /**
         * The translation data: {language: {key: value}}.
         */
        this.translationData = {};
        this.serviceState = ServiceState.isWaiting;
    }
    /**
     * @return {?}
     */
    TranslationService.prototype.addConfiguration = function () {
        return new TranslationConfigAPI(this.configuration);
    };
    /**
     * @return {?}
     */
    TranslationService.prototype.getConfiguration = function () {
        return this.configuration;
    };
    /**
     * @return {?}
     */
    TranslationService.prototype.init = function () {
        return __awaiter$2(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Waiting for LocaleService initialization.
                    return [4 /*yield*/, this.locale.init()];
                    case 1:
                        // Waiting for LocaleService initialization.
                        _a.sent();
                        if (this.configuration.providers.length > 0) {
                            this.loadingMode = LoadingMode.Async;
                        }
                        else {
                            this.loadingMode = LoadingMode.Direct;
                        }
                        // When the language changes, loads translation data.
                        this.locale.loadTranslation.subscribe(function () { _this.loadTranslation(); });
                        return [4 /*yield*/, this.loadTranslation()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    TranslationService.prototype.getLanguage = function () {
        return this.language;
    };
    /**
     * @param {?} keys
     * @param {?=} args
     * @param {?=} lang
     * @return {?}
     */
    TranslationService.prototype.translate = function (keys, args, lang) {
        if (args === void 0) { args = null; }
        if (lang === void 0) { lang = this.language; }
        // If the service is not ready, returns the keys.
        if (this.serviceState != ServiceState.isReady)
            return keys;
        if (Array.isArray(keys)) {
            var /** @type {?} */ data = {};
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                data[key] = this.translateKey(key, args, lang);
            }
            return data;
        }
        return this.translateKey(keys, args, lang);
    };
    /**
     * @param {?} keys
     * @param {?=} args
     * @param {?=} lang
     * @return {?}
     */
    TranslationService.prototype.translateAsync = function (keys, args, lang) {
        var _this = this;
        if (lang === void 0) { lang = this.language; }
        return rxjs_Observable.Observable.create(function (observer) {
            var /** @type {?} */ values = _this.translate(keys, args, lang);
            observer.next(values);
            observer.complete();
        });
    };
    /**
     * @param {?} key
     * @param {?} args
     * @param {?} lang
     * @return {?}
     */
    TranslationService.prototype.translateKey = function (key, args, lang) {
        if (key == null || key == "")
            return null;
        // I18n plural.
        if (this.configuration.i18nPlural && /^\d+\b/.exec(key)) {
            return this.translateI18nPlural(key, args, lang);
        }
        return this.getValue(key, args, lang);
    };
    /**
     * @param {?} key
     * @param {?} args
     * @param {?} lang
     * @return {?}
     */
    TranslationService.prototype.getValue = function (key, args, lang) {
        var /** @type {?} */ path = key;
        var /** @type {?} */ value = null;
        if (this.translationData[lang]) {
            var /** @type {?} */ translation = this.translationData[lang];
            // Composed key.
            var /** @type {?} */ sequences = key.split(this.configuration.keySeparator);
            do {
                key = ((sequences.shift()));
                if (translation[key] && typeof translation[key] === "object") {
                    translation = translation[key];
                }
            } while (sequences.length > 0);
            value = translation[key] || translation[this.configuration.missingKey];
        }
        return this.translationHandler.parseValue(path, key, value, args, lang);
    };
    /**
     * @param {?} key
     * @param {?} args
     * @param {?} lang
     * @return {?}
     */
    TranslationService.prototype.translateI18nPlural = function (key, args, lang) {
        var /** @type {?} */ keyText = key.replace(/^\d+\b/, "");
        keyText = keyText.trim();
        var /** @type {?} */ keyNumber = parseFloat(key);
        key = key.replace(/^\d+/, this.translateNumber(keyNumber));
        return key.replace(keyText, this.getValue(keyText, args, lang));
    };
    /**
     * @param {?} keyNumber
     * @return {?}
     */
    TranslationService.prototype.translateNumber = function (keyNumber) {
        if (!isNaN(keyNumber) && IntlAPI.hasNumberFormat()) {
            var /** @type {?} */ localeNumber = new Intl.NumberFormat(this.language).format(keyNumber);
            return localeNumber;
        }
        return keyNumber.toString();
    };
    /**
     * @return {?}
     */
    TranslationService.prototype.loadTranslation = function () {
        return __awaiter$2(this, void 0, void 0, function () {
            var language;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        language = !this.configuration.localeAsLanguage
                            ? this.locale.getCurrentLanguage()
                            : this.locale.getCurrentLocale();
                        if (!(language != null && language != this.language)) return [3 /*break*/, 3];
                        if (!(this.loadingMode == LoadingMode.Async)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getTranslation(language).toPromise()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.translationData = {};
                        this.translationData[language] = this.configuration.translationData[language];
                        this.releaseTranslation(language);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} language
     * @return {?}
     */
    TranslationService.prototype.getTranslation = function (language) {
        var _this = this;
        return rxjs_Observable.Observable.create(function (observer) {
            _this.translationData = {};
            _this.serviceState = ServiceState.isLoading;
            var /** @type {?} */ sequencesOfTranslationData = [];
            for (var _i = 0, _a = _this.configuration.providers; _i < _a.length; _i++) {
                var provider = _a[_i];
                sequencesOfTranslationData.push(_this.translationProvider.getTranslation(language, provider.args));
            }
            // Merges all the sequences into a single observable sequence.
            rxjs_Observable.Observable.merge.apply(rxjs_Observable.Observable, sequencesOfTranslationData).subscribe(function (data) {
                _this.addData(data, language);
            }, function (error) {
                // Sends an event for custom actions.
                _this.translationError.emit(error);
                _this.releaseTranslation(language);
                observer.next(null);
                observer.complete();
            }, function () {
                _this.releaseTranslation(language);
                observer.next(null);
                observer.complete();
            });
        });
    };
    /**
     * @param {?} data
     * @param {?} language
     * @return {?}
     */
    TranslationService.prototype.addData = function (data, language) {
        this.translationData[language] = typeof this.translationData[language] !== "undefined"
            ? Object.assign({}, this.translationData[language], data) : data;
    };
    /**
     * @param {?} language
     * @return {?}
     */
    TranslationService.prototype.releaseTranslation = function (language) {
        this.serviceState = ServiceState.isReady;
        this.language = language;
        this.sendEvents();
    };
    /**
     * @return {?}
     */
    TranslationService.prototype.sendEvents = function () {
        // Sends an event for the components.
        this.translationChanged.emit(this.language);
    };
    return TranslationService;
}());
TranslationService.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
TranslationService.ctorParameters = function () { return [
    { type: LocaleService, },
    { type: TranslationConfig, },
    { type: TranslationProvider, },
    { type: TranslationHandler, },
]; };
TranslationService.propDecorators = {
    'translationChanged': [{ type: _angular_core.Output },],
    'translationError': [{ type: _angular_core.Output },],
};
/**
 * Provides 'lang' to the translate pipe.
 */
var Translation = (function () {
    /**
     * @param {?=} translation
     * @param {?=} changeDetectorRef
     */
    function Translation(translation, changeDetectorRef) {
        if (translation === void 0) { translation = InjectorRef.get(TranslationService); }
        var _this = this;
        this.translation = translation;
        this.changeDetectorRef = changeDetectorRef;
        this.paramSubscriptions = [];
        this.lang = this.translation.getLanguage();
        // When the language changes, subscribes to the event & updates lang property.
        this.paramSubscriptions.push(this.translation.translationChanged.subscribe(function (language) {
            _this.lang = language;
            // OnPush Change Detection strategy.
            if (_this.changeDetectorRef) {
                _this.changeDetectorRef.markForCheck();
            }
        }));
    }
    /**
     * @return {?}
     */
    Translation.prototype.cancelParamSubscriptions = function () {
        this.paramSubscriptions.forEach(function (subscription) {
            if (typeof subscription !== "undefined") {
                subscription.unsubscribe();
            }
        });
    };
    return Translation;
}());
Translation.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
Translation.ctorParameters = function () { return [
    { type: TranslationService, },
    { type: _angular_core.ChangeDetectorRef, },
]; };
/**
 * Provides 'lang' to the translate pipe,
'defaultLocale' & 'currency' to localeDecimal, localePercent & localeCurrency pipes.
 */
var Localization = (function (_super) {
    __extends(Localization, _super);
    /**
     * @param {?=} locale
     * @param {?=} translation
     * @param {?=} changeDetectorRef
     */
    function Localization(locale, translation, changeDetectorRef) {
        if (locale === void 0) { locale = InjectorRef.get(LocaleService); }
        if (translation === void 0) { translation = InjectorRef.get(TranslationService); }
        var _this = _super.call(this, translation, changeDetectorRef) || this;
        _this.locale = locale;
        _this.translation = translation;
        _this.changeDetectorRef = changeDetectorRef;
        _this.defaultLocale = _this.locale.getDefaultLocale();
        // When the default locale changes, subscribes to the event & updates defaultLocale property.
        _this.paramSubscriptions.push(_this.locale.defaultLocaleChanged.subscribe(function (defaultLocale) {
            _this.defaultLocale = defaultLocale;
            // OnPush Change Detection strategy.
            if (_this.changeDetectorRef) {
                _this.changeDetectorRef.markForCheck();
            }
        }));
        _this.currency = _this.locale.getCurrentCurrency();
        // When the currency changes, subscribes to the event & updates currency property.
        _this.paramSubscriptions.push(_this.locale.currencyCodeChanged.subscribe(function (currency) {
            _this.currency = currency;
            // OnPush Change Detection strategy.
            if (_this.changeDetectorRef) {
                _this.changeDetectorRef.markForCheck();
            }
        }));
        return _this;
    }
    return Localization;
}(Translation));
Localization.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
Localization.ctorParameters = function () { return [
    { type: LocaleService, },
    { type: TranslationService, },
    { type: _angular_core.ChangeDetectorRef, },
]; };
/**
 * @abstract
 */
var NumberCode = (function () {
    /**
     * @param {?} locale
     */
    function NumberCode(locale) {
        this.locale = locale;
    }
    Object.defineProperty(NumberCode.prototype, "numberCodes", {
        /**
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ numberCodes = [];
            for (var /** @type {?} */ num = 0; num <= 9; num++) {
                numberCodes.push(this.toUnicode(num.toString()));
            }
            if (IntlAPI.hasNumberFormat()) {
                for (var /** @type {?} */ num = 0; num <= 9; num++) {
                    numberCodes[num] = this.toUnicode(new Intl.NumberFormat(this.locale.getDefaultLocale()).format(num));
                }
            }
            return numberCodes;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @abstract
     * @param {?} s
     * @return {?}
     */
    NumberCode.prototype.parse = function (s) { };
    /**
     * @abstract
     * @param {?} digits
     * @return {?}
     */
    NumberCode.prototype.getRegExp = function (digits) { };
    /**
     * @param {?} pattern
     * @return {?}
     */
    NumberCode.prototype.toChar = function (pattern) {
        return pattern.replace(/\\u[\dA-F]{4}/gi, function (match) {
            return String.fromCharCode(parseInt(match.replace(/\\u/g, ""), 16));
        });
    };
    /**
     * @param {?} c
     * @return {?}
     */
    NumberCode.prototype.toUnicode = function (c) {
        return "\\u" + this.toHex(c.charCodeAt(0));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NumberCode.prototype.toHex = function (value) {
        var /** @type {?} */ hex = value.toString(16).toUpperCase();
        // With padding.
        hex = "0000".substr(0, 4 - hex.length) + hex;
        return hex;
    };
    return NumberCode;
}());
NumberCode.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
NumberCode.ctorParameters = function () { return [
    { type: LocaleService, },
]; };
var DecimalCode = (function (_super) {
    __extends(DecimalCode, _super);
    /**
     * @param {?} locale
     */
    function DecimalCode(locale) {
        var _this = _super.call(this, locale) || this;
        _this.locale = locale;
        return _this;
    }
    Object.defineProperty(DecimalCode.prototype, "decimalCodes", {
        /**
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ decimalCodes = {
                minusSign: this.toUnicode("-"),
                decimalSeparator: this.toUnicode(".")
            };
            if (IntlAPI.hasNumberFormat()) {
                var /** @type {?} */ value = -0.9; // Reference value.
                var /** @type {?} */ localeValue = new Intl.NumberFormat(this.locale.getDefaultLocale()).format(value);
                var /** @type {?} */ unicodeChars = [];
                unicodeChars.push(this.toUnicode(localeValue.charAt(0)));
                unicodeChars.push(this.toUnicode(localeValue.charAt(1)));
                unicodeChars.push(this.toUnicode(localeValue.charAt(2)));
                unicodeChars.push(this.toUnicode(localeValue.charAt(3)));
                // Right to left:
                // checks Unicode characters 'RIGHT-TO-LEFT MARK' (U+200F) & 'Arabic Letter Mark' (U+061C),
                // or the reverse order.
                // Left to right:
                // checks Unicode character 'LEFT-TO-RIGHT MARK' (U+200E).
                if (unicodeChars[0] == "\\u200F" || unicodeChars[0] == "\\u061C") {
                    decimalCodes = {
                        minusSign: unicodeChars[1],
                        decimalSeparator: unicodeChars[3]
                    };
                }
                else if (unicodeChars[0] == this.toUnicode(new Intl.NumberFormat(this.locale.getDefaultLocale()).format(0))) {
                    decimalCodes = {
                        minusSign: unicodeChars[3],
                        decimalSeparator: unicodeChars[1]
                    };
                }
                else if (unicodeChars[0] == "\\u200E") {
                    decimalCodes = {
                        minusSign: unicodeChars[1],
                        decimalSeparator: unicodeChars[3]
                    };
                }
                else {
                    decimalCodes = {
                        minusSign: unicodeChars[0],
                        decimalSeparator: unicodeChars[2]
                    };
                }
            }
            return decimalCodes;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} s
     * @return {?}
     */
    DecimalCode.prototype.parse = function (s) {
        var /** @type {?} */ value = "";
        var /** @type {?} */ decimalCodes = this.decimalCodes;
        var /** @type {?} */ characters = s.split("");
        for (var _i = 0, characters_1 = characters; _i < characters_1.length; _i++) {
            var char = characters_1[_i];
            var /** @type {?} */ charCode = this.toUnicode(char);
            var /** @type {?} */ index = this.numberCodes.indexOf(charCode);
            if (index != -1) {
                value += index;
            }
            else if (charCode == decimalCodes.minusSign) {
                value += "-";
            }
            else if (charCode == decimalCodes.decimalSeparator) {
                value += ".";
            }
            else {
                return NaN;
            }
        }
        return parseFloat(value);
    };
    /**
     * @param {?} digits
     * @return {?}
     */
    DecimalCode.prototype.getRegExp = function (digits) {
        var /** @type {?} */ minInt = 1;
        var /** @type {?} */ minFraction = 0;
        var /** @type {?} */ maxFraction = 3;
        if (!!digits) {
            var /** @type {?} */ NUMBER_FORMAT_REGEXP = /^(\d+)?\.((\d+)(\-(\d+))?)?$/;
            var /** @type {?} */ parts = digits.match(NUMBER_FORMAT_REGEXP);
            if (parts != null) {
                if (parts[1] != null) {
                    minInt = parseInt(parts[1]);
                }
                if (parts[3] != null) {
                    minFraction = parseInt(parts[3]);
                }
                if (parts[5] != null) {
                    maxFraction = parseInt(parts[5]);
                }
            }
        }
        var /** @type {?} */ minusSign = this.decimalCodes.minusSign;
        var /** @type {?} */ zero = this.numberCodes[0];
        var /** @type {?} */ decimalSeparator = this.decimalCodes.decimalSeparator;
        var /** @type {?} */ nine = this.numberCodes[9];
        // Pattern for 1.2-2 digits: /^-?[0-9]{1,}\.[0-9]{2,2}$/
        // Unicode pattern = "^\u002d?[\u0030-\u0039]{1,}\\u002e[\u0030-\u0039]{2,2}$"
        var /** @type {?} */ pattern;
        if (minFraction > 0 && maxFraction > 0) {
            pattern = "^"
                + minusSign
                + "?[" + zero + "-" + nine
                + "]{" + minInt + ",}\\"
                + decimalSeparator
                + "[" + zero + "-" + nine
                + "]{" + minFraction + "," + maxFraction
                + "}$";
        }
        else if (minFraction == 0 && maxFraction > 0) {
            // Decimal separator is optional.
            pattern = "^"
                + minusSign
                + "?[" + zero + "-" + nine
                + "]{" + minInt + ",}\\"
                + decimalSeparator
                + "?[" + zero + "-" + nine
                + "]{" + minFraction + "," + maxFraction
                + "}$";
        }
        else {
            // Integer number.
            pattern = "^"
                + minusSign
                + "?[" + zero + "-" + nine
                + "]{" + minInt + ",}$";
        }
        pattern = this.toChar(pattern);
        var /** @type {?} */ regExp = new RegExp(pattern);
        return regExp;
    };
    return DecimalCode;
}(NumberCode));
DecimalCode.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
DecimalCode.ctorParameters = function () { return [
    { type: LocaleService, },
]; };
var LocaleValidation = (function () {
    /**
     * @param {?} decimalCode
     */
    function LocaleValidation(decimalCode) {
        this.decimalCode = decimalCode;
    }
    /**
     * @param {?} s
     * @return {?}
     */
    LocaleValidation.prototype.parseNumber = function (s) {
        if (s == "") {
            return null;
        }
        return this.decimalCode.parse(s);
    };
    return LocaleValidation;
}());
LocaleValidation.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
LocaleValidation.ctorParameters = function () { return [
    { type: DecimalCode, },
]; };
var Collator = (function () {
    /**
     * @param {?} locale
     * @param {?} translation
     */
    function Collator(locale, translation) {
        this.locale = locale;
        this.translation = translation;
    }
    /**
     * @param {?} key1
     * @param {?} key2
     * @param {?=} extension
     * @param {?=} options
     * @return {?}
     */
    Collator.prototype.compare = function (key1, key2, extension, options) {
        if (options === void 0) { options = { usage: 'sort', sensitivity: 'variant' }; }
        if (!IntlAPI.hasCollator()) {
            return 0;
        }
        var /** @type {?} */ value1 = this.translation.translate(key1);
        var /** @type {?} */ value2 = this.translation.translate(key2);
        var /** @type {?} */ locale = this.addExtension(this.locale.getCurrentLocale(), extension);
        return new Intl.Collator(locale, options).compare(value1, value2);
    };
    /**
     * @param {?} list
     * @param {?} keyName
     * @param {?=} order
     * @param {?=} extension
     * @param {?=} options
     * @return {?}
     */
    Collator.prototype.sort = function (list, keyName, order, extension, options) {
        var _this = this;
        if (order === void 0) { order = "asc"; }
        if (options === void 0) { options = { usage: 'sort', sensitivity: 'variant' }; }
        if (!list || !keyName || !IntlAPI.hasCollator()) {
            return list;
        }
        list.sort(function (key1, key2) {
            return _this.compare(key1[keyName], key2[keyName], extension, options);
        });
        if (order == "desc") {
            list.reverse();
        }
        return list;
    };
    /**
     * @param {?} list
     * @param {?} keyName
     * @param {?=} order
     * @param {?=} extension
     * @param {?=} options
     * @return {?}
     */
    Collator.prototype.sortAsync = function (list, keyName, order, extension, options) {
        var _this = this;
        if (options === void 0) { options = { usage: 'sort', sensitivity: 'variant' }; }
        return rxjs_Observable.Observable.create(function (observer) {
            observer.next(_this.sort(list, keyName, order, extension, options));
            observer.complete();
        });
    };
    /**
     * @param {?} s
     * @param {?} list
     * @param {?} keyNames
     * @param {?=} options
     * @return {?}
     */
    Collator.prototype.search = function (s, list, keyNames, options) {
        var _this = this;
        if (options === void 0) { options = { usage: 'search' }; }
        if (!list || !keyNames || s == "" || s == null || !IntlAPI.hasCollator()) {
            return list;
        }
        var /** @type {?} */ locale = this.locale.getCurrentLocale();
        var /** @type {?} */ collator = new Intl.Collator(locale, options);
        var /** @type {?} */ matches = list.filter(function (key) {
            var /** @type {?} */ found = false;
            for (var /** @type {?} */ i = 0; i < keyNames.length; i++) {
                if (_this.match(key[keyNames[i]], s, collator)) {
                    found = true;
                    break;
                }
            }
            return found;
        });
        return matches;
    };
    /**
     * @param {?} s
     * @param {?} list
     * @param {?} keyNames
     * @param {?=} options
     * @return {?}
     */
    Collator.prototype.searchAsync = function (s, list, keyNames, options) {
        var _this = this;
        if (options === void 0) { options = { usage: 'search' }; }
        return rxjs_Observable.Observable.create(function (observer) {
            observer.next(_this.search(s, list, keyNames, options));
            observer.complete();
        });
    };
    /**
     * @param {?} locale
     * @param {?=} extension
     * @return {?}
     */
    Collator.prototype.addExtension = function (locale, extension) {
        if (!!extension) {
            locale = locale + "-u-" + extension;
        }
        return locale;
    };
    /**
     * @param {?} key
     * @param {?} s
     * @param {?} collator
     * @return {?}
     */
    Collator.prototype.match = function (key, s, collator) {
        var /** @type {?} */ value = this.translation.translate(key);
        var /** @type {?} */ valueLength = value.length;
        var /** @type {?} */ sLength = s.length;
        if (sLength > valueLength) {
            return false;
        }
        if (sLength == valueLength) {
            return collator.compare(value, s) == 0;
        }
        var /** @type {?} */ found = false;
        for (var /** @type {?} */ i = 0; i < valueLength - (sLength - 1); i++) {
            var /** @type {?} */ str = value.substr(i, sLength);
            if (collator.compare(str, s) == 0) {
                found = true;
                break;
            }
        }
        return found;
    };
    return Collator;
}());
Collator.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
Collator.ctorParameters = function () { return [
    { type: LocaleService, },
    { type: TranslationService, },
]; };
/**
 * Property decorator for components to provide the parameter to the translate pipe.
 * @return {?}
 */
function Language() {
    /**
     * @param {?} target
     * @param {?=} propertyKey
     * @return {?}
     */
    function DecoratorFactory(target, propertyKey) {
        var /** @type {?} */ subscription;
        var /** @type {?} */ targetNgOnInit = target.ngOnInit;
        /**
         * @this {?}
         * @return {?}
         */
        function ngOnInit() {
            var _this = this;
            var /** @type {?} */ translation = InjectorRef.get(TranslationService);
            if (typeof propertyKey !== "undefined") {
                this[propertyKey] = translation.getLanguage();
                // When the language changes, subscribes to the event & updates language property.
                subscription = translation.translationChanged.subscribe(function (language) {
                    _this[propertyKey] = language;
                });
            }
            if (targetNgOnInit) {
                targetNgOnInit.apply(this);
            }
        }
        target.ngOnInit = ngOnInit;
        var /** @type {?} */ targetNgOnDestroy = target.ngOnDestroy;
        /**
         * @this {?}
         * @return {?}
         */
        function ngOnDestroy() {
            if (typeof subscription !== "undefined") {
                subscription.unsubscribe();
            }
            if (targetNgOnDestroy) {
                targetNgOnDestroy.apply(this);
            }
        }
        target.ngOnDestroy = ngOnDestroy;
        if (typeof propertyKey !== "undefined") {
            Object.defineProperty(target, propertyKey, {
                writable: true,
                value: undefined
            });
        }
    }
    return DecoratorFactory;
}
/**
 * Property decorator for components to provide the parameter
to localeDecimal, localePercent & localeCurrency pipes.
 * @return {?}
 */
function DefaultLocale$1() {
    /**
     * @param {?} target
     * @param {?=} propertyKey
     * @return {?}
     */
    function DecoratorFactory(target, propertyKey) {
        var /** @type {?} */ subscription;
        var /** @type {?} */ targetNgOnInit = target.ngOnInit;
        /**
         * @this {?}
         * @return {?}
         */
        function ngOnInit() {
            var _this = this;
            var /** @type {?} */ locale = InjectorRef.get(LocaleService);
            if (typeof propertyKey !== "undefined") {
                this[propertyKey] = locale.getDefaultLocale();
                // When the default locale changes, subscribes to the event & updates defaultLocale property.
                subscription = locale.defaultLocaleChanged.subscribe(function (defaultLocale) {
                    _this[propertyKey] = defaultLocale;
                });
            }
            if (targetNgOnInit) {
                targetNgOnInit.apply(this);
            }
        }
        target.ngOnInit = ngOnInit;
        var /** @type {?} */ targetNgOnDestroy = target.ngOnDestroy;
        /**
         * @this {?}
         * @return {?}
         */
        function ngOnDestroy() {
            if (typeof subscription !== "undefined") {
                subscription.unsubscribe();
            }
            if (targetNgOnDestroy) {
                targetNgOnDestroy.apply(this);
            }
        }
        target.ngOnDestroy = ngOnDestroy;
        if (typeof propertyKey !== "undefined") {
            Object.defineProperty(target, propertyKey, {
                writable: true,
                value: undefined
            });
        }
    }
    return DecoratorFactory;
}
/**
 * Property decorator for components to provide the parameter to the localeCurrency pipe.
 * @return {?}
 */
function Currency() {
    /**
     * @param {?} target
     * @param {?=} propertyKey
     * @return {?}
     */
    function DecoratorFactory(target, propertyKey) {
        var /** @type {?} */ subscription;
        var /** @type {?} */ targetNgOnInit = target.ngOnInit;
        /**
         * @this {?}
         * @return {?}
         */
        function ngOnInit() {
            var _this = this;
            var /** @type {?} */ locale = InjectorRef.get(LocaleService);
            if (typeof propertyKey !== "undefined") {
                this[propertyKey] = locale.getCurrentCurrency();
                // When the currency changes, subscribes to the event & updates currency property.
                subscription = locale.currencyCodeChanged.subscribe(function (currency) {
                    _this[propertyKey] = currency;
                });
            }
            if (targetNgOnInit) {
                targetNgOnInit.apply(this);
            }
        }
        target.ngOnInit = ngOnInit;
        var /** @type {?} */ targetNgOnDestroy = target.ngOnDestroy;
        /**
         * @this {?}
         * @return {?}
         */
        function ngOnDestroy() {
            if (typeof subscription !== "undefined") {
                subscription.unsubscribe();
            }
            if (targetNgOnDestroy) {
                targetNgOnDestroy.apply(this);
            }
        }
        target.ngOnDestroy = ngOnDestroy;
        if (typeof propertyKey !== "undefined") {
            Object.defineProperty(target, propertyKey, {
                writable: true,
                value: undefined
            });
        }
    }
    return DecoratorFactory;
}
var TranslatePipe = (function () {
    /**
     * @param {?} translation
     */
    function TranslatePipe(translation) {
        this.translation = translation;
    }
    /**
     * @param {?} key
     * @param {?} lang
     * @param {?=} args
     * @return {?}
     */
    TranslatePipe.prototype.transform = function (key, lang, args) {
        return this.translation.translate(key, args, lang);
    };
    return TranslatePipe;
}());
TranslatePipe.decorators = [
    { type: _angular_core.Pipe, args: [{
                name: 'translate',
                pure: true
            },] },
];
/**
 * @nocollapse
 */
TranslatePipe.ctorParameters = function () { return [
    { type: TranslationService, },
]; };
var LocaleDatePipe = (function () {
    function LocaleDatePipe() {
    }
    /**
     * @param {?} value
     * @param {?} defaultLocale
     * @param {?=} pattern
     * @return {?}
     */
    LocaleDatePipe.prototype.transform = function (value, defaultLocale, pattern) {
        if (pattern === void 0) { pattern = 'mediumDate'; }
        if (typeof defaultLocale === "undefined")
            return null;
        if (IntlAPI.hasDateTimeFormat()) {
            var /** @type {?} */ localeDate = new _angular_common.DatePipe(defaultLocale);
            return localeDate.transform(value, pattern);
        }
        // Returns the date without localization.
        return value;
    };
    return LocaleDatePipe;
}());
LocaleDatePipe.decorators = [
    { type: _angular_core.Pipe, args: [{
                name: 'localeDate',
                pure: true
            },] },
];
/**
 * @nocollapse
 */
LocaleDatePipe.ctorParameters = function () { return []; };
var LocaleDecimalPipe = (function () {
    function LocaleDecimalPipe() {
    }
    /**
     * @param {?} value
     * @param {?} defaultLocale
     * @param {?=} digits
     * @return {?}
     */
    LocaleDecimalPipe.prototype.transform = function (value, defaultLocale, digits) {
        if (typeof defaultLocale === "undefined")
            return null;
        if (IntlAPI.hasNumberFormat()) {
            var /** @type {?} */ localeDecimal = new _angular_common.DecimalPipe(defaultLocale);
            return localeDecimal.transform(value, digits);
        }
        // Returns the number without localization.
        return value;
    };
    return LocaleDecimalPipe;
}());
LocaleDecimalPipe.decorators = [
    { type: _angular_core.Pipe, args: [{
                name: 'localeDecimal',
                pure: true
            },] },
];
/**
 * @nocollapse
 */
LocaleDecimalPipe.ctorParameters = function () { return []; };
var LocalePercentPipe = (function () {
    function LocalePercentPipe() {
    }
    /**
     * @param {?} value
     * @param {?} defaultLocale
     * @param {?=} digits
     * @return {?}
     */
    LocalePercentPipe.prototype.transform = function (value, defaultLocale, digits) {
        if (typeof defaultLocale === "undefined")
            return null;
        if (IntlAPI.hasNumberFormat()) {
            var /** @type {?} */ localePercent = new _angular_common.PercentPipe(defaultLocale);
            return localePercent.transform(value, digits);
        }
        // Returns the number without localization.
        return value;
    };
    return LocalePercentPipe;
}());
LocalePercentPipe.decorators = [
    { type: _angular_core.Pipe, args: [{
                name: 'localePercent',
                pure: true
            },] },
];
/**
 * @nocollapse
 */
LocalePercentPipe.ctorParameters = function () { return []; };
var LocaleCurrencyPipe = (function () {
    function LocaleCurrencyPipe() {
    }
    /**
     * @param {?} value
     * @param {?} defaultLocale
     * @param {?} currency
     * @param {?=} symbolDisplay
     * @param {?=} digits
     * @return {?}
     */
    LocaleCurrencyPipe.prototype.transform = function (value, defaultLocale, currency, symbolDisplay, digits) {
        if (symbolDisplay === void 0) { symbolDisplay = false; }
        if (typeof defaultLocale === "undefined" || typeof currency === "undefined")
            return null;
        if (IntlAPI.hasNumberFormat()) {
            var /** @type {?} */ localeCurrency = new _angular_common.CurrencyPipe(defaultLocale);
            return localeCurrency.transform(value, currency, symbolDisplay, digits);
        }
        // Returns the number & currency without localization.
        return value + " " + currency;
    };
    return LocaleCurrencyPipe;
}());
LocaleCurrencyPipe.decorators = [
    { type: _angular_core.Pipe, args: [{
                name: 'localeCurrency',
                pure: true
            },] },
];
/**
 * @nocollapse
 */
LocaleCurrencyPipe.ctorParameters = function () { return []; };
/**
 * Breadth First Search (BFS) algorithm for traversing & searching tree data structure of DOM
 * explores the neighbor nodes first, before moving to the next level neighbors.
 * Time complexity: between O(1) and O(|V|^2).
 */
var BFS = (function () {
    function BFS() {
    }
    /**
     * Target node is a non empty text node.
     * @param {?} rootNode
     * @return {?}
     */
    BFS.getTargetNode = function (rootNode) {
        return this.walk(rootNode);
    };
    /**
     * @param {?} rootNode
     * @return {?}
     */
    BFS.walk = function (rootNode) {
        var /** @type {?} */ queue = [];
        var /** @type {?} */ iNode;
        var /** @type {?} */ depth = 0;
        var /** @type {?} */ nodeToDepthIncrease = 1;
        queue.push(rootNode);
        while (queue.length > 0 && depth <= this.MAX_DEPTH) {
            iNode = queue.shift();
            if (this.isTargetNode(iNode)) {
                return iNode;
            }
            if (depth < this.MAX_DEPTH && iNode.childNodes != null) {
                for (var _i = 0, _a = iNode.childNodes; _i < _a.length; _i++) {
                    var child = _a[_i];
                    if (this.isValidNode(child)) {
                        queue.push(child);
                    }
                }
            }
            if (--nodeToDepthIncrease == 0) {
                depth++;
                nodeToDepthIncrease = queue.length;
            }
        }
        return rootNode;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    BFS.isTargetNode = function (node) {
        return typeof node !== "undefined" &&
            node.nodeType == 3 &&
            node.nodeValue != null &&
            node.nodeValue.trim() != "";
    };
    /**
     * A valid node is not marked for translation.
     * @param {?} node
     * @return {?}
     */
    BFS.isValidNode = function (node) {
        if (typeof node !== "undefined" && node.nodeType == 1 && node.attributes) {
            for (var _i = 0, _a = node.attributes; _i < _a.length; _i++) {
                var attr = _a[_i];
                if (this.SELECTOR.test(attr.name))
                    return false;
            }
        }
        return true;
    };
    return BFS;
}());
BFS.SELECTOR = /^l10n|translate|locale/;
BFS.MAX_DEPTH = 10;
/**
 * @abstract
 */
var BaseDirective = (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    function BaseDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.attributes = [];
        this.subscriptions = [];
        this.TEXT_MUTATION_CONFIG = { subtree: true, characterData: true };
        this.SELECTOR = /^l10n-/;
    }
    /**
     * @return {?}
     */
    BaseDirective.prototype.ngAfterViewInit = function () {
        if (this.el && this.el.nativeElement) {
            this.element = this.el.nativeElement;
            this.renderNode = BFS.getTargetNode(this.element);
            this.getKey();
            this.getAttributes();
            this.addTextListener();
            this.setup();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BaseDirective.prototype.ngOnChanges = function (changes) {
        if (!!this.key) {
            if (this.nodeValue == null || this.nodeValue == "") {
                if (!!this.valueAttribute) {
                    this.key = this.valueAttribute;
                }
                else if (!!this.innerHTMLProperty) {
                    this.key = this.innerHTMLProperty;
                }
            }
            this.replaceText();
        }
        if (this.attributes.length > 0) {
            this.replaceAttributes();
        }
    };
    /**
     * @return {?}
     */
    BaseDirective.prototype.ngOnDestroy = function () {
        this.removeTextListener();
        this.cancelSubscriptions();
    };
    /**
     * @abstract
     * @return {?}
     */
    BaseDirective.prototype.setup = function () { };
    /**
     * @abstract
     * @return {?}
     */
    BaseDirective.prototype.replace = function () { };
    /**
     * @abstract
     * @return {?}
     */
    BaseDirective.prototype.replaceText = function () { };
    /**
     * @abstract
     * @return {?}
     */
    BaseDirective.prototype.replaceAttributes = function () { };
    /**
     * @return {?}
     */
    BaseDirective.prototype.getAttributesData = function () {
        var /** @type {?} */ keys = this.getAttributesKeys();
        var /** @type {?} */ data = {};
        for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
            var key = keys_2[_i];
            data[key] = this.getValues(key);
        }
        return data;
    };
    /**
     * @return {?}
     */
    BaseDirective.prototype.getAttributesKeys = function () {
        return this.attributes.map(function (attr) { return attr.key; });
    };
    /**
     * @abstract
     * @param {?} keys
     * @return {?}
     */
    BaseDirective.prototype.getValues = function (keys) { };
    /**
     * @param {?} value
     * @return {?}
     */
    BaseDirective.prototype.setText = function (value) {
        if (!!value) {
            if (!!this.nodeValue && !!this.key) {
                this.removeTextListener();
                this.renderer.setValue(this.renderNode, this.nodeValue.replace(this.key, value));
                this.addTextListener();
            }
            else if (!!this.valueAttribute) {
                this.renderer.setAttribute(this.element, "value", value);
            }
            else if (!!this.innerHTMLProperty) {
                this.renderer.setProperty(this.element, "innerHTML", value);
            }
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    BaseDirective.prototype.setAttributes = function (data) {
        for (var _i = 0, _a = this.attributes; _i < _a.length; _i++) {
            var attr = _a[_i];
            this.renderer.setAttribute(this.element, attr.name, data[attr.key]);
        }
    };
    /**
     * @return {?}
     */
    BaseDirective.prototype.addTextListener = function () {
        var _this = this;
        if (typeof MutationObserver !== "undefined") {
            this.textObserver = new MutationObserver(function (mutations) {
                _this.renderNode = BFS.getTargetNode(_this.element);
                _this.getKey();
                _this.replaceText();
            });
            this.textObserver.observe(this.renderNode, this.TEXT_MUTATION_CONFIG);
        }
    };
    /**
     * @return {?}
     */
    BaseDirective.prototype.removeTextListener = function () {
        if (typeof this.textObserver !== "undefined") {
            this.textObserver.disconnect();
        }
    };
    /**
     * @return {?}
     */
    BaseDirective.prototype.getText = function () {
        this.nodeValue = this.renderNode != null ? (this.renderNode.nodeValue) : "";
        return !!this.nodeValue ? this.nodeValue.trim() : "";
    };
    /**
     * @return {?}
     */
    BaseDirective.prototype.getKey = function () {
        if (this.element.childNodes.length > 0) {
            this.key = this.getText();
        }
        else if (!!this.valueAttribute) {
            this.key = this.valueAttribute;
        }
        else if (!!this.innerHTMLProperty) {
            this.key = this.innerHTMLProperty;
        }
    };
    /**
     * @return {?}
     */
    BaseDirective.prototype.getAttributes = function () {
        if (this.element.attributes) {
            for (var _i = 0, _a = this.element.attributes; _i < _a.length; _i++) {
                var attr = _a[_i];
                if (this.SELECTOR.test(attr.name)) {
                    var /** @type {?} */ name = attr.name.substr(5);
                    for (var _b = 0, _c = this.element.attributes; _b < _c.length; _b++) {
                        var targetAttr = _c[_b];
                        if (new RegExp("^" + name + "$").test(targetAttr.name)) {
                            this.attributes.push({ name: name, key: targetAttr.value });
                        }
                    }
                }
            }
        }
    };
    /**
     * @return {?}
     */
    BaseDirective.prototype.cancelSubscriptions = function () {
        this.subscriptions.forEach(function (subscription) {
            if (typeof subscription !== "undefined") {
                subscription.unsubscribe();
            }
        });
    };
    return BaseDirective;
}());
BaseDirective.propDecorators = {
    'valueAttribute': [{ type: _angular_core.Input, args: ['value',] },],
    'innerHTMLProperty': [{ type: _angular_core.Input, args: ['innerHTML',] },],
};
var TranslateDirective = (function (_super) {
    __extends(TranslateDirective, _super);
    /**
     * @param {?} translation
     * @param {?} el
     * @param {?} renderer
     */
    function TranslateDirective(translation, el, renderer) {
        var _this = _super.call(this, el, renderer) || this;
        _this.translation = translation;
        _this.el = el;
        _this.renderer = renderer;
        return _this;
    }
    Object.defineProperty(TranslateDirective.prototype, "l10nTranslate", {
        /**
         * @param {?} params
         * @return {?}
         */
        set: function (params) {
            this.params = params;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateDirective.prototype, "translate", {
        /**
         * @param {?} params
         * @return {?}
         */
        set: function (params) {
            this.params = params;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TranslateDirective.prototype.setup = function () {
        var _this = this;
        this.replace();
        this.subscriptions.push(this.translation.translationChanged.subscribe(function () { _this.replace(); }));
    };
    /**
     * @return {?}
     */
    TranslateDirective.prototype.replace = function () {
        this.replaceText();
        this.replaceAttributes();
    };
    /**
     * @return {?}
     */
    TranslateDirective.prototype.replaceText = function () {
        if (!!this.key) {
            this.setText(this.getValues(this.key));
        }
    };
    /**
     * @return {?}
     */
    TranslateDirective.prototype.replaceAttributes = function () {
        if (this.attributes.length > 0) {
            var /** @type {?} */ keys = this.getAttributesKeys();
            this.setAttributes(this.getValues(keys));
        }
    };
    /**
     * @param {?} keys
     * @return {?}
     */
    TranslateDirective.prototype.getValues = function (keys) {
        return this.translation.translate(keys, this.params);
    };
    return TranslateDirective;
}(BaseDirective));
TranslateDirective.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: '[l10nTranslate],[translate]'
            },] },
];
/**
 * @nocollapse
 */
TranslateDirective.ctorParameters = function () { return [
    { type: TranslationService, },
    { type: _angular_core.ElementRef, },
    { type: _angular_core.Renderer2, },
]; };
TranslateDirective.propDecorators = {
    'l10nTranslate': [{ type: _angular_core.Input },],
    'translate': [{ type: _angular_core.Input },],
};
var LocaleDateDirective = (function (_super) {
    __extends(LocaleDateDirective, _super);
    /**
     * @param {?} locale
     * @param {?} el
     * @param {?} renderer
     */
    function LocaleDateDirective(locale, el, renderer) {
        var _this = _super.call(this, el, renderer) || this;
        _this.locale = locale;
        _this.el = el;
        _this.renderer = renderer;
        _this.defaultPattern = 'mediumDate';
        _this.localeDatePipe = new LocaleDatePipe();
        return _this;
    }
    Object.defineProperty(LocaleDateDirective.prototype, "l10nDate", {
        /**
         * @param {?} pattern
         * @return {?}
         */
        set: function (pattern) {
            this.pattern = pattern;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocaleDateDirective.prototype, "localeDate", {
        /**
         * @param {?} pattern
         * @return {?}
         */
        set: function (pattern) {
            this.pattern = pattern;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LocaleDateDirective.prototype.setup = function () {
        var _this = this;
        this.replace();
        this.subscriptions.push(this.locale.defaultLocaleChanged.subscribe(function () { _this.replace(); }));
    };
    /**
     * @return {?}
     */
    LocaleDateDirective.prototype.replace = function () {
        this.replaceText();
        this.replaceAttributes();
    };
    /**
     * @return {?}
     */
    LocaleDateDirective.prototype.replaceText = function () {
        if (!!this.key) {
            this.setText(this.getValues(this.key));
        }
    };
    /**
     * @return {?}
     */
    LocaleDateDirective.prototype.replaceAttributes = function () {
        if (this.attributes.length > 0) {
            this.setAttributes(this.getAttributesData());
        }
    };
    /**
     * @param {?} keys
     * @return {?}
     */
    LocaleDateDirective.prototype.getValues = function (keys) {
        return this.localeDatePipe.transform(keys, this.locale.getDefaultLocale(), this.pattern || this.defaultPattern);
    };
    return LocaleDateDirective;
}(BaseDirective));
LocaleDateDirective.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: '[l10nDate],[localeDate]'
            },] },
];
/**
 * @nocollapse
 */
LocaleDateDirective.ctorParameters = function () { return [
    { type: LocaleService, },
    { type: _angular_core.ElementRef, },
    { type: _angular_core.Renderer2, },
]; };
LocaleDateDirective.propDecorators = {
    'l10nDate': [{ type: _angular_core.Input },],
    'localeDate': [{ type: _angular_core.Input },],
};
var LocaleDecimalDirective = (function (_super) {
    __extends(LocaleDecimalDirective, _super);
    /**
     * @param {?} locale
     * @param {?} el
     * @param {?} renderer
     */
    function LocaleDecimalDirective(locale, el, renderer) {
        var _this = _super.call(this, el, renderer) || this;
        _this.locale = locale;
        _this.el = el;
        _this.renderer = renderer;
        _this.localeDecimalPipe = new LocaleDecimalPipe();
        return _this;
    }
    Object.defineProperty(LocaleDecimalDirective.prototype, "l10nDecimal", {
        /**
         * @param {?} digits
         * @return {?}
         */
        set: function (digits) {
            this.digits = digits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocaleDecimalDirective.prototype, "localeDecimal", {
        /**
         * @param {?} digits
         * @return {?}
         */
        set: function (digits) {
            this.digits = digits;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LocaleDecimalDirective.prototype.setup = function () {
        var _this = this;
        this.replace();
        this.subscriptions.push(this.locale.defaultLocaleChanged.subscribe(function () { _this.replace(); }));
    };
    /**
     * @return {?}
     */
    LocaleDecimalDirective.prototype.replace = function () {
        this.replaceText();
        this.replaceAttributes();
    };
    /**
     * @return {?}
     */
    LocaleDecimalDirective.prototype.replaceText = function () {
        if (!!this.key) {
            this.setText(this.getValues(this.key));
        }
    };
    /**
     * @return {?}
     */
    LocaleDecimalDirective.prototype.replaceAttributes = function () {
        if (this.attributes.length > 0) {
            this.setAttributes(this.getAttributesData());
        }
    };
    /**
     * @param {?} keys
     * @return {?}
     */
    LocaleDecimalDirective.prototype.getValues = function (keys) {
        return this.localeDecimalPipe.transform(keys, this.locale.getDefaultLocale(), this.digits);
    };
    return LocaleDecimalDirective;
}(BaseDirective));
LocaleDecimalDirective.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: '[l10nDecimal],[localeDecimal]'
            },] },
];
/**
 * @nocollapse
 */
LocaleDecimalDirective.ctorParameters = function () { return [
    { type: LocaleService, },
    { type: _angular_core.ElementRef, },
    { type: _angular_core.Renderer2, },
]; };
LocaleDecimalDirective.propDecorators = {
    'l10nDecimal': [{ type: _angular_core.Input },],
    'localeDecimal': [{ type: _angular_core.Input },],
};
var LocalePercentDirective = (function (_super) {
    __extends(LocalePercentDirective, _super);
    /**
     * @param {?} locale
     * @param {?} el
     * @param {?} renderer
     */
    function LocalePercentDirective(locale, el, renderer) {
        var _this = _super.call(this, el, renderer) || this;
        _this.locale = locale;
        _this.el = el;
        _this.renderer = renderer;
        _this.localePercentPipe = new LocalePercentPipe();
        return _this;
    }
    Object.defineProperty(LocalePercentDirective.prototype, "l10nPercent", {
        /**
         * @param {?} digits
         * @return {?}
         */
        set: function (digits) {
            this.digits = digits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalePercentDirective.prototype, "localePercent", {
        /**
         * @param {?} digits
         * @return {?}
         */
        set: function (digits) {
            this.digits = digits;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LocalePercentDirective.prototype.setup = function () {
        var _this = this;
        this.replace();
        this.subscriptions.push(this.locale.defaultLocaleChanged.subscribe(function () { _this.replace(); }));
    };
    /**
     * @return {?}
     */
    LocalePercentDirective.prototype.replace = function () {
        this.replaceText();
        this.replaceAttributes();
    };
    /**
     * @return {?}
     */
    LocalePercentDirective.prototype.replaceText = function () {
        if (!!this.key) {
            this.setText(this.getValues(this.key));
        }
    };
    /**
     * @return {?}
     */
    LocalePercentDirective.prototype.replaceAttributes = function () {
        if (this.attributes.length > 0) {
            this.setAttributes(this.getAttributesData());
        }
    };
    /**
     * @param {?} keys
     * @return {?}
     */
    LocalePercentDirective.prototype.getValues = function (keys) {
        return this.localePercentPipe.transform(keys, this.locale.getDefaultLocale(), this.digits);
    };
    return LocalePercentDirective;
}(BaseDirective));
LocalePercentDirective.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: '[l10nPercent],[localePercent]'
            },] },
];
/**
 * @nocollapse
 */
LocalePercentDirective.ctorParameters = function () { return [
    { type: LocaleService, },
    { type: _angular_core.ElementRef, },
    { type: _angular_core.Renderer2, },
]; };
LocalePercentDirective.propDecorators = {
    'l10nPercent': [{ type: _angular_core.Input },],
    'localePercent': [{ type: _angular_core.Input },],
};
var LocaleCurrencyDirective = (function (_super) {
    __extends(LocaleCurrencyDirective, _super);
    /**
     * @param {?} locale
     * @param {?} el
     * @param {?} renderer
     */
    function LocaleCurrencyDirective(locale, el, renderer) {
        var _this = _super.call(this, el, renderer) || this;
        _this.locale = locale;
        _this.el = el;
        _this.renderer = renderer;
        _this.localeCurrencyPipe = new LocaleCurrencyPipe();
        return _this;
    }
    Object.defineProperty(LocaleCurrencyDirective.prototype, "l10nCurrency", {
        /**
         * @param {?} digits
         * @return {?}
         */
        set: function (digits) {
            this.digits = digits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocaleCurrencyDirective.prototype, "localeCurrency", {
        /**
         * @param {?} digits
         * @return {?}
         */
        set: function (digits) {
            this.digits = digits;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LocaleCurrencyDirective.prototype.setup = function () {
        var _this = this;
        this.replace();
        this.subscriptions.push(this.locale.defaultLocaleChanged.subscribe(function () { _this.replace(); }));
        this.subscriptions.push(this.locale.currencyCodeChanged.subscribe(function () { _this.replace(); }));
    };
    /**
     * @return {?}
     */
    LocaleCurrencyDirective.prototype.replace = function () {
        this.replaceText();
        this.replaceAttributes();
    };
    /**
     * @return {?}
     */
    LocaleCurrencyDirective.prototype.replaceText = function () {
        if (!!this.key) {
            this.setText(this.getValues(this.key));
        }
    };
    /**
     * @return {?}
     */
    LocaleCurrencyDirective.prototype.replaceAttributes = function () {
        if (this.attributes.length > 0) {
            this.setAttributes(this.getAttributesData());
        }
    };
    /**
     * @param {?} keys
     * @return {?}
     */
    LocaleCurrencyDirective.prototype.getValues = function (keys) {
        return this.localeCurrencyPipe.transform(keys, this.locale.getDefaultLocale(), this.locale.getCurrentCurrency(), this.symbol, this.digits);
    };
    return LocaleCurrencyDirective;
}(BaseDirective));
LocaleCurrencyDirective.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: '[l10nCurrency],[localeCurrency]'
            },] },
];
/**
 * @nocollapse
 */
LocaleCurrencyDirective.ctorParameters = function () { return [
    { type: LocaleService, },
    { type: _angular_core.ElementRef, },
    { type: _angular_core.Renderer2, },
]; };
LocaleCurrencyDirective.propDecorators = {
    'l10nCurrency': [{ type: _angular_core.Input },],
    'localeCurrency': [{ type: _angular_core.Input },],
    'symbol': [{ type: _angular_core.Input },],
};
/**
 * Function that takes a control and returns either null when it’s valid, or an error object if it’s not.
 * @param {?} digits The format of the number
 * @param {?=} MIN_VALUE The minimum value for the number
 * @param {?=} MAX_VALUE The maximum value for the number
 * @return {?} An error object: 'format', 'minValue' or 'maxValue'; null in case the value is valid
 */
function validateLocaleNumber(digits, MIN_VALUE, MAX_VALUE) {
    if (MIN_VALUE === void 0) { MIN_VALUE = Number.MIN_VALUE; }
    if (MAX_VALUE === void 0) { MAX_VALUE = Number.MAX_VALUE; }
    var /** @type {?} */ locale = InjectorRef.get(LocaleService);
    var /** @type {?} */ decimalCode = InjectorRef.get(DecimalCode);
    var /** @type {?} */ defaultLocale;
    var /** @type {?} */ NUMBER_REGEXP;
    return function (formControl) {
        if (formControl.value == null || formControl.value == "")
            return null;
        if (defaultLocale != locale.getDefaultLocale()) {
            NUMBER_REGEXP = decimalCode.getRegExp(digits);
            defaultLocale = locale.getDefaultLocale();
        }
        if (NUMBER_REGEXP.test(formControl.value)) {
            var /** @type {?} */ parsedValue = decimalCode.parse(formControl.value);
            if (parsedValue != null && parsedValue < MIN_VALUE) {
                return {
                    minValue: {
                        valid: false
                    }
                };
            }
            else if (parsedValue != null && parsedValue > MAX_VALUE) {
                return {
                    maxValue: {
                        valid: false
                    }
                };
            }
            return null; // The number is valid.
        }
        else {
            return {
                format: {
                    valid: false
                }
            };
        }
    };
}
var LocaleNumberValidatorDirective = (function () {
    function LocaleNumberValidatorDirective() {
        this.MIN_VALUE = Number.MIN_VALUE;
        this.MAX_VALUE = Number.MAX_VALUE;
    }
    Object.defineProperty(LocaleNumberValidatorDirective.prototype, "l10nValidateNumber", {
        /**
         * Format: {minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}.
         * @param {?} digits
         * @return {?}
         */
        set: function (digits) {
            this.digits = digits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocaleNumberValidatorDirective.prototype, "validateLocaleNumber", {
        /**
         * @param {?} digits
         * @return {?}
         */
        set: function (digits) {
            this.digits = digits;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LocaleNumberValidatorDirective.prototype.ngOnInit = function () {
        this.validator = validateLocaleNumber(this.digits, this.minValue || this.MIN_VALUE, this.maxValue || this.MAX_VALUE);
    };
    /**
     * @param {?} formControl
     * @return {?}
     */
    LocaleNumberValidatorDirective.prototype.validate = function (formControl) {
        return this.validator(formControl);
    };
    return LocaleNumberValidatorDirective;
}());
LocaleNumberValidatorDirective.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: '[l10nValidateNumber][ngModel],[l10nValidateNumber][formControl], \
        [validateLocaleNumber][ngModel],[validateLocaleNumber][formControl]',
                providers: [
                    { provide: _angular_forms.NG_VALIDATORS, useExisting: _angular_core.forwardRef(function () { return LocaleNumberValidatorDirective; }), multi: true }
                ]
            },] },
];
/**
 * @nocollapse
 */
LocaleNumberValidatorDirective.ctorParameters = function () { return []; };
LocaleNumberValidatorDirective.propDecorators = {
    'l10nValidateNumber': [{ type: _angular_core.Input },],
    'validateLocaleNumber': [{ type: _angular_core.Input },],
    'minValue': [{ type: _angular_core.Input },],
    'maxValue': [{ type: _angular_core.Input },],
};
/**
 * Provides dependencies, pipes & directives for translating messages.
 */
var TranslationModule = (function () {
    /**
     * @param {?} injector
     */
    function TranslationModule(injector) {
        this.injector = injector;
        // Creates the instance of the InjectorRef, so that module dependencies are available.
    }
    /**
     * Use in AppModule: new instances of LocaleService & TranslationService.
     * @param {?=} token
     * @return {?}
     */
    TranslationModule.forRoot = function (token) {
        if (token === void 0) { token = {}; }
        return {
            ngModule: TranslationModule,
            providers: [
                InjectorRef,
                LocaleConfig,
                LocaleService,
                {
                    provide: LocaleStorage,
                    useClass: token.localeStorage || BrowserStorage
                },
                TranslationConfig,
                TranslationService,
                {
                    provide: TranslationProvider,
                    useClass: token.translationProvider || HttpTranslationProvider
                },
                {
                    provide: TranslationHandler,
                    useClass: token.translationHandler || DefaultTranslationHandler
                }
            ]
        };
    };
    /**
     * Use in feature modules with lazy loading: new instance of TranslationService.
     * @param {?=} token
     * @return {?}
     */
    TranslationModule.forChild = function (token) {
        if (token === void 0) { token = {}; }
        return {
            ngModule: TranslationModule,
            providers: [
                InjectorRef,
                TranslationConfig,
                TranslationService,
                {
                    provide: TranslationProvider,
                    useClass: token.translationProvider || HttpTranslationProvider
                },
                {
                    provide: TranslationHandler,
                    useClass: token.translationHandler || DefaultTranslationHandler
                }
            ]
        };
    };
    return TranslationModule;
}());
TranslationModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                declarations: [
                    TranslatePipe,
                    TranslateDirective
                ],
                exports: [
                    TranslatePipe,
                    TranslateDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
TranslationModule.ctorParameters = function () { return [
    { type: InjectorRef, },
]; };
/**
 * Provides dependencies, pipes & directives for translating messages, dates & numbers.
 */
var LocalizationModule = (function () {
    /**
     * @param {?} injector
     */
    function LocalizationModule(injector) {
        this.injector = injector;
        // Creates the instance of the InjectorRef, so that module dependencies are available.
    }
    /**
     * Use in AppModule: new instances of LocaleService & TranslationService.
     * @param {?=} token
     * @return {?}
     */
    LocalizationModule.forRoot = function (token) {
        if (token === void 0) { token = {}; }
        return {
            ngModule: LocalizationModule,
            providers: [
                InjectorRef,
                LocaleConfig,
                LocaleService,
                {
                    provide: LocaleStorage,
                    useClass: token.localeStorage || BrowserStorage
                },
                TranslationConfig,
                TranslationService,
                {
                    provide: TranslationProvider,
                    useClass: token.translationProvider || HttpTranslationProvider
                },
                {
                    provide: TranslationHandler,
                    useClass: token.translationHandler || DefaultTranslationHandler
                }
            ]
        };
    };
    /**
     * Use in feature modules with lazy loading: new instance of TranslationService.
     * @param {?=} token
     * @return {?}
     */
    LocalizationModule.forChild = function (token) {
        if (token === void 0) { token = {}; }
        return {
            ngModule: LocalizationModule,
            providers: [
                InjectorRef,
                TranslationConfig,
                TranslationService,
                {
                    provide: TranslationProvider,
                    useClass: token.translationProvider || HttpTranslationProvider
                },
                {
                    provide: TranslationHandler,
                    useClass: token.translationHandler || DefaultTranslationHandler
                }
            ]
        };
    };
    return LocalizationModule;
}());
LocalizationModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                declarations: [
                    LocaleDatePipe,
                    LocaleDecimalPipe,
                    LocalePercentPipe,
                    LocaleCurrencyPipe,
                    LocaleDateDirective,
                    LocaleDecimalDirective,
                    LocalePercentDirective,
                    LocaleCurrencyDirective
                ],
                imports: [
                    TranslationModule
                ],
                exports: [
                    TranslationModule,
                    LocaleDatePipe,
                    LocaleDecimalPipe,
                    LocalePercentPipe,
                    LocaleCurrencyPipe,
                    LocaleDateDirective,
                    LocaleDecimalDirective,
                    LocalePercentDirective,
                    LocaleCurrencyDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
LocalizationModule.ctorParameters = function () { return [
    { type: InjectorRef, },
]; };
/**
 * Provides dependencies & directives for locale validation.
 */
var LocaleValidationModule = (function () {
    function LocaleValidationModule() {
    }
    /**
     * Use in AppModule: new instance of LocaleValidation.
     * @return {?}
     */
    LocaleValidationModule.forRoot = function () {
        return {
            ngModule: LocaleValidationModule,
            providers: [DecimalCode, LocaleValidation]
        };
    };
    return LocaleValidationModule;
}());
LocaleValidationModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                declarations: [
                    LocaleNumberValidatorDirective
                ],
                exports: [
                    LocaleNumberValidatorDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
LocaleValidationModule.ctorParameters = function () { return []; };

exports.InjectorRef = InjectorRef;
exports.LocaleConfig = LocaleConfig;
exports.LocaleService = LocaleService;
exports.LocaleStorage = LocaleStorage;
exports.BrowserStorage = BrowserStorage;
exports.TranslationConfig = TranslationConfig;
exports.TranslationService = TranslationService;
exports.TranslationProvider = TranslationProvider;
exports.HttpTranslationProvider = HttpTranslationProvider;
exports.TranslationHandler = TranslationHandler;
exports.DefaultTranslationHandler = DefaultTranslationHandler;
exports.Translation = Translation;
exports.Localization = Localization;
exports.NumberCode = NumberCode;
exports.DecimalCode = DecimalCode;
exports.LocaleValidation = LocaleValidation;
exports.Collator = Collator;
exports.IntlAPI = IntlAPI;
exports.Language = Language;
exports.DefaultLocale = DefaultLocale$1;
exports.Currency = Currency;
exports.TranslatePipe = TranslatePipe;
exports.LocaleDatePipe = LocaleDatePipe;
exports.LocaleDecimalPipe = LocaleDecimalPipe;
exports.LocalePercentPipe = LocalePercentPipe;
exports.LocaleCurrencyPipe = LocaleCurrencyPipe;
exports.BaseDirective = BaseDirective;
exports.TranslateDirective = TranslateDirective;
exports.LocaleDateDirective = LocaleDateDirective;
exports.LocaleDecimalDirective = LocaleDecimalDirective;
exports.LocalePercentDirective = LocalePercentDirective;
exports.LocaleCurrencyDirective = LocaleCurrencyDirective;
exports.LocaleNumberValidatorDirective = LocaleNumberValidatorDirective;
exports.validateLocaleNumber = validateLocaleNumber;
exports.TranslationModule = TranslationModule;
exports.LocalizationModule = LocalizationModule;
exports.LocaleValidationModule = LocaleValidationModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-l10n.umd.js.map
