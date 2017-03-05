import {PipeTransform, Pipe} from '@angular/core';
import {IProduct} from "./product";

@Pipe({
    name: 'productFilter',

})

export class ProductFilterPipe implements PipeTransform{

   transform(value: IProduct[], filterBy: string): IProduct[] {

       // If 'filterBy' is present then make it lowercase otherwise make 'filterBy' to null
       filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;


       // If 'filterBy' is not null then filter the values per condition or return original values
       return filterBy ? value.filter(
                        (product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1 )
                    : value;
        // Filter condition is: Consider only the product for which 'filterBy' presents in the name of product


    }

}