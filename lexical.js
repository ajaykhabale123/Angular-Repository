var Person = /** @class */ (function () {
    function Person(age) {
        var _this = this;
        this.growOld = function () {
            _this._age++;
        };
        this._age = age;
    }
    Person.prototype.age = function () {
        return this._age;
    };
    return Person;
}());
var objPerson = new Person(0);
//objPerson.growOld();
//console.log('age', objPerson.age());
var grow = objPerson.growOld;
grow();
console.log('age', objPerson.age());
