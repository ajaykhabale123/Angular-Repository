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
    // simple Method
    Car.prototype.Wheel = function () {
        return '4 wheeler';
    };
    // non abstract method
    Car.prototype.checkAC = function () {
        return 'AC is Available';
    };
    Car.prototype.callFaciltiy = function () {
        return 'Call facility supported';
    };
    return Car;
}());
var Hyundai = /** @class */ (function (_super) {
    __extends(Hyundai, _super);
    function Hyundai() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hyundai.prototype.Price = function () {
        return 90000000;
    };
    Hyundai.prototype.gettotalSeats = function () {
        return 5;
    };
    Hyundai.prototype.color = function () {
        return 'Gray';
    };
    return Hyundai;
}(Car));
var hyundai = new Hyundai();
console.log("AC avialbale - ", hyundai.checkAC());
console.log("Price -", hyundai.Price());
var Tata = /** @class */ (function (_super) {
    __extends(Tata, _super);
    function Tata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tata.prototype.Price = function () {
        return 85000000;
    };
    Tata.prototype.gettotalSeats = function () {
        return 6;
    };
    Tata.prototype.color = function () {
        return 'Black';
    };
    return Tata;
}(Car));
var tata = new Tata();
console.log("Call Facility - ", tata.callFaciltiy());
