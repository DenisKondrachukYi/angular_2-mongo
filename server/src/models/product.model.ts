import {DataBaseModel} from "../mongo-client-wrapper/db-model";

export interface Product {
    image: string,
    title: string,
    description: string,
    price: number
}

export const PRODUCTS_COLLECTION = 'products';

export class ProductModel extends DataBaseModel<Product> {

    protected collection: string = PRODUCTS_COLLECTION;

}