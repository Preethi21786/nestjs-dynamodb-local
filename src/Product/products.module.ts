import { Module } from "@nestjs/common";
import { ProductRepository } from "src/Repository/products.repository";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

@Module({
    controllers: [ProductsController],
    providers: [ProductsService, ProductRepository]
})
export class ProductsModule{

}
