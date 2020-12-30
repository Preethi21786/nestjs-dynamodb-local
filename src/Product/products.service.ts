import { Injectable } from "@nestjs/common";
import { ProductRepository } from "src/Repository/products.repository";
import { Product } from './products.model';

@Injectable()
export class ProductsService{
    constructor(private productRepository: ProductRepository){}
    private products: Product[] = [];

    async insertProduct(name: string, description: string, price: number){
            var productId = await this.productRepository.createProduct(name,description,price);
            return productId;
    }

    getProducts(){
        // this.products = await 
        return [...this.products];
    }
}