"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductFilterPipe = (function () {
    function ProductFilterPipe() {
    }
    ProductFilterPipe.prototype.transform = function (value, filterBy) {
        // If 'filterBy' is present then make it lowercase otherwise make 'filterBy' to null
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        // If 'filterBy' is not null then filter the values per condition or return original values
        return filterBy ? value.filter(function (product) { return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1; })
            : value;
        // Filter condition is: Consider only the product for which 'filterBy' presents in the name of product
    };
    return ProductFilterPipe;
}());
ProductFilterPipe = __decorate([
    core_1.Pipe({
        name: 'productFilter',
    })
], ProductFilterPipe);
exports.ProductFilterPipe = ProductFilterPipe;
//# sourceMappingURL=product-filter.pipe.js.map