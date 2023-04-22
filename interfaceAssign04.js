var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.Wheel = function () {
        return '4 wheeler';
    };
    Car.prototype.checkAC = function () {
        return 'AC is Available';
    };
    Car.prototype.callFaciltiy = function () {
        return 'Call facility supported';
    };
    return Car;
}());
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toyota.prototype.Price = function () {
        return 1000000;
    };
    Toyota.prototype.getTotalSeats = function () {
        return 5;
    };
    Toyota.prototype.color = function () {
        return "White";
    };
    return Toyota;
}(Car));
var Hyundai = /** @class */ (function (_super) {
    __extends(Hyundai, _super);
    function Hyundai() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hyundai.prototype.Price = function () {
        return 900000;
    };
    Hyundai.prototype.getTotalSeats = function () {
        return 7;
    };
    Hyundai.prototype.color = function () {
        return 'Gray';
    };
    return Hyundai;
}(Car));
var hyundai = /** @class */ (function () {
    function hyundai() {
    }
    hyundai.prototype.GPS = function () {
        return "Hyundai ==> GPS is Supported";
    };
    return hyundai;
}());
var toyota = /** @class */ (function () {
    function toyota() {
    }
    toyota.prototype.GPS = function () {
        return "Toyota ==> GPS is Not Supported";
    };
    return toyota;
}());
var objHyundai = new hyundai();
console.log(objHyundai.GPS());
var objToyota = new toyota();
console.log(objToyota.GPS());
