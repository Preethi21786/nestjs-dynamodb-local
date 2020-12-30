import { Controller, Post, Body, Get } from "@nestjs/common";
import { title } from "process";
import { ProductsService } from "./products.service";


@Controller('Products')
export class ProductsController{
    constructor(private readonly productService: ProductsService){

    }

    @Post()
    async addproduct(@Body('name') name: string, @Body('description') description: string,
     @Body('price') price: number): Promise<string>{
        const generatedId  = await this.productService.insertProduct(name,description,price);
        return generatedId;
    }

    @Get()
    getProducts(){
        return this.productService.getProducts();
    }
}