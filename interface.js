var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.display = function () {
        return 7890;
    };
    return Product;
}());
var product = new Product();
console.log(product.display());
var Excel = /** @class */ (function () {
    function Excel() {
    }
    Excel.prototype.print = function () {
        console.log('Excel');
    };
    return Excel;
}());
var PDF = /** @class */ (function () {
    function PDF() {
    }
    PDF.prototype.print = function () {
        console.log('PDF');
    };
    return PDF;
}());
var Doc = /** @class */ (function () {
    function Doc() {
    }
    Doc.prototype.print = function () {
        console.log('Doc');
    };
    return Doc;
}());
var objectExcel = new Excel();
objectExcel.print();
